import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import styled from "styled-components";

const FilterDiv = styled.div`
  width: 70vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //justify-content: center;
  border: 0.01rem solid ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.weirdWhite};

  input {
    margin-top: 0.5rem;
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
    margin-top: 0.5rem;
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
    font-size: 0.8rem;
    list-style-type: none;
    text-align: center;
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.weirdWhite};
    border: 0.01rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
  }

  @media (min-width: 700px) {
    margin: 3rem;
    width: 20vw;
    height: 32vh;
    gap: 10px;

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

const typeEvent = ["Campo de escrita", "Workshop", "Jam", "Concerto", "Outro"];

function EventSearchFilter() {
  return (
    <FilterDiv className="aside-filter">
      <h6>Filtros</h6>
      <label htmlFor="location">Localidade:</label>
      <input type="text" name="location" />
      <label htmlFor="skills">Tipo:</label>
      <ul>
        {typeEvent.map((type) => {
          return <li key={type}>{type}</li>;
        })}
      </ul>
    </FilterDiv>
  );
}

export default EventSearchFilter;
