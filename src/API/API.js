 import axios from "axios";

 const API = axios.create({ baseURL: "http://localhost:8090" });


//auth
export const signUp = (formData) => API.post("/api/auth/authenticate", formData);
//Admin
//export const UsersList = (token) => API.get("/api/responsable/listUsers", {headers: {Authorization: `Bearer ${token}`,},});
//export const signIn = (formData) => API.post("/api/auth/register", formData);
//export const profile = (formData) =>API.get("/api/auth/CurrentAuthent", formData);
