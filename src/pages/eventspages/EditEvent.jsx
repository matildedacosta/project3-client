import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import eventServices from "../../service/Events.services";
import styled from "styled-components";
import axios from "axios";

import Button from "../../components/Button";
import DeleteButton from "../../components/DeleteButton";

const typeEvent = ["Campo de escrita", "Workshop", "Jam", "Concerto", "Outro"];

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 90vh;

  label {
    padding: 0.2rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.red};
  }

  input,
  select {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-bottom: 1rem;
    width: 20vh;
    border: 0.02rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    padding: 0.2rem;
  }

  textarea {
    border: 0.02rem solid ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    padding: 0.5rem;
  }

  Button {
    margin: 1rem;
    width: 30vw;
  }

  .delete-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .delete-button Button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 2vh;
  }
`;

function EditEvent() {
  const { id } = useParams();
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [typeOfEvent, setTypeOfEvent] = useState("Campo de escrita");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState();

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { user, storeToken, authenticateUser } = useContext(AuthContext);

  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    const getToken = localStorage.getItem("authToken");
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("image", e.target.files[0]);
    console.log(image);

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setImage(response.data.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  /*  const handleImage = (e) => {
    setImage(e.target.value);
  }; */

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

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const getEvent = async () => {
    try {
      let response = await eventServices.getOneEvent(id);
      setImage(response.data.image);
      setDescription(response.data.description);
      setName(response.data.name);
      setTypeOfEvent(response.data.typeOfEvent);
      setLocation(response.data.location);
      setDate(response.data.date);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      image,
      name,
      typeOfEvent,
      location,
      description,
      date,
    };

    eventServices
      .updateCurrentEvent(body, id)
      .then(() => {
        setImage("");
        setDescription("");
        setName("");
        setTypeOfEvent("Campo de escrita");
        setLocation("");
        setDate();
        navigate(`/profile/${user._id}/events`);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  const deleteEvent = (id) => {
    //console.log("________________K");
    eventServices
      .deleteCurrentEvent(id)
      .then((response) => {
        console.log(response);
        navigate(`/profile/${user._id}/events`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSubmit} enctype="multipart/form-data">
      <label htmlFor="image">Imagem</label>
      <input type="file" onChange={handleFileUpload} />

      <label htmlFor="name">Nome do evento*</label>
      <input type="text" value={name} name="name" onChange={handleName} />

      <label for="typeEvent">Tipo de evento*</label>
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

      <label htmlFor="description">Descrição*</label>
      <textarea
        value={description}
        onChange={handleDescription}
        name="description"
        id="description"
        cols="30"
        rows="10"
      ></textarea>

      <Button type="submit">Concluído</Button>

      <div className="delete-button">
        <DeleteButton onClick={() => deleteEvent(id)}>Apagar</DeleteButton>
      </div>
    </Form>
  );
}

export default EditEvent;
