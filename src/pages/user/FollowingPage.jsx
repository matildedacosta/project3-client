import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import followServices from "../../service/Follow.services";
import { AuthContext } from "../../context/auth.context";
import styled from "styled-components";

import SearchCard from "../../components/search/SearchCard";
import Button from "../../components/Button";

const Following = styled.section`
  color: ${({ theme }) => theme.colors.darkGrey};
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  height: 90vh;

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
    margin: 1rem;
    height: 30vh;
    width: 40vw;
    border: 0.01rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
  }

  .user-card img {
    height: 15vh;
  }

  .no-following {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  .no-following Button {
    width: 20vw;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;

    h3 {
      font-size: 2rem;
      margin: 1rem;
    }

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

    .no-following {
      margin-top: 2rem;
      gap: 30px;
    }

    .no-following Button {
      width: 8vw;
      height: 3vh;
      font-size: 1rem;
    }
  }
`;

function FollowingPage() {
  const [myFollowing, setMyFollowing] = useState([]);
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  const getMyFollowing = async () => {
    try {
      let response = await followServices.seeFollowing(user._id);
      console.log(response.data.following);
      setMyFollowing(response.data.following);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyFollowing();
  }, []);

  return (
    <Following>
      {myFollowing.length == 0 && (
        <div className="no-following">
          <p>Ainda não segues ninguém. Cria a tua tribo:</p>
          <Link to="/search-users">
            <Button>Músicos</Button>
          </Link>
        </div>
      )}
      {myFollowing.length > 0 &&
        myFollowing.map((user) => {
          return (
            <>
              <h3>A seguir</h3>
              <div className="user-card" key={user._id}>
                <img src={user.image} alt="user-img" />
                <h5> {user.username}</h5>
                <h6>{user.location}</h6>
                <Link to={`/user-details/${user._id}`}>
                  <Button>Ver mais</Button>
                </Link>
              </div>
            </>
          );
        })}
    </Following>
  );
}

export default FollowingPage;
