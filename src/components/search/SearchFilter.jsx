import styled from "styled-components";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const skills = [
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

const FilterDiv = styled.div`
  width: 70vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 0.01rem solid ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.weirdWhite};

  input {
    height: 2vh;
    width: 35vw;
    border: 0.01rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.weirdWhite};
  }

  h6 {
    font-size: 0.8rem;
  }

  .location {
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  label {
    font-size: 0.7rem;
  }

  ul {
    margin: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }

  li {
    padding: 0.2rem;
    font-size: 0.7rem;
    list-style-type: none;
    text-align: center;
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.weirdWhite};
    border: 0.01rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
  }

  @media (min-width: 700px) {
    align-items: flex-start;
    justify-content: flex-start;
    width: 20vw;
    height: 45vh;
    gap: 20px;
    margin-top: 3rem;

    h6 {
      font-size: 1rem;
    }

    input {
      width: 10vw;
    }

    label {
      font-size: 1rem;
    }

    li {
      padding: 0.5rem;
      font-size: 0.8rem;
    }
  }
`;

function SearchFilter() {
  return (
    <FilterDiv className="div-filter">
      <h6>Filtros</h6>
      <div className="location">
        <label htmlFor="location">Localidade:</label>
        <input type="text" name="location" />
      </div>
      <label htmlFor="skills">Área:</label>
      <ul>
        {skills.map((type) => {
          return <li key={type}>{type}</li>;
        })}
      </ul>
    </FilterDiv>
  );
}

export default SearchFilter;
