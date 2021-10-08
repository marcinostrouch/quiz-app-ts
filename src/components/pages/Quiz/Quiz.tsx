import React from "react";
import styled from "styled-components";

const QuizContainer = styled.div`
  height: 80vh;
  margin: 0 auto;
  //max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383838;
`;

export const Quiz = () => (
  <QuizContainer>
    <h2>Quiz</h2>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorem dolorum esse facere fugiat iure
        maiores, molestiae quae quis, similique soluta tempore tenetur, voluptatem. Dignissimos in labore porro
        voluptate voluptatibus!
      </p>
      <p>
        Ab ad asperiores assumenda at atque beatae consequatur dignissimos, eaque earum exercitationem harum illo
        incidunt labore magni nam neque nihil nisi odio officia quidem reiciendis reprehenderit sequi, totam vel
        voluptates!
      </p>
    </div>
  </QuizContainer>
);
