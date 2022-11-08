import axios from "axios";

// const accessToken =
//   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlLnYuZXplb253dWthQGdtYWlsLmNvbSIsInNjb3BlcyI6IlBST1BFUlRZX09XTkVSIiwiaWF0IjoxNjQ4NTY2ODE4LCJleHAiOjE2NTM3NTA4MTh9.bkhNPQHrPrwHsU19jWobe-UNHZCxSgF6LdTSm7kjSNo";
// const token = localStorage.getItem("token");

// Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlLnYuZXplb253dWthQGdtYWlsLmNvbSIsInNjb3BlcyI6IlBST1BFUlRZX09XTkVSIiwiaWF0IjoxNjQ4NTY2ODE4LCJleHAiOjE2NTM3NTA4MTh9.bkhNPQHrPrwHsU19jWobe-UNHZCxSgF6LdTSm7kjSNo

let headers = {}
  const authFetch = axios.create({
    baseURL: "http://134.209.64.28:8084",
    // baseURL: "http://admin.pmanager.online/",
    headers
  }); 

  authFetch.interceptors.request.use(
    (config) => {
      // console.log(config, "got response");
      const token = localStorage.getItem("token");
      if(token){
      config.headers.authorization = `Bearer ${token}`;
      }
      console.log(token, 'token234')
      // config.headers.authorization = `Bearer ${accessToken}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
)

  // authFetch.interceptors.request.use(
  //   (config) => {
  //     console.log(config, "got response");
  //     const token = localStorage.getItem("token");
  //     const auth = token ? `Bearer ${token}` : "";
  //     config.headers.common["Authorization"] = auth;
  //     return config;
  //   },
  //   (error) => Promise.reject(error)
  // );
//   authFetch.interceptors.response.use(
//     (response) => {
//         console.log("got response")
//       response.headers.common[authorization] = `Bearer ${accessToken}`;
//       return request;
//     },
//     (error) => {
//       return Promise.reqject(error);
//     }
  // );
export default authFetch;