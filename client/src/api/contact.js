import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getContacts = (userId) =>
  API.get(`/contacts?user=${userId}`);

export const addContact = (data) =>
  API.post("/contacts", data);

export const deleteContact = (id) =>
  API.delete(`/contacts/${id}`);

export const uploadCSV = (formData) =>
  API.post("/contacts/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });