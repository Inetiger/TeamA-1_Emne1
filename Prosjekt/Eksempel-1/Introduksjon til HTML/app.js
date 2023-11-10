/* Fanger overskriftene i variabler */
const verktøyOverskrift = document.querySelector(".overskrift");
const verktøyInfo = document.querySelector(".verktøy-info");

const htmlLOverskrift = document.querySelector(".HTML-overskrift");
const htmlInfo = document.querySelector(".HTML-info");

const cssOverskrift = document.querySelector(".CSS-overskrift");
const cssInfo = document.querySelector(".CSS-info");

const javascriptOverskrift = document.querySelector(".Javascript-overskrift");
const javascriptInfo = document.querySelector(".Javascript-info");

const hodeKroppOgBenOverskrift = document.querySelector(".hode-kropp-og-ben-overskrift");
const hodeKroppOgBenInfo = document.querySelector(".hode-kropp-og-ben-info");



/* Legger til click event på overskriftene så de veksler mellom skjul/vis */
verktøyOverskrift.addEventListener("click", () => {
    verktøyInfo.classList.toggle("skjulEllerVis-info");
})

htmlLOverskrift.addEventListener("click", () => {
    htmlInfo.classList.toggle("skjulEllerVis-info");
})

cssOverskrift.addEventListener("click", () => {
    cssInfo.classList.toggle("skjulEllerVis-info");
})

javascriptOverskrift.addEventListener("click", () => {
    javascriptInfo.classList.toggle("skjulEllerVis-info");
})

hodeKroppOgBenOverskrift.addEventListener("click", () => {
    hodeKroppOgBenInfo.classList.toggle("skjulEllerVis-info");
})


/* Fanger pil-knappene og kroppsdelene i variabler */
const headLeftArrow = document.querySelector(".head-left-arrow");
const headRightArrow = document.querySelector(".head-right-arrow");

const bodyLeftArrow = document.querySelector(".body-left-arrow");
const bodyRightArrow = document.querySelector(".body-right-arrow");

const legsLeftArrow = document.querySelector(".legs-left-arrow");
const legsRightArrow = document.querySelector(".legs-right-arrow");


const head = document.querySelector(".head");
const body = document.querySelector(".body");
const legs = document.querySelector(".legs")


/* Legger til click event på pil knappene så bildene flytter seg */
headRightArrow.addEventListener("click", () => {
    if(head.src.endsWith("head1.png")) {
        head.src = "./images/head2.png";
    }
    else if(head.src.endsWith("head2.png")) {
        head.src = "./images/head3.png"
    }
    else if(head.src.endsWith("head3.png")) {
        head.src = "./images/head4.png"
    }
})

headLeftArrow.addEventListener("click", () => {
    if(head.src.endsWith("head4.png")) {
        head.src = "./images/head3.png";
    }
    else if(head.src.endsWith("head3.png")) {
        head.src = "./images/head2.png"
    }
    else if(head.src.endsWith("head2.png")) {
        head.src = "./images/head1.png"
    }
})

bodyRightArrow.addEventListener("click", () => {
    if(body.src.endsWith("body1.png")) {
        body.src = "./images/body2.png";
    }
    else if(body.src.endsWith("body2.png")) {
        body.src = "./images/body3.png"
    }
    else if(body.src.endsWith("body3.png")) {
        body.src = "./images/body4.png"
    }
})

bodyLeftArrow.addEventListener("click", () => {
    if(body.src.endsWith("body4.png")) {
        body.src = "./images/body3.png";
    }
    else if(body.src.endsWith("body3.png")) {
        body.src = "./images/body2.png"
    }
    else if(body.src.endsWith("body2.png")) {
        body.src = "./images/body1.png"
    }
})

legsRightArrow.addEventListener("click", () => {
    if(legs.src.endsWith("legs1.png")) {
        legs.src = "./images/legs2.png";
    }
    else if(legs.src.endsWith("legs2.png")) {
        legs.src = "./images/legs3.png"
    }
    else if(legs.src.endsWith("legs3.png")) {
        legs.src = "./images/legs4.png"
    }
})

legsLeftArrow.addEventListener("click", () => {
    if(legs.src.endsWith("legs4.png")) {
        legs.src = "./images/legs3.png";
    }
    else if(legs.src.endsWith("legs3.png")) {
        legs.src = "./images/legs2.png"
    }
    else if(legs.src.endsWith("legs2.png")) {
        legs.src = "./images/legs1.png"
    }
})

/* Ingen layout & vertikal layout */
const ingenlLayoutBtn = document.querySelector(".ingen-layout");
const vertikalLayoutBtn = document.querySelector(".vertikal-layout");
const main = document.querySelector("main");

ingenlLayoutBtn.addEventListener("click", () => {
    main.classList.remove("main-horisontal");
    main.classList.remove("main-grid");
})

vertikalLayoutBtn.addEventListener("click", () => {
    main.classList.remove("main-horisontal");
    main.classList.remove("main-grid");
})


/* Horisontal layout */
const horisontalLayoutBtn = document.querySelector(".horisontal-layout");

horisontalLayoutBtn.addEventListener("click", () => {
    main.classList.add("main-horisontal");
    main.classList.remove("main-grid");
})

/* Grid layout */
const gridlLayoutBtn = document.querySelector(".grid-layout");

gridlLayoutBtn.addEventListener("click", () => {
    main.classList.remove("main-horisontal")
    main.classList.add("main-grid");
})







