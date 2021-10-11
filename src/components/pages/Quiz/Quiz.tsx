import React, { MutableRefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import sampleSize from "lodash-es/sampleSize";
import { decode } from "html-entities";
import { useGetCategoryQuestionsQuery } from "../../../api/api";
import { RootState } from "../../../redux/store";
import Modal, { ModalProvider } from "styled-react-modal";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";
import { QuestionCard } from "../../molecules/QuestionCard/QuestionCard";
import { Answers } from "../../organisms/Answers/Answers";
import { QuizQuestion } from "../../../types/global";
import { Progress } from "../../organisms/Progress/Progress";
import {
  MISSING_QUESTION_FALLBACK_MESSAGE,
  NEXT_QUESTION_SET_TIMEOUT_DELAY,
  PATH_HOME,
  QUESTIONS_FROM_API_AMOUNT,
  QUIZ_QUESTIONS_TOTAL_NUM,
} from "../../../constants/constants";

const QuizContainer = styled.div`
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryName = styled.div`
  font-size: 1.6rem;
  margin-bottom: 2.1rem;

  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 2.1rem;
  }
`;

const ProgressToNextQuestion = styled.div<{ isProgress: boolean; timeoutDuration: number }>`
  width: 90vw;
  height: 1px;
  display: inline-block;
  visibility: ${({ isProgress }) => (isProgress ? "visible" : "hidden")};
  background-size: 200% 200%;
  transition-property: background-position;
  transition-duration: ${({ isProgress, timeoutDuration }) => (isProgress ? timeoutDuration + "ms" : 0)};
  background-image: linear-gradient(to right, ${colours.yellowGamboge} 50%, ${colours.blackRichFograWithAlpha} 0);
  background-position: ${({ isProgress }) => (isProgress ? "left" : "right")};

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 70vw;
  }
`;

//-----------------------------------------
const StyledModal = Modal.styled`
  width: 80vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colours.redRoseWood};
  
  
  p {
  margin: 1.6rem 0;
`;

const ModalButton = styled.button`
  width: 34vw;
  height: 3.4rem;
  background-color: transparent;
  border: 1px solid ${colours.orangeFulvous};
  margin: 3rem;
  color: ${colours.orangeFulvous};
`;
//------------------------------------------                                   -

type QuizQuestions = QuizQuestion[] | null;

// TODO:
//  add content loader and error handling
//  fix progress/score (perhaps: because currentQUestionNum jest nieaktualny ??????)

export const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestions>(null);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [currentQuestionText, setCurrentQuestionText] = useState("");
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [isNewQuestion, setIsNewQuestion] = useState(false);
  const [isProgressToNextQuestion, setIsProgressToNextQuestion] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    selectedCategory: { id: categoryId, name: categoryName },
    selectedDifficulty,
    quizScore,
  } = useSelector((state: RootState) => state);

  // TODO: handle isLoading and error
  const {
    data: { results: categoryQuestions } = {},
    error,
    isLoading,
  } = useGetCategoryQuestionsQuery({
    questionsAmount: QUESTIONS_FROM_API_AMOUNT,
    categoryId,
    difficulty: selectedDifficulty.toLowerCase(),
  });

  const history = useHistory();

  useEffect(() => {
    if (categoryQuestions) {
      const randomSampleQuestions: QuizQuestions = sampleSize(categoryQuestions, QUIZ_QUESTIONS_TOTAL_NUM);

      setQuizQuestions(randomSampleQuestions);
    }
  }, [categoryQuestions]);

  useEffect(() => {
    if (quizQuestions && currentQuestionIdx < QUIZ_QUESTIONS_TOTAL_NUM) {
      const getQuestionText = (questions: QuizQuestions, currentQuestionIdx: number) => {
        const { question = "" } = quizQuestions[currentQuestionIdx] || {};

        if (!question && !isLoading) {
          setTimeout(() => {
            history.push(PATH_HOME);
          }, NEXT_QUESTION_SET_TIMEOUT_DELAY);

          return MISSING_QUESTION_FALLBACK_MESSAGE;
        }

        return decode(question);
      };

      const question = getQuestionText(quizQuestions, currentQuestionIdx);

      setCurrentQuestionText(question);

      setCorrectAnswer(quizQuestions[currentQuestionIdx]?.correct_answer);

      setIsProgressToNextQuestion(false);

      // Reset Answers component
      setIsNewQuestion(true);
    }
  }, [quizQuestions, currentQuestionIdx]);

  useEffect(() => {
    if (currentQuestionIdx === QUIZ_QUESTIONS_TOTAL_NUM - 1) {
      setTimeout(() => setIsModalOpen(true), NEXT_QUESTION_SET_TIMEOUT_DELAY);
    }
  }, [currentQuestionIdx]);

  const handleAnswerClick = useCallback(
    (answer: string) => {
      if (currentQuestionIdx < QUIZ_QUESTIONS_TOTAL_NUM) {
        setIsProgressToNextQuestion(true);
      }

      // Prepare Answers rerender
      setIsNewQuestion(false);

      if (currentQuestionIdx < QUIZ_QUESTIONS_TOTAL_NUM) {
        setTimeout(() => setCurrentQuestionIdx((prev) => prev + 1), NEXT_QUESTION_SET_TIMEOUT_DELAY);
      }
    },
    [currentQuestionIdx, correctAnswer]
  );

  const handleModalButtonClick = useCallback(() => {
    history.push(PATH_HOME);
  }, []);

  // TODO: refactor modal - separate component
  return (
    <QuizContainer>
      <CategoryName>{categoryName}</CategoryName>
      <QuestionCard question={decode(currentQuestionText)} {...{ isLoading }} />
      <Answers {...{ handleAnswerClick, correctAnswer, isNewQuestion }} />
      <Progress {...{ currentQuestionIdx }} />
      <ProgressToNextQuestion isProgress={isProgressToNextQuestion} timeoutDuration={NEXT_QUESTION_SET_TIMEOUT_DELAY} />

      <StyledModal isOpen={isModalOpen}>
        <h1>Well done!</h1>
        <p>
          Your score is: {quizScore} / {QUIZ_QUESTIONS_TOTAL_NUM}
        </p>
        <ModalButton onClick={handleModalButtonClick}>Start Over</ModalButton>
      </StyledModal>
    </QuizContainer>
  );
};
