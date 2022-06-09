import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
  border-style: none;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  min-height: 1.5rem;
  min-width: 4rem;
  border-radius: 5px;
  padding: 0.7rem;
  text-align: center;
  font-size: 0.7rem;

  /*   @media (min-width: 700px) {
    height: 10vh;
    width: 5vw;
    font-size: 1rem;
  } */
`;

function DeleteButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default DeleteButton;
