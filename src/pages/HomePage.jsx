import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Main from "../components/Main";
import OQueOferece from "../components/OQueOferece";
import Sobre from "../components/Sobre";

const Home = styled.section`
  width: 100%;

  hr {
    color: ${({ theme }) => theme.colors.red};
  }
`;

function HomePage() {
  return (
    <Home>
      <Main />
      <hr />
      <OQueOferece />
      <hr />
      <Sobre />
    </Home>
  );
}

export default HomePage;
