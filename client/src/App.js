import React, { useEffect, useState, useMemo } from 'react';
import './App.css';

function App() {
    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const ws = useMemo(() => new WebSocket('ws://localhost:3001'), []);

    useEffect(() => {
        ws.onopen = () => {
            console.log('WebSocket connection established.');

            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.type === 'question') {
                    setQuestion(data.data);
                    setIsCorrect(null);
                    setShowResult(false);
                } else if (data.type === 'answerResult') {
                    const { isCorrect } = data.data;
                    setIsCorrect(isCorrect);
                    setShowResult(true);
                }
            };

            return () => {
                ws.close();
            };
        };
    }, [ws]);

    const handleAnswerSubmit = (event) => {
        console.log('Submitting answer:', answer);
        event.preventDefault();
        ws.send(JSON.stringify({ type: 'answer', answer }));
    };

    const handleNextQuestion = () => {
        setAnswer('');
        ws.send(JSON.stringify({ type: 'nextQuestion' }));
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
                    <button onClick={handleAnswerSubmit}>
                        Enviar Respuesta
                    </button>
                    <button onClick={handleNextQuestion}>
                        Siguiente Pregunta
                    </button>
                    {showResult && isCorrect !== null && (
                        <p>{isCorrect ? 'Correcto!' : 'Incorrecto!'}</p>
                    )}
                </>
            ) : (
                <p>Esperando siguiente pregunta...</p>
            )}
        </div>
    );
}

export default App;
