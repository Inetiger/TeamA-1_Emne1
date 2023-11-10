
let timer;
var Tid = 0;

let changeColorRed = 'notOn';
let changeColorYellow = 'notOn';
let changeColorGreen = 'notOn';


updateView();
function updateView() {
    html = /*html*/ `
    <div class="container">
        <div class="content">
            <div>
                <div id="light" class="${changeColorRed}"></div><br>
                <div id="light" class="${changeColorYellow}"></div><br>
                <div id="light" class="${changeColorGreen}"></div>
                <br>
                <button onclick="light(this)">Stop</button>
                <button onclick="light(this)">Vent</button>
                <button onclick="light(this)">Kjør</button>
            </div>
        </div>
    </div>
    `;
    document.getElementById('app').innerHTML = html;
}

// function light(color) {
//     if (color == 'yellow') {
//         Tid = 5;
//         document.getElementById('grønt').classList.remove('changeGreen')
//         document.getElementById('rødt').classList.add('changeRed')
//         document.getElementById('gult').classList.add('changeYellow')
//     }
//     if (color == 'red') {
//         Tid = 1;
//         document.getElementById('gult').classList.remove('changeYellow')
//         document.getElementById('grønt').classList.remove('changeGreen')
//         document.getElementById('rødt').classList.add('changeRed')
//     }
//     if (color == 'green') {
//         Tid = 9;
//         document.getElementById('gult').classList.remove('changeYellow')
//         document.getElementById('rødt').classList.remove('changeRed')
//         document.getElementById('grønt').classList.add('changeGreen')
//     }

// }

function light(element){
    if(element.innerHTML == 'Stop'){
        Tid = 0;
    };
    if(element.innerHTML == 'Vent'){
        Tid = 4;
    };
    if(element.innerHTML == 'Kjør'){
        Tid = 8;
    };

}

timer = setInterval(trafikkTid, 1000);
function trafikkTid() {
    Tid++;
    if (Tid == 1) {
        changeColorRed = 'changeRed';
        changeColorYellow = 'notOn';
        changeColorGreen = 'notOn';
        updateView();
    };
    if (Tid == 5) {
        changeColorRed = 'changeRed';
        changeColorYellow = 'changeYellow';
        changeColorGreen = 'notOn';
        updateView();
    };
    if (Tid == 9) {
        changeColorRed = 'notOn';
        changeColorYellow = 'notOn';
        changeColorGreen = 'changeGreen';
        updateView();
    };
    if (Tid == 13) {
        changeColorRed = 'notOn';
        changeColorYellow = 'changeYellow';
        changeColorGreen = 'notOn';
        updateView();
    };
    if (Tid == 16)
        Tid = 0;
}