// timer countdown function once user clicks start button
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");

// quiz id's
var quizQ = document.getElementById("question-toQuiz");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");


// questions, options, and answer contained in a array with objects
var questions = [
    {
        q: "Inside which HTML element do we put the JavaScript?",
        a: ["<scripting>", "<javascript>", "<script>", "<js>"],
        correct: "<script>"
    },
    {
        q: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: ["<script src='xxx.js'>", "<script path='xxx.js'>", "<script name='xxx.js'>", "<script href='xxx.js'>"],
        correct: "<script src='xxx.js'>"
    },
    {
        q: "",
        a: ["", "", "", ""],
        correct: ""
    },
    {
        q: "",
        a: ["", "", "", ""],
        correct: ""
    },
    {
        q: "",
        a: ["", "", "", ""],
        correct: ""
    },
    {
        q: "",
        a: ["", "", "", ""],
        correct: ""
    },
    {
        q: "",
        a: ["", "", "", ""],
        correct: ""
    },
    {
        q: "",
        a: ["", "", "", ""],
        correct: ""
    },
    {
        q: "",
        a: ["", "", "", ""],
        correct: ""
    },
    {
        q: "",
        a: ["", "", "", ""],
        correct: ""
    }
];


// timer function
function countdown() {
    var timeLeft = 100;

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Time Remaining: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = "GAME OVER !!!"; // create a game over function once user runs out of time or questions
            clearInterval(timeInterval);
        }
    }, 1000); // milliseconds which equals every second


    document.getElementById("quizInst").style.display = "none"; // gets rid of the instructions

    startGuessing();
}

// after startBtn is clicked
function startGuessing() {

    document.getElementById("startBtn").style.display = "none"; // here we are hiding the startBtn

    document.getElementById("quizHead").style.display = "none"; // hide code quiz heading

    document.getElementById("quiz-questions").style.display = "block"; //display quiz

    question();
}

// display the content from the array to the corresponding HTML elements
function question() {
    quizQ.textContent = questions[0].q;
    opt1.textContent = questions[0].a[0];
    opt2.textContent = questions[0].a[1];
    opt3.textContent = questions[0].a[2];
    opt4.textContent = questions[0].a[3];


    // search up array object iterator..
    for (var i = 0; i < questions.length; i++) {
        var obj = questions[i];
        //     highScore();
    }
}

// function highScore() {
//     prompt("Enter your name?");
//     localStorage.setItem(prompt);
// if (timeLeft <= 0 || questions.length <= 0) {
//     timerEl.textContent = "Game Score";
// }
// }


// create array that contains questions and answer, do it questions functions
// create a for loop 
// create an if/else statement. if it isn't answer then "wrong answer" & timeLeft - 5, else "correct answer" message and give them 5 points

startBtn.onclick = countdown;
