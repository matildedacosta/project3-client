import axios from "axios";

class FollowService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    this.storedToken = localStorage.getItem("authToken");

    this.headers = { headers: { Authorization: `Bearer ${this.storedToken}` } };
  }

  addFollow = (id) => {
    return this.api.post(`/api/add-follow/${id}`, {}, this.headers);
  };

  removeFollow = (id) => {
    return this.api.put(`/api/remove-follow/${id}`, {}, this.headers);
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
