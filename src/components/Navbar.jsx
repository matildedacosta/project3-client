import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";
import userService from "../service/User.services";

const Nav = styled.nav`
  color: white;
  padding: 1rem 3rem;
  height: 2vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.red};

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo img {
    height: 3vh;
  }

  .nav-bar-links-div {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  button {
    border-radius: 2px;
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.white};
    border: 0.02rem solid ${({ theme }) => theme.colors.white};
    height: 2.5vh;
    width: 3vw;
  }

  button:hover {
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.mint};
    border: 0.02rem solid ${({ theme }) => theme.colors.mint};
  }
`;

function Navbar() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);
  const [loggedUser, setLoggedUser] = useState("");

  const getUser = async () => {
    try {
      let response = await userService.getOneUser(user._id);
      /*  console.log(response.data); */
      setLoggedUser(response.data.user);
      console.log(loggedUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Nav>
      <div className="logo">
        <Link to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/282/282151.png"
            alt="logo-pic"
          />
        </Link>
      </div>
      <div className="div-for-flex"> </div>
      <div className="nav-bar-links-div">
        <Link to="/">Home</Link>

        {isLoggedIn && (
          <>
            <Link to={`/search-users`}>Músicos</Link>
            <Link to={`search-events`}>Eventos</Link>
            <Link to={`profile/${user._id}`}>
              {" "}
              Profile {loggedUser.username}
            </Link>
            <button onClick={logoutUser}>Logout</button>
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
