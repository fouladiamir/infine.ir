let state = false;
let normal_text = "nobody loves you...", special_text = "Just me honey 😏", normal_btn = "So who is it?",
    special_btn = "I can't stand it anymore 😍";
document.getElementById("btn").addEventListener("click", () => {
    if (state) {
        document.getElementById('container').style.background = "#000000";
        document.getElementById('text').style.color = "#ffffff";
        document.getElementById('btn').style.color = "#ffffff";
        document.getElementById('btn').style.border = "1px solid #ffffff";
        document.getElementById('btn').style.background = "#000000";
        document.getElementById('text').innerHTML = normal_text;
        document.getElementById('btn').innerHTML = normal_btn;
        state = false;
    } else {
        document.getElementById('container').style.background = "#ffffff";
        document.getElementById('text').style.color = "#000000";
        document.getElementById('btn').style.color = "#000000";
        document.getElementById('btn').style.border = "1px solid #000000";
        document.getElementById('btn').style.background = "#ffffff";
        document.getElementById('text').innerHTML = special_text;
        document.getElementById('btn').innerHTML = special_btn;
        state = true;
    }
})