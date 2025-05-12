let footer = document.getElementsByClassName("footer");
const helpButton = document.getElementById("bodyHelp");
const main = document.querySelector("main")
const bodyWindow = document.getElementById("body-window");
const footerbak = footer;
let isFooterVisible = true;
const comingSoon = document.getElementById("coming-soon")
const comingButton = document.getElementById("coming-soon-button");
const comingSoonProgress = document.getElementById("coming-soon-bar-progress");
let progress = 0;
let creditsProgress = 0;

function credits() {
    const elements = [
        `<img src="/images/nando.jpg">
        <p>Fernando Mandu - mrnandokk</p>`,

        `<img src="/images/tenkuma.jpg">
        <p>Adrian Victor de Abreu A. - tenkuma</p>
        <p><i>Fantasy is not a crime, find your castle in the sky.</i></p>`,

        `<img src="/images/sunyuuh.png">
        <p>Sílvia Holz - Sunyuuh</p>`,
        // <p><i>Fantasy is not a crime, find your castle in the sky.</i></p>`,

        `<img src="http://margarina.rf.gd/logo.png">
        <p>Margarina Incorporation</p>
        <p>ArthAttack, c4skaa, e̸n̴t̵i̴d̶a̸d̸e̸, Herculini, mrnandokk, Murailus, Paim, tenkuma <span style="color: red"><3</span> Sunyuuh</p>
        <p><i>Business ass solutions.</i></p>`
    ]
    const creditsDiv = document.getElementById("credits");
    if (creditsProgress > elements.length -1) creditsProgress = 0;
    creditsDiv.innerHTML = elements[creditsProgress]
    $(creditsDiv).slideDown(200, () => {
        creditsProgress++;
        setTimeout(() => {
            $(creditsDiv).slideUp(200, () => {
                credits();
            });
        }, 5000)
    });
}

credits();