const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runClock(){
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hourPosition = hr * (360/12) + (min * (360/60)/12);
    let minutePosition = min * (360/60) + (sec * (360/60)/60);
    let secondPosition = sec * (360/60);

    HOURHAND.style.transform = "rotate("+hourPosition+"deg)";
    MINUTEHAND.style.transform = "rotate("+minutePosition+"deg)";
    SECONDHAND.style.transform = "rotate("+secondPosition+"deg)";
}

var interval = setInterval(runClock,1000)

