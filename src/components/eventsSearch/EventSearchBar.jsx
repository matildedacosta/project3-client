import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const SearchDiv = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  input {
    height: 2vh;
    width: 35vw;
    border: 0.01rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.weirdWhite};
  }

  Button {
    padding: 0.5rem;
  }

  @media (min-width: 700px) {
    font-size: 1rem;
    font-weight: 550;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      height: 2.5vh;
    }

    Button {
      width: 5vw;
      height: 3vh;
      font-size: 0.8rem;
    }
  }
`;

function EventSearchBar(props) {
  const { search, handleSearch } = props;

  return (
    <SearchDiv>
      <label htmlFor="search">Participa</label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
      <Button className="button">
        <Link to="/create-event">Criar evento</Link>
      </Button>
    </SearchDiv>
  );
}

export default EventSearchBar;
