import axios from "axios";

class EventService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    this.storedToken = localStorage.getItem("authToken");

    this.headers = { headers: { Authorization: `Bearer ${this.storedToken}` } };
  }

  getAllEvents = () => {
    return this.api.get("/api/events", this.headers);
  };

  getOneEvent = (eventId) => {
    return this.api.get(`/api/events/${eventId}`, this.headers);
  };

  createEvent = async (body) => {
    return this.api.post("/api/events/create", body, this.headers);
  };

  updateCurrentEvent = async (requestBody, eventId) => {
    return this.api.put(`/api/events/${eventId}`, requestBody, this.headers);
  };

  removeMyEvent = async (eventId) => {
    return this.api.delete(`/my-events/${eventId}`, this.headers);
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
