import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://sync-fit-server.vercel.app",
});
