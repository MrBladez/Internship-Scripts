let button;
function createPrestigeBtn()
{
    let Container = document.getElementById("UpgradeButtons");
    button = document.createElement("button");
    button.innerHTML = `Reset all coins for ${prestigeGain} copper`;
    button.id = "prestigeReset";
    button.onclick = function() {
        resetPrestige(0);
    }
    Container.appendChild(button);
}
function resetPrestige(resetIndex)
{
    if (resetList[resetIndex] > resetCost[0])
    {
        for (let i=0 ; i < resetIndex+1; i++)
        {
            resetList[i] = 0;
        }
        Mouse = 1;
        Miner = 0;
        MinerMulti = 1;
        MouseMulti = 1;
        MinerCost = 5;
        MouseCost = 2;
        MinerUpgrade = 250;
        MouseUpgrade = 250;
        mouseUpCost = 5;
        minerUpCost = 5;
        minerUpsBought = 0;
        mouseUpsBought = 1;
        resetList[1] += prestigeGain;
        autoClick = false;
        while (document.getElementById("UpgradeButtons").lastElementChild.id != "prestigeReset" || document.getElementById("UpgradeButtons").firstElementChild.id != "prestigeReset")
        {
            if (document.getElementById("UpgradeButtons").lastElementChild.id != "prestigeReset"){
                button = document.getElementById("UpgradeButtons").lastElementChild.id;
                ButtonRemove(button);
            }else if(document.getElementById("UpgradeButtons").firstElementChild.id != "prestigeReset"){
                button = document.getElementById("UpgradeButtons").firstElementChild.id;
                ButtonRemove(button);
            }
        }
        addAutoUpgrade();
        document.getElementById("mouseNum").innerHTML = `you have ${Mouse} Mice. `;
        document.getElementById("minerNum").innerHTML = `you have ${Miner} Miners. `;
        ButtonRemove("Miner");
        ButtonRemove("Mouse");
        AddMinerBtn();
        AddMouseBtn();
        if (prestigeMulti > 1){
            document.getElementById("MinerDescript").textContent = `Each Miner gives ${MinerMulti * prestigeMulti} coins per second`;
            document.getElementById("MouseDescript").textContent = `Each Mouse gives ${MouseMulti * prestigeMulti} additonal coins per click`;
        }
        if(hasPrestiged){
            ButtonRemove("PrestigeUp");
        }
        addPrestigeBtn();
        hasPrestiged = true;
        Update();
    }
    
}