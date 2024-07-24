
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
    }, 10);
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
        autoClick = false;
        while (document.getElementById("UpgradeButtons").lastElementChild.id != "prestigeReset")
        {
            let button = document.getElementById("UpgradeButtons").lastElementChild.id;
            ButtonRemove(button)
        }
        addAutoUpgrade();
        let buttonMiner = document.getElementById("Miner");
        let buttonMouse = document.getElementById("Mouse");
        let mineDescript = `Each Miner gives ${MinerMulti} coin per second`;
        let miceDescript = `Each Mouse gives ${MouseMulti} additonal coin per click`;
        document.getElementById("mouseNum").innerHTML = `you have ${Mouse} Mice. `;
        buttonMouse.innerHTML = `1 Mouse for ${MouseCost} coins`;
        document.getElementById("minerNum").innerHTML = `you have ${Miner} Miners. `;
        buttonMiner.innerHTML = `1 Miner for ${MinerCost} coins`;
        let ParagraphMiner = document.createElement("p");
        ParagraphMiner.textContent = mineDescript;
        ParagraphMiner.id = "MinerDescript";
        buttonMiner.appendChild(ParagraphMiner);
        let ParagraphMouse = document.createElement("p");
        ParagraphMouse.textContent = miceDescript;
        ParagraphMouse.id = "MouseDescript";
        buttonMouse.appendChild(ParagraphMouse);
        Update();
    }
    
}