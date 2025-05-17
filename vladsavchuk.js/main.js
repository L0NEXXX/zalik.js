game_state = {
    coinCount: 0,
    coinsPerClick: 1,
    coinsPerSecond: 0,
    upgradeCost1: 100,
    upgradeCost2: 500,
    clickUpgradeCost: 50,
    lastUpdateTime: Date.now(),
};

const coinCountElement = document.getElementById("coin-count");
const clickButton = document.getElementById("click-button");
const upgradeButton1 = document.getElementById("upgrade-1");
const upgradeButton2 = document.getElementById("upgrade-2");
const offlineCoinsElement = document.getElementById("offline-coins");
const saveButton = document.getElementById("save-progress");
const loadButton = document.getElementById("load-progress");
const resetButton = document.getElementById("reset-progress");
const clickUpgradeButton = document.getElementById("upgrade-click-power");


upgradeButton1.addEventListener("click", auto_zbir_1coin);
upgradeButton2.addEventListener("click", auto_zbir_5coin)
clickButton.addEventListener("click", click_button)
setInterval(interval, 1000);
saveButton.addEventListener("click", save_progr)
loadButton.addEventListener("click", load_progre)
resetButton.addEventListener("click", reset_Progress);
clickUpgradeButton.addEventListener("click", upgradeClickPower);


load_progre()

// const savedData = localStorage.getItem("gameProgress");
// if (savedData) {
//     const gameData = JSON.parse(savedData);
//     coinCount = gameData.coinCount;
//     coinsPerClick = gameData.coinsPerClick;
//     coinsPerSecond = gameData.coinsPerSecond;
//     upgradeCost1 = gameData.upgradeCost1;
//     upgradeCost2 = gameData.upgradeCost2;
//     lastUpdateTime = gameData.lastUpdateTime;
//     updateCoinCount();
//     alert("Прогрес завантажено!");
// } else {
//     alert("Прогрес не знайдений!");
// }

const now = Date.now();

console.log(now - game_state.lastUpdateTime);


updateCoinCount();

