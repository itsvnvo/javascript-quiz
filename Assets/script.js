var timerEl = document.querySelector(".timer-count");
var correct = document.querySelector(".correct");
var startButton = document.querySelector(".start-button");
var questions = document.querySelector(".questions");

var isCorrect = false;
var intialsNameStored = Object.keys(localStorage);
var intialsScoreStored = Object.values(localStorage);
var currentQuestion = 0;
var quizArray = [
    {
        question:
        "What is referred to as the Skin of a website",
        options: ["CSS", "Donuts", "HTML", "Bones"],
        correct:0
    }
];

function getQuestions(){
    question.textContent = quizArray[currentQuestion].question;
    var optionsBtn = [];
    var indexarray = [];
}

function startQuiz() {
    isCorrect = false;
    timerCount = 30;
    startButton.disabled = true;
    startTimer();
};

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

