import axios from "axios";
import useAuthStore from "@/app/src/stores/authStore";

const authotrizedApi = axios.create({
  baseURL: "http://localhost:8000",
});

authotrizedApi.interceptors.request.use(
  (config) => {
    const { jwtAccessToken } = useAuthStore.getState();
    if (jwtAccessToken) {
      config.headers["Authorization"] = `Bearer ${jwtAccessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authotrizedApi.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default authotrizedApi;
