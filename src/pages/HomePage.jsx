import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Main from "../components/Main";
import OQueOferece from "../components/OQueOferece";
import Sobre from "../components/Sobre";

function HomePage() {
  return (
    <main>
      <Main />
      <hr />
      <OQueOferece />
      <hr />
      <Sobre />
    </main>
  );
}

export default HomePage;
