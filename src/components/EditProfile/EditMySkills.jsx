import React from "react";

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
    <div>
      <label htmlFor="skills">Skills*</label>
      <ul>
        {skillsArr.map((skill) => {
          return (
            <li key={skill}>
              <input
                onChange={handleSkills}
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
    </div>
  );
}

export default EditMySkills;
