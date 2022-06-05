import styled from "styled-components";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchDiv = styled.div`
  font-size: 0.8rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  input {
    height: 2vh;
    width: 35vw;
    border: 0.01rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.weirdWhite};
  }
`;

function SearchBar(props) {
  return (
    <SearchDiv className="search-bar">
      <label htmlFor="search">Encontra a tua tribo: </label>
      <input
        type="text"
        name="search"
        value={props.search}
        onChange={props.handleSearch}
      />
    </SearchDiv>
  );
}

export default SearchBar;
