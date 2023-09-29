var typeSection = document.getElementById('writeHere');
let html = '';

let array = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'å',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'ø',
    'æ',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ' ',
]

document.getElementById('app').innerHTML = `
    <div class="container">
        <div class="content">
            ${loopBtns()}
        </div>
    </div>
    <br>
    `;

function loopBtns() {
    for (let i = 0; i < array.length; i++) {
        html += `
        <div onclick="pushButton(this)">${array[i]}</div>
        `;
    }
    return html;
}


function pushButton(element) {
    typeSection.innerHTML += element.innerHTML;
}