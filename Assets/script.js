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
    }, {
        numb: 2,
        question: "Question?",
        answer: "Correct",
        options: [
            "wrong",
            "wrong",
            "Correct",
            "wrong"
        ]
    }, {
        numb: 3,
        question: "What is considered the skin?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Markup Language",
            "Hot Tamales make lava",
            "How to make lasagna",
            "Heres too many Llamas"
        ]
    }, {
        numb: 4,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Markup Language",
            "Hot Tamales make lava",
            "How to make lasagna",
            "Heres too many Llamas"
        ]
    }, {
        numb: 5,
        question: "beep or boop?",
        answer: "beep and boop",
        options: [
            "Beep",
            "boop",
            "beep and boop",
            "poop"
        ]
    }
];


// Buttons that check if answer is correct or not
function buttonA_Selected() {
    console.log("Click A");
    if (document.getElementById("buttonA").innerHTML === getQuestions[que_numb].answer) {
        updateScore();
    } else {
        console.log("wrong")
        timerCount = timerCount - 5
    }
    que_numb++
    nextQuestion();
}

function buttonB_Selected() {
    console.log("Click B");
    if (document.getElementById("buttonB").innerHTML === getQuestions[que_numb].answer) {
        updateScore();
    } else {
        console.log("wrong")
        timerCount = timerCount - 5
    }
    que_numb++
    nextQuestion();
}

function buttonC_Selected() {
    console.log("Click C");
    if (document.getElementById("buttonC").innerHTML === getQuestions[que_numb].answer) {
        updateScore();
    } else {
        console.log("wrong")
        timerCount = timerCount - 5
    }
    que_numb++
    nextQuestion();
}

function buttonD_Selected() {
    console.log("Click D");
    if (document.getElementById("buttonD").innerHTML === getQuestions[que_numb].answer) {
        updateScore();
    } else {
        console.log("wrong")
        timerCount = timerCount - 5
    }
    que_numb++
    nextQuestion();
}

//updates score
function updateScore() {
    correctAnswer++
    console.log(correctAnswer)
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
function getIntials() {
    userInitials = prompt("Please enter your initials!")
    console.log(userInitials)
    return userInitials 
}

function getScores() {
    localStorage.setItem(getIntials(), correctAnswer);
    intialsNameStored = Object.keys(localStorage);
    intialsScoreStored = Object.values(localStorage);
    console.log(intialsScoreStored);
    displayScore = "";
    var i;
    for (i = 0; i < intialsNameStored.length; i++) {
        var scoreText = " - - - - - - - - - - " + intialsNameStored[i] + " . . . . . " + intialsScoreStored[i] + " - - - - - - - - - - ";
        var newLi = document.createElement('li')
        newLi.append(document.createTextNode(scoreText))
        console.log(newLi)
        console.log(scoreText)
        document.getElementById('scoreBoard').append(newLi)
    }
}

function startQuiz() {
    isCorrect = false;
    startButton.disabled = true;
    startTimer();
    document.getElementsByClassName("quiz-text")[0].innerHTML = getQuestions[0].question;
    document.getElementById("buttonA").innerHTML = getQuestions[0].options[0];
    document.getElementById("buttonB").innerHTML = getQuestions[0].options[1];
    document.getElementById("buttonC").innerHTML = getQuestions[0].options[2];
    document.getElementById("buttonD").innerHTML = getQuestions[0].options[3];
    // document.getElementsByClassName("optiontext-list")[0].innerHTML = getQuestions[0].options;
};
