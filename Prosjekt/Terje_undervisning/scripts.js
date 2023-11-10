function downLeft() {
    document.getElementById('container').innerHTML = /*html*/`
    <div class="content">
            <div class="square">

            </div>
            <div class="square">

            </div>
            <div class="square">
                <img width="150px" src="img/GET_RGB_logo-01-2.png">
            </div>
            <div class="square">

            </div>
        </div>
        <div class="buttons">
    <button onclick="upLeft()">⏶</button>
                <div>
                    <button disabled>⏴</button>
                    <button onclick="downRight()">⏵</button>
                </div>
                <button disabled>⏷</button>
                </div>
    `;
}
function upLeft() {

    document.getElementById('container').innerHTML = /*html*/`
    <div class="content">
            <div class="square">
            <img width="150px" src="img/GET_RGB_logo-01-2.png">
            </div>
            <div class="square">

            </div>
            <div class="square">
                
            </div>
            <div class="square">

            </div>
        </div>
        <div class="buttons">
    <button disabled>⏶</button>
                <div>
                    <button disabled>⏴</button>
                    <button onclick="upRight()">⏵</button>
                </div>
                <button onclick="downLeft()">⏷</button>
                </div>
    `;
}
function upRight() {

    document.getElementById('container').innerHTML = /*html*/`
    <div class="content">
            <div class="square">
            
            </div>
            <div class="square">
            <img width="150px" src="img/GET_RGB_logo-01-2.png">
            </div>
            <div class="square">
                
            </div>
            <div class="square">

            </div>
        </div>
        <div class="buttons">
    <button disabled>⏶</button>
                <div>
                    <button onclick="upLeft()">⏴</button>
                    <button disabled>⏵</button>
                </div>
                <button onclick="downRight()">⏷</button>
                </div>
    `;
}
function downRight() {

    document.getElementById('container').innerHTML = /*html*/`
    <div class="content">
            <div class="square">
            
            </div>
            <div class="square">
            
            </div>
            <div class="square">
                
            </div>
            <div class="square">
            <img width="150px" src="img/GET_RGB_logo-01-2.png">
            </div>
        </div>
        <div class="buttons">
    <button onclick="upRight()">⏶</button>
                <div>
                    <button onclick="downLeft()">⏴</button>
                    <button disabled>⏵</button>
                </div>
                <button disabled>⏷</button>
                </div>
    `;
}