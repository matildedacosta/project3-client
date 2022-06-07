import React, { useState } from "react";
import styled from "styled-components";

let linksArr = [
  "Spotify",
  "SoundCloud",
  "Youtube",
  "Instagram",
  "Facebook",
  "Portfolio",
];

const Links = styled.div`
  display: flex;
  gap: 5px;

  label {
    color: ${({ theme }) => theme.colors.darkGrey};
    width: 25vw;
  }
`;

function EditMyLinks(props) {
  const { handleLinks, link } = props;
  const [oneLink, setOneLink] = useState("");

  const handleLink = (e, link) => {
    setOneLink(e.target.value);
    handleLinks(link, e.target.value);
  };

  return (
    <Links>
      <>
        <label htmlFor={link}>{link}</label>
        <input
          onChange={(e) => handleLink(e, link)}
          type="text"
          id={link}
          name={link}
          value={oneLink}
        />
      </>
    </Links>
  );
}

export default EditMyLinks;
