import axios from "axios";

class FollowService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });

    this.storedToken = localStorage.getItem("authToken");

    this.headers = { Authorization: `Bearer ${this.storedToken}` };
  }

  addFollow = (userId) => {
    return this.api.post(`/api/add-follow/${userId}`, this.headers);
  };

  removeFollow = (userId) => {
    return this.api.delete(`/api/remove-follow/${userId}`, this.headers);
  };

  seeFollowers = (userId) => {
    return this.api.get(`/api/followers/${userId}`, this.headers);
  };

  seeFollowing = (userId) => {
    return this.api.get(`/api/following/${userId}`, this.headers);
  };
}

// Create one instance of the service
const followService = new FollowService();

export default followService;
