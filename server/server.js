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

    ws.send(JSON.stringify({ type: 'question', data: currentQuestion }));

    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === 'answer') {
            const submittedAnswer = parsedMessage.answer;
            const correctAnswer = currentQuestion.correctAnswer;
            const isCorrect = submittedAnswer === correctAnswer;

            ws.send(
                JSON.stringify({ type: 'answerResult', data: { isCorrect } })
            );
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(3001, () => {
    console.log('Server listening on http://localhost:3001');
});
