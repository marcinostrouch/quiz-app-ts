import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import sampleSize from "lodash-es/sampleSize";
import { decode } from "html-entities";
import { useGetCategoryQuestionsQuery } from "../../../api/api";
import { RootState } from "../../../redux/store";
import { QuestionCard } from "../../molecules/QuestionCard/QuestionCard";
import { Answers } from "../../organisms/Answers/Answers";
import { QuizQuestion } from "../../../types/global";
import { Progress } from "../../organisms/Progress/Progress";
import { QuizContainer, CategoryName, ProgressToNextQuestion } from "./quizStyle";
import { ModalStyled } from "../../organisms/Modal/Modal";
import {
  MISSING_QUESTION_FALLBACK_MESSAGE,
  NEXT_QUESTION_SET_TIMEOUT_DELAY,
  PATH_HOME,
  QUESTIONS_FROM_API_AMOUNT,
  QUIZ_QUESTIONS_TOTAL_NUM,
} from "../../../constants/constants";

type QuizQuestions = QuizQuestion[] | null;

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

  // TODO: handle response error
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

      //Answers rerender
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

  return (
    <QuizContainer>
      <CategoryName>{categoryName}</CategoryName>
      <QuestionCard question={decode(currentQuestionText)} {...{ isLoading }} />
      <Answers {...{ handleAnswerClick, correctAnswer, isNewQuestion }} />
      <Progress {...{ currentQuestionIdx }} />
      <ProgressToNextQuestion isProgress={isProgressToNextQuestion} timeoutDuration={NEXT_QUESTION_SET_TIMEOUT_DELAY} />

      <ModalStyled {...{ isModalOpen, quizScore, handleModalButtonClick }} />
    </QuizContainer>
  );
};
