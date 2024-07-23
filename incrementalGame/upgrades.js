var MinerCost = 5;
var MouseCost = 2;
let MinerUpgrade = 250;
let MouseUpgrade = 250;
let mouseUpCost = 5;
let minerUpCost = 5;
let minerUpsBought = 0;
let mouseUpsBought = 0;

function AddMinerBtn() {
    let Container = document.getElementById("StoreBttns");
    let button = document.createElement("button");
    button.innerHTML = `1 Miner for ${MinerCost} coins`;
    button.id = "Miner";
    button.className = "btn btn-primary";
    button.onclick = function () {
      NewMiner();
    };
    Container.appendChild(button);
    let Paragraph = document.createElement("p");
    Paragraph.textContent = "Each Miner gives 1% coins per second";
    Paragraph.id = "MinerDescript";
    button.appendChild(Paragraph);
}
function AddMouseBtn() {
    let Container = document.getElementById("StoreBttns");
    let button = document.createElement("button");
    button.innerHTML = `1 Mouse for ${MouseCost} coins`;
    button.id = "Mouse";
    button.className = "btn btn-primary";
    button.onclick = function () {
      NewMouse();
    };
    Container.appendChild(button);
    let Paragraph = document.createElement("p");
    Paragraph.textContent = "Each Mouse gives 1 additional coin per click";
    Paragraph.id = "MouseDescript";
    button.appendChild(Paragraph);
}
function NewMouse()
{
    if(resetList[0] >= MouseCost)
    {
        let button = document.getElementById("Mouse");
        let CoinsInDesc;
        Mouse++;
        resetList[0] -= MouseCost;
        MouseCost = MouseCost * 2;
        MouseCost = Math.round(10 * MouseCost) / 10;
        if (MouseMulti >= 2)
        {
            Coinsin = "resetList[0]";
        }else{
            CoinsInDesc = "coin";
        }
        // var Paragraph = document.getElementById("MouseDescript");
        // Paragraph.textContent = `Each Mouse gives ${MouseMulti} additonal ${CoinsInDesc} per click`
        document.getElementById("Mouse").innerHTML = `1 Mouse for ${MouseCost} coins`;
        let Paragraph = document.createElement("p");
        let message = `Each Mouse gives ${MouseMulti} additonal ${CoinsInDesc} per click`;
        Paragraph.textContent = message;
        Paragraph.id = "MouseDescript";
        button.appendChild(Paragraph);
        document.getElementById("mouseNum").innerHTML = `you have ${Mouse} Mice. `;
        Update();
        if(Mouse == mouseUpCost)
        {
           let Container = document.getElementById("UpgradeButtons");
           let button = document.createElement("button");
           button.innerHTML = "Mouse efficieny x 2 for 250 coins";
           button.id = "UpgradeMouse";
           mouseUpCost += 5;
           button.onclick = function()
           {
               UpgradeMouse(250, "UpgradeMouse");
           }
           Container.appendChild(button);
        }
    }
}
function NewMiner()
{
    if(resetList[0] >= MinerCost)
    {
        let button = document.getElementById("Miner");
        let CoinsInDesc;
        Miner++;
        resetList[0] -= MinerCost;
        MinerCost += MinerCost / 10;
        MinerCost = Math.round(10 * MinerCost) / 10;
        document.getElementById("Miner").innerHTML = `1 Miner for ${MinerCost} coins`;
        let Paragraph = document.createElement("p");
        /*if (MinerMulti >= 2)
        {
            CoinsInDesc = "resetList[0]";
        }else{
            CoinsInDesc = "Coin";
        }*/
        let message = `Each Miner gives ${MinerMulti}% coins per second`;
        Paragraph.textContent = message;
        Paragraph.id = "MinerDescript";
        button.appendChild(Paragraph);
        document.getElementById("minerNum").innerHTML = `you have ${Miner} Miners. `;
        Update();
        UpgradeMiner();
    }
}
function UpgradeMouse(Cost, ID)
{
    if(resetList[0] >= Cost)
    {
        MouseMulti *= 2;
        resetList[0] -= Cost;
        ButtonRemove(ID);
        document.getElementById("MouseDescript").textContent = `Each Mouse gives ${MouseMulti} additonal coins per click`;
    }
}
function UpgradeMiner()
{
    if(Miner >= minerUpCost && minerUpCost / 5 == minerUpsBought + 1)
    {
       let Container = document.getElementById("UpgradeButtons");
       let button = document.createElement("button");
       button.innerHTML = `Miner efficieny x 2 for ${MinerUpgrade} coins`;
       button.id = "UpgradeMiner";
       minerUpCost += 5;
       button.onclick = function()
       {
            if(resetList[0] >= MinerUpgrade)
            {   
                ButtonRemove("UpgradeMiner");
                minerUpsBought += 1;
                MinerMulti *= 2;
                resetList[0] -= MinerUpgrade;
                MinerUpgrade *= 4;
                document.getElementById("MinerDescript").textContent = `Each Miner gives ${MinerMulti}% coins per second`;
                Update();
                UpgradeMiner();
            }
       }
       Container.appendChild(button);
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
            setInterval( function (){
                ButtonClicked();
            }, 500);
            Update();
        }
    }
    Container.appendChild(button);
}