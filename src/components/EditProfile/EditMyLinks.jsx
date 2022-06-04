import React from "react";

let linksArr = [
  "Spotify",
  "SoundCloud",
  "Youtube",
  "Instagram",
  "Facebook",
  "Portfolio",
];

function EditMyLinks(props) {
  const { handleLinks } = props;
  return (
    <div>
      <label htmlFor="links">Links*</label>

      <ul>
        {linksArr.map((link) => {
          return (
            <div key={link}>
              <label htmlFor={link}>{link}</label>
              <input onChange={handleLinks} type="text" id={link} name={link} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default EditMyLinks;
