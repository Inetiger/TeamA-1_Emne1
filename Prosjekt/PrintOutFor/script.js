let counter = 0;
let stopCounting = 20;
let listCount = '';



updateView();
function updateView() {
    let html = /*html*/ `
<div class="container">
    <div class="content">
    <input type="button" value="create skip list" onclick="skipCounter()">
    <div class="list">
    ${listCount}
    </div>
    </div>
</div>
    `;
    document.getElementById('app').innerHTML = html;
}

function skipCounter() {
    for (counter; counter <= stopCounting; counter = counter = counter + 2){
    listCount += '<li>' + counter + '</li>';
    updateView();
};
}