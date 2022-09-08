export function rick() {
    return {
        name: 'Jimme van der Meer',
        text: "Houdt van ananas op z'n pizza",
        image: 'jimme.jpg',
        questions: [
            {
                id: 1,
                question: 'Wat is de favoriete serie van Jimme?',
                answer: 'Arcane',
                options: ['Arcane', 'Easy', "Queen's Gambit", 'The Witcher'],
                answered: false
            },
            {
                id: 2,
                question: 'Wat is het favoriete bier van Jimme?',
                answer: 'Jupiler',
                options: ['Heineken', 'Jupiler', 'Hertog Jan', ' Sapporo Yebisu Beer'],
                answered: false
            }
        ]
    }
}
