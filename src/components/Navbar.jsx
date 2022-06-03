import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Sign in</Link>
    </nav>
  );
}

export default Navbar;
