import Restservice from "./wrapper/restService";

const API_URL = process.env.API_URL || "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return Restservice.get(API_URL + "all");
};

const getUserDetails = () => {
  return Restservice.get(API_URL + "user");
};

export default {
  getPublicContent,
  getUserDetails
};r