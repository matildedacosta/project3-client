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
  /*  justify-content: center;
  align-items: center; */
  gap: 5px;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.lightPink};

  .sign-up-form {
    border: 0.05rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.weirdWhite};
    padding: 1rem;
    width: 80vw;
  }

  .aside-left {
    display: flex;
    flex-direction: column;
  }

  label {
    padding: 0.2rem;
    font-size: 1rem;
  }

  li {
    list-style-type: none;
  }

  p {
    text-align: center;
    font-size: 0.8rem;
    padding-top: 1rem;
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

  Button {
    width: 30vw;
    height: 3vh;
  }

  textarea {
    border: 0.02rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .sign-up-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

  .main-label {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.1rem;
  }

  .have-account {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    input,
    textarea {
      background-color: ${({ theme }) => theme.colors.weirdWhite};
    }

    .sign-up-form {
      background-color: transparent;
      border: none;
      display: flex;
      justify-content: center;
      gap: 10rem;
      margin: 3rem 0;
    }

    .aside-left {
      border: 0.05rem solid ${({ theme }) => theme.colors.red};
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.weirdWhite};
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .aside-right {
      border: 0.05rem solid ${({ theme }) => theme.colors.red};
      background-color: ${({ theme }) => theme.colors.weirdWhite};
      border-radius: 5px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
    }

    .skills input {
      width: 1vw;
    }

    Button {
      height: 4vh;
      width: 5vw;
      font-size: 1rem;
    }

    .have-account Button {
      height: 3vh;
      width: 3vw;
      font-size: 0.8rem;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.red};
    }
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
        <section className="sign-up-form">
          <div className="aside-left">
            <label className="main-label" htmlFor="fullName">
              Full Name*
            </label>
            <input
              placeholder="Jorge Palma"
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
              placeholder="Jorge_Palma"
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
            <label className="main-label" htmlFor="password">
              Password*
            </label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={handlePassword}
            />
            <label className="main-label" htmlFor="description">
              Descrição
            </label>
            <textarea
              placeholder="A minha canção favorita é..."
              type="text"
              value={description}
              name="description"
              onChange={handleDescription}
              cols="30"
              rows="10"
            ></textarea>
            <label className="main-label" htmlFor="location">
              Localização*
            </label>
            <input
              placeholder="Lisboa, Portugal"
              type="text"
              value={location}
              name="location"
              onChange={handleLocation}
            />
          </div>
          <div className="aside-right">
            <div className="skills">
              <EditMySkills handleSkills={handleSkills} />
            </div>
            <label className="main-label" htmlFor="links">
              Links*
            </label>
            {linksArr.map((link) => {
              return (
                <EditMyLinks handleLinks={handleLinks} link={link} key={link} />
              );
            })}
          </div>
        </section>

        <div className="sign-up-button">
          <Button type="submit">Sign Up</Button>
        </div>
        <div className="have-account">
          <p>Already have an account?</p>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </Form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </main>
  );
}

export default Signuppage;
