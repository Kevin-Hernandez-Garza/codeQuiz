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
            timerEl.textContent = "Game Over";
            clearInterval(timeInterval);
        }
    }, 1000);
}

startBtn.onclick = countdown;
// timer countdown function end