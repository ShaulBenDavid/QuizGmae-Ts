import React from 'react';
// Types
import { AnswerObject } from '../Home/Home';
// Styles
import * as S from './QuestionCard.style';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestion: number;
}



const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestion,
}) => {

    return (
        <S.QuestionCardWrapper>
            <div>
                Question: {questionNr}/{totalQuestion}
            </div>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map(answer => (
                    <S.ButtonWrapper
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                    >
                        <button disabled={userAnswer ? true : false} onClick={callback} value={answer}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </S.ButtonWrapper>
                ))}
            </div>
        </S.QuestionCardWrapper>
    )
};

export default QuestionCard;