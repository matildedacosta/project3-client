import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

function UserButtons(props) {
  const { user } = props;

  return (
    <section className="profile-buttons">
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
    </section>
  );
}

export default UserButtons;
