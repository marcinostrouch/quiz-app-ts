import { CategoryCardContainer, CategoryName } from "./categoryCardStyle";
import { CategoryCardProps } from "./types";

export const CategoryCard = ({ category, idx, onSelect, selectedCategoryId }: CategoryCardProps) => {
  const { id, name } = category;

  return (
    <CategoryCardContainer onClick={() => onSelect(category)} isSelected={id === selectedCategoryId}>
      <CategoryName>{`${idx + 1}. ${name}`}</CategoryName>
    </CategoryCardContainer>
  );
};
