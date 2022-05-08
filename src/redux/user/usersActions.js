// import axios from "axios";
// import  baseURL  from "../../services"
import authFetch from "../../authFetch";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
 LOGIN_START,
} from "./usersType";

export const loginStart = ()=>{
    return {
      type: LOGIN_START,
    };
}
export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    // loading: true,
    payload: token,
  };
};

export const loginFailture = (errors) => {
  return {
    type: LOGIN_FAILURE,
    payload: errors,
  };
};

//request for user
 export const loginUser = (email, password, platformType) => {
   return (dispatch) => {
     dispatch(loginStart());
     authFetch
       .post(`/login`, {
         email,
         password,
         platformType,
       })
       .then((response) => {
        //  console.log(response, "responsUser");
         const data = response.data;
         dispatch(loginSuccess(data));
        localStorage.setItem("token", data.token);
        //  console.log(data, "data22");
       })
       .catch((error) => {
         console.log(error.message);
       });
   };
 };