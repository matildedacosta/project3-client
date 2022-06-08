import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import userService from "../../service/User.services";
import styled from "styled-components";

import { AuthContext } from "../../context/auth.context";

//Components
import UserInfo from "../../components/Profile/UserInfo";
import Skills from "../../components/Profile/Skills";
import Links from "../../components/Profile/Links";
import Comments from "../../components/Profile/Comments";
import UserButtons from "../../components/Profile/UserButtons";
import Button from "../../components/Button";
import DeleteButton from "../../components/DeleteButton";

const UserProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 100vh;
  padding-bottom: 3rem;

  /* Button {
    margin-bottom: 0.5rem;
  } */

  .edit-profile Button {
    //margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.lightPink};
  }

  .delete-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .delete-button Button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 2vh;
  }

  @media (min-width: 700px) {
    .delete-button Button {
      height: 4vh;
      width: 10vw;
      font-size: 1rem;
    }

    .edit-profile Button {
      height: 4vh;
      width: 5vw;
      font-size: 1rem;
    }
  }
`;

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState({});
  const [receivedComments, setComments] = useState([]);

  const { logoutUser } = useContext(AuthContext);

  const getUser = async () => {
    try {
      let response = await userService.getOneUser(id);
      console.log(response.data);
      setUser(response.data.user);
      setSkills(response.data.user.skills);
      setLinks(response.data.user.links);
      setComments(response.data.user.receivedComments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = (id) => {
    userService.deleteCurrentUser(id);
    logoutUser();
  };

  return (
    <UserProfile>
      <UserInfo user={user} />
      {/*  <div className="edit-profile">
        <Link to={`/edit-profile/${user._id}`}>
          <Button>Editar</Button>
        </Link>
      </div> */}
      <Skills skills={skills} />
      <Links links={links} />

      <UserButtons user={user} />
      <form
        onSubmit={() => {
          deleteUser(user._id);
        }}
      >
        <Comments receivedComments={receivedComments} />
        <div className="delete-button">
          <DeleteButton type="submit">Apagar conta</DeleteButton>
        </div>
      </form>
    </UserProfile>
  );
}

export default Profile;
