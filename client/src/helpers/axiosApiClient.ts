import axios from "axios";

export const axiosApiClient = axios.create({
  baseURL: process.env.WEATHER_API_URL,
});
