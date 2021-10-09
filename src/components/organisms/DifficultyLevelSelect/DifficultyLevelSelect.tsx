import React, { useState } from "react";
import styled from "styled-components";
import { DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_MEDIUM } from "../../../constants/constants";

const DropDownContainer = styled.div`
  width: 15.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #930000;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 15.5em;
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0 auto;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #930000;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  text-align: center;
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const options = [DIFFICULTY_EASY, DIFFICULTY_MEDIUM, DIFFICULTY_HARD];

type OnDifficultySelect = {
  onDifficultySelect: (option: string | null) => void;
};

export const DifficultyLevelSelect = ({ onDifficultySelect }: OnDifficultySelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string | null) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onDifficultySelect(value);
    console.log("value ===", value);
  };

  return (
    <>
      <h2>Difficulty level:</h2>
      <DropDownContainer>
        <DropDownHeader onClick={handleToggle}>{selectedOption || "---Select difficulty level---"}</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={option}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </>
  );
};
