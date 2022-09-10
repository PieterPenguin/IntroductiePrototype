window.onload = function exampleFunction() {
    startQuiz()
}

// Get name of html file, use it as localstorage key
console.log(location.href.split("/").slice(-1)[0]);
let data = JSON.parse(localStorage.getItem(location.href.split("/").slice(-1)[0]));
let questions = data.questions;

/** HTML elements **/
let questionElement = document.getElementById('question');
let answerFields = [
    document.getElementById('answerOne'),
    document.getElementById('answerTwo'),
    document.getElementById('answerThree'),
    document.getElementById('answerFour')
];
let nextQuestionButton = document.getElementById('nextQuestionButton');
let nextPersonButton = document.getElementById('nextPersonButton');

function startQuiz() {
    initializeQuestion();
}

let answeredQuestions = [];
let currentQuestion = null;
let currentQuestionCorrectButton = null;
function initializeQuestion() {
    let question = questions[Math.floor(Math.random() * questions.length)];

    if (question.answered) {
        initializeQuestion()
        return;
    }

    setNextQuestionButton(true);
    currentQuestion = question;
    setQuestion();
}

/**
 * Fill buttons and title with correct text
 */
function setQuestion() {
    questionElement.innerText = currentQuestion.question;

    for ( const [i, element] of answerFields.entries()) {
        resetAnswerButton(element);

        let currentOption = currentQuestion.options[i];

        // Set the correct answered button to global variable
        if (currentOption === currentQuestion.answer) {
            currentQuestionCorrectButton = element;
        }

        element.innerText = currentOption;
    }
}

let soundbite = null;
function checkAnswer(clickedAnswerElement) {
    if (currentQuestion.answered) {
        return
    }
    currentQuestion.answered = true;
    answeredQuestions.push(currentQuestion.id);

    clickedAnswerElement.classList.remove('bg-slate-300', 'text-black', 'hover:bg-slate-600', 'hover:text-white', 'transition');

    if (clickedAnswerElement.innerText !== currentQuestion.answer) {
        clickedAnswerElement.classList.add('bg-red-700', 'text-white');

        if (Math.floor(Math.random() * 100) > 90) {
            soundbite = new Audio('/soundbites/wrong-easter-egg.mp3');
        } else {
            soundbite = new Audio('/soundbites/wrong.mp3');
        }
    } else {
        soundbite = new Audio('/soundbites/correct.mp3');
    }

    soundbite.play();

    // Correct answer to green
    currentQuestionCorrectButton.classList.remove('bg-slate-300', 'text-black', 'hover:bg-slate-600', 'hover:text-white', 'transition');
    currentQuestionCorrectButton.classList.add('bg-green-700', 'text-white');

    // Show button to next question
    if (answeredQuestions.length === questions.length) {
        enableNextPersonButton()
    } else {
        setNextQuestionButton();
    }
}

function setNextQuestionButton(disable = false) {
    if (disable) {
        nextQuestionButton.classList.remove('hover:bg-blue-200',  'bg-blue-100', 'text-blue-800');
        nextQuestionButton.classList.add('text-white', 'bg-gray-200',  'text-gray-400');

        nextQuestionButton.disabled = true;
    } else {
        nextQuestionButton.classList.remove('text-white', 'bg-gray-200',  'text-gray-400');
        nextQuestionButton.classList.add('hover:bg-blue-200',  'bg-blue-100', 'text-blue-800');

        nextQuestionButton.disabled = false;
    }
}


function resetAnswerButton(button) {
    button.classList.remove('bg-red-700', 'bg-green-700', 'text-white');
    button.classList.add('bg-slate-300', 'text-black', 'hover:bg-slate-600', 'hover:text-white', 'transition');
}

function enableNextPersonButton() {
    nextPersonButton.classList.remove('hidden');
}

