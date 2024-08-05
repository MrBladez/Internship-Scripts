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
        CoinMult = 1;
        MinerCost = 5;
        MouseCost = 2;
        resetList[1] += prestigeGain;
        autoClick = false;
        addAutoUpgrade();
        document.getElementById("mouseNum").innerHTML = `you have ${Mouse} Mice. `;
        document.getElementById("minerNum").innerHTML = `you have ${Miner} Miners. `;
        ButtonRemove("Miner");
        ButtonRemove("Mouse");
        AddMinerBtn();
        AddMouseBtn();
        if(hasPrestiged){
            ButtonRemove("PrestigeUp");
        }
        addPrestigeBtn();
        hasPrestiged = true;
        Update();
    }
    
}