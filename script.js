let quiz = {
    questionTypes: ['twoTruthOneLie', 'wordTooMany'],
    questions: [
        {
            id: 1,
            question: 'Wat is het favoriete dier van',
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
                    answer: 'kat'
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
                    answer: 'beest'
                }
            ],
            personalQuizFinished: false
        },
    ],
}

document.getElementById('button').addEventListener('click', startQuiz);

function startQuiz() {
    console.log(quiz);
}