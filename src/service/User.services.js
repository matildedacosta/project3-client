import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
    // Automatically set JWT token in the headers for every request

    this.storedToken = localStorage.getItem("authToken");

    this.headers = { headers: { Authorization: `Bearer ${this.storedToken}` } };
  }

  getAllUsers = () => {
    return this.api.get(`/api/users`, this.headers);
  };

  getOneUser = (id) => {
    return this.api.get(`/api/users/${id}`, this.headers);
  };

  updateCurrentUser = (requestBody, id) => {
    return this.api.put(`/api/users/${id}`, requestBody, this.headers);
  };

  deleteCurrentUser = (id) => {
    return this.api.delete(`/api/users/${id}`, this.headers);
  };
}

// Create one instance of the service
const userService = new UserService();

export default userService;
