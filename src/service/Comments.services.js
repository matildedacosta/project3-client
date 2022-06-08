import axios from "axios";

class CommentService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    this.storedToken = localStorage.getItem("authToken");

    this.headers = { headers: { Authorization: `Bearer ${this.storedToken}` } };
  }

  addComment = async (userId, body) => {
    return await this.api.post(
      `/api/profile/${userId}/add-comment`,
      body,
      this.headers
    );
  };

  removeComment = async (commentId) => {
    return this.api.delete(`/api/comments/${commentId}`, this.headers);
  };
}

// Create one instance of the service
const commentService = new CommentService();

export default commentService;
