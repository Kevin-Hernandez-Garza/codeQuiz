// timer countdown function once user clicks start button
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");

function countdown() {
    var timeLeft = 100;

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Time Remaining: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "GAME OVER !!!";
            clearInterval(timeInterval);
        }
    }, 1000); // in milliseconds which equals every second
}

startBtn.onclick = countdown;
// timer countdown function end