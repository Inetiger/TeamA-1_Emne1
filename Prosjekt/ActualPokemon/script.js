// Model
const app = document.getElementById('app');

let listOfImages = [{
    grass: "https://images.vexels.com/media/users/3/151759/isolated/preview/befc3f83c297e2ed74adbc37120393b8-green-grass-illustration.png",
    gym: "https://thenounproject.com/api/private/icons/727778/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
}];

let pokemon = [
    'Arcanine',
    'Blastoise',
    'Bulbasaur',
    'Charizard',
    'Dragonite',
    'Eevee',
    'Gengar',
    'Ninetales',
    'Snorlax',
    'Squirtle',
];

let inventoryPokemon = [
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

let chance = '0%';

// View
let chooseWhereToGo = /*html*/ `
    <div class="toGrassFieldHalf">
        <div class="grassFieldText">Go to the grass field</div>
        <input class="grassFieldBtn" type="button" value="Start" onclick="changeScene(grassField)">
        <img class="grassFieldImage" src=${listOfImages[0].grass}>
    </div>
    <div class="toGymHalf">
        <div class="gymText">Go to the gym</div>
        <input class="gymBtn" type="button" value="Start" onclick="changeScene(gym)">
        <img class="gymImage" src=${listOfImages[0].gym}>
    </div>
`;

let grassField = /*html*/ `
    <div class="battleZone">
        ${printPokemon()}
        <input class="backToChoosingBtn" type="button" value="Go back" onclick="changeScene(chooseWhereToGo)">
    </div>
`;

function printPokemon() {
    let randomPokemonIndex = Math.floor(Math.random() * pokemon.length)
    return /*html*/ `
        <div class="chanceText">sjansen for å fange er</div>
        <div class="chanceNumb">${chance}</div>
        <input class="pokemon" type="image" src="images/${pokemon[randomPokemonIndex]}.png">
        <div class="escapeOrFightBtns">
            <input type="button" value="Løp" onclick="escape()">
            <input type="button" value="Kamp">
        </div>
    `;
}

let gym = /*html*/ `
<div class="contentdiv">
    <div class="comingSoonText">
        kommer snart
    </div>
    <input class="backToChoosingBtn" type="button" value="Go back" onclick="changeScene(chooseWhereToGo)">
</div>
`;

let content = chooseWhereToGo;

let inventory = /*html*/ `
    <div id="inventory" class="inventoryScreen invicible">
        <input type="button" value="pokemon" onclick="">
        <input type="button" value="pokeballer" onclick="">
        <input type="button" value="Medisin" onclick="">
        <input type="button" value="lokke" onclick="">
        ${nextPokemon()}
    </div>
`;

updateView();
function updateView() {
    html = /*html*/ `
    <div class="container">
        <input class="pokeball" type="image" src="images/pokeball.png" height=240 onclick="openPokedex()">
        ${inventory}
        <div class="content">
            ${content}
        </div>
    </div>
    `;
    app.innerHTML = html;
}

// Controler
function changeScene(scene) {
    content = scene;
    updateView();
}

function openPokedex() {
    let inventory = document.getElementById('inventory');
    inventory.classList.toggle('invicible')
}


function escape() {
    let randomTimer = Math.ceil(Math.random() * 7);
    console.log(randomTimer)
    setTimeout(nextPokemon, randomTimer);
}

function nextPokemon() {
    let showPokemon = '';
    for (let i = 0; i < inventoryPokemon.length; i++) {
        if (inventoryPokemon[i] !== '') {
            showPokemon += `
                <div>
                    <input type="image" src="images/${inventoryPokemon[i]}.png" alt=''>
                    <div>${inventoryPokemon[i]}</div>
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