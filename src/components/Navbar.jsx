import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";

const Nav = styled.nav`
  color: white;
  padding: 1rem 3rem;
  height: 2vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightBrown};

  .nav-bar-links-div {
    display: flex;
    align-items: center;
    gap: 20px;
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

function Navbar() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <Nav>
      <div className="logo">logo</div>
      <div className="div-for-flex"> </div>
      <div className="nav-bar-links-div">
        <Link to="/">Home</Link>

        {isLoggedIn && (
          <>
            <Link to={`profile/${user._id}`}>Profile</Link>
            <button onClick={logoutUser}>Logout</button>
            <p>{user.username}</p>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link className="link" to="/signup">
              <button>Signup</button>
            </Link>
            <Link className="link" to="/login">
              <button>Login</button>
            </Link>
          </>
        )}
      </div>
    </Nav>
  );
}

export default Navbar;
