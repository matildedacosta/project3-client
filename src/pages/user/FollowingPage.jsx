import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import followServices from "../../service/Follow.services";
import { AuthContext } from "../../context/auth.context";

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
    <div>
      {myFollowing == 0 && (
        <div>
          <p>Ainda não segues ninguém. Cria a tua tribo:</p>
          <Link to="/search-users">
            <button>Músicos</button>
          </Link>
        </div>
      )}
      {myFollowing > 0 &&
        myFollowing.map((following) => {
          return <h1>{following.username}</h1>;
        })}
    </div>
  );
}

export default FollowingPage;
