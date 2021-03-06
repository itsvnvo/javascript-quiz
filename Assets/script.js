var timerEl = document.querySelector(".timer-count");
var correct = document.querySelector(".correct");
var startButton = document.querySelector(".start-button");
var questions = document.querySelector(".questions");

var timer;
var timerCount = 30;
var isCorrect = false;
var correctAnswer = 0
var displayScore = "";
var intialsNameStored = Object.keys(localStorage);
var intialsScoreStored = Object.values(localStorage);
var que_numb = 0
// Array that  questions and answers get pulled from
var getQuestions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language",
        options: [
            "HyperText Markup Language",
            "Hot Tamales make lava",
            "How to make lasagna",
            "Heres too many Llamas"
        ]
    }, {
        numb: 2,
        question: "How do you make an alert box?",
        answer: "alert",
        options: [
            "shout",
            "alert",
            "message",
            "!!!"
        ]
    }, {
        numb: 3,
        question: "What is considered the skin of a website?",
        answer: "CSS",
        options: [
            "CIA",
            "CSS",
            "GG",
            "YMCA"
        ]
    }, {
        numb: 4,
        question: "What are the bones of the website?",
        answer: "HTML",
        options: [
            "HTML",
            "Bones",
            "CSS",
            "Definitly not this answer"
        ]
    }, {
        numb: 5,
        question: "What does a boolean define?",
        answer: "True and False",
        options: [
            "Truce",
            "Nay",
            "True and False",
            "Neither"
        ]
    }
];


// Buttons that check if answer is correct or not and queues next question by increasing que number
function buttonA_Selected() {
    if (document.getElementById("buttonA").innerHTML === getQuestions[que_numb].answer) {
        updateScore();
    } else {
        timerCount = timerCount - 5
    }
    que_numb++
    nextQuestion();
}

function buttonB_Selected() {
    if (document.getElementById("buttonB").innerHTML === getQuestions[que_numb].answer) {
        updateScore();
    } else {
        timerCount = timerCount - 5
    }
    que_numb++
    nextQuestion();
}

function buttonC_Selected() {
    if (document.getElementById("buttonC").innerHTML === getQuestions[que_numb].answer) {
        updateScore();
    } else {
        timerCount = timerCount - 5
    }
    que_numb++
    nextQuestion();
}

function buttonD_Selected() {
    if (document.getElementById("buttonD").innerHTML === getQuestions[que_numb].answer) {
        updateScore();
    } else {
        timerCount = timerCount - 5
    }
    que_numb++
    nextQuestion();
}

//updates score
function updateScore() {
    correctAnswer++
    document.getElementsByClassName("correct")[0].innerHTML = correctAnswer
}

//Timer 
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
            timerEl.textContent = 0
            clearInterval(timer);
            getScores();
        }
    }, 1000);
}
// Changes question when button gets clicked if no more questions goes to prompt for initals
function nextQuestion() {
    if (que_numb <= getQuestions.length -1) {
        document.getElementsByClassName("quiz-text")[0].innerHTML = getQuestions[que_numb].question;
        document.getElementById("buttonA").innerHTML = getQuestions[que_numb].options[0];
        document.getElementById("buttonB").innerHTML = getQuestions[que_numb].options[1];
        document.getElementById("buttonC").innerHTML = getQuestions[que_numb].options[2];
        document.getElementById("buttonD").innerHTML = getQuestions[que_numb].options[3];
    } else {
        timerEl.textContent = 0
            clearInterval(timer);
            getScores();
        }
}
//Gets users intials
function getIntials() {
    localStorage.clear();
    userInitials = prompt("Please enter your initials!")
    return userInitials 
}

// Uses intials to make a scoreboard with provided intials
function getScores() {
    localStorage.setItem(getIntials(), correctAnswer);
    intialsNameStored = Object.keys(localStorage);
    intialsScoreStored = Object.values(localStorage);
    displayScore = "";
    var i;
    for (i = 0; i < intialsNameStored.length; i++) {
        var scoreText = "-- " + intialsNameStored[i] + " : " + intialsScoreStored[i] + " --";
        var newLi = document.createElement('li')
        newLi.append(document.createTextNode(scoreText))
        document.getElementById('scoreBoard').append(newLi)
    }
}
// Starts quiz and timer when button is clicked
function startQuiz() {
    isCorrect = false;
    startButton.disabled = true;
    startTimer();
    document.getElementsByClassName("quiz-text")[0].innerHTML = getQuestions[0].question;
    document.getElementById("buttonA").innerHTML = getQuestions[0].options[0];
    document.getElementById("buttonB").innerHTML = getQuestions[0].options[1];
    document.getElementById("buttonC").innerHTML = getQuestions[0].options[2];
    document.getElementById("buttonD").innerHTML = getQuestions[0].options[3];  
};
