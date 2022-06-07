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
  height: 85vh;
  width: 100%;

  h1 {
    letter-spacing: 1rem;
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.red};
  }

  @media (max-width: 700px) {
    height: 65vh;
    /*  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover; */

    /*  img {
    height: 95vh;
    width: 100%;
  } */

    h1 {
      letter-spacing: 1rem;
      font-size: 2rem;
    }
  }
`;

function Main() {
  return (
    <HomeMain>
      {/*  <img className="img" src={musitribo} alt="bg-pic" /> */}
      <h1>MusiTribo</h1>
    </HomeMain>
  );
}

export default Main;
