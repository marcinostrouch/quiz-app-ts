import React from "react";
import { QUIZ_QUESTIONS_TOTAL_NUM } from "../../../constants/constants";
import { StyledModal, ModalButton } from "./modalStyle";

type ModalStyledProps = {
  isModalOpen: boolean;
  quizScore: number;
  handleModalButtonClick: () => void;
};

export const ModalStyled = ({ isModalOpen, quizScore, handleModalButtonClick }: ModalStyledProps) => {
  return (
    <StyledModal isOpen={isModalOpen}>
      <h1>Well done!</h1>
      <p>
        Your score is: {quizScore} / {QUIZ_QUESTIONS_TOTAL_NUM}
      </p>
      <ModalButton onClick={handleModalButtonClick}>Start Over</ModalButton>
    </StyledModal>
  );
};
