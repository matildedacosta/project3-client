import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";

import styled from "styled-components";

const Login = styled.main`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 20vh;
  }

  button {
    border-radius: 2px;
    color: ${({ theme }) => theme.colors.lightBrown};
    background-color: ${({ theme }) => theme.colors.aquaBlue};
    border: 0.02rem solid ${({ theme }) => theme.colors.aquaBlue};
    height: 2.5vh;
    width: 3vw;
  }

  button:hover {
    color: ${({ theme }) => theme.colors.aquaBlue};
    background-color: ${({ theme }) => theme.colors.lightBrown};
    border: 0.02rem solid ${({ theme }) => theme.colors.lightBrown};
  }
`;

function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <Login className="loginPage">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Login</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Don't have an account?</p>
      <Link to="/signup">
        <button>Sign up</button>
      </Link>
    </Login>
  );
}

export default LoginPage;
