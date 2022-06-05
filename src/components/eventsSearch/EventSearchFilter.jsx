import React from "react";
import styled from "styled-components";

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

function EventSearchFilter() {
  return (
    <FilterDiv className="aside-filter">
      <h6>Filtros</h6>
      <label htmlFor="location">Localidade:</label>
      <input type="text" name="location" />
      <label htmlFor="skills">Tipo:</label>
    </FilterDiv>
  );
}

export default EventSearchFilter;
