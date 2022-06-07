import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const Buttons = styled.section`
  //padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;

  .follows {
    display: flex;
    gap: 5px;
  }

  .follows Button {
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  /*  .edit-profile Button {
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.lightPink};
  } */

  .events Button {
    color: ${({ theme }) => theme.colors.yellow};
    background-color: ${({ theme }) => theme.colors.mint};
  }
`;

function UserButtons(props) {
  const { user } = props;

  return (
    <Buttons className="profile-buttons">
      {/* <div className="edit-profile">
        <Link to={`/edit-profile/${user._id}`}>
          <Button>Editar</Button>
        </Link>
      </div> */}
      <div className="events">
        <Link to={`/profile/${user._id}/events`}>
          <Button>Eventos</Button>
        </Link>
      </div>
      <div className="follows">
        <Link to={`/profile/${user._id}/followers`}>
          <Button>Seguidores</Button>
        </Link>
        <Link to={`/profile/${user._id}/following`}>
          <Button>A seguir</Button>
        </Link>
      </div>
    </Buttons>
  );
}

export default UserButtons;
