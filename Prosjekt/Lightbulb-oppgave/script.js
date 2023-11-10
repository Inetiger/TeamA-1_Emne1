let lightState = true;
let back = document.body;
let textoutput = document.getElementById('output');
let lightOn = document.getElementById('yellowLight');

function switchLight() {
    lightState = !lightState;

    if (lightState == false) {
        turnOnLight();
    }
    else {
        turnOffLight();
    }
}

function turnOnLight() {
    back.style.background = 'white';
    textoutput.innerHTML = 'lyset er på';
    lightOn.style.background = 'yellow';
    textoutput.classList.remove('lightOff');
}

function turnOffLight() {
    back.style.background = 'black';
    textoutput.innerHTML = 'lyset er av';
    lightOn.style.background = 'grey';
    textoutput.classList.add('lightOff');
}