// import axios from "axios";
// import  baseURL  from "../../services"

import authFetch from "../../authFetch";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
 LOGIN_START,
} from "./usersType";

// export const REDIRECT = "REDIRECT";

// // action creators
// export const redirect = link => {
//   console.log("=== REDIRECT ACTION DISPATCHED ===");
//   return { type: REDIRECT, payload: link };
// };

export const loginStart = ()=>{
    return {
      type: LOGIN_START,
    };
}
export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    isAuthenticated: true,
    loading: true,
    payload: data,
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
        //  let navigate = useNavigate();
        //  console.log(response, "responsUser");
         const data = response.data;
         console.log(data)
        //  console.log(response)
         dispatch(loginSuccess(data));
        localStorage.setItem("token", data.token);
        // window.location.href = '/home'
        if(data?.role?.name === 'ADMIN'){
          window.location.href = '/home'
        }

        // if(response){
        //   navigate("/home");
        //   console.log('user unauthorized')
        // }
        //  console.log(data, "data22");
       })
       .catch((error) => {
        // if(error.status === 401){
        //   // navigate("/home");
        //   console.log('user unauthorized')
        // }
         console.log(error.message);
         alert('incorrect Login details')
       });
   };
 };