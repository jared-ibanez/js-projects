let [milliseconds, seconds, minutes] = [0,0,0];
let displayTime = document.getElementById("stopwatch-time");
let timer = null;

function stopwatch(){
    milliseconds++;
    if(milliseconds == 100){
        milliseconds = 0;
        seconds++;
    }
    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    let m = minutes.toString().padStart(2, '0');
    let s = seconds.toString().padStart(2, '0');
    let ms = milliseconds.toString().padStart(2, '0');

    displayTime.innerHTML = `${m}:${s}.${ms}`;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
   timer = setInterval(stopwatch, 10);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTime.innerHTML = "00:00.00";
}