/* eslint-disable quotes */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.football-data.org/v2",
  headers: { "X-Auth-Token": process.env.REACT_APP_TOKEN },
});

const client = async (url) => {
  const response = await axiosInstance.get(url);
  return response.data;
};

export default client;
