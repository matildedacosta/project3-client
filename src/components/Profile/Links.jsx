import React from "react";
import styled from "styled-components";

//Icons
import facebook from "../../assets/pictures/facebook.png";
import instagram from "../../assets/pictures/instagram.png";
import youtube from "../../assets/pictures/youtube.png";
import soundcloud from "../../assets/pictures/soundcloud.png";
import link from "../../assets/pictures/link.png";
import spotify from "../../assets/pictures/spotify.png";

const UserSkills = styled.section`
  margin: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  //height: 20vh;

  .link-icons {
    height: 3vh;
  }
`;

function Links(props) {
  const { links } = props;
  //console.log(links);

  return (
    <UserSkills className="user-links">
      <a href={links.spotify} target="_blank">
        <img className="link-icons" src={spotify} alt="spotify-icon" />
      </a>
      <a href={links.instagram} target="_blank">
        <img className="link-icons" src={instagram} alt="instagram-icon" />
      </a>
      <a href={links.facebook} target="_blank">
        <img className="link-icons" src={facebook} alt="facebook-icon" />
      </a>
      <a href={links.youtube} target="_blank">
        <img className="link-icons" src={youtube} alt="youtube-icon" />
      </a>
      <a href={links.soundcloud} target="_blank">
        <img className="link-icons" src={soundcloud} alt="soundcloud-icon" />
      </a>
      <a href={links.portfolio} target="_blank">
        <img className="link-icons" src={link} alt="link-icon" />
      </a>
    </UserSkills>
  );
}

export default Links;
