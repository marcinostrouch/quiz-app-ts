export type QuizCategory = {
  id: number;
  name: string;
};

export type QuizQuestion = {
  category: string;
  correct_answer: string;
  difficulty: string;
  question: string;
};

export type QuizQuestions = QuizQuestion[] | null;
