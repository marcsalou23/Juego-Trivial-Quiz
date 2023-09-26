import React, { useEffect, useState, useMemo } from 'react';
import './App.css';

function App() {
    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const ws = useMemo(() => new WebSocket('ws://localhost:3001'), []);

    useEffect(() => {
        ws.onopen = () => {
            console.log('WebSocket connection established.');

            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.type === 'question') {
                    setQuestion(data.data);
                    setIsCorrect(null);
                } else if (data.type === 'answerResult') {
                    const { isCorrect } = data.data;
                    setIsCorrect(isCorrect);
                }
            };

            return () => {
                ws.close();
            };
        };
    }, [ws]);

    const handleAnswerSubmit = () => {
        console.log('Submitting answer:', answer);

        ws.send(JSON.stringify({ type: 'answer', answer }));
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
