// Model
const app = document.getElementById('app');
const Bruh = document.getElementById('Bruh');
const Iphone = document.getElementById('Iphone');
const Call = document.getElementById('Call');
const Your_poor = document.getElementById("You'r poor");
const Hes_a_minor = document.getElementById("He's a minor");

// View
updateView();
function updateView() {
    html = /*html*/ `
    <div class="container">
        <div class="content">
            <input type="button" value="Bruh" onclick="play('Bruh')">
                <audio id="Bruh" src="sound/bruh-sound-made-with-Voicemod-technology.mp3"></audio>
                <input type="button" value="Iphone" onclick="play('Iphone')">
                <audio id="Iphone" src="sound/capcut-earape-made-with-Voicemod-technology.mp3"></audio>
                <input type="button" value="Call" onclick="play('Call')">
                <audio id="Call" src="sound/louddogg-made-with-Voicemod-technology.mp3"></audio>
                <input type="button" value="You'r poor" onclick="play('Your poor')">
                <audio id="Your poor" src="sound/mm-youre-poor-interesting-made-with-Voicemod-technology.mp3"></audio>
                <input type="button" value="He's a minor" onclick="play('Hes a minor')">
                <audio id="Hes a minor" src="sound/omi,-what.-made-with-Voicemod-technology.mp3"></audio>
        </div>
    </div>
    `;
    app.innerHTML = html;
}

// Controler
updateView();
function play(selectedSound) {
    document.getElementById(selectedSound).play();
}