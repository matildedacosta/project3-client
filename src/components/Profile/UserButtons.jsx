import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const Buttons = styled.section`
  padding-bottom: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

function UserButtons(props) {
  const { user } = props;

  return (
    <Buttons className="profile-buttons">
      <Link to={`/profile/${user._id}/events`}>
        <Button>My Events</Button>
      </Link>
      <Link to={`/profile/${user._id}/followers`}>
        <Button>Followers</Button>
      </Link>
      <Link to={`/profile/${user._id}/following`}>
        <Button>Following</Button>
      </Link>
      <Link to={`/edit-profile/${user._id}`}>
        <Button>Editar</Button>
      </Link>
    </Buttons>
  );
}

export default UserButtons;
