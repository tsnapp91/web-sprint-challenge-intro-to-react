// Write your Character component here
import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
50% {
transform: scale(0.8);
}
100% {
transform: scale(1);
opacity: 1;
}`;

const StyledCharacters = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const Character = (props) => {
  return (
    <StyledCharacters className="character">{props.info.name}</StyledCharacters>
  );
};

export default Character;
