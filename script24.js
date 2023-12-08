let [mili,seconds, minutes, hours] = [0,0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

// stop watch now counts 1/100 seconds or miliseconds
function stopwatch(){
    mili++;
    if(mili == 100){
        mili = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h +":"+ m +":"+ s +":"+ mili;
}//  

function watchStart(){
    if(timer!== null)
    {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,10);
}

function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = "00:00:00 F";
}

/*

function stopwatch(){
    mili++;
    if(mili == 100){
        mili = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

// for stop watch of 1 secconds
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h +":"+ m +":"+ s;
}  

function watchStart(){
    if(timer!== null)
    {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}
// 1000 is time duration above

*/