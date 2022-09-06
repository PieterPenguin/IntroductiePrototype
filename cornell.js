window.onload = function exampleFunction() {
    startQuiz()
}

let questions = [
    {
        id: 1,
        question: 'Wat is het favoriete dier van Cornell?',
        answer: 'Kat',
        possibleAnswers: ['Marmot', 'Beest', 'Mens', 'Kat'],
        answered: false
    }, {
        id: 2,
        question: 'Wat is het favoriete eten van Cornell?',
        answer: 'Vlees',
        possibleAnswers: ['Vlees', 'Groenten', 'Blegh', 'Dier'],
        answered: false
    }
];

let answeredQuestions = [];

/** HTML elements **/
let question = document.getElementById('question');
let answerFields = [
    document.getElementById('answerOne'),
    document.getElementById('answerTwo'),
    document.getElementById('answerThree'),
    document.getElementById('answerFour')
];

function startQuiz() {
    initializeQuestion();
}

function initializeQuestion() {
    let currentQuestion = questions[Math.floor(Math.random() * questions.length)];

    if (currentQuestion.answered) {
        initializeQuestion()
    }

    setQuestion(currentQuestion);
}

function setQuestion(currentQuestion) {
    question.innerText = currentQuestion.question;

    for ( const [i, value] of answerFields.entries()) {
        value.innerText = currentQuestion.possibleAnswers[i];
    }
}

function checkAnswer(answer) {
    console.log(answer);
}

