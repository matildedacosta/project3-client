import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";
import Button from "./Button";
import icon from "../assets/pictures/icn2.png";
import icon2 from "../assets/pictures/icontry.jpg";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};

  .button-li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .not-logged-in {
    //padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 5rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.red};
  }

  Button {
    min-width: 5vw;
    height: 3vh;
    background-color: ${({ theme }) => theme.colors.weirdWhite};
    color: ${({ theme }) => theme.colors.red};
    border: none;
    border-radius: 5px;
  }

  .not-logged-in-links {
    display: flex;
    gap: 5px;
  }

  .logo {
    margin-left: 5rem;
  }

  .logo img {
    height: 4vh;
  }

  .top-nav {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    height: 50px;
    width: 100%;
    padding: 1em;
  }

  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin-right: 5rem;
    padding: 0;
  }

  .menu > li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    overflow: hidden;
    font-size: 1.1rem;
  }

  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: "";
    margin-top: -8px;
  }

  .menu-button::after {
    content: "";
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media (max-width: 700px) {
    width: 100%;
    Button {
      min-width: 15vw;
      height: 3vh;
    }

    .menu-button-container {
      display: flex;
    }
    .menu {
      position: absolute;
      top: 0;
      margin-top: 50px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle:checked ~ .menu li {
      border: 1px solid ${({ theme }) => theme.colors.red};
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu > li {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: white;
      background-color: ${({ theme }) => theme.colors.red};
    }
    .menu > li:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.red};
    }
  }
`;

function Header() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <Nav>
      {isLoggedIn && (
        <>
          <section className="top-nav">
            <div className="logo">
              <Link to="/">
                <img src={icon2} alt="logo-pic" />
              </Link>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle">
              <div className="menu-button"></div>
            </label>
            <ul className="menu">
              <li>
                <Link to={`/search-users`}>Músicos</Link>
              </li>
              <li>
                <Link to={`search-events`}>Eventos</Link>
              </li>
              <li>
                <Link to={`profile/${user._id}`}>{user.username}</Link>
              </li>
              <li className="button-li">
                <button onClick={logoutUser}>Logout</button>
              </li>
            </ul>
          </section>
        </>
      )}
      {!isLoggedIn && (
        <div className="not-logged-in">
          <div className="logo">
            <Link to="/">
              <img src={icon2} alt="logo-pic" />
            </Link>
          </div>
          <div className="not-logged-in-links">
            <Link className="link" to="/signup">
              <Button>Signup</Button>
            </Link>
            <Link className="link" to="/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      )}
    </Nav>
  );
}

export default Header;
