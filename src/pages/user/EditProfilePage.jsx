import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import userService from "../../service/User.services";
import styled from "styled-components";
import Button from "../../components/Button";
import axios from "axios";

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
  height: 100vh;
  //width: 100vw;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.lightPink};

  .form {
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

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    input,
    textarea {
      background-color: ${({ theme }) => theme.colors.weirdWhite};
    }

    .form {
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

    .done-button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3rem;
    }
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
  const [userData, setUserData] = useState(null);

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    const getToken = localStorage.getItem("authToken");
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("image", e.target.files[0]);
    console.log(image);

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setImage(response.data.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const getProfile = async () => {
    try {
      let response = await userService.getOneUser(id);
      setUsername(response.data.user.username);
      setSkills(response.data.user.skills);
      setLinks(response.data.user.links);
      setEmail(response.data.user.email);
      setImage(response.data.user.image);
      setFullName(response.data.user.fullName);
      setDescription(response.data.user.description);
      setLocation(response.data.user.location);
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
        <div className="form">
          <div className="aside-left">
            <label className="main-label" htmlFor="image">
              Imagem
            </label>
            <input type="file" onChange={handleFileUpload} />
            {/*   <EditMyPicture handleImage={handleImage} /> */}
            <label className="main-label" htmlFor="fullName">
              Nome Completo
            </label>
            <input
              type="text"
              value={fullName}
              name="FullName"
              onChange={handleFullName}
            />
            <label className="main-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={username}
              name="username"
              onChange={handleUsername}
            />
            <label className="main-label" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              name="email"
              onChange={handleEmail}
            />
            <label className="main-label" htmlFor="description">
              Descrição
            </label>
            <input
              type="text"
              value={description}
              name="description"
              onChange={handleDescription}
            />
            <label className="main-label" htmlFor="location">
              Localização
            </label>
            <input
              type="text"
              value={location}
              name="location"
              onChange={handleLocation}
            />
          </div>
          <div className="aside-right">
            <EditMySkills skills={skills} handleSkills={handleSkills} />
            <div className="links">
              <label className="main-label" htmlFor="links">
                Links
              </label>
              {linksArr.map((link) => {
                return (
                  <EditMyLinks
                    handleLinks={handleLinks}
                    link={link}
                    key={link}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="done-button">
          <Button type="submit">Concluído</Button>
        </div>
      </Form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default EditProfilePage;
