import axios from "axios";
import domain from "./domain";

// const accessToken =
//   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlLnYuZXplb253dWthQGdtYWlsLmNvbSIsInNjb3BlcyI6IlBST1BFUlRZX09XTkVSIiwiaWF0IjoxNjQ4NTY2ODE4LCJleHAiOjE2NTM3NTA4MTh9.bkhNPQHrPrwHsU19jWobe-UNHZCxSgF6LdTSm7kjSNo";
// const token = localStorage.getItem("token");

// Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlLnYuZXplb253dWthQGdtYWlsLmNvbSIsInNjb3BlcyI6IlBST1BFUlRZX09XTkVSIiwiaWF0IjoxNjQ4NTY2ODE4LCJleHAiOjE2NTM3NTA4MTh9.bkhNPQHrPrwHsU19jWobe-UNHZCxSgF6LdTSm7kjSNo

const checkAuthTokens = () => {
  let authTokens = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  return authTokens;
};


const authFetch = axios.create({
  baseURL: `${domain}`,
  // baseURL: "http://admin.pmanager.online/",
  headers: {
    Authorization: checkAuthTokens(),
    "Content-Type": "application/json",
  },
});

authFetch.interceptors.request.use((config) => {
  if (checkAuthTokens()) {
    config.headers.Authorization = checkAuthTokens();
  }
  return config;
});

authFetch.interceptors.response.use(
	(res) => {
		return res;
	},
	async (error) => {
		return Promise.reject(error);
	}
);

// authFetch.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     const auth = token ? `Bearer ${token}` : "";
//     config.headers.common["Authorization"] = auth;
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
//   authFetch.interceptors.response.use(
//     (response) => {
//       response.headers.common[authorization] = `Bearer ${accessToken}`;
//       return request;
//     },
//     (error) => {
//       return Promise.reqject(error);
//     }
// );
export default authFetch;
