import axios from "axios";
const api = "https://www.omdbapi.com/?apikey=4c8be5cb&";

export const fetchMovie = (title) => {
  try {
    const response = axios.get(api + "t=" + title);
    return response;
  } catch (error) {
    return error.message;
  }
};
