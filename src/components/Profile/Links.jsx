import React from "react";
import styled from "styled-components";

const UserSkills = styled.section`
  margin: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

function Links(props) {
  const { links } = props;

  return (
    <UserSkills className="user-links">
      <a href={links.spotify} target="_blank">
        <img src="" alt="spotify-icon" />
      </a>
      <a href={links.instagram} target="_blank">
        <img src="" alt="spotify-icon" />
      </a>
      <a href={links.facebook} target="_blank">
        <img src="" alt="spotify-icon" />
      </a>
      <a href={links.youtube} target="_blank">
        <img src="" alt="spotify-icon" />
      </a>
      <a href={links.soundcloud} target="_blank">
        <img src="" alt="soundcloud-icon" />
      </a>
      <a href={links.portfolio} target="_blank">
        <img src="" alt="spotify-icon" />
      </a>
    </UserSkills>
  );
}

export default Links;
