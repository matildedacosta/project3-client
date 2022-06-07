import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import styled from "styled-components";
import Button from "../../components/Button";

const Card = styled.section`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h6 {
    font-size: 0.6rem;
  }

  .user-card {
    gap: 5px;
    background-color: ${({ theme }) => theme.colors.weirdWhite};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    height: 30vh;
    width: 40vw;
    border: 0.01rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
  }

  .user-card img {
    height: 15vh;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    h5 {
      margin: 1rem 0 0.5rem 0;
      font-size: 1.4rem;
    }

    h6 {
      margin-bottom: 1rem;
      font-size: 1rem;
      font-weight: 400;
    }

    .user-card {
      width: 20vw;
      height: 40vh;
    }

    .all-users-cards {
      height: 10vh;
      overflow-y: scroll;
    }

    Button {
      width: 5vw;
      height: 3vh;
      font-size: 0.8rem;
    }
  }
`;

function SearchCard(props) {
  const { users } = props;
  return (
    <Card className="all-users-cards">
      {users.map((user) => {
        return (
          <div className="user-card" key={user._id}>
            <img src={user.image} alt="user-img" />
            <h5> {user.username}</h5>
            <h6>{user.location}</h6>
            <Link to={`/user-details/${user._id}`}>
              <Button>Ver mais</Button>
            </Link>
          </div>
        );
      })}
    </Card>
  );
}

export default SearchCard;
