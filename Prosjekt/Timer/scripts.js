var outputRoundTime = document.getElementById('outputRundetid');
var outputTime = document.getElementById('outputTid');
var roundTime = 0;
var time = 0;
var myTimer;
var roundlap;

function start() {
    myTimer = setInterval(startCounting, 1000);
}
function startCounting() {
    time++;
    roundlap = time;
    outputTime.innerHTML = time;
}
function round() {
    clearInterval(myTimer);
    time = 0;
    outputRoundTime.innerHTML = roundlap;
    outputTime.innerHTML = time;
    start()
}
function reset() {
    clearInterval(myTimer);
    time = 0;
    roundlap = 0;
    outputRoundTime.innerHTML = roundlap;
    outputTime.innerHTML = time;
}
