// Model
const app = document.getElementById('app');

let showPokemonInHtml = '';
let showPokemon = '';

let pokemonArray = [
    'Blastoise',
    'Snorlax',
    'Ninetales',
    'Squirtle',
    'Dragonite',
    'Eevee',
    'Bulbasaur',
    'Arcanine',
    'Gengar',
    'Charizard'
];

let pokemonInventoryArray = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];

// View

beforePokemonShowUp()
updateViewGrassField();
function updateViewGrassField() {
    html = /*html*/ `
    <div class="container">
        <div class="backpack">
        <input type="image" src="images/backpack.png" onclick="inventory()">
        </div>
        <div class="content">
            <div>${showPokemonInHtml}</div>
        </div>
    </div>
    `;
    app.innerHTML = html;
}

function beforePokemonShowUp() {
    let randomtime = Math.floor(1 + Math.random() * 10) * 1000;
    let randomPokemon = Math.floor(Math.random() * pokemonArray.length);
    setTimeout(pokemonShowUp, randomtime);
    function pokemonShowUp() {
        showPokemonInHtml = /*html*/ `
            <div class="pokemon">
                <input type="image" src="images/${pokemonArray[randomPokemon]}.png">
                <div class="btn">
                <input type="button" value="Røm" onclick="escape()">
                <input type="button" value="Fang" onclick="pokemonCatch('${pokemonArray[randomPokemon]}')">
                </div>
            </div>
        `;
        showPokemon = '';
        updateViewGrassField();
    }
}

function escape() {
    showPokemonInHtml = '';
    updateViewGrassField();
    beforePokemonShowUp();
}

function pokemonCatch(pokemon) {
    let index = pokemonArray.indexOf(pokemon);
    let randomChanceCatch = 1 + Math.floor(Math.random() * 10);
    if (randomChanceCatch >= 5) {
        pokemonArray.splice(index, 1);
        pokemonInventoryArray.unshift(pokemon);
        pokemonInventoryArray.pop('');
        showPokemonInHtml = '<div class="pokemon tekstWon">Du fanget den</div>';
    } else {
        showPokemonInHtml = '<div class="pokemon tekstLost">Du fanget den ikke</div>';
    }

    if (pokemonArray.length !== 0) {
        updateViewGrassField();
        beforePokemonShowUp();
    } else {
        showPokemonInHtml = `
        <div class="pokemon tekstWon">Du fanget alle <input type="button" value="Start på nytt" onclick="startOver()"></div>
        `;
        updateViewGrassField();
    }
}

function startOver() {
    location.reload();
}

function updateViewInventory() {
    html = /*html*/ `
        <div class="inventoryContainer">
            <div class="backpack">
            <input type="image" src="images/backpack.png" onclick="grassField()">
            </div>
            <div class="inventoryContent">
                ${showPokemonInventory()}
            </div>
        </div>
    `;
    app.innerHTML = html;

    function showPokemonInventory() {
        for (let i = 0; i < pokemonInventoryArray.length; i++) {
            if (pokemonInventoryArray[i] !== '') {
                showPokemon += `
                <div>
                    <input type="image" src="images/${pokemonInventoryArray[i]}.png" alt=''>
                    <div>${pokemonInventoryArray[i]}</div>
                </div>
                `;
            } else {
                showPokemon += `
                <div>
                    <input type="image" alt=''>
                    <div></div>
                </div>
                `;
            }
        }
        return showPokemon;
    }
}

// Controler
function inventory() {
    updateViewInventory();
}

function grassField() {
    showPokemon = '';
    updateViewGrassField();
}