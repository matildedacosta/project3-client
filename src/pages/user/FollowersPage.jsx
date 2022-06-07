import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import followServices from "../../service/Follow.services";
import { AuthContext } from "../../context/auth.context";
import styled from "styled-components";
import Button from "../../components/Button";

const Followers = styled.section`
  color: ${({ theme }) => theme.colors.darkGrey};
  padding-top: 1rem;
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
    margin: 1rem;
    height: 30vh;
    width: 40vw;
    border: 0.01rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
  }

  .user-card img {
    height: 15vh;
  }

  .no-followers {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .no-followers Button {
    width: 20vw;
  }
`;

function FollowersPage() {
  const [myFollowers, setMyFollowers] = useState([]);
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  const getMyFollowers = async () => {
    try {
      let response = await followServices.seeFollowers(user._id);
      //console.log(response.data.followers);
      setMyFollowers(response.data.followers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyFollowers();
  }, []);

  return (
    <Followers>
      {myFollowers.length == 0 && (
        <div className="no-followers">
          <p>Ainda não tens seguidores!</p>
          <Link to={`/search-users`}>
            <Button>Músicos</Button>
          </Link>
        </div>
      )}
      {myFollowers.length > 0 &&
        myFollowers.map((user) => {
          return (
            <>
              {console.log(user)}
              <h3>Seguidores</h3>
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
    </Followers>
  );
}

export default FollowersPage;
