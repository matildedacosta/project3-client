import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import eventServices from "../../service/Events.services";
import styled from "styled-components";

//Components
import EventSearchBar from "../../components/eventsSearch/EventSearchBar";
import EventSearchCard from "../../components/eventsSearch/EventSearchCard";
import EventSearchFilter from "../../components/eventsSearch/EventSearchFilter";

const SearchEvents = styled.section`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    <SearchEvents>
      <EventSearchBar handleSearch={handleSearch} search={search} />
      <EventSearchFilter />
      <EventSearchCard events={events} />
    </SearchEvents>
  );
}

export default SearchEventsPage;
