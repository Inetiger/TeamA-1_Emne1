// Model
const app = document.getElementById('app');
let tekst = '';
let morse = '';

let textInput = '';
let morseInput = '';

let morseList = [{
    A: '.- ',
    B: '-... ',
    C: '-.-. ',
    D: '-.. ',
    E: '. ',
    F: '..-. ',
    G: '--. ',
    H: '.... ',
    I: '.. ',
    J: '.--- ',
    K: '-.- ',
    L: '.-.. ',
    M: '-- ',
    N: '-. ',
    O: '--- ',
    P: '.--. ',
    Q: '--.- ',
    R: '.-. ',
    S: '... ',
    T: '- ',
    U: '..- ',
    V: '...- ',
    W: '.-- ',
    X: '-..- ',
    Y: '-.-- ',
    Z: '--.. ',
    Æ: '.-.- ',
    Ø: '---. ',
    Å: '.--.- ',
    ' ': ' , ',
    1: '.---- ',
    2: '..--- ',
    3: '...-- ',
    4: '....- ',
    5: '..... ',
    6: '-.... ',
    7: '--... ',
    8: '---.. ',
    9: '----. ',
    0: '----- ',
}]

let textList = [{
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.-.-': 'æ',
    '---.': 'ø',
    '.--.-': 'å',
    ',': ' ',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
}]
// View
updateView();
function updateView() {
    html = /*html*/ `
    <div class="container">
        <div class="content">
            <div class="inputFelt">
                <input type="text" placeholder="Tekst oversettelse" value="${textInput}" oninput="(textInput = this.value)" onchange="TranslateToMorse(this.value)">
            </div>
            <div class="inputFelt">
                <input type="text" placeholder="Morse oversettelse lang(-) kort(.) mellomrom(,)" value="${morseInput}" oninput="(morseInput = this.value)" onchange="TranslateToText(this.value)">
            </div>
            <div class="inputFelt">
                <div class="textFelt">
                    ${tekst}
                </div>
            </div>
            <div class="inputFelt">
                <div class="textFelt">
                    ${morse}
                </div>
            </div>
        </div>
    </div>
    `;
    app.innerHTML = html;
}

// Controler
function TranslateToMorse(input) {
    tekst = '';
    for (let i = 0; i < input.length; i++) {
        let text = input.charAt(i).toUpperCase();
        tekst += morseList[0][text];
    }
    updateView();
}

function TranslateToText(input) {
    morse = '';
    let text = '';
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) !== ' ') {
            text += input.charAt(i);
        } else {
            morse += textList[0][text];
            text = '';
        }
    }
    morse += textList[0][text];
    updateView();
}