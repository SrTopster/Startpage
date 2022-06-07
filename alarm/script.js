let alarm = false
let button = document.getElementById("b_start");
let sel_hour = document.getElementById("sel_hour")
let sel_minute = document.getElementById("sel_minute")

let time = new Date();
sel_hour.selectedIndex = time.getHours()
sel_minute.selectedIndex = time.getMinutes()

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":"+ min + ":" + sec;
    if (alarm == true){
        if ( hour == sel_hour.value & min == sel_minute.value ) {
            player = document.getElementById("music")
            player.load()
            player.play()
            alarm = false
        }
    }
    document.getElementById("clock")
        .innerHTML = currentTime;
}
showTime();
button.onclick = function(){
    sel_hour.disabled = true
    sel_minute.disabled = true
    button.style.borderColor = "red"
    button.style.cursor = "context-menu"
    button.disabled = true
    alarm = true
}