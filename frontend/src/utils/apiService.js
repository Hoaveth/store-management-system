import axios from "axios";

let store;

export const injectStore = (_store) => {
  store = _store;
};

class ApiService {
  constructor() {
    axios.defaults.baseURL = "/";

    let service = axios.create();

    //Request Interceptor
    service.interceptors.request.use(function (config) {
      try {
        let token;
        if (store().getState().auth.user_auth.token === undefined) {
          token = "";
        } else {
          token = store().getState().auth.user_auth.token;
        }

        //Change depending on your authorization token variable
        config.headers.common["Authorization"] = "Bearer " + token;
        config.headers.common["Content-Type"] = "application/json";
      } catch {
        console.log("Unauthorized");
      }

      // Do something before request is sent
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
