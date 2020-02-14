let balloonCount = 7;
let name = "Kai"

function changeDiv(n) {
    if (document.getElementById(n).className == "Balloon1") {
        document.getElementById(n).className = `Balloon2`;
        setTimeout(function(){pop(n)}, 3000);
    }
}
function pop(n){
    document.getElementById(n).style.transition = "0s";
    document.getElementById(n).src = "./Firework.gif";
    document.getElementById(n).style.paddingLeft = "9px";
    document.getElementById(n).style.paddingRight = "9px";
    balloonCount--;
    if(balloonCount === 0){
        text();
    }
}
function text(){
    document.getElementById("p").appendChild(document.createTextNode(`Happy Birthday ${name}!`))
}
