let inventory = false;
let klaskeladden = document.querySelector(".klaskeladden");
let inventoryGrid = document.getElementById("inventoryGrid");

// Klaskeladden går fram og tilbake
klaskeladden.addEventListener("click", () => {
    if (klaskeladden.classList.contains("walking")) {
        klaskeladden.classList.remove("walking");
        klaskeladden.classList.add("walking-back");
    }
    else if (!klaskeladden.classList.contains("walking")) {
        klaskeladden.classList.remove("walking-back");
        klaskeladden.classList.add("walking");
    }
})

// Viser og skjuler inventory + solbrillene
function showHide() {
    inventory = !inventory
    if (inventory == true) {
        document.getElementById('hideMe').classList.add('hide');
        let sunglasses = document.getElementById('Sunglasses');
        if (document.getElementById('invSunglasses').classList.contains("invhide")) {
            sunglasses.src = 'https://www.freeiconspng.com/uploads/sport-sunglasses-png-image--sport-sunglasses-png-image-7.png';
        }
    }
    else {
        document.getElementById('hideMe').classList.remove('hide');
        let sunglasses = document.getElementById('Sunglasses');
        sunglasses.src = '';
    }
}
showHide();

hideAllFirst();


// Item blir fjernet fra utsiden til inventory
function pickUp(id) {
    if (id === "Drink") {
        let drinkInventory = document.getElementById("invDrink");
        drinkInventory.classList.remove("invhide");
    }
    else if (id === "Boots") {
        alert('Kjære reisende eventyrer, du kan da ikke reise slik. Her er et tau, saks og et par sko du kan ta med deg, så håper jeg vi ses igjen');
        let bootsInventory = document.getElementById('invBoots');
        bootsInventory.classList.remove('invhide');
        let ropeInventory = document.getElementById('invRope');
        ropeInventory.classList.remove('invhide');
        let scissorsInventory = document.getElementById('invScissors');
        scissorsInventory.classList.remove('invhide');
    }
    else if (id === "Fish") {
        let fishInventory = document.getElementById('invFish');
        fishInventory.classList.remove('invhide');
    }
    else {
        let item = document.getElementById(id); // Item på utsida
        item.src = "";  // Fjerner item fra utsida
        let ide = 'inv' + id; // Får tak i inventory id
        let itemInventory = document.getElementById(ide); // Får tak i inventory item med id
        itemInventory.classList.remove("invhide"); // Viser itemet i inventory
    }
}

// Når du søker skal alle tingene i inventorien forsvinne utenom det du søker etter
showAll();
function searcheBar(searche) {
    if (searche.value == 'Stein') {
        hideAll();
        document.getElementById('invStone').classList.remove('hide');
    }
    else if (searche.value == 'Suppe') {
        hideAll();
        document.getElementById('invSoup').classList.remove('hide');
    }
    else if (searche.value == 'Kaffe') {
        hideAll();
        document.getElementById('invCoffee').classList.remove('hide');
    }
    else if (searche.value == 'Pinne') {
        hideAll();
        document.getElementById('invStick').classList.remove('hide');
    }
    else if (searche.value == 'Tau') {
        hideAll();
        document.getElementById('invRope').classList.remove('hide');
    }
    else if (searche.value == 'Sopp') {
        hideAll();
        document.getElementById('invMushroom').classList.remove('hide');
    }
    else if (searche.value == 'Drikke') {
        hideAll();
        document.getElementById('invDrink').classList.remove('hide');
    }
    else if (searche.value == 'skokolade') {
        hideAll();
        document.getElementById('invChocolate').classList.remove('hide');
    }
    else if (searche.value == 'Saks') {
        hideAll();
        document.getElementById('invScissors').classList.remove('hide');
    }
    else if (searche.value == 'Sko') {
        hideAll();
        document.getElementById('invBoots').classList.remove('hide');
    }
    else if (searche.value == 'Solbriller') {
        hideAll();
        document.getElementById('invSunglasses').classList.remove('hide');
    }
    else if (searche.value == 'Kanin') {
        hideAll();
        document.getElementById('invRabbit').classList.remove('hide');
    }
    else if (searche.value == 'Kniv') {
        hideAll();
        document.getElementById('invKnife').classList.remove('hide');
    }
    else if (searche.value == 'Øks') {
        hideAll();
        document.getElementById('invAxe').classList.remove('hide');
    }
    else if (searche.value == 'Fyrstikk') {
        hideAll();
        document.getElementById('invLighter').classList.remove('hide');
    }
    else if (searche.value == 'Fisk') {
        hideAll();
        document.getElementById('invFish').classList.remove('hide');
    }
    else {
        showAll();
    }
}

// Denne lager klassene under hide. Legger klassen "hide" til alle itemene i inventory
function hideAll() {
    document.getElementById('invStone').classList.add('hide');
    document.getElementById('invSoup').classList.add('hide');
    document.getElementById('invCoffee').classList.add('hide');
    document.getElementById('invStick').classList.add('hide');
    document.getElementById('invRope').classList.add('hide');
    document.getElementById('invMushroom').classList.add('hide');
    document.getElementById('invDrink').classList.add('hide');
    document.getElementById('invChocolate').classList.add('hide');
    document.getElementById('invScissors').classList.add('hide');
    document.getElementById('invBoots').classList.add('hide');
    document.getElementById('invSunglasses').classList.add('hide');
    document.getElementById('invRabbit').classList.add('hide');
    document.getElementById('invKnife').classList.add('hide');
    document.getElementById('invAxe').classList.add('hide');
    document.getElementById('invLighter').classList.add('hide');
    document.getElementById('invFish').classList.add('hide');
}

// function hideAll() {
//     let allInvItems = document.getElementsByClassName('inv-item');
//     let number = 0;
//     while(number = 16){
//         console.log(allInvItems.lenght);
//         let invide = 'inv' + id;
//         document.getElementById(invide).classList.add('hide');
//         number++
//     };
// }

// Denne lager klasser under invhide. Legger klassen invhide til alle itemene i inventory
function hideAllFirst() {
    document.getElementById('invStone').classList.add('invhide');
    document.getElementById('invSoup').classList.add('invhide');
    document.getElementById('invCoffee').classList.add('invhide');
    document.getElementById('invStick').classList.add('invhide');
    document.getElementById('invRope').classList.add('invhide');
    document.getElementById('invMushroom').classList.add('invhide');
    document.getElementById('invDrink').classList.add('invhide');
    document.getElementById('invChocolate').classList.add('invhide');
    document.getElementById('invScissors').classList.add('invhide');
    document.getElementById('invBoots').classList.add('invhide');
    document.getElementById('invSunglasses').classList.add('invhide');
    document.getElementById('invRabbit').classList.add('invhide');
    document.getElementById('invKnife').classList.add('invhide');
    document.getElementById('invAxe').classList.add('invhide');
    document.getElementById('invLighter').classList.add('invhide');
    document.getElementById('invFish').classList.add('invhide');
}
/*
function hideAllFirst() {
    document.getElementById


}
*/

// invhide og hide er to forskjellige klasser

// Denne fjerner alle klassene under hide
function showAll() {
    document.getElementById('invStone').classList.remove('hide');
    document.getElementById('invSoup').classList.remove('hide');
    document.getElementById('invCoffee').classList.remove('hide');
    document.getElementById('invStick').classList.remove('hide');
    document.getElementById('invRope').classList.remove('hide');
    document.getElementById('invMushroom').classList.remove('hide');
    document.getElementById('invDrink').classList.remove('hide');
    document.getElementById('invChocolate').classList.remove('hide');
    document.getElementById('invScissors').classList.remove('hide');
    document.getElementById('invBoots').classList.remove('hide');
    document.getElementById('invSunglasses').classList.remove('hide');
    document.getElementById('invRabbit').classList.remove('hide');
    document.getElementById('invKnife').classList.remove('hide');
    document.getElementById('invAxe').classList.remove('hide');
    document.getElementById('invLighter').classList.remove('hide');
    document.getElementById('invFish').classList.remove('hide');
}

// Endrer inventory, slik at de viser bare ting i den kategorien
function categoryChange(catChan) {
    if (catChan.value == 'food') {
        hideAll();
        document.getElementById('invSoup').classList.remove('hide');
        document.getElementById('invCoffee').classList.remove('hide');
        document.getElementById('invMushroom').classList.remove('hide');
        document.getElementById('invDrink').classList.remove('hide');
        document.getElementById('invChocolate').classList.remove('hide');
        document.getElementById('invRabbit').classList.remove('hide');
        document.getElementById('invFish').classList.remove('hide');
    }
    else if (catChan.value == 'accesories') {
        hideAll();
        document.getElementById('invStone').classList.remove('hide');
        document.getElementById('invStick').classList.remove('hide');
        document.getElementById('invRope').classList.remove('hide');
        document.getElementById('invScissors').classList.remove('hide');
        document.getElementById('invBoots').classList.remove('hide');
        document.getElementById('invSunglasses').classList.remove('hide');
        document.getElementById('invKnife').classList.remove('hide');
        document.getElementById('invAxe').classList.remove('hide');
        document.getElementById('invLighter').classList.remove('hide');
    }
    else if (catChan.value == 'weapon') {
        hideAll();
        document.getElementById('invStone').classList.remove('hide');
        document.getElementById('invStick').classList.remove('hide');
        document.getElementById('invScissors').classList.remove('hide');
        document.getElementById('invKnife').classList.remove('hide');
        document.getElementById('invAxe').classList.remove('hide');
        document.getElementById('invLighter').classList.remove('hide');
    }
    else if (catChan.value == 'misc') {
        hideAll();

    }
    else {
        showAll();
    }
}