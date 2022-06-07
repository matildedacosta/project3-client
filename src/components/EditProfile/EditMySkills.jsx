import React from "react";
import styled from "styled-components";

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
  }

  input {
    max-width: 10vw;
  }

  label {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  .skills-label {
    color: ${({ theme }) => theme.colors.red};
  }
`;

let skillsArr = [
  "Artista",
  "Cantor(a)",
  "Compositor(a)",
  "Guitarrista",
  "Baixista",
  "Pianista",
  "Instrumento de orquestra",
  "Produtor(a)",
  "Engenheiro/a som",
  "Engenheiro/a mistura",
  "Engenheiro/a masterização",
  "Outro",
];

function EditMySkills(props) {
  const { handleSkills } = props;

  return (
    <Skills>
      <label className="skills-label main-label" htmlFor="skills">
        Skills*
      </label>
      <ul>
        {skillsArr.map((skill) => {
          return (
            <li key={skill}>
              <input
                onClick={handleSkills}
                type="checkbox"
                id={skill}
                name={skill}
                value={skill}
              />
              <label htmlFor={skill}>{skill}</label>
            </li>
          );
        })}
      </ul>
    </Skills>
  );
}

export default EditMySkills;
