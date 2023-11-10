// Model
const room = document.getElementById('room');
const body = document.body;
let TimerH = 0;
let TimerS = 0;
let TimerHu = 0;
let dogMood = '';

let HColor = '';
let SColor = '';
let HuColor = '';

let whichRoom = '';

let HealthOutput = '';
let SleepOutput = '';
let HungerOutput = '';

let destructbutton = '';
// Datadyr bilder og rom bilder lagret i array
const dogEmotions = [{
    dogHappy: "https://media.discordapp.net/attachments/1135482561435541525/1146369434118795304/dogHappy-removebg-preview.png?width=335&height=473",
    dogSad: "https://media.discordapp.net/attachments/1135482561435541525/1146369317357752431/dogSadness-removebg-preview.png?width=362&height=473",
    dogSleepy: "https://cdn.discordapp.com/attachments/1135482561435541525/1146372726806822942/dogBored-removebg-preview.png",
    dogAngry: "https://media.discordapp.net/attachments/1135482561435541525/1146369435729395744/dogAngry-removebg-preview_1.png?width=377&height=473",
    dogBored: "https://cdn.discordapp.com/attachments/1135482561435541525/1146372726806822942/dogBored-removebg-preview.png",
    dogLove: "https://media.discordapp.net/attachments/1135482561435541525/1146369318267932713/dogLove-removebg-preview.png?width=413&height=473",
    dogHungry: "https://media.discordapp.net/attachments/1135482561435541525/1146369318800592998/dogInterest-removebg-preview.png?width=442&height=473",
    dogCrying: "https://media.discordapp.net/attachments/1135482561435541525/1146369435490324581/dogCrying___Kopi-removebg-preview.png?width=405&height=473",
    dogInsult: "https://media.discordapp.net/attachments/1135482561435541525/1146369433850347540/dogInsult-removebg-preview.png?width=377&height=473",
}];

const gameRooms = [{
    soveRomDag: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357216241258587/soveromLys.PNG")',
    soveRomNatt: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357217088507964/soveromNatt.PNG")',
    kjøkken: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357215469502474/bc582639a9c071fadf82a2f2b5acf524.jpg")',
    stueDag: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357288383291402/stueLys.PNG")',
    stueNatt: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357288676884560/stueNatt.PNG")',
    baderom: 'url("https://cdn.discordapp.com/attachments/1135482561435541525/1146357215746334770/modern-bathroom-furniture-interior-background-illustration-with-bathtub-shower-clean-up_2175-5218.avif")',
}]



// View livingroom

updateViewLivingroom();
function updateViewLivingroom() {
    whichRoom = 'livingroom';
    body.style.backgroundImage = gameRooms[0].stueDag;
    html = /*html*/ `    
    <input class="datadyr datadyrLivingroom" type="image" src="${dogMood}" alt="">
    <div>${destructbutton}</div>
    <div class="grid">
    <div class="status">
    <div class="statusBars ${HColor}" id="healthbar">${HealthOutput}</div>
    <div class="statusBars ${HuColor}" id="hungerbar">${HungerOutput}</div>
                <div class="statusBars ${SColor}" id="sleepness">${SleepOutput}</div>
            </div>
            
            <div class="arrowRight" onclick="updateViewBathroom()">⇐</div>
            <div class="arrowLeft" onclick="updateViewBedroom()">⇒</div>
            <input type="button" id="health" value="kos" class="btns health" onclick="trykk(this)">
            </div>
            `;
    room.innerHTML = html;
}

// View Bathroom
function updateViewBathroom() {
    whichRoom = 'bathroom';
    body.style.backgroundImage = `${gameRooms[0].baderom}`;
    html = /*html*/ `
    <input class="datadyr datadyrBath" type="image" src='${dogMood}' alt="">
            <div class="grid">
            <div class="status">
            <div class="statusBars ${HColor}" id="healthbar">${HealthOutput}</div>
            <div class="statusBars ${HuColor}" id="hungerbar">${HungerOutput}</div>
            <div class="statusBars ${SColor}" id="sleepness">${SleepOutput}</div>
            </div>
            <div class="arrowRight" onclick="updateViewKitchen()">⇐</div>
            <div class="arrowLeft" onclick="updateViewLivingroom()">⇒</div>
            </div>
            `;
    room.innerHTML = html;
}

// View Kitchen
function updateViewKitchen() {
    whichRoom = 'kitchen';
    body.style.backgroundImage = gameRooms[0].kjøkken;
    html = /*html*/ `
    <input class="datadyrKitchen" type="image" src="${dogMood}" alt="">
    <div class="grid">
    <div class="status">
    <div class="statusBars ${HColor}" id="healthbar">${HealthOutput}</div>
    <div class="statusBars ${HuColor}" id="hungerbar">${HungerOutput}</div>
    <div class="statusBars ${SColor}" id="sleepness">${SleepOutput}</div>
    </div>
    <div class="arrowRight" onclick="updateViewBedroom()">⇐</div>
    <div class="arrowLeft" onclick="updateViewBathroom()">⇒</div>
    
    <input type="button" id="food" value="mat" class="btns food" onclick="trykk(this)">
    </div>
    `;
    room.innerHTML = html;
}

// View Bedroom
function updateViewBedroom() {
    whichRoom = 'bedroom';
    body.style.backgroundImage = gameRooms[0].soveRomDag;
    html = /*html*/ `
    <input class="datadyrBedroom" type="image" src="${dogMood}" alt="">
    <div class="grid">
    <div class="status">
        <div class="statusBars ${HColor}" id="healthbar">${HealthOutput}</div>
        <div class="statusBars ${HuColor}" id="hungerbar">${HungerOutput}</div>
        <div class="statusBars ${SColor}" id="sleepness">${SleepOutput}</div>
    </div>
    <div class="arrowRight" onclick="updateViewLivingroom()">⇐</div>
    <div class="arrowLeft" onclick="updateViewKitchen()">⇒</div>
    
    <input type="button" id="sleep" value="søvn" class="btns sleep" onclick="trykk(this)">
    </div>
    `;
    room.innerHTML = html;
}

// Controler

//de neste 2 Funskjonene "animerer" knappene


function trykk(tryktKnapp) {

    if (tryktKnapp.id === 'sleep') {
        TimerS = 0;
    } else if (tryktKnapp.id === 'food') {
        TimerHu = 0;
    } else {
        TimerH = 0;
    }
    let repeatId = document.getElementById(tryktKnapp.id);
    repeatId.classList.toggle('btns');
    repeatId.classList.toggle('btnsClick');
    const timer = setTimeout(reset, 200, repeatId);


}

function reset(repeatId) {
    repeatId.classList.toggle('btns');
    repeatId.classList.toggle('btnsClick');

}
// sette opp en timer for hver statusbar
// når timer går over en hvis grense skal statusbar tekst endres til (tekst)!
// når timer er over grensen skal tekst bli rød og (tekst)!!!
statusBarFunction();
function statusBarFunction() {
    const health = setInterval(setTimerHealth, 1000)
    const sleep = setInterval(setTimerSleep, 1000)
    const hunger = setInterval(setTimerHunger, 1000)
}

function setTimerHealth() {
    TimerH++;
    if (TimerH >= 10 && TimerH < 20) {
        // healthBar.innerHTML = 'Affeksjon';
        HealthOutput = 'Affeksjon';
        HColor = 'Yellow';
    } else if (TimerH >= 20) {
        // healthBar.innerHTML = 'Dør av ingen kos';
        HealthOutput = 'Dør av ingen kos';
        HColor = 'Red';
    } else {
        // healthBar.innerHTML = 'Lykke';
        HealthOutput = 'Lykke';
        HColor = 'Green'
    }
}
function setTimerSleep() {
    TimerS++;
    if (TimerS >= 10 && TimerS < 20) {
        // sleepness.innerHTML = 'Trøtt';
        SleepOutput = 'Trøtt';
        SColor = 'Yellow'
    } else if (TimerS >= 20) {
        // sleepness.innerHTML = 'Kommer til å kolapse';
        SleepOutput = 'Kommer til å kollapse';
        SColor = 'Red'
    } else {
        // sleepness.innerHTML = 'Søvn';
        SleepOutput = 'Søvn'
        SColor = 'Green'
    }
}
function setTimerHunger() {
    TimerHu++;
    if (TimerHu >= 10 && TimerHu < 20) {
        // hungerbar.innerHTML = 'Sulten';
        HungerOutput = 'Sulten';
        HuColor = 'Yellow'
    } else if (TimerHu >= 20) {
        // hungerbar.innerHTML = 'Dør av sult';
        HungerOutput = 'Dør av sult';
        HuColor = 'Red'
    } else {
        // hungerbar.innerHTML = 'Sult';
        HungerOutput = 'Sult';
        HuColor = 'Green'
    }
    setDogMood(HealthOutput, SleepOutput, HungerOutput);
}

function setDogMood(healthBar, sleepness, hungerbar) {
    if (healthBar == 'Lykke' && sleepness == 'Søvn' && hungerbar == 'Sult') {
        dogMood = dogEmotions[0].dogHappy;
    }
    else if (healthBar == 'Affeksjon' && sleepness == 'Trøtt' && hungerbar == 'Sulten') {
        dogMood = dogEmotions[0].dogInsult;
    }
    else if (healthBar == 'Dør av ingen kos' && sleepness == 'Kommer til å kollapse' && hungerbar == 'Dør av sult') {
        dogMood = dogEmotions[0].dogCrying;
    }
    else {
        dogMood = dogEmotions[0].dogBored;
    }
    if (whichRoom == 'livingroom') {
        updateViewLivingroom();
    } else if (whichRoom == 'bedroom') {
        updateViewBedroom();
    } else if (whichRoom == 'kitchen') {
        updateViewKitchen();
    } else {
        updateViewBathroom();
    }
    if (TimerH >= 10) {
        destructbutton = '<button class="destruckbtn" onclick="destruct()">Self destruct</button>';
    } else if (TimerHu >= 30) {
        destructbutton = '<button class="destruckbtn" onclick="destruct()">Self destruct</button>';
    } else if (TimerS >= 30) {
        destructbutton = '<button class="destruckbtn" onclick="destruct()">Self destruct</button>';
    }
}

function destruct() {
    location.reload();
}


/*move();
var i = 100;
function move() {
    if (i == 100) {
        i = 1;
        var elem = document.getElementById("hungerbar");
        var width = 100;
        var id = setInterval(frame, 100);
        function frame() {
            if (width <= 0) {
                clearInterval(id);
                i = 100;
            } else {
                if (width == 70) {
                    elem.style.backgroundColor = 'yellow';
                } else if (width == 30) {
                    elem.style.backgroundColor = 'red';
                } else if (width == 99) {
                    elem.style.backgroundColor = '#04ff19';
                }
                width--;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";

            }

        }
    }
}
*/

//     else if () {
//         dogMood = dogEmotions[0].dogSleepy;
//     }
//     else if () {
//         dogMood = dogEmotions[0].dogBored;
//     }
//     else if () {
//         dogMood = dogEmotions[0].dogAngry;
//     }
//     else if () {
//         dogMood = dogEmotions[0].dogSad;
//     }
//     else if () {
//          dogMood = dogEmotions[0].dogLove;
//}
