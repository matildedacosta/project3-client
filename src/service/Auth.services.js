import axios from "axios";
import { request } from "express";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
    // Automatically set JWT token in the headers for every request

    this.storedToken = localStorage.getItem("authToken");

    this.headers = { headers: { Authorization: `Bearer ${this.storedToken}` } };
  }

  login = (requestBody) => {
    return this.api.post(`/auth/login`, requestBody);
  };

  signup = (requestBody) => {
    return this.api.post(`/auth/signup`, requestBody);
  };

  verify = (id) => {
    return this.api.put(`/api/users/${id}`, this.headers);
  };
}

// Create one instance of the service
const authService = new AuthService();

export default authService;
