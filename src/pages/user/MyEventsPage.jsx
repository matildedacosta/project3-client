import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import eventServices from "../../service/Events.services";
import { AuthContext } from "../../context/auth.context";
import EventInfo from "../../components/eventsSearch/EventInfo";
import styled from "styled-components";
import Button from "../../components/Button";
import deleteButton from "../../assets/pictures/bloquear.png";

const Event = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;

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
    max-height: 20vh;
    border-radius: 5px;
  }

  .my-event-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 1rem;
  }

  form button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
  }

  form button img {
    height: 4vh;
  }

  @media (min-width: 700px) {
    .all-events {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .event-card {
      margin: 5rem;
    }

    /*  .go-back-button {
      align-self: flex-end;
    } */
  }
`;

function MyEventsPage() {
  const { id } = useParams();
  const [myEvents, setMyEvents] = useState([]);
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  const getMyEvents = async () => {
    try {
      let response = await eventServices.seeMyEvents(id);
      //console.log(response.data);
      setMyEvents(response.data.myEvents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyEvents();
  }, []);

  const removeEvent = async (id) => {
    try {
      eventServices.removeMyEvent(id);
      getMyEvents();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    removeEvent(id);
    getMyEvents();
  };

  return (
    <Event>
      <div className="all-events">
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
                <form
                  onSubmit={(e) => {
                    handleSubmit(e, event._id);
                  }}
                >
                  <button type="submit">
                    <img src={deleteButton} alt="delete-button" />
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
      {myEvents.length <= 0 && (
        <>
          <p>Sem eventos.</p>
          {/* <Link to={`profile/${user._id}`}>
            <Button>Voltar</Button>
          </Link> */}
        </>
      )}

      <div className="go-back-button">
        <Link to={`profile/${user._id}`}>
          <Button>Voltar</Button>
        </Link>
      </div>
    </Event>
  );
}

export default MyEventsPage;
