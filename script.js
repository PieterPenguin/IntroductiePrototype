let quiz = {
    questionTypes: ['twoTruthOneLie', 'wordTooMany'],
    questions: [
        {
            questionOne: 'Wat is het favoriete dier van',
            typeOfQuestion: 'wordTooMany'
        }
    ],
    people: [
        {
            name: 'Cornell',
            age: 19,
            answerToOne: 'Kat',
            personalQuizFinished: false
        }
    ]
}

document.getElementById('button').addEventListener('click', startQuiz);

function startQuiz() {
    console.log(quiz);
}