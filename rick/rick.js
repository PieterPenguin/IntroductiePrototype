export function rick() {
    return {
        name: 'Rick Dubbeld',
        text: "Een leuke man met een plan",
        image: 'rick.jpg',
        questions: [
            {
                id: 1,
                question: 'Hoe lang is Rick bezig geweest met het MBO?',
                answer: '2',
                options: ['2', '3', "4", '5'],
                answered: false
            },
            {
                id: 2,
                question: 'Hoeveel zussen heeft Rick?',
                answer: '2',
                options: ['2', '1', '0', ' 3 Stief zusjes'],
                answered: false
            }
        ]
    }
}
