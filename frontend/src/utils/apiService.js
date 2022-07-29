import axios from "axios";
import { toast } from "react-toastify";

let store;

export const injectStore = (_store) => {
  store = _store;
};

class ApiService {
  constructor() {
    axios.defaults.baseURL = "/";

    let service = axios.create();

    //Request Interceptor
    service.interceptors.request.use(
      // try {
      //   console.log("store auth", store().getState().auth.user_auth.token);

      //   // config.headers.Authorization = token ? `Bearer ${token}` : "";
      //   // //Change depending on your authorization token variable
      //   // config.headers.common["Authorization"] = "Bearer " + token;
      //   // config.headers.common["Content-Type"] = "application/json";
      // } catch {
      //   console.log("Unauthorized");
      // }
      // console.log("config", config);
      // // Do something before request is sent
      // return config;

      (config) => {
        let token;

        config.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
          "access_token"
        )}`;
        config.headers.common["Content-Type"] = "application/json";
        return config;
      }
    );

    this.service = service;
  }

  get(path) {
    return this.service.get(path);
  }

  put(path, payload) {
    return this.service
      .request({
        method: "PUT",
        url: path,
        responseType: "json",
        data: payload,
      })
      .then((response) => {
        return response;
      });
  }

  post(path, payload) {
    return this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
      })
      .then((response) => {
        return response;
      });
  }

  delete(path, payload) {
    return this.service
      .request({
        method: "DELETE",
        url: path,
        responseType: "json",
        data: payload,
      })
      .then((response) => {
        return response;
      });
  }
}

export default new ApiService();
