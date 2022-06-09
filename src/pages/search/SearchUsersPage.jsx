import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import userService from "../../service/User.services";
import styled from "styled-components";

//Components
import SearchBar from "../../components/search/SearchBar";
import SearchFilter from "../../components/search/SearchFilter";
import SearchCard from "../../components/search/SearchCard";

const SearchUsers = styled.section`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  overflow-y: scroll;

  @media (min-width: 700px) {
    //display: flex;
    .users-filter-and-card {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 80vw;
    }
  }
`;

function SearchUsersPage(props) {
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState([...users]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    //this handles the input state
    setSearch(e.target.value);

    //this passes the state up to movieList
    searchFilter(e.target.value);
  };

  const searchFilter = (search) => {
    let filteredUsers = users.filter((user) =>
      user.username.toLowerCase().includes(search.toLowerCase())
    );
    setSearchUsers(filteredUsers);
  };

  const getAllUsers = async () => {
    const allUsers = await userService.getAllUsers();
    /* console.log(allUsers.data); */
    setUsers(allUsers.data.users);
    /* console.log(allUsers.data.users); */
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {users.length > 0 && (
        <SearchUsers>
          <SearchBar handleSearch={handleSearch} search={search} />

          <div className="users-filter-and-card">
            <SearchFilter className="filter-div" />

            <SearchCard users={users} />
          </div>
        </SearchUsers>
      )}
    </>
  );
}

export default SearchUsersPage;
