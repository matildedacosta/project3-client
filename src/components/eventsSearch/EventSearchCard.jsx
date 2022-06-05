import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../Button";

const Card = styled.section`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h6 {
    font-size: 0.6rem;
  }
  .event-card {
    gap: 5px;
    background-color: ${({ theme }) => theme.colors.weirdWhite};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    height: 30vh;
    width: 40vw;
    border: 0.01rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
  }

  .event-card img {
    height: 15vh;
  }
`;

function EventSearchCard(props) {
  const { events } = props;

  return (
    <Card>
      {events.map((event) => {
        return (
          <div className="event-card" key={event._id}>
            <img src={event.image} alt="event-img" />
            <h5> {event.name}</h5>
            <h6>{event.location}</h6>
            <Link to={`/event-details/${event._id}`}>
              <Button>Mais</Button>
            </Link>
          </div>
        );
      })}
    </Card>
  );
}

export default EventSearchCard;
