var timerEl = document.querySelector(".timer-count");
var correct = document.querySelector(".correct");
var startButton = document.querySelector(".start-button");
var questions = document.querySelector(".questions");

var isCorrect = false;
var intialsNameStored = Object.keys(localStorage);
var intialsScoreStored = Object.values(localStorage);
var getQuestions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Markup Language",
            "Hot Tamales make lava",
            "How to make lasagna",
            "Heres too many Llamas"
        ]
    }
]
var questionArray = Object.values(getQuestions);
// document.getElementsByClassName("quiz-text").innerHTML = "correct"

function buttonA_Selected() {
    console.log("Click A");
}
function buttonB_Selected() {
    console.log("Click B");
}
function buttonC_Selected() {
    console.log("Click C");
}
function buttonD_Selected() {
    console.log("Click D");
}
function checkAnswer(){
    var selectedButton;{
    }
}

function startQuiz() {
    isCorrect = false;
    var timerCount = 30;
    startButton.disabled = true;
    // startTimer();
    document.getElementsByClassName("quiz-text")[0].innerHTML = getQuestions[0].question;
    document.getElementById("buttonA").innerHTML = getQuestions[0].options[0];
    document.getElementById("buttonB").innerHTML = getQuestions[0].options[1];
    document.getElementById("buttonC").innerHTML = getQuestions[0].options[2];
    document.getElementById("buttonD").innerHTML = getQuestions[0].options[3];
    // document.getElementsByClassName("optiontext-list")[0].innerHTML = getQuestions[0].options;
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





