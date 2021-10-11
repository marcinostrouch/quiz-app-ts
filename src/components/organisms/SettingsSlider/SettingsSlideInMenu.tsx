import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_MEDIUM } from "../../../constants/constants";
import { setSelectedDifficulty } from "../../../redux/selectedDifficultySlice";
import { RootState, useAppDispatch } from "../../../redux/store";
import { SettingsSliderContainer, OptionsListLabel, OptionsLisItem } from "./settingsSlideInMenuStyle";

const options = [DIFFICULTY_EASY, DIFFICULTY_MEDIUM, DIFFICULTY_HARD];

type SettingsSlideInMenuProps = {
  isOpen: boolean;
  closeSettingsMenu: () => void;
};

export const SettingsSlideInMenu = ({ isOpen, closeSettingsMenu }: SettingsSlideInMenuProps) => {
  const { selectedDifficulty } = useSelector((state: RootState) => state);

  const dispatch = useAppDispatch();

  const handleOptionClick = useCallback((option) => {
    dispatch(setSelectedDifficulty(option));
    closeSettingsMenu();
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
