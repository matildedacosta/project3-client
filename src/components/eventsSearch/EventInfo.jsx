import React from "react";
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

function EventInfo(props) {
  const { event } = props;
  return (
    <Event className="event-pic">
      <img src={event.image} alt="event-img" />
      <h4>{event.name}</h4>
      <h5>Localização: {event.location}</h5>
      <h5>Tipo de evento: {event.typeOfEvent}</h5>
      <p>{event.description}</p>
    </Event>
  );
}

export default EventInfo;
