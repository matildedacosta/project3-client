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
`;

function EventDetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const { user } = useContext(AuthContext);

  const getEvent = async () => {
    try {
      let response = await eventServices.getOneEvent(id);
      console.log(response.data);
      setEvent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <Event>
      <img src={event.image} alt="event-img" />
      <h4>{event.name}</h4>
      {/* <h5>Responsável: @{event.creator.username}</h5> */}
      <h5>Localização: {event.location}</h5>
      <h6>{event.date}</h6>
      <h5>Tipo de evento: {event.typeOfEvent}</h5>
      {/* <p>{event.description}</p> */}
      <Link to={`/profile/${user._id}/my-events`}>
        <Button>Eu vou</Button>
      </Link>
    </Event>
  );
}

export default EventDetailsPage;
