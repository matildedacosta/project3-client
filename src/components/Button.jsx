import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  border-style: none;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  min-height: 1.5rem;
  min-width: 4rem;
  border-radius: 5px;
  padding: 80px 20px 80px 20;
  text-align: center;
  font-size: 0.7rem;
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
