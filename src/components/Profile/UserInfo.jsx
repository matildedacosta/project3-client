import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../Button";
import { AuthContext } from "../../context/auth.context";

const User = styled.main`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 35vh;

  h4 {
    font-size: 0.8rem;
    padding-top: 1rem;
    color: ${({ theme }) => theme.colors.red};
  }

  h1 {
    font-size: 1.2rem;
    padding: 0.5rem 0 0.1rem;
  }

  h5 {
    padding-top: 0.2rem;
    font-size: 0.8rem;
    font-weight: 300;
  }

  p {
    font-size: 0.9rem;
    padding-top: 0.5rem;
  }

  .profile-img {
    height: 20vh;
    width: auto;
    border-radius: 50%;
    border: 0.02rem solid ${({ theme }) => theme.colors.darkGrey};
  }

  .edit-profile Button {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.lightPink};
    height: 2vh;
    width: 5vw;
    font-size: 0.8rem;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 35vw;
    gap: 3rem;

    .profile-img {
      height: 30vh;
    }

    h4 {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    h5 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1.2rem;
    }

    .edit-profile Button {
      margin-top: 2rem;
      height: 4vh;
      width: 5vw;
      font-size: 1rem;
    }
  }
`;

function UserInfo(props) {
  const { user } = props;

  /*  const { isLoggedIn, user, logoutUser } = useContext(AuthContext); */

  return (
    <User>
      <img className="profile-img" src={user.image} alt="profile-img" />
      <div className="info">
        <h4>{user.username}</h4>
        <h1>{user.fullName}</h1>
        <h5>{user.location}</h5>
        <p>{user.description}</p>

        <div className="edit-profile">
          <Link to={`/edit-profile/${user._id}`}>
            <Button>Editar</Button>
          </Link>
        </div>
      </div>
    </User>
  );
}

export default UserInfo;
