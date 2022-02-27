 class Pomodoro{
        constructor(displayMinutes, displaySeconds, maximunTime, timer)
        {
            this.displayMinutes =displayMinutes;
            this.displaySeconds = displaySeconds;
            this.maximunTime = maximunTime;
            this.timer = timer;
            this.secs = 0;
            this.mins = 0;
        }
        startTimer()
        {

             let timer = setInterval(() => this.updateDisplay(),1000);
        }

        updateDisplay()
        {
            console.log(`Doing something. 
            This are the secounds/minutes:
             ${this.secs}/ ${this.mins} and its type secounds/minutes:
             ${typeof(this.secs)} 
             ${typeof(this.mins)}
             the object that tis is running is`)
             console.log(this);
        }



 }
 let visualSec = document.getElementById("seconds");
 let visualMin = document.getElementById("minutes");
 let pomo = new Pomodoro(visualMin,visualSec,25);
 
 

 