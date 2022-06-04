import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import eventServices from "../../service/Events.services";
import { AuthContext } from "../../context/auth.context";

function MyEventsPage() {
  const { id } = useParams();
  const [myEvents, setMyEvents] = useState([]);
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  const getMyEvents = async () => {
    try {
      let response = await eventServices.seeMyEvents(id);
      console.log(response.data);
      setMyEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyEvents();
  }, []);

  return (
    <div>
      {myEvents.map((event) => {
        return (
          <div key={event._id} className="event-card">
            <img src={event.image} alt="event-img" />
            <h4>{event.name}</h4>
            <h5>Responsável: @{event.creator.username}</h5>
            <h6>{event.location}</h6>
            <h6>{event.date}</h6>
            <Link to={`/event-details/${event._id}`}>
              <button>Mais</button>
            </Link>
            <button>x</button>
          </div>
        );
      })}
    </div>
  );
}

export default MyEventsPage;
