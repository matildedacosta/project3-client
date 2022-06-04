import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import eventServices from "../../service/Events.services";
import { AuthContext } from "../../context/auth.context";

function EventDetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState("");
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  const getEvent = async () => {
    try {
      let response = await eventServices.getOneEvent(id);
      console.log(response.data);
      setEvent(response.data);
      /*     setSkills(response.data.user.skills);
      setLinks(response.data.user.links);
      setComments(response.data.user.receivedComments); */
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div>
      <div className="event-pic">
        <img src={event.image} alt="event-img" />
        <h4>{event.name}</h4>
        <h5>Localização: {event.location}</h5>
        <h5>Tipo de evento: {event.typeOfEvent}</h5>
        <p>{event.description}</p>
        <Link to={`/profile/${user._id}/my-events`}>
          <button>Eu vou</button>
        </Link>
      </div>
    </div>
  );
}

export default EventDetailsPage;
