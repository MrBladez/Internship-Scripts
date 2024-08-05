const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const game = {
    width: canvas.width,
    height: canvas.height,
    money: 200,
    selectedTower: null,
    towers: [],
    enemies: [],
    enemyPath: [
        { x: 50, y: 0 },
        { x: 50, y: 500 },
        { x: 700, y: 500 },
        { x: 700, y: 100 },
        { x: 750, y: 100 },
    ],
    enemySpeed: 1,
    towerCost: 50,
    upgradeCost: 100,
};

class Tower {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.range = 100;
        this.damage = 10;
        this.rateOfFire = 1; // shots per second
        this.lastShotTime = 0;
    }

    upgrade() {
        this.damage += 10;
        this.range += 20;
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x - 15, this.y - 15, 30, 30);
    }

    shoot(enemies) {
        if (performance.now() - this.lastShotTime >= 1000 / this.rateOfFire) {
            const enemy = enemies.find(e => this.inRange(e));
            if (enemy) {
                enemy.health -= this.damage;
                this.lastShotTime = performance.now();
            }
        }
    }

    inRange(enemy) {
        const dist = Math.hypot(enemy.x - this.x, enemy.y - this.y);
        return dist <= this.range;
    }
}

class Enemy {
    constructor() {
        this.x = game.enemyPath[0].x;
        this.y = game.enemyPath[0].y;
        this.health = 100;
        this.pathIndex = 0;
    }

    move() {
        if (this.pathIndex < game.enemyPath.length - 1) {
            const target = game.enemyPath[this.pathIndex + 1];
            const dx = target.x - this.x;
            const dy = target.y - this.y;
            const dist = Math.hypot(dx, dy);
            if (dist < game.enemySpeed) {
                this.pathIndex++;
            } else {
                this.x += dx / dist * game.enemySpeed;
                this.y += dy / dist * game.enemySpeed;
            }
        }
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x - 10, this.y - 10, 20, 20);
    }
}

function spawnEnemy() {
    if (Math.random() < 0.02) {
        game.enemies.push(new Enemy());
    }
}

function selectTower(type) {
    if (type === 'basic' && game.money >= game.towerCost) {
        game.selectedTower = 'basic';
    }
}

function upgradeTower() {
    const tower = game.towers[0]; // Assuming upgrading the first tower for simplicity
    if (tower && game.money >= game.upgradeCost) {
        tower.upgrade();
        game.money -= game.upgradeCost;
    }
}

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (game.selectedTower === 'basic' && game.money >= game.towerCost) {
        game.towers.push(new Tower(x, y));
        game.money -= game.towerCost;
        game.selectedTower = null;
    }
});

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw enemy path
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    game.enemyPath.forEach((point, index) => {
        if (index === 0) {
            ctx.moveTo(point.x, point.y);
        } else {
            ctx.lineTo(point.x, point.y);
        }
    });
    ctx.stroke();

    // Spawn and draw enemies
    spawnEnemy();
    game.enemies.forEach((enemy, index) => {
        enemy.move();
        enemy.draw();
        if (enemy.health <= 0) {
            game.enemies.splice(index, 1);
        }
    });

    // Draw and update towers
    game.towers.forEach(tower => {
        tower.draw();
        tower.shoot(game.enemies);
    });

    requestAnimationFrame(update);
}

update();
