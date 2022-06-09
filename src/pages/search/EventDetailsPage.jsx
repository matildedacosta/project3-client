import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import eventServices from "../../service/Events.services";
import { AuthContext } from "../../context/auth.context";
import Button from "../../components/Button";
import EventInfo from "../../components/eventsSearch/EventInfo";
import styled from "styled-components";

const Event = styled.section`
  //margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 90vh;
  padding: 1rem;

  h4 {
    font-size: 1.5rem;
    padding-top: 1rem;
    color: ${({ theme }) => theme.colors.red};
  }

  /*  h1 {
    font-size: 1.2rem;
    padding: 0.5rem 0 0.1rem;
  } */

  h5 {
    font-size: 1rem;
    font-weight: 300;
  }

  h6 {
    font-size: 0.8rem;
  }

  p {
    font-size: 0.9rem;
  }

  img {
    height: 20vh;
    border-radius: 5px;
  }

  .event-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
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

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  Button {
    font-size: 0.8rem;
  }

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    //height: 40vh;
    //width: 90vw;

    .event-section {
      display: flex;
      height: 50vh;
      gap: 4rem;
    }

    img {
      width: 30vw;
      height: auto;
    }

    .event-img {
      height: 20vh;
      justify-self: flex-start;
    }

    /*    .event-info {
      margin-left: 4rem;
    } */

    .event {
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
      height: 20vh;
    }

    .event-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    h4 {
      font-size: 2rem;
    }

    h5 {
      font-size: 1rem;
    }

    Button {
      width: 5vw;
      height: 3vh;
      font-size: 0.9rem;
    }

    .buttons {
      padding-top: 4rem;
    }
  }
`;

function EventDetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const { user } = useContext(AuthContext);
  const [creator, setCreator] = useState();

  const navigate = useNavigate();

  const getEvent = async () => {
    try {
      let response = await eventServices.getOneEvent(id);
      console.log(response.data);
      setEvent(response.data);
      setCreator(response.data.creator);
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
      <section className="event-section">
        <div className="event-img">
          <img src={event.image} alt="event-img" />
        </div>

        <div className="event">
          <div className="event-info">
            <h4>{event.name}</h4>
            {/* <h5>Responsável: @{creator.username}</h5> */}
            <h5>
              <b>Localização:</b> {event.location}
            </h5>
            <h6>{event.date}</h6>
            <h5>
              <b>Tipo de evento:</b> {event.typeOfEvent}
            </h5>
            <p>{event.description}</p>
          </div>

          <div className="buttons">
            <div className="event-buttons">
              <div className="eu-vou-button">
                <Button onClick={attendEvent}>Eu vou</Button>
              </div>
              <Link to={"/search-events"}>
                <Button>Voltar</Button>
              </Link>
            </div>

            <div className="creator-buttons">
              <Link to={`/edit-event/${id}`}>
                <Button>Editar</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Event>
  );
}

export default EventDetailsPage;
