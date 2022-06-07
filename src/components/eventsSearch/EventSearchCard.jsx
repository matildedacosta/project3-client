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
  padding: 1rem;

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
    max-height: 15vh;
    width: 30vw;
    border-radius: 5px;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    h5 {
      margin: 1rem 0 0.5rem 0;
      font-size: 1.4rem;
    }

    h6 {
      margin-bottom: 1rem;
      font-size: 1rem;
      font-weight: 400;
    }

    .event-card {
      width: 20vw;
      height: 40vh;
    }

    .all-events-cards {
      height: 10vh;
      overflow-y: scroll;
    }

    .event-card img {
      max-height: 15vh;
      width: 10vw;
    }

    Button {
      width: 5vw;
      height: 3vh;
      font-size: 0.8rem;
    }
  }
`;

function EventSearchCard(props) {
  const { events } = props;

  return (
    <Card className="all-events-cards">
      {events.map((event) => {
        return (
          <div className="event-card" key={event._id}>
            <img src={event.image} alt="event-img" />
            <h5> {event.name}</h5>
            <h6>{event.location}</h6>
            <Link to={`/event-details/${event._id}`}>
              <Button>Ver mais</Button>
            </Link>
          </div>
        );
      })}
    </Card>
  );
}

export default EventSearchCard;
