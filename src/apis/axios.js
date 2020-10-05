import axios from "axios";

export default axios.create({
  baseURL: "https://petstore.swagger.io/v2",
  headers: {
    api_key: "special-key",
    "Content-Type": "application/json",
  },
});
