// Model
// går bare tilbake til html documentet
const app = document.getElementById('app');
// array av stats for spiller 1
let statsPlayer1List = [];
// array av stats for spiller 2
let statsPlayer2List = [];
// hvilken spiller er det som velger karakter
let player = 'Player1';
// setter bare inn siste knappen får å endre scene
let lastButton = '';

let currentHealt1 = '';
let currentHealt2 = '';

// View
// dette er karakter selection scenen
updateViewCharacterSelect();
function updateViewCharacterSelect() {
    html = /*html*/ `
    <div class="container">
        <div class="content">
            <input type="image" id="Bowser" class="${player}" onclick="choosePlayer('Bowser', 300, 10, 1)" src="img/Bowser.png" alt="" width=auto height="200">
            <input type="image" id="Luigi" class="${player}" onclick="choosePlayer('Luigi', 140, 10, 1)" src="img/Luigi.png" alt="" width=auto height="200">
            <input type="image" id="Mario" class="${player}" onclick="choosePlayer('Mario', 200, 10, 1)" src="img/Mario.png" alt="" width=auto height="200">
            <input type="image" id="Peach" class="${player}" onclick="choosePlayer('Peach', 100, 10, 1)" src="img/Peach.png" alt="" width=auto height="200">
            <input type="image" id="Yoshi" class="${player}" onclick="choosePlayer('Yoshi', 80, 10, 1)" src="img/Yoshi.png" alt="" width=auto height="200">
    `;

    for (let index = 0; index < statsPlayer1List.length; index++) {
        html += createStatRows1(index);
    }
    for (let index = 0; index < statsPlayer2List.length; index++) {
        html += createStatRows2(index);
    }

    app.innerHTML = html;
}

// dette er battle scenen
function updateViewBattleArena() {
    html = /*html*/ `
    <div class="gridBattle">
        <div class="healthBarOne healthSizing">${currentHealt1}/${statsPlayer1List[0].health}HP</div>
        <div class="healthBarTwo healthSizing">${currentHealt2}/${statsPlayer2List[0].health}HP</div>
        <input type="image" class="characterOne" src="img/${statsPlayer1List[0].character}.png" onclick="damagePho(this)" alt="" width=auto height="200">
        <input type="image" class="characterTwo" src="img/${statsPlayer2List[0].character}.png" onclick="damagePho(this)" alt="" width=auto height="200">
    </div>
    `;
    if (currentHealt1 === 0)
        document.body.innerHTML = '<div class="vinner" onclick="reloadPage()">Spiller 2 Vant</div>';
    else if (currentHealt2 === 0)
        document.body.innerHTML = '<div class="vinner" onclick="reloadPage()">Spiller 1 Vant</div>';
    app.innerHTML = html;
}

// Controler
// dette setter inn stats for spiller 1
function createStatRows1(index) {
    const stat1 = statsPlayer1List[index];
    return /*html*/ `
        <div class="statCharacter1 stats">
            <div class="character">${stat1.character}</div>
            <div>Health: ${stat1.health} HP</div>
            <div>Damage: ${stat1.damage}</div>
            <div>AttackSpeed: ${stat1.attackSpeed}</div>
        </div>
        <input type="button" class="BtnChoosePlayer1 btnSizing" value="Velg Spiller" onclick="nextPlayer()">
    `;
}

// dette setter inn stats for spiller 2
function createStatRows2(index) {
    const stat1 = statsPlayer2List[index];
    return /*html*/ `
        <div id="placeBtnHere" class="statCharacter2 stats">
            <div class="character">${stat1.character}</div>
                <div>Health: ${stat1.health} HP</div>
                <div>Damage: ${stat1.damage}</div>
                <div>AttackSpeed: ${stat1.attackSpeed}</div>
            </div>
            <input type="button" class="BtnChoosePlayer2 btnSizing" value="Velg Spiller" onclick="chooseLastPlayer()">
            ${lastButton}
        </div>
    </div>
</div>
    `;
}

// funksjonen som gjør det mulig å trykke på karakterene for spiller 1 og 2
function choosePlayer(character, health, damage, attackSpeed) {
    if (player === 'Player1') {
        statsPlayer1List = [];
        statsPlayer1List.push({
            character: character,
            health: health,
            damage: damage,
            attackSpeed: attackSpeed,
        })
    } else {
        statsPlayer2List = [];
        statsPlayer2List.push({
            character: character,
            health: health,
            damage: damage,
            attackSpeed: attackSpeed,
        })
    }
    updateViewCharacterSelect();
}

// for å velge karakter 1
function nextPlayer() {
    player = 'Player2';
    updateViewCharacterSelect();
}

// for å velge karakter 2
function chooseLastPlayer() {
    lastButton += '<input type="button" class="BtnStartBattle btnSizing" value="Start Kamp" onclick="updateViewBattleArena(), updateBackground();"></input>';
    updateViewCharacterSelect();
}

// for å legge til bakgrunnen etter scene bytte
function updateBackground() {
    currentHealt1 = statsPlayer1List[0].health;
    currentHealt2 = statsPlayer2List[0].health;
    document.body.classList.toggle('battle');
    updateViewBattleArena();
}

function damagePho(element) {
    if (element.classList[0] === 'characterOne')
        currentHealt2 -= statsPlayer1List[0].damage;
    else currentHealt1 -= statsPlayer2List[0].damage;
    updateViewBattleArena();
}

function reloadPage(){
    location.reload();
}