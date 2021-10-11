import styled from "styled-components";
import { colours } from "../../../styles/colours";

export const NoMatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90vh;
  width: 100vw;
  background: ${colours.blackRichFograWithAlpha};

  h1 {
    margin: 13vh 1rem;
  }

  p {
    font-size: 1.4rem;
  }
`;
