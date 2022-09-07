export function cornell() {
  return {
    name: 'Cornell van der Straaten',
    text: 'Een malle man zonder plan',
    image: 'cornell.jpg',
    questions: [
      {
        id: 1,
        question: 'Wat is het favoriete dier van Cornell?',
        answer: 'Kat',
        options: ['Marmot', 'Beest', 'Mens', 'Kat'],
        answered: false
      },
      {
        id: 2,
        question: 'Wat is het favoriete eten van Cornell?',
        answer: 'Vlees',
        options: ['Vlees', 'Groenten', 'Blegh', 'Dier'],
        answered: false
      }
    ]
  }
}
