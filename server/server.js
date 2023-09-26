const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let currentQuestion = null;

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send the current question to the new client if available
    if (currentQuestion) {
        ws.send(JSON.stringify({ type: 'question', data: currentQuestion }));
    }

    ws.on('message', (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === 'answer') {
            // Handle answer from the client (compare to the correct answer)
            // You need to implement this logic.
            // Send back a response to the client indicating if the answer is correct.
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(3001, () => {
    console.log('Server listening on http://localhost:3001');
});
