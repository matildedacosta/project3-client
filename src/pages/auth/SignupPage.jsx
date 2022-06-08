import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import styled from "styled-components";
import authService from "../../service/Auth.services";
import EditMyPicture from "../../components/EditProfile/EditMyPicture";

import EditMySkills from "../../components/EditProfile/EditMySkills";
import EditMyLinks from "../../components/EditProfile/EditMyLinks";

import Button from "../../components/Button";

let linksArr = [
  "Spotify",
  "SoundCloud",
  "Youtube",
  "Instagram",
  "Facebook",
  "Portfolio",
];

let linksObj = {
  spotify: "",
  soundCloud: "",
  youtube: "",
  instagram: "",
  facebook: "",
  portfolio: "",
};

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  /* justify-content: center;
  align */

  li {
    list-style-type: none;
  }
`;

function Signuppage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState();
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState();
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState(linksObj);

  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleUsername = (e) => {
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
    if (skills.includes(e.target.value)) return;
    let skillsCopy = [...skills, e.target.value];
    setSkills(skillsCopy);
  };

  const handleLinks = (link, value) => {
    let linksCopy = { ...links };

    linksCopy[link.toLowerCase()] = value;
    console.log(linksCopy);
    setLinks(linksCopy);
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
  };

  return (
    <main>
      <Form onSubmit={handleSubmit}>
        {/*    <EditMyPicture handleImage={handleImage} /> */}
        <label htmlFor="fullName">Full Name*</label>
        <input
          type="text"
          value={fullName}
          name="FullName"
          onChange={handleFullName}
        />
        <label htmlFor="username">Username*</label>
        <input
          type="text"
          placeholder="John Doe"
          value={username}
          name="username"
          onChange={handleUsername}
        />
        <label htmlFor="email">Email address*</label>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          name="email"
          onChange={handleEmail}
        />
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={handlePassword}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={description}
          name="description"
          onChange={handleDescription}
        />
        <label htmlFor="location">Location*</label>
        <input
          type="text"
          value={location}
          name="location"
          onChange={handleLocation}
        />
        <EditMySkills handleSkills={handleSkills} />
        <label htmlFor="links">Links*</label>
        {linksArr.map((link) => {
          return (
            <EditMyLinks handleLinks={handleLinks} link={link} key={link} />
          );
        })}
        <Button type="submit">Sign Up</Button>
      </Form>
      <p>Already have an account?</p>
      <Link to="/login"> Login</Link>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </main>
  );
}

export default Signuppage;
