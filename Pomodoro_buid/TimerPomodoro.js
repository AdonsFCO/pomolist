//For tomorow I will update some pomodoro settings, convert the pomodoro in to an object so 
//I can make custom pomodoros by the user. 

var visualSec = document.getElementById("seconds");
var visualMin = document.getElementById("minutes");
var sec = 0;
var min = 0;
var pomodoro = setInterval(updateTimeOneSec, 10);



function resetTimer(element) {
    element.innerHTML = "00";

}

// Updates the time if the timer is more than the max time then return false.
function refreshText(element, unit, maxTime) {
    unit++;

    if (unit < 10) {

        element.innerHTML = "0" + String(unit);
    }
    else {
        if (unit <= maxTime) {
            element.innerHTML = String(unit);
        }


    }


    return unit;

}

function updatePomodoro() {

    if (sec < 60) {
        sec = refreshText(visualSec, sec, 59);

    }
    else {
        if (min <= 24) {
            sec = 0;
            min = refreshText(visualMin, min, 24);

        }
        else {
            clearInterval(pomodoro);
            console.log("this happened")
        }



    }



