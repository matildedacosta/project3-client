import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import followServices from "../../service/Follow.services";
import { AuthContext } from "../../context/auth.context";

function FollowersPage() {
  const [myFollowers, setMyFollowers] = useState([]);
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  const getMyFollowers = async () => {
    try {
      let response = await followServices.seeFollowers(user._id);
      console.log(response.data.followers);
      setMyFollowers(response.data.followers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyFollowers();
  }, []);
  return (
    <div>
      {myFollowers == 0 && <p>Ainda não tens seguidores!</p>}
      {myFollowers > 0 &&
        myFollowers.map((follower) => {
          return <h1>{follower.username}</h1>;
        })}
    </div>
  );
}

export default FollowersPage;
