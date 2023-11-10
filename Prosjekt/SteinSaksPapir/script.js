// Model
const app = document.getElementById('app');

let outputDiv = 'Velg Stein Saks eller Papir';
let botAnswer;

let rockPaperScissorList = [{
    rock: "https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    paper: "https://images.unsplash.com/photo-1510935813936-763eb6fbc613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80",
    scissor: "https://images.unsplash.com/photo-1586363052121-5ef0f5b1fdb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1891&q=80",
}]

// View
updateView();
function updateView() {
    html = /*html*/ `
    <div class="container">
    <div class="content">
    <div id="rock"><input type="image" value="rock" src="${rockPaperScissorList[0].rock}" onclick="chooseRockPaperScissors(this)"></div>
    <div id="scissor"><input type="image" value="scissor" src="${rockPaperScissorList[0].scissor}" onclick="chooseRockPaperScissors(this)"></div>
    <div id="paper"><input type="image" value="paper" src="${rockPaperScissorList[0].paper}" onclick="chooseRockPaperScissors(this)"></div>
    <div class="textOutput">${outputDiv}</div>
    <div id="botPaper"><input type="image" src="${rockPaperScissorList[0].paper}"></div>
    <div id="botScissor"><input type="image" src="${rockPaperScissorList[0].scissor}"></div>
    <div id="botRock"><input type="image" src="${rockPaperScissorList[0].rock}"></div>
    </div>
    </div>
    `;
    app.innerHTML = html;
}

// Controler
function chooseRockPaperScissors(element) {
    document.getElementById(element.value).style.border = '1px dashed red';

    const timer = setInterval(intervalTimer, 1000, element);
    setTimeout(timeouttimer, 4000, element);

    let player = element.value;

    let i = 4;

    function intervalTimer(element) {
        i--;
        outputDiv = i;
        updateView();
        document.getElementById(element.value).style.border = '1px dashed red';
    }

    function timeouttimer(element) {
        clearInterval(timer)

        let bot = 1 + Math.floor(Math.random() * 3);
        if (bot === 1) {
            botAnswer = 'paper';
        } else if (bot === 2) {
            botAnswer = 'scissor';
        } else {
            botAnswer = 'rock';
        }

        if ((player === 'rock' && botAnswer === 'scissor') || (player === 'scissor' && botAnswer === 'paper') || (player === 'paper' && botAnswer === 'rock')) {
            outputDiv = 'Player Won';
        } else if (player === botAnswer) {
            outputDiv = 'Even';
        } else {
            outputDiv = 'Player lost';
        }
        updateView();
        if (botAnswer === 'rock') {
            document.getElementById('botRock').style.border = '1px dashed red';
            document.getElementById(element.value).style.border = '1px dashed red';
        } else if (botAnswer === 'paper') {
            document.getElementById('botPaper').style.border = '1px dashed red';
            document.getElementById(element.value).style.border = '1px dashed red';
        } else {
            document.getElementById('botScissor').style.border = '1px dashed red';
            document.getElementById(element.value).style.border = '1px dashed red';}
    }
}
