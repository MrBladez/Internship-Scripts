function Update()
{   
    let message;
    if (hasRebirthed)
    {
        resetList[2] = Math.round(resetList[2]*10) / 10;
        resetList[1] = Math.round(resetList[1]*10) / 10;
        resetList[0] = Math.round(resetList[0]*10) / 10;
        message = `You have ${resetList[0]} coins, ${resetList[1]} copper, and ${resetList[2]} silver.`;
    }
    if (hasPrestiged)
    {
        resetList[1] = Math.round(resetList[1]*10) / 10;
        resetList[0] = Math.round(resetList[0]*10) / 10;
        message = `You have ${resetList[0]} coins and ${resetList[1]} copper.`;
    }else{
        resetList[0] = Math.round(resetList[0]*10) / 10;
        message = `You have ${resetList[0]} coins.`;
    }
    document.getElementById("currency").innerHTML = message;
    prestigeGain = Math.floor((resetList[0]/resetCost[0]) ** (1/2));
    if (hasPrestiged)
        rebirthGain = Math.floor((resetList[1]/resetCost[1] ** (1/10)))
}
function ButtonRemove(n)
{
   var Button = document.getElementById(n);
   Button.parentNode.removeChild(Button);
}
