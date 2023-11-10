// Model
const app = document.getElementById('app');

let listOfNames = [
    {
        navn: 'Bernt',
        fylke: 'Vestfold',
    },
    {
        navn: 'Egil',
        fylke: 'Molde',
    },
    {
        navn: 'Svein',
        fylke: 'Vestfold',
    }
]


let names = '';
let textInputName = '';
let textInputPlace = '';

// View
updateView();
function updateView() {
    html = /*html*/ `
    <div class="conatiner">
        <div class="content">
            Fra Vestfold
            ${writeNames()}
            ${names = ''}
            
            Alle:
            ${writeAllNames()}
            ${names = ''}
            <input type="text" placeholder="Navn" onchange="textInputName = this.value">
            <input type="text" placeholder="Plass" onchange="textInputPlace = this.value">
            <input type="button" value="Legg til navn" onclick="addName()">
            <input type="button" value="Fjern navn" onclick="removeName()">
        </div>
    </div>
    `;
    app.innerHTML = html;

    function writeNames() {
        for (let i = 0; i < listOfNames.length; i++) {
            if (listOfNames[i].fylke === 'Vestfold') {
                names += `<li>${listOfNames[i].navn} ${listOfNames[i].fylke}</li>`;
            }
        }
        return names;
    }
}

function writeAllNames() {
    for (let i = 0; i < listOfNames.length; i++) {
        names += `<li>${listOfNames[i].navn} ${listOfNames[i].fylke}</li>`;
    }
    return names;
}

// Controler
function addName() {
    listOfNames.push({navn: textInputName, fylke: textInputPlace});
    updateView();
}

function removeName() {
    let random = Math.floor(Math.random() * listOfNames.length)
    listOfNames.splice(random, 1);
    updateView();
}