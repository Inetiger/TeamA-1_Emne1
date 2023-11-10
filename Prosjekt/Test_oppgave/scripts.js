// Model
const app = document.getElementById('app');

// View
updateView();
function updateView(){
    html = /*html*/ `
<h1>JavaScript Progress Bar</h1>

<div id="myProgress">
  <div id="myBar">100%</div>
</div>

<br>
<button onclick="move()">Click Me</button>
    `;
    app.innerHTML = html;
}


// Controler

var i = 100;
function move() {
  if (i == 100) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 100;
    var id = setInterval(frame, 100);
    function frame() {
      if (width <= 0) {
        clearInterval(id);
        i = 100;
      } else {
        if (width <= 50 && width > 20){
            elem.style.backgroundColor = 'yellow';
        } else if (width <= 20 && width > 0){
            elem.style.backgroundColor = 'red';
        } else {
            elem.style.backgroundColor = 'green';
        }
        width--;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

narcissistic(153);
function narcissistic(value) {
  let truevalue = value.toString();
  let truenumber = 0;
  let number = '';
  for(let i = 0;i < truevalue.length;i++){
    number = truevalue.charAt(i);
    truenumber += number **= truevalue.length;
    console.log(number)
  }
  if (truenumber === value) {
    return true;
  } else {
    return false;
  }
}
