let list1 = 'Eksempel-1';
let list2 = 'Blinklys';
let list3 = 'Tekst_color_change';
let list4 = 'Terje_undervisning';
let list5 = 'Test_oppgave';
let list6 = 'Variabler';

let page1 = "'Eksempel-1', 'Blinklys', 'Tekst_color_change', 'Terje_undervisning', 'Test_oppgave', 'Variabler'";
let page2 = "'Timer', 'Keyboard-oppgave', 'Lightbulb-oppgave', 'Krokodille-spillet', 'Adjektivhistorie', ''";
let page3 = "'', '', '', '', '', ''";

let last = page1;
let next = page2;

updateView();
function updateView() {
    let html = /*html*/`
    <div id="container">
        <div id="content">
            <img src="https://getacademy.no/hubfs/GET_RGB_logo-01-2.png">
            <div id="center">
                <h1>
                Ine Nybø Botterli
                </h1>
            </div>
            <div id="center">
                <h2>
                Ukes Oppagver
                </h2>
            </div>
                <a href="https://inetiger.github.io/Uke_prosjekt/" target="_new">Uke prosjekt 1</a>
            <div id="center">
                <h2>
                Emne 1
                </h2>
            </div>
                <a href="https://inetiger.github.io/${list1}/" target="_new">${list1}</a>
                <a href="https://inetiger.github.io/${list2}/" target="_new">${list2}</a>
                <a href="https://inetiger.github.io/${list3}/" target="_new">${list3}</a>
                <a href="https://inetiger.github.io/${list4}/" target="_new">${list4}</a>
                <a href="https://inetiger.github.io/${list5}/" target="_new">${list5}</a>
                <a href="https://inetiger.github.io/${list6}/" target="_new">${list6}</a>
            <br>
            <div id="btns">
                <input type="button" value="forrige side" onclick="lastSite(${last})">
                <input type="button" value="neste side" onclick="nextSite(${next})">
            </div>
        </div>
    </div>
`;
    document.getElementById('app').innerHTML = html;
}

function nextSite(a, b, c, d, e, f) {
    if (next == page2){
        next = page3;
    }
    else {
        last = page2;
    };

    list1 = a;
    list2 = b;
    list3 = c;
    list4 = d;
    list5 = e;
    list6 = f;

    updateView();
}

function lastSite(A, B, C, D, E, F) {
    if (last == page2){
        last = page1;
    }
    else{
        next = page2;
    };

    list1 = A;
    list2 = B;
    list3 = C;
    list4 = D;
    list5 = E;
    list6 = F;


    updateView();
}
