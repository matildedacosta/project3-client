import styled from "styled-components";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

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
`;

function SearchFilter() {
  return (
    <FilterDiv className="div-filter">
      <h6>Filtros</h6>
      <div className="location">
        <label htmlFor="location">Localidade:</label>
        <input type="text" name="location" />
      </div>
      <label htmlFor="skills">Tipo:</label>
    </FilterDiv>
  );
}

export default SearchFilter;
