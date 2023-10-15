import React, { useEffect, useState, useMemo } from 'react';
import './App.css';

function App() {
    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [hasAnswered, setHasAnswered] = useState(false);
    const totalQuestions = 50;
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    let timer;

    const ws = useMemo(() => new WebSocket('ws://localhost:3001'), []);

    useEffect(() => {
        if (ws) {
            ws.onopen = () => {
                console.log('WebSocket connection established.');

                ws.onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    if (data.type === 'question') {
                        setQuestion(data.data);
                        setIsCorrect(null);
                        setShowResult(false);
                        setTimeLeft(30);
                        setHasAnswered(false);
                    } else if (data.type === 'answerResult' && !hasAnswered) {
                        const { isCorrect } = data.data;
                        setIsCorrect(isCorrect);
                        setShowResult(true);
                        setHasAnswered(true);

                        if (isCorrect) {
                            setScore((prevScore) => prevScore + 1);
                        }

                        setAnsweredQuestions(
                            (prevAnswered) => prevAnswered + 1
                        );

                        clearInterval(timer);
                    }
                };

                return () => {
                    ws.close();
                };
            };
        }
    }, [ws, hasAnswered, score]);

    const handleAnswerSubmit = () => {
        if (ws) {
            ws.send(JSON.stringify({ type: 'answer', answer }));
        }
    };

    const handleNextQuestion = () => {
        if (ws) {
            setAnswer('');
            ws.send(JSON.stringify({ type: 'nextQuestion' }));
            setHasAnswered(false);
        }
    };

    useEffect(() => {
        if (question && !hasAnswered) {
            const timeLimit = 30;

            timer = setInterval(() => {
                if (timeLeft > 0) {
                    setTimeLeft(timeLeft - 1);
                } else {
                    handleAnswerSubmit();
                }
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [question, timeLeft, hasAnswered]);

    return (
        <div className='App'>
            {question ? (
                <>
                    <h1 className='quiz-title'>Trivial Quiz</h1>
                    <p>{question.text}</p>
                    <p>Tiempo restante: {timeLeft} seconds</p>
                    <ul>
                        {question.options.map((option, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type='radio'
                                        value={option}
                                        checked={answer === option}
                                        onChange={() => setAnswer(option)}
                                        disabled={hasAnswered}
                                    />
                                    {option}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleAnswerSubmit} disabled={hasAnswered}>
                        Enviar Respuesta
                    </button>
                    <button onClick={handleNextQuestion}>
                        Siguiente Pregunta
                    </button>
                    {showResult && isCorrect !== null && (
                        <p className={isCorrect ? 'correct' : 'incorrect'}>
                            {isCorrect ? 'Correcto!' : 'Incorrecto!'}
                        </p>
                    )}
                    <p>Marcador: {score}</p>
                    <p>
                        Preguntas: {answeredQuestions}/{totalQuestions}
                    </p>
                </>
            ) : (
                <p>Esperando siguiente pregunta...</p>
            )}
        </div>
    );
}

export default App;
