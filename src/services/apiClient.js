import axios from "axios";

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      //baseURL: process.env.REACT_APP_BACKEND_URI,
      baseURL: "http://localhost:8080",
      withCredentials: true
    });
  }

  login(body) {
    return this.apiClient.post("/login", body);
  }

  logout() {
    return this.apiClient.get("/logout");
  }

  // signup(body) {
  //   return this.apiClient.post("/signup", body);
  // }

  getUsers() {
    return this.apiClient.get("/users");
  }

  // getUser(userId) {
  //   return this.apiClient.get(`/users/${userId}`);
  // }

  // editUser(userId, body) {
  //   return this.apiClient.post(`/users/${userId}`, body);
  // }  
}

const apiClient = new ApiClient();
export default apiClient;
