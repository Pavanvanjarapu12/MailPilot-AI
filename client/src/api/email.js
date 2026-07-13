import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const generateEmail = (data) =>
  API.post("/email/generate", data);