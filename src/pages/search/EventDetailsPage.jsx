import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import eventServices from "../../service/Events.services";
import { AuthContext } from "../../context/auth.context";
import Button from "../../components/Button";
import EventInfo from "../../components/eventsSearch/EventInfo";
import styled from "styled-components";

const Event = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  height: 40vh;

  h4 {
    font-size: 1.2rem;
    padding-top: 1rem;
    color: ${({ theme }) => theme.colors.red};
  }

  /*  h1 {
    font-size: 1.2rem;
    padding: 0.5rem 0 0.1rem;
  } */

  h5 {
    font-size: 0.8rem;
    font-weight: 300;
  }

  p {
    font-size: 0.8rem;
  }

  img {
    height: 20vh;
    border-radius: 5px;
  }

  .creator-buttons,
  .event-buttons {
    display: flex;
    gap: 5px;
    margin: 1rem;
  }

  .creator-buttons Button {
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.lightPink};
  }

  .eu-vou-button Button {
    color: ${({ theme }) => theme.colors.red};
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

function EventDetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const getEvent = async () => {
    try {
      let response = await eventServices.getOneEvent(id);
      //console.log(response.data);
      setEvent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  const attendEvent = () => {
    eventServices
      .attendEvent(id)
      .then(() => {
        navigate(`/profile/${user._id}/events`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Event>
      <img src={event.image} alt="event-img" />
      <h4>{event.name}</h4>
      {/* <h5>Responsável: @{event.creator.username}</h5> */}
      <h5>
        <b>Localização:</b> {event.location}
      </h5>
      <h6>{event.date}</h6>
      <h5>
        <b>Tipo de evento:</b> {event.typeOfEvent}
      </h5>
      <p>{event.description}</p>

      <div className="event-buttons">
        <div className="eu-vou-button">
          <Button onClick={attendEvent}>Eu vou</Button>
        </div>
        <Link to={`/search-events`}>
          <Button>Voltar</Button>
        </Link>
      </div>

      <div className="creator-buttons">
        <Link to={`/edit-event/${id}`}>
          <Button>Editar</Button>
        </Link>
      </div>
    </Event>
  );
}

export default EventDetailsPage;
