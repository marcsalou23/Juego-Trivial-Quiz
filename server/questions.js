const triviaQuestions = [
    {
        text: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris',
    },
    {
        text: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',
    },
    {
        text: 'Who wrote the play "Romeo and Juliet"?',
        options: [
            'Charles Dickens',
            'Jane Austen',
            'William Shakespeare',
            'F. Scott Fitzgerald',
        ],
        correctAnswer: 'William Shakespeare',
    },
    {
        text: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Giraffe', 'Blue Whale', 'Lion'],
        correctAnswer: 'Blue Whale',
    },
    {
        text: 'What is the chemical symbol for gold?',
        options: ['Go', 'Ge', 'Gd', 'Au'],
        correctAnswer: 'Au',
    },
];

function getRandomQuestion() {
    // Generate a random index within the range of the questions array
    const randomIndex = Math.floor(Math.random() * triviaQuestions.length);

    // Return the randomly selected question
    return triviaQuestions[randomIndex];
}

module.exports = getRandomQuestion;
