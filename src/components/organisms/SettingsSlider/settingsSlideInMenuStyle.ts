import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";
import { colours } from "../../../styles/colours";

export const SettingsSliderContainer = styled.div<{ isOpen: boolean }>`
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

export const OptionsLisItem = styled.li<{ isSelected: boolean }>`
  font-size: 1.4rem;
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 400)};
  margin: 2rem 0;
  color: ${({ isSelected }) => (isSelected ? colours.redBright : colours.whiteCultured)};

  :hover {
    color: ${colours.redBright};
  }
`;

export const OptionsListLabel = styled.label`
  margin: 3rem 0 1rem 0;
  font-size: 1.4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid ${colours.blueOxfordWithAlpha};
`;
