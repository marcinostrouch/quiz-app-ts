import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_MEDIUM } from "../../../constants/constants";
import { setSelectedDifficulty } from "../../../redux/selectedDifficultySlice";
import { RootState, useAppDispatch } from "../../../redux/store";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";

const SettingsSliderContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${colours.blackRichFogra};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: calc(10vh + 1px);
  left: 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};

  z-index: 100;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 50vh;
  }
`;

const OptionsLisItem = styled.li<{ isSelected: boolean }>`
  font-size: 1.4rem;
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};
  margin: 2rem 0;
  color: ${({ isSelected }) => (isSelected ? colours.redBright : colours.whiteCultured)};

  :hover {
    color: ${colours.redBright};
  }
`;

const OptionsListLabel = styled.label`
  margin: 3rem 0 1rem 0;
  font-size: 1.4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid ${colours.blueOxfordWithAlpha};
`;

const options = [DIFFICULTY_EASY, DIFFICULTY_MEDIUM, DIFFICULTY_HARD];

type SettingsSlideInMenuProps = {
  isOpen: boolean;
};

export const SettingsSlideInMenu = ({ isOpen }: SettingsSlideInMenuProps) => {
  const { selectedDifficulty } = useSelector((state: RootState) => state);

  const dispatch = useAppDispatch();

  const handleOptionClick = useCallback((option) => {
    dispatch(setSelectedDifficulty(option));
  }, []);

  return (
    <SettingsSliderContainer {...{ isOpen }}>
      <OptionsListLabel htmlFor="option-selector">Select difficulty level</OptionsListLabel>
      <ul id="option-selector">
        {options.map((option) => (
          <OptionsLisItem isSelected={option == selectedDifficulty} onClick={() => handleOptionClick(option)}>
            {option}
          </OptionsLisItem>
        ))}
      </ul>
    </SettingsSliderContainer>
  );
};
