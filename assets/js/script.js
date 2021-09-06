// questions, options, and answer contained in a array of objects
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
        q: "How do you write 'Hello World!' in a alert box?",
        a: ["alertBox('Hello World!');", "msg('Hello World!');", "msgBox('Hello World!');", "alert('Hello World!');"],
        correct: "alert('Hello World!');"
    },
    {
        q: "How do you create a function in JavaScript?",
        a: ["function myFunction()", "function = myFunction()", "function: myFunction()", "$function myFunction()"],
        correct: "function myFunction()"
    },
    {
        q: "How do you write an if statement in JavaScript?",
        a: ["if i == 5 then", "if i = 5", "if (i == 5)", "if i = 5 then"],
        correct: "if (i == 5)"
    },
    {
        q: "How to write an IF statement fir executing some code if 'i' is NOT equal to 5?",
        a: ["if (i <> 5)", "if i <> 5", "if (i != 5)", "if i != 5 then"],
        correct: "if (i != 5)"
    },
    {
        q: "How does a while loop start?",
        a: ["while (i <= 18)", "while (i <= 18; i++)", "while (i, 18 > .length)", "while i = 1 to 10"],
        correct: "while (i <= 18)"
    },
    {
        q: "How do you round the number 7.25 to the nearest integer?",
        a: ["Math.rnd(7.25)", "Math.round(7.25)", "round(7.25)", "rnd(7.25)"],
        correct: "Math.round(7.25)"
    },
    {
        q: "How do you find the number with the highest value of x and y?",
        a: ["Math.ceil(x,y)", "ceil(x,y)", "top(x,y)", "Math.max(x,y)"],
        correct: "Math.max(x,y)"
    },
    {
        q: "Which event occurs when the user clicks on an HTML element?",
        a: ["onMouseOver", "onclick", "onchange", "onMouseClick"],
        correct: "onclick"
    }
];

// targeting certain ID's from HTML file
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var quizInst = document.getElementById("quizInst");
var quizStart = document.getElementById("quiz-questions");
var results = document.getElementById("results");
var highScore = document.getElementById("scores");
var userName = document.getElementById("initials");
var userHighName = document.getElementById("user-name");
var userHighScore = document.getElementById("user-score");
var scoreSubmitBtn = document.getElementById("highscore");


// quiz id's
var quizQ = document.getElementById("question-toQuiz");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

var score = 0;
var testQuestions = 0;

// hiding the quiz and result elements initially
results.style.display = "none";
quizStart.style.display = "none";
highScore.style.display = "none";


// timer function
var timeLeft = 100;
function countdown() {
    testQuestions = 0;
    timeLeft = 100;

    document.getElementById("quizInst").style.display = "none"; // gets rid of the instructions
    document.getElementById("startBtn").style.display = "none"; // here we are hiding the startBtn
    document.getElementById("quizHead").style.display = "none"; // hide code quiz heading
    document.getElementById("quiz-questions").style.display = "block"; //display quiz

    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time Remaining: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "GAME OVER !!!"; // create a game over function once user runs out of time or questions

            if (testQuestions < questions.length - 1) {
                gameOver();
            }
        }
    }, 1000); // milliseconds which equals every second

    startQuiz(); //initiates the quiz
};

// run the quiz array of objets
function startQuiz() {
    upNextQuestion();
}

// display the content from the array to the corresponding HTML elements
function upNextQuestion() {
    quizQ.textContent = questions[testQuestions].q;
    option1.textContent = questions[testQuestions].a[0];
    option2.textContent = questions[testQuestions].a[1];
    option3.textContent = questions[testQuestions].a[2];
    option4.textContent = questions[testQuestions].a[3];
}

// alerting if answer is right or wrong
function checkIfRight(correct) {
    if (questions[testQuestions].correct === questions[testQuestions].a[correct]) {
        score++;
        alert("Correct");
    } else {
        timeLeft -= 15;
        alert("Incorrect");
    }

    // cycling through questions
    testQuestions++;
    if (testQuestions < questions.length) {
        upNextQuestion();
    } else {
        gameOver();
    }
}

//checking options 
function opt1() { checkIfRight(0); }
function opt2() { checkIfRight(1); }
function opt3() { checkIfRight(2); }
function opt4() { checkIfRight(3); }


// once game has ended it will hide/display HTML elements
function gameOver() {
    quizStart.style.display = "none"; // hiding questions
    results.style.display = "block"; // showing results
    timerEl.style.display = "none"; //hiding timer
    highScore.style.display = "block"; // displaying leaderboard
}


// storing score
function getHighScore() {
    var userName = localStorage.getItem("#initials");
    var userScoreNow = score;

    userHighName.textContent = userName;
    userHighScore.textContent = userScoreNow;
}

getHighScore();

scoreSubmitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    var nameUser = document.getElementById('initials').value;
    var scoreS = score;

    localStorage.setItem('name', nameUser);
    localStorage.setItem('score', score);

    getHighScore();
});


// event listeners
startBtn.onclick = countdown;
option1.addEventListener("click", opt1);
option2.addEventListener("click", opt2);
option3.addEventListener("click", opt3);
option4.addEventListener("click", opt4);