// Model
const app = document.getElementById('app');
let output = `
    <div>Player Input: 
        <input list="Items" type="text" onchange="PlayerResponse(this)">
        <datalist id="Items">
            <option value="Kommer jeg til å bli rik?">
            <option value="Fotell noe jeg ikke vet?">
            <option value="Hvordan går det med deg?">
            <option value="Hvem er du?">
            <option value="Hvem er jeg?">
        </datalist>
    </div>
    <br>
    <div>ChatBot Output: </div>
`;
let outputTemplate = `
    <br>
    <div>Player Input: 
        <input list="Items" type="text" onchange="PlayerResponse(this)">
        <datalist id="Items">
            <option value="Kommer jeg til å bli rik?">
            <option value="Fotell noe jeg ikke vet?">
            <option value="Hvordan går det med deg?">
            <option value="Hvem er du?">
            <option value="Hvem er jeg?">
        </datalist>
    </div>
`;

// View
updateView();
function updateView() {
    html = /*html*/ `
    <div class="container centrate">
        <div class="content centrate">
            <div class="chatBotFace blackBorder">
                <div class="chatBotEyes chatBotRightEye centrate">
                    <div class="chatBotPupils"></div>
                    </div>
                    <div class="chatBotEyes chatBotLeftEye centrate">
                    <div class="chatBotPupils"></div>
                    </div>
                <div class="chatBotNose">
                    <div class="UpperNose"></div>
                    <div class="UnderNose"></div>
                </div>
                <div class="chatBotMouth">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="chatBox blackBorder">
                ${output}
            </div>
        </div>
    </div>
    `;
    app.innerHTML = html;
}

// Controler
function PlayerResponse(elemnt) {
    if (elemnt.value === 'Kommer jeg til å bli rik?') {
        let response = Math.floor(Math.random() * 2);
        if (response === 1) {
            output = `
            <div>Player Input: ${elemnt.value}</div>
            <br>
            <div>ChatBot Output: Ja du kommer til å bli rik</div>
        `;
        } else {
            output = `
            <div>Player Input: ${elemnt.value}</div>
            <br>
            <div>ChatBot Output: Nei du kommer ikke til å bli rik</div>
        `;
        }
    } else if (elemnt.value === 'Fotell noe jeg ikke vet?') {
        let response = Math.floor(Math.random() * 3);
        console.log(response);
        if (response === 1) {
            output = `
            <div>Player Input: ${elemnt.value}</div>
            <br>
            <div>ChatBot Output: Mennesker deler rundt 50% av sitt DNA med bananer. 
            Dette skyldes at både mennesker og bananer har mange grunnleggende genetiske 
            likheter på tross av å tilhøre helt forskjellige riker. </div>  
        `;
        } else if (response === 2) {
            output = `
            <div>Player Input: ${elemnt.value}</div>
            <br>
            <div>ChatBot Output: Honning er det eneste matvaren som aldri blir dårlig. 
            Arkeologer har faktisk funnet honning i gamle egyptiske graver som fortsatt var spiselig, 
            selv etter flere tusen år. </div>  
        `;
        } else {
            output = `
            <div>Player Input: ${elemnt.value}</div>
            <br>
            <div>ChatBot Output: Det finnes flere trær på jorden enn det er stjerner i Melkeveien-galaksen. 
            Det anslås at det er over 3 trillioner trær globalt, 
            mens det er anslått å være rundt 100 til 400 milliarder stjerner i Melkeveien. </div>  
        `;
        }
    } else if (elemnt.value === 'Hvordan går det med deg?') {
        let response = Math.floor(Math.random() * 2);
        if (response === 1) {
            output = `
            <div>Player Input: ${elemnt.value}</div>
            <br>
            <div>ChatBot Output: Jeg har det superfint, hva med deg?</div>  
        `;
        } else {
            output = `
            <div>Player Input: ${elemnt.value}</div>
            <br>
            <div>ChatBot Output: Jeg har det ikke så bra for tiden dessverre</div>  
        `;
        }
    } else if (elemnt.value === 'Hvem er du?') {
        output = `
        <div>Player Input: ${elemnt.value}</div>
        <br>
        <div>ChatBot Output: Jeg er en simpel chatbot, laget for å svare simple spørsmål</div>  
    `;
    } else if (elemnt.value === 'Hvem er jeg?') {
        output = `
        <div>Player Input: ${elemnt.value}</div>
        <br>
        <div>ChatBot Output: Det har jeg ikke svaret på og kan derfor ikke svare på hvem du er</div>  
    `;
    } else {
        output = `
        <div>Player Input: ${elemnt.value}</div>
        <br>
        <div>ChatBot Output: Sorry, jeg forstod ikke hva du spurte etter, prøv igjen</div>  
    `;
    }
    output += outputTemplate;
    updateView();
}