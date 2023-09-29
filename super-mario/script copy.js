// Model
const app = document.getElementById('app');
let player = 'player1';
let statsPlayer1 = [];
let statsPlayer2 = [];
let stats1 = true;
let character1 = '';
let character2 = '';
let currentHealt1 = 0;
let currentHealt2 = 0;

// View
updateView();
function updateView() {
    html = /*html*/ `
    <div id="motherHaul" class="container">
        <div class="content">
            <div class="characters">    
                <input type="image" id="Bowser" class="${player}" onclick="choosePlayer('Bowser', 300, 10, 1)" src="img/Bowser.png" alt="" width=auto height="200">
                <input type="image" id="Luigi" class="${player}" onclick="choosePlayer('Luigi', 140, 10, 1)" src="img/Luigi.png" alt="" width=auto height="200">
                <input type="image" id="Mario" class="${player}" onclick="choosePlayer('Mario', 200, 10, 1)" src="img/Mario.png" alt="" width=auto height="200">
                <input type="image" id="Peach" class="${player}" onclick="choosePlayer('Peach', 100, 10, 1)" src="img/Peach.png" alt="" width=auto height="200">
                <input type="image" id="Yoshi" class="${player}" onclick="choosePlayer('Yoshi', 80, 10, 1)" src="img/Yoshi.png" alt="" width=auto height="200">
            </div>
        
    `;
    for (let index = 0; index < statsPlayer1.length; index++) {
        html += createStatRows1(index);
    }
    for (let index = 0; index < statsPlayer2.length; index++) {
        html += createStatRows2(index);
    }
    app.innerHTML = html;
}

// Controler
function createStatRows1(index) {
    const stat1 = statsPlayer1[index];
    return `
                <div class="statsPlace">
                    <div class="stats">
                        <div>${stat1.character}</div>
                        <div>${stat1.health}</div>
                        <div>${stat1.damage}</div>
                        <div>${stat1.possibleAttackSpeed}</div>
                        <br/>
                        <input type="button" value="velg karakter" onclick="onToPlayerTwo()"/>
                    </div>
    `;
}
function createStatRows2(index) {
    const stat2 = statsPlayer2[index];
    return `
                    <div class="stats2">
                        <div>${stat2.character}</div>
                        <div>${stat2.health}</div>
                        <div>${stat2.damage}</div>
                        <div>${stat2.possibleAttackSpeed}</div>
                        <br/>
                        <input type="button" value="velg karakter" onclick="goToGame()"/>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function choosePlayer(character, health, damage, speed) {
    if (stats1 === true) {
        statsPlayer1 = [];
        currentHealt1 = health;
        statsPlayer1.push({
            character: character,
            health: health + ' HP',
            damage: damage + ' DAM',
            possibleAttackSpeed: speed + ' ASP',
        });
        updateView();
        document.getElementById(character).style.backgroundColor = 'pink';
        character1 = `
        <div class="healthBar1">${currentHealt1}/${health} HP</div>
        <input type="image" id="character1" class="character1 hide" onclick="damagePho('stat1',${damage})" src="img/${character}.png" alt="" width=auto height="200">
        `;
    }
    else {
        statsPlayer2 = [];
        currentHealt2 = health;
        statsPlayer2.push({
            character: character,
            health: health + ' HP',
            damage: damage + ' DAM',
            possibleAttackSpeed: speed + ' ASP',
        });
        updateView();
        document.getElementById(character).style.backgroundColor = 'lightgreen';
        character2 = `
        <div class="healthBar2">${currentHealt2}/${health} HP</div>
        <input type="image" id="character2" class="character2 hide" onclick="damagePho('stat2',${damage})" src="img/${character}.png" alt="" width=auto height="200">
        `;
    }
}

function onToPlayerTwo() {
    player = 'player2';
    stats1 = !stats1;
    updateView();
}

function goToGame() {
    document.getElementById('motherHaul').classList.add('hide');
    document.body.classList.add('battle');
    document.body.innerHTML += character1;
    document.body.innerHTML += character2;
    document.getElementById('character1').classList.remove('hide');
    document.getElementById('character2').classList.remove('hide');
}

function damagePho(char, dam) {
    if (char == 'stat1') {
        currentHealt2 -= dam;
        document.body.innerHTML = '';
        document.body.innerHTML += `
        <div class="healthBar1">${currentHealt1}/${statsPlayer1[0].health}</div>
        <input type="image" id="character1" class="character1" onclick="damagePho('stat1',${dam})" src="img/${statsPlayer1[0].character}.png" alt="" width=auto height="200">
        `;
        document.body.innerHTML += `
        <div class="healthBar2">${currentHealt2}/${statsPlayer2[0].health}</div>
        <input type="image" id="character2" class="character2" onclick="damagePho('stat2',${dam})" src="img/${statsPlayer2[0].character}.png" alt="" width=auto height="200">
        `;
    } else {
        currentHealt1 -= dam;
        document.body.innerHTML = '';
        document.body.innerHTML += `
        <div class="healthBar1">${currentHealt1}/${statsPlayer1[0].health}</div>
        <input type="image" id="character1" class="character1" onclick="damagePho('stat1',${dam})" src="img/${statsPlayer1[0].character}.png" alt="" width=auto height="200">
        `;
        document.body.innerHTML += `
        <div class="healthBar2">${currentHealt2}/${statsPlayer2[0].health}</div>
        <input type="image" id="character2" class="character2" onclick="damagePho('stat2',${dam})" src="img/${statsPlayer2[0].character}.png" alt="" width=auto height="200">
        `;
    }
}