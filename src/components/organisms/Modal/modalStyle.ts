import styled from "styled-components";
import Modal from "styled-react-modal";
import { colours } from "../../../styles/colours";

export const StyledModal = Modal.styled`
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

export const ModalButton = styled.button`
  width: 34vw;
  height: 3.4rem;
  background-color: transparent;
  border: 1px solid ${colours.orangeFulvous};
  margin: 3rem;
  color: ${colours.orangeFulvous};
`;
