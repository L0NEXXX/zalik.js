
function updateCoinCount() {
    coinCountElement.textContent = `Монет: ${Math.floor(game_state.coinCount)}`;
}

function auto_zbir_1coin() {
    if (game_state.coinCount >= game_state.upgradeCost1) {
        game_state.coinCount -= game_state.upgradeCost1;
        game_state.coinsPerSecond += 1;
        game_state.upgradeCost1 = Math.floor(game_state.upgradeCost1 * 1.5);
        upgradeButton1.textContent = `Автоматичний збір: +1 монета/сек (Вартість: ${game_state.upgradeCost1} монет)`;
        updateCoinCount();
    } else {
        alert("Недостатньо монет для цього покращення!");
    }
}

function auto_zbir_5coin() {
    if (game_state.coinCount >= game_state.upgradeCost2) {
        game_state.coinCount -= game_state.upgradeCost2;
        game_state.coinsPerSecond += 5;
        game_state.upgradeCost2 = Math.floor(game_state.upgradeCost2 * 1.5);
        upgradeButton2.textContent = `Автоматичний збір: +5 монет/сек (Вартість: ${game_state.upgradeCost2} монет)`;
        updateCoinCount();
    } else {
        alert("Недостатньо монет для цього покращення!");
    }
}

function click_button() {
    game_state.coinCount += game_state.coinsPerClick;
    updateCoinCount();
}

function interval() {
    const now = Date.now();
    const elapsedTime = (now - game_state.lastUpdateTime) / 1000;
    const earnedCoins = 1 * elapsedTime;

    if (offline_score_calcualted == false) {
        game_state.coinCount += earnedCoins;
        offlineCoinsElement.textContent = Math.floor(earnedCoins);
        game_state.lastUpdateTime = now;
        updateCoinCount();
        offline_score_calcualted = true
    }


    localStorage.setItem("gameProgress", JSON.stringify(game_state));
}


function save_progr() {
    localStorage.setItem("gameProgress", JSON.stringify(game_state));
    alert("Прогрес збережено!");
}

function load_progre() {
    const savedData = localStorage.getItem("gameProgress");
    if (savedData) {
        game_state = JSON.parse(savedData);
    } else {
        game_state = {
            coinCount: 0,
            coinsPerClick: 1,
            coinsPerSecond: 0,
            upgradeCost1: 100,
            upgradeCost2: 500,
            clickUpgradeCost: 50,
            lastUpdateTime: Date.now(),
        };
        alert("Новий прогрес створено!");
    }

    upgradeButton1.textContent = `Автоматичний збір: +1 монета/сек (Вартість: ${game_state.upgradeCost1} монет)`;
    upgradeButton2.textContent = `Автоматичний збір: +5 монет/сек (Вартість: ${game_state.upgradeCost2} монет)`;
    clickUpgradeButton.textContent = `Покращити клік: +1 монета/клік (Вартість: ${game_state.clickUpgradeCost} монет)`;
    updateCoinCount();
}

function reset_Progress() {
    localStorage.removeItem("gameProgress");
    game_state = {
        coinCount: 0,
        coinsPerClick: 1,
        coinsPerSecond: 0,
        upgradeCost1: 100,
        upgradeCost2: 500,
        clickUpgradeCost: 50,
        lastUpdateTime: Date.now(),
    };

    upgradeButton1.textContent = `Автоматичний збір: +1 монета/сек (Вартість: ${game_state.upgradeCost1} монет)`;
    upgradeButton2.textContent = `Автоматичний збір: +5 монет/сек (Вартість: ${game_state.upgradeCost2} монет)`;
    clickUpgradeButton.textContent = `Покращити клік: +1 монета/клік (Вартість: ${game_state.clickUpgradeCost} монет)`;
    updateCoinCount();
    alert("Прогрес скинуто!");
}

function upgradeClickPower() {
    if (game_state.coinCount >= game_state.clickUpgradeCost) {
        game_state.coinCount -= game_state.clickUpgradeCost;
        game_state.coinsPerClick += 1;
        game_state.clickUpgradeCost = Math.floor(game_state.clickUpgradeCost * 1.5);
        clickUpgradeButton.textContent = `Покращити клік: +1 монета/клік (Вартість: ${game_state.clickUpgradeCost} монет)`;
        updateCoinCount();
    } else {
        alert("Недостатньо монет для покращення кліку!");
    }
}
