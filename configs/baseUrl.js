import axios from "axios";
import { AsyncStorage } from "react-native";

const baseUrl = "https://topups-sandbox.reloadly.com";

// const token = Cookies.get("token");

const token = async () => {
     const tokenStr = await  AsyncStorage.getItem("token")
     return tokenStr
}

axios.interceptors.request.use((request) => {
  request.headers["type"] = "web";
  return request;
});

if (token()) {
  axios.interceptors.request.use((request) => {
    // request.headers["Authorization"] = `bearer ${token()}`;
    return request;
  });
}

export default baseUrl;