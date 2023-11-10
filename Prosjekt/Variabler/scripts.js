var color;
var selectedSquare;

function setColor(requestedColor) {
    color = requestedColor;
}

function changeColor() {
    document.body.style.background = color;
}

function selectSquare(square) {
    if (selectedSquare == square.id) {
        return;
    }

    if (square.id == 'square1') {
        document.getElementById('square2').classList.remove('selected')
    }

    else if (square.id == 'square2') {
        document.getElementById('square1').classList.remove('selected')
    }

    selectedSquare = square.id;
    square.classList.add('selected');
    square.style.background = color;
}