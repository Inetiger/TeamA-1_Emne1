// Model
const app = document.getElementById('app');

let points = 0;

let boxes = [
    'yellow',
    'blue',
    'red',
    'green',
];
let arrangement = [];
let arrangementSaved = [];

// View
updateView();
function updateView() {
    html = /*html*/ `
    <div id="background" class="container">
        <div class="points">
            poengsum: ${points}
        </div>
        <div class="content">
            ${showBoxes()}
        </div>
    </div>
    `;
    app.innerHTML = html;

}

// Controler
function showBoxes() {
    let box = '';
    for (let i = 0; i < boxes.length; i++) {
        box += `
        <div id="${boxes[i]}" class="${boxes[i]} box" onclick="colorBoxes(this, '${boxes[i]}')">
        </div>
        `;
    }
    return box;
}

function colorBoxes(element, color) {
    element.style.backgroundColor = color;
    setTimeout(updateView, 100);
    if (arrangement[0] === color) {
        arrangement.shift();
        if (arrangement.length === 0) {
            points++;
            document.getElementById('background').style.backgroundColor = 'green';
            setTimeout(botChoose, 1500);
        } else { return; }
    } else if (arrangement[0] !== color) {
        points = 0;
        arrangement = [];
        arrangementSaved = [];
        document.getElementById('background').style.backgroundColor = 'red';
        setTimeout(botChoose, 1500);
    }
    index = 0;
}

let index = 0;

botChoose();
function botChoose() {
    if (arrangementSaved.length > index) {
        document.getElementById(arrangementSaved[index]).style.backgroundColor = arrangementSaved[index];
        index++;
        setTimeout(updateView, 500);
        setTimeout(botChoose, 1000);
    } else {
        for (let i = 0; i < 1; i++) {
            let random = Math.ceil(Math.random() * 4);
            if (random === 1) {
                document.getElementById('yellow').style.backgroundColor = 'yellow';
                arrangement.push('yellow');
            } else if (random === 2) {
                document.getElementById('blue').style.backgroundColor = 'blue';
                arrangement.push('blue');
            } else if (random === 3) {
                document.getElementById('red').style.backgroundColor = 'red';
                arrangement.push('red');
            } else {
                document.getElementById('green').style.backgroundColor = 'green';
                arrangement.push('green');
            }
            arrangementSaved.push(arrangement[0]);
            arrangement = [];
            for (let i = 0; i < arrangementSaved.length; i++) {
                arrangement.push(arrangementSaved[i]);
            }
            setTimeout(updateView, 1000);
        }
    }
}