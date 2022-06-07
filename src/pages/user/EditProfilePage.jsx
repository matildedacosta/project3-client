import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import userService from "../../service/User.services";
import styled from "styled-components";
import Button from "../../components/Button";

import EditMySkills from "../../components/EditProfile/EditMySkills";
import EditMyLinks from "../../components/EditProfile/EditMyLinks";
import EditMyPicture from "../../components/EditProfile/EditMyPicture";

let linksArr = [
  "Spotify",
  "SoundCloud",
  "Youtube",
  "Instagram",
  "Facebook",
  "Portfolio",
];

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /*  justify-content: center;
  align-items: center; */
  gap: 5px;

  label {
    padding: 0.2rem;
    font-size: 1rem;
  }

  input,
  select {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-bottom: 1rem;
    width: 20vh;
    border: 0.02rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    padding: 0.2rem;
    /*   display: flex;
    align-items: center;
    justify-content: center; */
  }

  textarea {
    border: 0.02rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    padding: 0.5rem;
  }

  li {
    list-style-type: none;
  }

  Button {
    margin: 1rem;
    width: 30vw;
  }

  .main-label {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.1rem;
  }
`;

function EditProfilePage() {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState();
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState();
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState();

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      let response = await userService.getOneUser(id);
      setUsername(response.data.username);
      setSkills(response.data.skills);
      setLinks(response.data.links);
      setEmail(response.data.email);
      setImage(response.data.image);
      setFullName(response.data.fullName);
      setDescription(response.data.description);
      setLocation(response.data.location);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

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

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSkills = (e) => {
    if (skills.includes(e.target.value)) return;
    let skillsCopy = [...skills, e.target.value];
    setSkills(skillsCopy);
  };

  const handleLinks = (link, value) => {
    let linksCopy = { ...links };

    linksCopy[link.toLowerCase()] = value;
    //console.log(linksCopy);
    setLinks(linksCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      username,
      email,
      links,
      skills,
      image,
      fullName,
      description,
      location,
    };

    userService
      .updateCurrentUser(body, id)
      .then(() => {
        setEmail("");
        setUsername("");
        setImage("");
        setFullName("");
        setDescription("");
        setLocation("");
        setSkills([]);
        setLinks();
        navigate(`/profile/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <EditMyPicture handleImage={handleImage} />
        <label className="main-label" htmlFor="fullName">
          Full Name*
        </label>
        <input
          type="text"
          value={fullName}
          name="FullName"
          onChange={handleFullName}
        />
        <label className="main-label" htmlFor="username">
          Username*
        </label>
        <input
          type="text"
          placeholder="John Doe"
          value={username}
          name="username"
          onChange={handleUsername}
        />
        <label className="main-label" htmlFor="email">
          Email address*
        </label>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          name="email"
          onChange={handleEmail}
        />
        <label className="main-label" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          value={description}
          name="description"
          onChange={handleDescription}
        />
        <label className="main-label" htmlFor="location">
          Location*
        </label>
        <input
          type="text"
          value={location}
          name="location"
          onChange={handleLocation}
        />
        <EditMySkills handleSkills={handleSkills} />
        <label className="main-label" htmlFor="links">
          Links*
        </label>
        {linksArr.map((link) => {
          return (
            <EditMyLinks handleLinks={handleLinks} link={link} key={link} />
          );
        })}
        <Button type="submit">Concluído</Button>
      </Form>
      <p>Already have an account?</p>
      <Link to="/login"> Login</Link>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default EditProfilePage;
