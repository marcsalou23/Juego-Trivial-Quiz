const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const getRandomQuestion = require('./questions');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let currentQuestion = getRandomQuestion();

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Function to send a new question to the client
    function sendQuestion() {
        currentQuestion = getRandomQuestion();
        ws.send(JSON.stringify({ type: 'question', data: currentQuestion }));
    }

    sendQuestion(); // Send the initial question upon connection

    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === 'answer') {
            const submittedAnswer = parsedMessage.answer;
            const correctAnswer = currentQuestion.correctAnswer;
            const isCorrect = submittedAnswer === correctAnswer;

            console.log('Submitted Answer:', submittedAnswer);
            console.log('Correct Answer:', correctAnswer);
            console.log('Is Correct:', isCorrect);

            ws.send(
                JSON.stringify({ type: 'answerResult', data: { isCorrect } })
            );

            // Send a new question after handling the answer
            sendQuestion();
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(3001, () => {
    console.log('Server listening on http://localhost:3001');
});
