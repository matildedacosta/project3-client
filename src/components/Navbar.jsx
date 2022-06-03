import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav>
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
          <Link to="/signup">
            <button>Signup</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
