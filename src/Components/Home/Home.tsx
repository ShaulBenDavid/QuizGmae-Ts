import React, { useState } from 'react';
import { fetchQuestion } from '../../Services/API';
// Components
import QuestionCard from '../QuestionCard/QuestionCard';
// Types
import { QuestionState, Difficulty } from '../../Services/API';
// Styles
import * as S from './Home.style';

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;
const Home = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startQuiz = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuestion(TOTAL_QUESTIONS, Difficulty.EASY);

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            // user answer
            const answer = e.currentTarget.value;
            // Check
            const correct = questions[number].correct_answer === answer;
            // Add score if correct
            if (correct) setScore((prev) => prev + 1);
            // Save answer
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject]);
        }
     };

    const nextQuestion = () => {
        const nextQuestion = number + 1;

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion)
        }
    };

    return (
        <S.HomeWrapper>
            <S.StyledTitle>Questionnaire</S.StyledTitle>
            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <S.StyledButton onClick={startQuiz}>Start Quiz</S.StyledButton>
            ) : null}
            
            {!gameOver && <S.StyledScore>Score: {score}</S.StyledScore>}

            {loading && <p>Loading.....</p>}
            {!loading && !gameOver && (
                <QuestionCard
                    questionNr={number + 1}
                    totalQuestion={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}
            {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                <S.StyledButton onClick={nextQuestion}>
                    Next Question
                </S.StyledButton>
            ) : null}
        </S.HomeWrapper>
    );
}

export default Home;