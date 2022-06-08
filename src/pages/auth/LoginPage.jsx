import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";

import styled from "styled-components";
import Button from "../../components/Button";

const Login = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  height: 100%;
  //width: 100%;

  Button {
    width: 30vw;
    font-size: 0.8rem;
    border-radius: 5px;
  }

  .no-account Button {
    background-color: ${({ theme }) => theme.colors.weirdWhite};
    color: ${({ theme }) => theme.colors.red};
    font-size: 0.8rem;
    border-radius: 5px;
  }

  h1 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.red};
  }

  label {
    font-size: 1rem;
  }

  .no-account {
    margin-top: 1rem;
    display: flex;
    //justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 0.8rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 1rem;
    width: 20vh;
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

        <Button className="button" type="submit">
          Login
        </Button>
      </form>
      <div className="no-account">
        <p>Don't have an account?</p>
        <Link to="/signup">
          <Button className="signup">Sign up</Button>
        </Link>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </Login>
  );
}

export default LoginPage;
