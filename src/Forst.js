import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Forst() {
    const [currentQution, setCurrentQution] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const questions = [
        { 
            question: 'What is 2 + 2?',
            options: ['3', '4', '5', '6'], 
            correctAnswer: '4'
        },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        {
            question: 'What is the capital of France?',
            options: ['London', 'Berlin', 'Paris', 'Rome'],
            correctAnswer: 'Paris'
        },
        {
            question: 'What is the capital of France?',
            options: ['London', 'Berlin', 'Paris', 'Rome'],
            correctAnswer: 'Paris'
        }
    ]
    const qutionoptions = (selectOption) => {
        if (selectOption === questions[currentQution].correctAnswer) {
            setScore(score + 1)
        }
        const nextQution = currentQution + 1;
        if (nextQution < questions.length) {
            setCurrentQution(nextQution)
        } else {
            setShowScore(true)
        }
    }
    const Restart = () => {
        setCurrentQution(0)
        setScore(0)
        setShowScore(false)
    }
    return (
        <div>
            <h1><Link to='/Second'>Welcome Qiuiz</Link></h1>
            {showScore ? (
                <div>
                    <p> your score{score} out of{questions.length}</p>
                    <button onClick={Restart}>restart</button>
                </div>) : (
                <div>
                    <p><span>question {currentQution + 1}</span>/{questions.length}</p>
                    <h2>{questions[currentQution].question}</h2>
                    <div>
                        {questions[currentQution].options.map((Option) => (
                            <button key={Option} onClick={() => qutionoptions(Option)}>{Option}</button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
export default Forst;