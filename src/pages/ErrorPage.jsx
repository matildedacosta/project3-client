import React from "react";
import styled from "styled-components";
import error from "../assets/pictures/error.png";

const Error = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 50vh;
  }
`;

function ErrorPage() {
  return (
    <Error>
      <img src={error} alt="error" />
      {/*  <h1>404</h1>
      <p>Page not found.</p> */}
    </Error>
  );
}

export default ErrorPage;
