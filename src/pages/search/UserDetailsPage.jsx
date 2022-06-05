import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import userService from "../../service/User.services";
import followService from "../../service/Follow.services";
import styled from "styled-components";

//Components
import UserInfo from "../../components/Profile/UserInfo";
import Skills from "../../components/Profile/Skills";
import Links from "../../components/Profile/Links";
import Comments from "../../components/Profile/Comments";
import Button from "../../components/Button";

const UserProfile = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function UserDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState({});
  const [receivedComments, setComments] = useState([]);

  const addFollow = async () => {
    try {
      let follow = await followService.addFollow(id);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFollow = async () => {
    try {
      let unfollow = await followService.removeFollow(id);
    } catch (err) {
      console.log(err);
    }
  };

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

  return (
    <UserProfile>
      <UserInfo user={user} />
      <Button onClick={addFollow}>Follow</Button>
      <Skills skills={skills} />
      <Links links={links} />
      <Comments receivedComments={receivedComments} />
    </UserProfile>
  );
}

export default UserDetailsPage;
