$who = document.getElementById("btn");
let n = 0;
let nn = "nobody loves you";
let nnn = "more than i do...";
$who.addEventListener("click", () => {
    if (n === 0) {
        document.getElementById('container').style.background = "#000000";
        document.getElementById('no').style.color = "#ffffff";
        document.getElementById('btn').style.color = "#ffffff";
        document.getElementById('btn').style.border = "1px solid #ffffff";
        document.getElementById('btn').style.background = "#000000";
        document.getElementById('no').innerHTML = nnn;
        n = 1;
    } else if (n === 1) {
        document.getElementById('container').style.background = "#ffffff";
        document.getElementById('no').style.color = "#000000";
        document.getElementById('btn').style.color = "#000000";
        document.getElementById('btn').style.border = "1px solid #000000";
        document.getElementById('btn').style.background = "#ffffff";
        document.getElementById('no').innerHTML = nn;
        n = 0;
    }
})