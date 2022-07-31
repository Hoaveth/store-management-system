import axios from "axios";

class ApiService {
  constructor() {
    axios.defaults.baseURL = "/";

    let service = axios.create();

    //Request Interceptor
    service.interceptors.request.use((config) => {
      config.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;
      config.headers.common["Content-Type"] = "application/json";
      return config;
    });

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
