import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import userService from "../../service/User.services";
import followService from "../../service/Follow.services";
import commentService from "../../service/Comments.services";
import styled from "styled-components";
import { AuthContext } from "../../context/auth.context";

//Components
import UserInfo from "../../components/Profile/UserInfo";
import Skills from "../../components/Profile/Skills";
import Links from "../../components/Profile/Links";
import Comments from "../../components/Profile/Comments";
import Button from "../../components/Button";

const UserProfile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .follow-button Button {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

function UserDetailsPage() {
  const { id } = useParams();
  const [userDetails, setUser] = useState({});
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState({});
  const [receivedComments, setComments] = useState([]);
  const [newComments, setNewComments] = useState("");
  const [follow, setFollow] = useState(false);
  const [loggedUser, setLoggedUser] = useState();

  //console.log(links);

  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const addFollow = async (id) => {
    try {
      await followService.addFollow(id);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFollow = async (id) => {
    try {
      let unfollow = await followService.removeFollow(id);
    } catch (err) {
      console.log(err);
    }
  };

  const followToggle = async (id) => {
    let response = await userService.getOneUser(user._id);
    console.log(response.data.user.following, id);
    if (response.data.user.following.some((user) => user._id == id)) {
      setFollow(true);
      removeFollow(id);
      console.log("following");
    } else {
      setFollow(false);
      addFollow(id);
      console.log("not following");
    }
  };

  const getUser = async () => {
    try {
      let response = await userService.getOneUser(id);
      //console.log(response.data);
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

  const handleComments = (e) => {
    setNewComments(e.target.value);
  };

  const submitComment = (e) => {
    e.preventDefault();
    const body = { newComments };

    try {
      commentService.addComment(id, body);
      setNewComments("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserProfile>
      <UserInfo user={userDetails} />
      {/*  <div className="follow-button">
        <Button
          onClick={() => {
            addFollow(id);
          }}
        >
          Follow
        </Button>
      </div> */}
      <div className="follow-button">
        <button
          onClick={() => {
            followToggle(id);
          }}
        >
          toggle follow
        </button>
      </div>
      <Skills skills={skills} />
      <Links links={links} />
      <Comments
        userDetails={userDetails}
        newComments={newComments}
        submitComment={submitComment}
        receivedComments={receivedComments}
        handleComments={handleComments}
      />
    </UserProfile>
  );
}

export default UserDetailsPage;
