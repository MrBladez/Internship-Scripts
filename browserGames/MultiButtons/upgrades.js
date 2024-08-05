var MinerCost = 1000000000000*(2.2**(CoinLvl[1]));
var MouseCost = 25*(1.8**(CoinLvl[0]));
let MinerUpgrade = 250;
let MouseUpgrade = 250;

function AddMinerBtn() {
    let Container = document.getElementById("StoreBttns");
    let button = document.createElement("button");
    button.innerHTML = `2.5x Coins Gain for ${MinerCost} coins`;
    button.id = "Miner";
    button.className = "btn btn-primary";
    button.onclick = function () {
      NewMiner();
    };
    Container.appendChild(button);
}
function AddMouseBtn() {
    let Container = document.getElementById("StoreBttns");
    let button = document.createElement("button");
    button.innerHTML = `2x Coins Gain for ${MouseCost} coins`;
    button.id = "Mouse";
    button.className = "btn btn-primary";
    button.onclick = function () {
      NewMouse();
    };
    Container.appendChild(button);
}
function NewMouse()
{
    if(resetList[0] >= MouseCost)
    {
        let button = document.getElementById("Mouse");
        CoinMult*= 2;
        CoinLvl[0]++;
        resetList[0] -= MouseCost;
        MouseCost = MouseCost * (1.8**(CoinLvl[0]));
        MouseCost = Math.round(10 * MouseCost) / 10;
        button.innerHTML = `2x Coins Gain for ${MouseCost} coins`;
        //document.getElementById("mouseNum").innerHTML = `you have ${Mouse} Mice. `;
        Update();
    }
}
function NewMiner()
{
    if(resetList[0] >= MinerCost)
    {
        let button = document.getElementById("Miner");
        CoinMult*= 2.5;
        CoinLvl[1]++;
        resetList[0] -= MinerCost;
        MinerCost += MinerCost / 10;
        MinerCost = Math.round(10 * MinerCost) / 10;
        button.innerHTML = `2.5x Coins Gain for ${MinerCost} coins`;
        //document.getElementById("minerNum").innerHTML = `you have ${Miner} Miners. `;
        Update();
    }
}
function addAutoUpgrade(){
    let Container = document.getElementById("UpgradeButtons");
    let button = document.createElement("button");
    button.innerHTML = `Enable Autoclicker for 100 coins`;
    button.id = "autoClick";
    button.onclick = function()
    {
        if(resetList[0] >= 100){
            resetList[0] -= 100;
            ButtonRemove("autoClick");
            autoClick = true;
            Update();
        }
    }
    Container.appendChild(button);
}
function addPrestigeBtn(){
    let Container = document.getElementById("StoreBttns");
    let button = document.createElement("button");
    button.innerHTML = `3x Coins Gain for ${PrestigeUpCost} copper`;
    button.id = "PrestigeUp";
    button.className = "btn btn-primary";
    button.onclick = function () {
      upPrestige();
    };
    Container.appendChild(button);
}
function upPrestige(){
    if(resetList[1] >= PrestigeUpCost){
        CoinMult *= 3;
        resetList[1] -= PrestigeUpCost;
        PrestigeUpCost *= PrestigeUpCost * (1.5**(PrestigeLvl[0]));
        let button = document.getElementById("PrestigeUp");
        button.innerHTML = `3x Coins Gain for ${PrestigeUpCost} copper`;
    }
}