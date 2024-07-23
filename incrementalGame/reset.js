
function createPrestigeBtn()
{
    let Container = document.getElementById("UpgradeButtons");
    let button = document.createElement("button");
    button.innerHTML = `Reset all coins for ${prestigeGain} copper`;
    button.id = "prestigeReset";
    button.onclick = function() {
        resetPrestige(0);
    }
    Container.appendChild(button);
    setInterval(function () {
        document.getElementById("prestigeReset").innerText = `Reset all coins for ${prestigeGain} copper`;
    }, 1000);
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
        mouseUpsBought = 0;
        resetList[1] += prestigeGain;
        hasPrestiged = true;
        ButtonRemove("UpgradeMouse");
        ButtonRemove("UpgradeMiner");
    }
    document.getElementById("mouseNum").innerHTML = `you have ${Mouse} Mice. `;
    document.getElementById("MouseDescript").textContent = `Each Mouse gives ${MouseMulti} additonal coins per click`;
    document.getElementById("Mouse").innerHTML = `1 Mouse for ${MouseCost} coins`;
    document.getElementById("minerNum").innerHTML = `you have ${Miner} Miners. `;
    document.getElementById("Miner").innerHTML = `1 Miner for ${MinerCost} coins`;
    document.getElementById("MinerDescript").textContent = `Each Miner gives ${MinerMulti}% coins per second`;
}