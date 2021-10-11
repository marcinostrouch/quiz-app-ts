import { QuizCategory } from "../../../types/global";

export type CategoryCardProps = {
  category: QuizCategory;
  idx: number;
  onSelect: (category: QuizCategory) => void;
  selectedCategoryId: number;
};
