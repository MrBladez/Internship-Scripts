var Coins = 0;
var MinerCost = 100;
var Clicks1 = 1;
var MouseCost = 20;
var Shovels = 0;
var Miner = 0;
var MinerMulti = 1;
var MouseMulti = 1;
var Mouse = 1;
function Repeat()
{
   ButtonRemove("repeat")
   setInterval(function()
   {
       Coins += (Miner * MinerMulti)
       Update();
   }, 1000);
}
function ButtonRemove(n)
{
   var Button = document.getElementById(n);
   Button.parentNode.removeChild(Button);
}
function ButtonClicked()
{
    Coins += (Mouse * MouseMulti);
    Update();
}
function NewMiner()
{
    if(Coins >= MinerCost)
    {
        Miner++;
        Coins -= MinerCost;
        MinerCost += MinerCost / 10;
        MinerCost = Math.round(10 * MinerCost) / 10;
        document.getElementById("Store1").innerHTML = `1 Miner for ${MinerCost} coins`;
        Update();
    }
}
function NewMouse()
{
    if(Coins >= MouseCost)
    {
        Mouse++;
        Coins -= MouseCost;
        MouseCost = MouseCost * 1.5;
        MouseCost = Math.round(10 * MouseCost) / 10;
        document.getElementById("Store2").innerHTML = `1 Mouse for ${MouseCost} coins`;
        Update();
        if(Mouse == 5)
        {
           var Container = document.getElementById("UpgradeButtons");
           var button = document.createElement("button");
           button.innerHTML = "Mouse efficieny x 2 for 250 coins";
           button.id = "myButton";
           button.className = "btn btn-primary";
           button.onclick = function()
           {
               UpgradeMouse(250, "myButton");
           }
           Container.appendChild(button);
        }
    }
}
function Update()
{
    Coins = Math.round(Coins*10) / 10;
    const message = `You have ${Coins} coins.`;
    document.getElementById("currency").innerHTML = message;
}
function UpgradeMouse(Cost, ID)
{
    if(Coins >= Cost)
    {
        MouseMulti *= 2;
        Coins -= Cost;
        ButtonRemove(ID);
    }
}