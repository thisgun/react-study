import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://thisgun-test-1.herokuapp.com"
      : "",
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
    /*
    const originalRequest = error.config;

    console.log('ori', originalRequest.url );

    if (
      error.response.status === 401 &&
      originalRequest.url ===
        "/api/user/token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = JSON.parse(localStorage.getItem("persist:root")).refresh;

      return axiosInstance
        .post("/api/user/token/refresh/", {
          refresh: refreshToken,
        })
        .then((response) => {
          localStorage.setItem("persist:root", JSON.stringify(response.data));

          axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${
            JSON.parse(localStorage.getItem("persist:root")).access
          }`;

          originalRequest.headers["Authorization"] = `Bearer ${
            JSON.parse(localStorage.getItem("persist:root")).access
          }`;

          return axiosInstance(originalRequest);
        });
    }
    return Promise.reject(error);
    */
  }
);

export default axiosInstance;
