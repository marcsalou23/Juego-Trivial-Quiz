import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        // Connect to the WebSocket server
        const ws = new WebSocket('ws://localhost:3001');

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'question') {
                setQuestion(data.data);
                setIsCorrect(null); // Clear previous answer status
            }
        };

        // Cleanup when unmounting
        return () => {
            ws.close();
        };
    }, []);

    const handleAnswerSubmit = () => {
        // Send the selected answer to the server
        const ws = new WebSocket('ws://localhost:3001');
        ws.onopen = () => {
            ws.send(JSON.stringify({ type: 'answer', answer }));
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'answerResult') {
                setIsCorrect(data.data.isCorrect);
            }
        };
    };

    return (
        <div className='App'>
            {question ? (
                <>
                    <h1>Trivia Quiz</h1>
                    <p>{question.text}</p>
                    <ul>
                        {question.options.map((option, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type='radio'
                                        value={option}
                                        checked={answer === option}
                                        onChange={() => setAnswer(option)}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleAnswerSubmit}>Submit Answer</button>
                    {isCorrect !== null && (
                        <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
                    )}
                </>
            ) : (
                <p>Waiting for a question...</p>
            )}
        </div>
    );
}

export default App;
