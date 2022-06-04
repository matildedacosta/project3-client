import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import userService from "../../service/User.services";
import styled from "styled-components";

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

  getAllUsers();

  return (
    <div>
      <label htmlFor="search">Conecta-te</label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
      {users.map((user) => {
        return (
          <div className="user-card" key={user._id}>
            <img src={user.image} alt="user-img" />
            <h5> {user.username}</h5>
            <Link to={`/user-details/${user._id}`}>
              <button>Mais</button>
            </Link>
          </div>
        );
      })}
      <aside className="aside-filter">
        <h6>Filtros</h6>
        <label htmlFor="location">Localidade:</label>
        <input type="text" name="location" />
        <label htmlFor="skills">Tipo:</label>
      </aside>
    </div>
  );
}

export default SearchUsersPage;
