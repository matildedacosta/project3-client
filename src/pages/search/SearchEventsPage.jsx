import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import eventServices from "../../service/Events.services";
import styled from "styled-components";

function SearchEventsPage() {
  const [events, setEvents] = useState([]);
  const [searchEvents, setSearchEvents] = useState([...events]);
  const [search, setSearch] = useState("");

  const getAllEvents = async () => {
    const allEvents = await eventServices.getAllEvents();
    //console.log(allEvents.data);
    setEvents(allEvents.data);
  };

  getAllEvents();

  const handleSearch = (e) => {
    //this handles the input state
    setSearch(e.target.value);

    //this passes the state up to movieList
    searchFilter(e.target.value);
  };

  const searchFilter = (search) => {
    let filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchEvents(filteredEvents);
  };

  return (
    <div>
      <label htmlFor="search">Participa</label>
      <input type="text" name="search" value={search} onChange={handleSearch} />
      {events.map((event) => {
        return (
          <div className="event-card" key={event._id}>
            <img src={event.image} alt="event-img" />
            <h5> {event.name}</h5>
            <Link to={`/event-details/${event._id}`}>
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

export default SearchEventsPage;
