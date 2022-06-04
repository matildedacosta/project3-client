import React from "react";
import styled from "styled-components";
import backgroundPic from "../assets/pictures/main-background.jpg";

const HomeMain = styled.div`
  /*  @import url("https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap");
  font-family: "Henny Penny", cursive; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("${backgroundPic}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 92vh;

  h1 {
    letter-spacing: 1rem;
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.red};
  }
`;

function Main() {
  return (
    <HomeMain>
      <h1>MusiTribo</h1>
    </HomeMain>
  );
}

export default Main;
