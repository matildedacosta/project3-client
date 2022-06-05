import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import eventServices from "../../service/Events.services";
import { AuthContext } from "../../context/auth.context";
import Button from "../../components/Button";
import EventInfo from "../../components/eventsSearch/EventInfo";

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
      <EventInfo event={event} />
      <Link to={`/profile/${user._id}/my-events`}>
        <Button>Eu vou</Button>
      </Link>
    </div>
  );
}

export default EventDetailsPage;
