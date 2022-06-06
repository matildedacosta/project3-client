import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import eventService from "../../service/Events.services";
import styled from "styled-components";

import Button from "../../components/Button";

const typeEvent = ["Campo de escrita", "Workshop", "Jam", "Concerto", "Outro"];

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  Button {
    margin: 1rem;
    width: 30vw;
  }
`;

function CreateEvent() {
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [typeOfEvent, setTypeOfEvent] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState();

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { user, storeToken, autenticateUser } = useContext(AuthContext);

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleTypeOfEvent = (e) => {
    setTypeOfEvent(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      typeOfEvent,
      location,
      date,
    };

    eventService
      .createEvent(body)
      .then(() => {
        navigate(`/profile/${user._id}/events`);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="image">Imagem</label>
      <input type="text" value={image} name="image" onChange={handleImage} />

      <label htmlFor="name">Nome do evento*</label>
      <input type="text" value={name} name="name" onChange={handleName} />

      <label for="typeEvent">Tipo de evento:</label>
      <select onChange={handleTypeOfEvent} name="typeEvent" id="typeEvent">
        {typeEvent.map((event) => {
          return (
            <option key={event} value={event}>
              {event}
            </option>
          );
        })}
      </select>

      <label htmlFor="location">Localização*</label>
      <input
        type="text"
        value={location}
        name="location"
        onChange={handleLocation}
      />

      <label htmlFor="date">Data*</label>
      <input type="date" value={date} name="date" onChange={handleDate} />

      <Button type="submit">Criar</Button>
    </Form>
  );
}

export default CreateEvent;
