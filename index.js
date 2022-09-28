window.addEventListener("DOMContentLoaded", () => { 

    const timer = document.getElementById("timer");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const resetBtn = document.getElementById("reset");


    let startTime = null;
    let [hours, minutes, seconds] = [0, 0, 0];

    startBtn.addEventListener("click", () => { 

        if ( startTime !== null ) {
            clearInterval(startTime);
        }

        startTime = setInterval(displayTime, 1000);

        disabledBtn(startBtn);
        enabledBtn(stopBtn, resetBtn);
    })

    stopBtn.addEventListener("click", () => { 
        clearInterval(startTime);
        disabledBtn(stopBtn);
        enabledBtn(startBtn);
    })

    resetBtn.addEventListener("click", () => { 
        clearInterval(startTime);
        disabledBtn(stopBtn, resetBtn);
        enabledBtn(startBtn);
        [hours, minutes, seconds] = [0, 0, 0];
        timer.innerHTML = "00 : 00 : 00";
    })

    function displayTime() {

        seconds++;

        if (seconds >= 60) {

            minutes++;
            seconds = 0;


            if (minutes >= 60) {
                hours++;
                minutes = 0;

                if (hours >= 24) {
                    hours = 0;
                }
            }
        }

        let fullHours   = (hours < 10) ? "0" + hours : hours;
        let fullMinutes = (minutes < 10) ? "0" + minutes : minutes;
        let fullSeconds = (seconds < 10) ? "0" + seconds : seconds;

        timer.innerHTML = `${fullHours} : ${fullMinutes} : ${fullSeconds}`;
    }

    function enabledBtn(...elems){
        elems.forEach(elem => elem.removeAttribute("disabled"));
    }

    function disabledBtn(...elems){
        elems.forEach(elem => elem.setAttribute("disabled", true));
    }

})

