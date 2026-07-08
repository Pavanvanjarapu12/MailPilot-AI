import axios from "axios";

// Backend Base URL
const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
});

// Signup API
export const signupUser = (userData) => {
  return API.post("/signup", userData);
};

// Login API
export const loginUser = (userData) => {
  return API.post("/login", userData);
};