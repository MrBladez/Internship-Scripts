var CoinMult = 1;
let resetList = [0, 0, 0];
let prestigeGain = Math.round(resetList[0] ** (1/5))
let resetCost = [1000, 0, 0]
let hasPrestiged = false;
let autoClick = false;
let PrestigeUpCost = 1;
let PrestigeLvl = [0, 0]
let CoinLvl = [0, 0]
function Start() {
  ButtonRemove("START");
  AddMinerBtn();
  AddHeader();
  AddMouseBtn();
  AddClickBtn();
  AddStoreTitle();
  AddStats();
  addAutoUpgrade();
  createPrestigeBtn();
  setInterval(function () {
    Update();
  }, 1000);
  setInterval(function () {
    if(autoClick){
      ButtonClicked();
    }
  }, 10);
}


function AddStats() {
  let Container = document.getElementById("TheStats");
  Container.textContent = "The Stats";
  let mouseList = document.createElement("ul");
  let minerList = document.createElement("ul");
  mouseList.textContent = `you have ${Mouse} Mice. `;
  mouseList.id = "mouseNum";
  minerList.textContent = `you have ${Miner} Miners. `;
  minerList.id = "minerNum";
  Container.appendChild(mouseList);
  Container.appendChild(minerList);
}
function AddStoreTitle() {
  let Container = document.getElementById("TheStore");
  Container.textContent = "The Store";
}
function AddHeader() {
  let Container = document.getElementById("Header");
  let heading = document.createElement("h1");
  heading.textContent = "You have 0 coins.";
  heading.id = "currency";
  Container.appendChild(heading);
}
function AddClickBtn() {
  var Container = document.getElementById("ClickBtn");
  var button = document.createElement("button");
  button.innerHTML = "Click for Currency";
  button.className = "TheButton";
  button.onclick = function () {
    ButtonClicked();
  };
  Container.appendChild(button);
}
function ButtonClicked() {
  resetList[0] += 1 * CoinMult;
  Update();
}