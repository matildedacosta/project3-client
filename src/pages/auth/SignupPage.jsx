/* import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../service/Auth.services";

import EditMySkills from "../../components/EditProfile/EditMySkills";
import EditMyLinks from "../../components/EditProfile/EditMyLinks"; */

function Signuppage() {
  /* const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState([""]);
  const [links, setLinks] = useState([""]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const { storeToken, autenticateUser } = useContext(AuthContext); */

  /* const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleImage = (file) => {
    setImage(file);
  };

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSkills = (e) => {
    setSkills(e.target.check);
  };

  const handleLinks = (e) => {
    setLinks(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      image,
      username,
      password,
      email,
      fullName,
      description,
      location,
      skills,
      links,
    };

    authService
      .signup(body)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  }; */

  return (
    <main>
      <form >
        <label htmlFor="fullName">Full Name*</label>
        <input
          type="text"
          //value={fullName}
          name="FullName"
          //onChange={handleFullName}
        />
        <label htmlFor="username">Username*</label>
        <input
          type="text"
          placeholder="John Doe"
         // value={username}
          name="username"
          //onChange={handleUsername}
        />

        <label htmlFor="email">Email address*</label>
        <input
          type="email"
          placeholder="example@email.com"
          //value={email}
          name="email"
         // onChange={handleEmail}
        />

        <label htmlFor="password">Password*</label>
        <input
          type="password"
         // value={password}
          name="password"
          //onChange={handlePassword}
        />

        <label htmlFor="image">Image*</label>
        {/* <input type="text" value={image} name="image" onChange={handleImage} /> */}

        <label htmlFor="description">Description*</label>
        <input
          type="text"
          //value={description}
          name="description"
          //onChange={handleDescription}
        />

        <label htmlFor="location">Location*</label>
        <input
          type="text"
          //value={location}
          name="location"
          //onChange={handleLocation}
        />

       {/*  <EditMySkills handleSkills={handleSkills} /> */}

        {/* <EditMyLinks handleLinks={handleLinks} /> */}

        <button type="submit">Sign Up</button>
      </form>
      {/* {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Already have an account?</p>
      <Link to="/login"> Login</Link> */}
    </main>
  );
}

export default Signuppage;
