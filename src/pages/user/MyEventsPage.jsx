import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import eventServices from "../../service/Events.services";
import { AuthContext } from "../../context/auth.context";
import EventInfo from "../../components/eventsSearch/EventInfo";
import styled from "styled-components";
import Button from "../../components/Button";

const Event = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;

  h4 {
    font-size: 0.8rem;
    padding-top: 1rem;
    color: ${({ theme }) => theme.colors.red};
  }

  h1 {
    font-size: 1.2rem;
    padding: 0.5rem 0 0.1rem;
  }

  h5 {
    font-size: 0.9rem;
    font-weight: 300;
  }

  p {
    font-size: 0.9rem;
  }

  img {
    height: 20vh;
    border-radius: 5px;
  }

  .my-event-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

function MyEventsPage() {
  const { id } = useParams();
  const [myEvents, setMyEvents] = useState([]);
  /* const { isLoggedIn, user, logoutUser } = useContext(AuthContext); */

  const getMyEvents = async () => {
    try {
      let response = await eventServices.seeMyEvents(id);
      console.log(response.data);
      setMyEvents(response.data.myEvents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyEvents();
  }, []);

  const removeEvent = async () => {
    try {
      /* let remove = await */ eventServices.removeMyEvent();
      //setMyEvents();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    removeEvent(id);
  };

  return (
    <Event>
      {myEvents.map((event) => {
        return (
          <div key={event._id} className="event-card">
            <img src={event.image} alt="event-img" />
            <h4>{event.name}</h4>
            <h5>Responsável: @{event.creator.username}</h5>
            <h6>{event.location}</h6>
            <h6>{event.date}</h6>
            <div className="my-event-buttons">
              <Link to={`/event-details/${event._id}`}>
                <Button>Ver mais</Button>
              </Link>
              <form onSubmit={handleSubmit}>
                <Button type="submit">x</Button>
              </form>
            </div>
          </div>
        );
      })}
      {myEvents.length <= 0 && <p>No events yet.</p>}
    </Event>
  );
}

export default MyEventsPage;
