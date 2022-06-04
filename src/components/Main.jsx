import React from "react";
import styled from "styled-components";
import backgroundPic from "../assets/pictures/main-background.jpg";

const HomeMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("${backgroundPic}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 92vh;
`;

function Main() {
  return (
    <HomeMain>
      <h1>MusiTribo</h1>
    </HomeMain>
  );
}

export default Main;
