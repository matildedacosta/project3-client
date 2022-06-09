import React from "react";
import styled from "styled-components";
import backgroundPic from "../assets/pictures/main-background.jpg";
import background2 from "../assets/pictures/background2.jpg";
import background3 from "../assets/pictures/background3.jpg";
import background4 from "../assets/pictures/background4.jpg";
import musitribo from "../assets/pictures/MUSITRIBO.jpg";
import background from "../assets/pictures/backgroundtribo.jpg";

const HomeMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 85vh;
  width: 100%;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Rock Salt", cursive;

  h1 {
    letter-spacing: 1rem;
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.red};
    font-weight: 900;
  }

  h2 {
    font-size: 1rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  @media (max-width: 700px) {
    height: 65vh;

    /*  img {
    height: 95vh;
    width: 100%;
  } */

    h1 {
      letter-spacing: 1rem;
      font-size: 2rem;
    }

    h2 {
      font-size: 0.7rem;
    }
  }
`;

function Main() {
  return (
    <HomeMain>
      {/*  <img className="img" src={musitribo} alt="bg-pic" /> */}
      <h1>MusiTribo</h1>
      <h2>a tocar na mesma vibração</h2>
      <link
        href="https://fonts.googleapis.com/css2?family=Mansalva&family=Rock+Salt&display=swap"
        rel="stylesheet"
      ></link>
    </HomeMain>
  );
}

export default Main;
