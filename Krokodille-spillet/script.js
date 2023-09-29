let random2;
let random1;
let userdata = document.getElementById('check');
let point = document.getElementById('point');

function startRandom() {
    random1 = Math.floor(Math.random() * 10);
    random2 = Math.floor(Math.random() * 10);
    document.getElementById('randomCheck1').innerHTML = random1;
    document.getElementById('randomCheck2').innerHTML = random2;
}

function checkSubmit() {
    if (random1 == random2) {
        if (userdata.value == "=") {
            startRandom();
            userdata.value = '';
            point.innerHTML++;
        }
        else {
            startRandom();
            userdata.value = '';
            point.innerHTML--;
        }
    }
    if (random1 < random2) {
        if (userdata.value == "<") {
            startRandom();
            userdata.value = '';
            point.innerHTML++;
        }
        else {
            startRandom();
            userdata.value = '';
            point.innerHTML--;
        }
    }
    else {
        if (userdata.value == ">") {
            startRandom();
            userdata.value = '';
            point.innerHTML++;
        }
        else {
            startRandom();
            userdata.value = '';
            point.innerHTML--;
        }
    }
}