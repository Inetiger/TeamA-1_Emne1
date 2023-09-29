function Places() {
    var text = document.getElementById("living");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function light() {
    document.body.style.backgroundColor = "white";
    document.getElementById('container').style.color = "black";
    document.getElementById('container').style.backgroundColor = "lightgrey";
}

function dark() {
    document.body.style.backgroundColor = "black";
    document.getElementById('container').style.color = "white";
    document.getElementById('container').style.backgroundColor = "darkred"
}
