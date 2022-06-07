import React from "react";
import styled from "styled-components";

const UserSkills = styled.section`
  //margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    font-size: 0.8rem;
    margin: 0.5rem;
    font-weight: 400;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  li {
    padding: 0.2rem;
    font-size: 0.8rem;
    list-style-type: none;
    text-align: center;
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.weirdWhite};
    border: 0.01rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
  }
`;

function Skills(props) {
  const { skills } = props;
  return (
    <UserSkills className="skills">
      <h5>As minhas ligações com a música:</h5>
      <ul>
        {skills.length > 0 &&
          skills.map((skill) => {
            return (
              <div key={skill}>
                <li>{skill}</li>
              </div>
            );
          })}
      </ul>
    </UserSkills>
  );
}

export default Skills;
