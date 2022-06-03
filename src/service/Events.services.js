import axios from "axios";

class EventService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });

    this.storedToken = localStorage.getItem("authToken");

    this.headers = { Authorization: `Bearer ${this.storedToken}` };
  }

  getAllEvents = () => {
    return this.api.get("/api/events", this.headers);
  };

  getOneEvent = (eventId) => {
    return this.api.get(`/api/events/${eventId}`, this.headers);
  };

  createEvent = async (requestBody) => {
    return this.api.post("/api/events/create", requestBody, this.headers);
  };

  updateCurrentEvent = async (requestBody, eventId) => {
    return this.api.put(`/api/events/${eventId}`, requestBody, this.headers);
  };

  deleteCurrentEvent = async (eventId) => {
    return await this.api.delete(`/api/events/${eventId}`, this.headers);
  };

  attendEvent = async (eventId) => {
    return await this.api.post(`/api/events/${eventId}/attend`, this.headers);
  };

  seeMyEvents = async (userId) => {
    return await this.api.get(`/api/user-events/${userId}`, this.headers);
  };
}

// Create one instance of the service
const eventService = new EventService();

export default eventService;
