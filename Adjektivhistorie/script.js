let changeColor = '_____';
let changeAdventure = '_____';
let changeSun = '_____';
let changeHeat = '_____';
let changeBeauty = '_____';


// let colorPlace = document.getElementById('changingColor');
// let adventurePlace = document.getElementById('changingAdventure');
// let sunPlace = document.getElementById('changingSun');
// let heatPlace = document.getElementById('changingHeat');
// let beautyPlace = document.getElementById('changingBeauty');

updateView()
function updateView() {
let html = /*html*/ `
    <div class="container">
        <div class="content">
            <div class="writewrap">
                <div> en </div>
                <div class="activeChanges" >${changeColor}</div>
                <div> sommermorgen våknet den </div>
                <div class="activeChanges" >${changeAdventure}</div>
                <div> katten, Smulan, opp. Solen sendte sine </div>
                <div class="activeChanges" >${changeSun}</div>
                <div> gjennom gardinene og fylte rommet med en </div>
                <div class="activeChanges" >${changeHeat}</div>
                <div> Smulan kunne ikke motstå fristelsen til å utforske den </div>
                <div class="activeChanges" >${changeBeauty}</div>
                <div>verden.</div>
            </div>
                <br>
                <div class="Choices">
                <input type="button" onclick="ClickColor(this.value)" value=" fargerik ">
                <input type="button" onclick="ClickColor(this.value)" value=" mørke ">
                <input type="button" onclick="ClickAdventure(this.value)" value=" eventyrlystne ">
                <input type="button" onclick="ClickAdventure(this.value)" value=" slappe ">
                <input type="button" onclick="ClickSun(this.value)" value=" glitrende stråler ">
                <input type="button" onclick="ClickSun(this.value)" value=" onde demoner ">
                <input type="button" onclick="ClickHeat(this.value)" value=" varm og gledelig glød ">
                <input type="button" onclick="ClickHeat(this.value)" value=" motbydelig stank ">
                <input type="button" onclick="ClickBeauty(this.value)" value=" vakre ">
                <input type="button" onclick="ClickBeauty(this.value)" value=" grusome ">
                </div>
        </div>
    </div>
`;

document.getElementById('app').innerHTML = html;
    // colorPlace.innerHTML = changeColor;
    // adventurePlace.innerHTML = changeAdventure;
    // sunPlace.innerHTML = changeSun;
    // heatPlace.innerHTML = changeHeat;
    // beautyPlace.innerHTML = changeBeauty;
}

function ClickColor(color) {
    changeColor = color;
    updateView();
}
function ClickAdventure(adventur) {
    changeAdventure = adventur;
    updateView();
}
function ClickSun(sun) {
    changeSun = sun;
    updateView();
}
function ClickHeat(heat) {
    changeHeat = heat;
    updateView();
}
function ClickBeauty(beauty) {
    changeBeauty = beauty;
    updateView();
}