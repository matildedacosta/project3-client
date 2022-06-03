import axios from "axios";

class SearchService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });

    this.storedToken = localStorage.getItem("authToken");

    this.headers = { Authorization: `Bearer ${this.storedToken}` };
  }

  filterEventResults = (requestBody) => {
    return this.api.post(`/api/events/filter`, requestBody, this.headers);
  };

  seeEventFilteredResults = () => {
    return this.api.get(`/api/events/filter`, this.headers);
  };

  filterUserResults = (requestBody) => {
    return this.api.post(`/api/users/filter`, requestBody, this.headers);
  };

  seeUserFilteredResults = () => {
    return this.api.get(`/api/users/filter`, this.headers);
  };
}

// Create one instance of the service
const searchService = new SearchService();

export default searchService;
