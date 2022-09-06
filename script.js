let quiz = {
    questionTypes: ['twoTruthOneLie', 'wordTooMany'],
    questions: [
        {
            id: 1,
            question: 'Wat is het favoriete dier van',
            fakeAnswers: ['Marmot', 'Beest', 'Mens'],
            type: 'wordTooMany'
        }
    ],
    people: [
        {
            id: 1,
            name: 'Benno',
            age: 51,
            answers: [
                {
                    questionId: 1,
                    answer: 'kat',
                    completed: false
                }
            ],
            personalQuizFinished: false
        },
        {
            id: 2,
            name: 'Cornell',
            age: 19,
            answers: [
                {
                    questionId: 1,
                    answer: 'beest',
                    completed: false
                }
            ],
            personalQuizFinished: false
        },
    ],
}

let currentQuizPhase = {
    personId: null,
    questionId: null,
}

document.getElementById('button').addEventListener('click', startQuiz);

function startQuiz() {
    currentQuizPhase.personId = quiz.people[Math.floor(Math.random()*quiz.people.length)];
}

function getPerson() {
    let person = getPerson();
    let personsFinished = [];

    if (!person.personalQuizFinished && (personsFinished === quiz.people.length - 1)) {

    }

    return personId;
}

function getPerson() {
    return quiz.people[Math.floor(Math.random()*quiz.people.length)];

}