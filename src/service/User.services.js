import axios from "axios";

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
    // Automatically set JWT token in the headers for every request

    this.storedToken = localStorage.getItem("authToken");

    this.headers = { Authorization: `Bearer ${this.storedToken}` };
  }

  getAllUsers = () => {
    return this.api.get(`/api/users`);
  };

  getOneUser = (id) => {
    return this.api.get(`/api/users/${id}`);
  };

  updateCurrentUser = (requestBody, userId) => {
    return this.api.put(`/api/users/${userId}`, requestBody);
  };

  deleteCurrentUser = (userId) => {
    return this.api.delete(`/api/users/${userId}`);
  };
}

// Create one instance of the service
const userService = new UserService();

export default userService;
