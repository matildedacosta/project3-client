import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5vh;
  background-color: ${({ theme }) => theme.colors.red};
  color: white;
`;

function Footer() {
  return (
    <Foot>
      <h6>Por Matilde Costa</h6>
    </Foot>
  );
}

export default Footer;
