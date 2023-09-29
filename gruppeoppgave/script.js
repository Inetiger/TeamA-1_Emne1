// Model
const app = document.getElementById('app');
const inventory = [];
const events = {
    Items: {
        spoiler: {
            item: 'spoiler',
            coolFactor: '10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151497998661075026/pngegg_7.png',
            attribution: '',
        },
        antenne: {
            item: 'antenne',
            coolFactor: '10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151497470417829919/pngegg_6.png',
            attribution: '',
        },
        spinners: {
            item: 'spinners',
            coolFactor: '10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151497045434175538/pngegg_5.png',
            attribution: '',
        },
        terninger: {
            item: 'terninger',
            coolFactor: '10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151490764153573526/icons8-rolling-dice-96.png',
            attribution: '<a target="_blank" href="https://icons8.com/icon/nnGHHmGaVaQ5/rolling-dice">Rolling Dice</a>',
        },
        felger: {
            item: 'felger',
            coolFactor: '10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151490764661067787/wheel.png',
            attribution: '<a href="https://www.flaticon.com/free-icons/wheel" title="wheel icons">Wheel icons created by Freepik - Flaticon</a>',
        },
        solbriller: {
            item: 'solbriller',
            coolFactor: '10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151490764392628274/icons8-sunglasses-96.png',
            attribution: '<a target="_blank" href="https://icons8.com/icon/16583/sun-glasses">sunglasses</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',
        },
        nyLakk: {
            item: 'nyLakk',
            coolFactor: '10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151490763599904869/icons8-paint-brush-96.png',
            attribution: '<a target="_blank" href="https://icons8.com/icon/13437/paint-brush">Paint Brush</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',
        },
        nyeLys: {
            item: 'nyeLys',
            coolFactor: '10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151490763331489843/icons8-headlights-100.png',
            attribution: '<a target="_blank" href="https://icons8.com/icon/55592/headlight">Headlights</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',

        },
        fender: {
            item: 'nyStøtfanger',
            coolFactor: '10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151496276748292126/pngegg_4.png',
            attribution: '',
        },
        juletrelys: {
            item: 'juletrelys',
            coolFactor: '-10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151490762878488666/icons8-fairy-lights-64.png',
            attribution: '<a target="_blank" href="https://icons8.com/icon/tc5KvefMbX0Q/fairy-lights">fairy lights</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',
        },
        fuskepels: {
            item: 'fuskepels',
            coolFactor: '-10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151495408250523698/pngegg_3.png',
            attribution: '',
        },
        bulk: {
            item: 'bulk',
            coolFactor: '-10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151490762618437673/icons8-crashed-car-64.png',
            attribution: '<a target="_blank" href="https://icons8.com/icon/OxZfuzvjSYHd/crashed-car">Crashed Car</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',
        },
        wunderbaum: {
            item: 'wunderbaum',
            coolFactor: '-10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151490763822207086/icons8-pine-tree-100.png',
            attribution: '<a target="_blank" href="https://icons8.com/icon/99EkJZ7CxR54/evergreen">Pine Tree</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',
        },
        ballong: {
            item: 'ballong',
            coolFactor: '-10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151490762123513856/icons8-baloon-80.png',
            attribution: '<a target="_blank" href="https://icons8.com/icon/YJLCU9w8aiok/party-balloon">Baloon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',
        },
        kake: {
            item: 'kake',
            coolFactor: '-10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151490762383577158/icons8-cake-96.png',
            attribution: '<a target="_blank" href="https://icons8.com/icon/107438/cake">Cake</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>',
        },
        teipPåSpeil: {
            item: 'teipPåSpeil',
            coolFactor: '-10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151495094936031242/pngegg_2.png',
            attribution: '',
        },
        rust: {
            item: 'rust',
            coolFactor: '-10',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151493774124515479/pngegg_1.png',
            attribution: '',
        },
    },
    greetings: {
        type1: {
            name: 'wave',
            coolFactor: '20',
            text: 'Halla Balla',
        },
        type1: {
            name: 'peaceSign',
            coolFactor: '20',
            text: 'peace man',
        },
        type1: {
            name: 'tommelOpp',
            coolFactor: '20',
            text: 'see you later alligator',
        },
    },
    scenarios: {
        scene1: {
            description: 'agressiv bestemor',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151504248656375828/pngegg_11.png',
            coolFactor: '-40',
        },
        scene2: {
            description: 'søledam',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151499350753673286/pngegg_8.png',
            coolFactor: '-20',
        },
    },
    buddies: {
        buddy1: {
            name: 'Per',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151812288626577488/pngegg_14.png',
            coolFactor: '25',
        },
        buddy2: {
            name: 'Pål',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151812289184411668/pngegg_13.png',
            coolFactor: '25',
        },
        buddy3: {
            name: 'Klaskeladden',
            source: 'https://cdn.discordapp.com/attachments/1135482561435541525/1151498332569604138/image-removebg-preview.png',
            coolFactor: '50',
        },

    }
}
let rightButton = 'onclick = "moveToRight()"';
let leftButton = 'onclick = "moveToLeft()"';
let navn;
let carLeft = '';
let carCenter = `<input id="road2-bil" class="bil" type="image" src="image/car.png">`;
let carRight = '';
var coolPoints = 0;
let pointArray = [];
let friend = '<input type="image" class="friend place" src="https://cdn.discordapp.com/attachments/1135482561435541525/1151504248656375828/pngegg_11.png"';

// view
updateView();

function updateView() {
    html = /*html*/ `
        <div class="container">
        <span id="myspan">Cool-o-Meter</span>
           <div id="progressCoolOMeter">
           
        <div id="coolOMeterBar"></div>
        </div>
        <div id="points">Poeng: ${coolPoints}</div>

        <div id="alert-box">
          Hvilken håndhilsen liker denne kompisen?
            <div class="inputs">
                <div id="thumbs-up" onclick="svarAlternativ(this, navn); untilNextTimer(); coolOMeterBar(coolPoints)">&#128077;</div>
                <div id="fistBump" onclick="svarAlternativ(this, navn); untilNextTimer(); coolOMeterBar(coolPoints)">&#129308;</div>
                <div id="vink" onclick="svarAlternativ(this, navn); untilNextTimer(); coolOMeterBar(coolPoints)">&#128075;</div>
                <div id="GodMorgen" onclick="svarAlternativ(this, navn); untilNextTimer(); coolOMeterBar(coolPoints)">&#x1F4AC;</div>
            
                </div>
          </div> 


        <input class="btnRight" type="button" value="→" ${rightButton};>
        <input class="btnLeft" type="button" value="←" ${leftButton};>

        
        <div class="road1">
        ${carLeft}
        </div>
        
        <div class="road2">
        ${carCenter}
        </div>
        
        <div class="road3">
        ${carRight}
        </div>
        ${friend}
        
        </div>
        `;

    app.innerHTML = html;
}
// <input class="item" type="image" src=${events.buddies.buddy3.source}>
// <input class="item" type="image" src=${events.scenarios.scene2.source}>
// <!-- <audio src="sound/car sound.mp3" autoplay></audio>

// Controler
function moveToRight() {
    carLeft = '';
    carCenter = '';
    carRight = `<input id="road3-bil" class="bil" type="image" src="image/car.png">`;

    rightButton = 'disabled';
    leftButton = 'onclick = "moveToCenter()"';
    updateView();
    coolOMeterBar();
    let alertBox = document.getElementById("alert-box");
    alertBox.style.display = "block"
}

function moveToCenter() {
    carLeft = '';
    carCenter = `<input id="road2-bil" class="bil" type="image" src="image/car.png">`;
    carRight = '';

    rightButton = 'onclick = "moveToRight()"';
    leftButton = 'onclick = "moveToLeft()"';
    updateView();
    coolOMeterBar();
    let alertBox = document.getElementById("alert-box");
    alertBox.style.display = "block"
}

function moveToLeft() {
    carLeft = `<input id="road1-bil" class="bil" type="image" src="image/car.png">`;
    carCenter = '';
    carRight = '';

    rightButton = 'onclick = "moveToCenter()"';
    leftButton = 'disabled';
    updateView();
    coolOMeterBar();
    let alertBox = document.getElementById("alert-box");
    alertBox.style.display = "block"
}

function buddyChoice() {

    let randomNumb = Math.floor(Math.random() * 4);
    let Pål = 0;
    let Per = 1;
    let Klaskeladden = 2;


    if (randomNumb == Pål) {
        navn = 'Pål';
        friend = '<input type="image" id="Pål" class="friend place Pål" src="https://cdn.discordapp.com/attachments/1135482561435541525/1151812289184411668/pngegg_13.png"';
    }
    else if (randomNumb == Per) {
        navn = 'Per';
        friend = '<input type="image" id="Per" class="friend place Per" src="https://cdn.discordapp.com/attachments/1135482561435541525/1151812288626577488/pngegg_14.png"';
    }
    else if (randomNumb == Klaskeladden) {
        navn = 'Klaskeladden';
        friend = '<input type="image" id="Klaskeladden" class="friend place Klaskeladden" src="https://cdn.discordapp.com/attachments/1135482561435541525/1151498332569604138/image-removebg-preview.png"';
    }
    else {
        navn = 'bestemor';
        friend = '<input type="image" id="bestemor" class="friend place bestemor" src="https://cdn.discordapp.com/attachments/1135482561435541525/1151504248656375828/pngegg_11.png"';
    }
    console.log(navn);
    updateView();
    coolOMeterBar();
    return navn;
}

setInterval(startTimer, 1000);
buddyChoice();
let timer = 0;
function startTimer() {
    timer++
    if (timer === 3) {
        updateView();
        coolOMeterBar();
        let alertBox = document.getElementById("alert-box");
        alertBox.style.display = "block"
    }
}

function untilNextTimer() {
    timer = 0;
    friend = '';
    updateView();
    coolOMeterBar();
    buddyChoice();
}

function svarAlternativ(valuethis, navn) {
    let riktigSvar;

    console.log(valuethis.id)
    if (navn === "Per") {
        console.log("Per");
        riktigSvar = "vink";
        if (valuethis.id === riktigSvar) {
            console.log('yay');
            coolPoints += 25;
            pointArray.push(25);
        }
    }
    else if (navn === "Pål") {
        console.log("Pål");
        riktigSvar = "thumbs-up";
        if (valuethis.id === riktigSvar) {
            console.log('yay');
            coolPoints += 25;
            pointArray.push(25);
        }
    }
    else if (navn === "Klaskeladden") {
        console.log("Klaskeladden");
        riktigSvar = "fistBump";
        if (valuethis.id === riktigSvar) {
            console.log('yay');
            coolPoints += 50;
            pointArray.push(50);
        }
    }
    else if (navn === "bestemor") {
        riktigSvar = "GodMorgen";
        if (valuethis.id == riktigSvar) {
            console.log('yay');
            let randompoints = Math.floor(1 + Math.random() * 10)
            coolPoints += randompoints;
            pointArray.push(randompoints);
            alert("God Morgen Besta!")
        }
        if (coolPoints === 100) {
            return document.getElementById('app').innerHTML = `<div class="winner"> Du vant</div>`
        }
    }
    console.log(coolPoints);
    buddyChoice();
    return coolPoints;

}



function coolOMeterBar(points) {
    if (coolPoints >= 100) {
        timer = 10;
        app.innerHTML = `
        <div class="winnerdiv">
        <div class="winner">Du vant</div>
        </div>
        `;
    } else {
        console.log(points);
        var elem = document.getElementById("coolOMeterBar");
        var width = 0;
        
        
        width += coolPoints;
        elem.style.width = coolPoints + '%';
        document.getElementById("points").innerHTML = `Poeng: ${width}`;
    }
}

function SumUpPoints(){
    let PointSum = 0;
    if(coolPoints >= 100){
        for (let i = 0; i < pointArray.length; i++ ) {
            PointSum += pointArray[i];
          }
        console.log(PointSum);
         
    }
        return PointSum; 
}
