class Pomodoro {

    constructor(maximumTime, displayMin, displaySec, isAbreak) {
        this.maximumTime = maximumTime;
        this.displayMin = displayMin;
        this.displaySec = displaySec;
        this.secs = 0;
        this.mins = 0;
        this.timer;

        //If this thing is a beak could be useful  
        this.isAbreak = isAbreak;


    }
    startTimer() {

        // this.secs = 0;
        // this.mins = 0;
        this.timer = setInterval(() => this.updateDisplayText(), 1);


    }
    resetTimer() {
        this.stopTimer(true);
    }

    stopTimer(resetValues) {
        if (resetValues === true) {
            this.resetDisplayValues();
        }
        clearInterval(this.timer);


    }
    resetDisplayValues() {
        this.displayMin.innerHtml = "00";
        this.displaySec.innerHtml = "00"
    }


    updateDisplayText() {

        /*************************Come in the future to understand this shit*******/
        /*************************************************************************/
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
        /*************************Come in the future to understand this shit*******/
        /*************************************************************************/

            console.log(`Doing something. 
             This are the secounds/minutes:
             ${this.secs}/ ${this.mins} and its type secounds/minutes:
             ${typeof (this.secs)} 
             ${typeof (this.mins)}
             the object that tis is running is`)
             console.log(this);




        console.log(this.secs < 60);
        if (this.secs < 60) {
            this.secs = refreshText(this.displaySec, this.secs, 59);
            console.log(this.secs);


        }
        else {

             console.log("this are!!!!!!!!!!!!!!!!!!!! them mins", this.mins);

            if (this.mins <= this.maximumTime - 1) {
                
                this.secs = 0;
                this.mins = refreshText(this.displayMin, this.mins, (this.maximumTime - 1));

            }
            else {
                this.stopTimer(false);
                console.log("this happened");
            }

        }
    }
}





var visualSec = document.getElementById("seconds");
var visualMin = document.getElementById("minutes");

let pomo25 = new Pomodoro(30, visualMin, visualSec);
pomo25.startTimer();















