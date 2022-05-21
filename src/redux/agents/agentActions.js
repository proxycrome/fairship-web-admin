// import axios from "asxios";
// import baseURL from "../../services";
import authFetch from "../../authFetch";
import { GET_ALL_AGENT, GET_SINGLE_AGENT, DELETE_SINGLE_AGENT } from "./agentType";


// export const getAgent = (token) => {
//   return {
//     type: GET_ALL_AGENT,
//     payload: token,
//   };
// };

//get all Agent list
export const getAllAgent =()=>{
        return (dispatch) =>{
            authFetch
              .get("/auth/users/all?role=AGENT&limit=100")
              .then((response) => {
                // console.log(response, 'res234')
                const data = response.data;
                dispatch({
                  type: GET_ALL_AGENT,
                  payload: data,
                });
                // localStorage.getItem("token", data.token);
                // console.log(data, '4444')
              })
              .catch((error) => {
                console.log(error.message);
              });
    }
}

//  get a single Agent 
export function getAgentDetailByEmail(email) {
     return (dispatch) => {
       authFetch
         .get(`/auth/${email}/users`)
         .then((response) => {
          //  console.log(response, "res234");
           const data = response.data;
           dispatch({
             type: GET_SINGLE_AGENT,
             payload: data,
           });
            // localStorage.getItem("token", data.token);
          //  console.log(data, '4444')
         })
         .catch((error) => {
           console.log(error.message);
         });
     };
}


export function deleteSingleAgent(userId){
  return  (dispatch) => {
    console.log(userId)
    authFetch
          .delete(`/auth/admin/users/${userId}`)
          .then((response) => {
            // console.log(response, 'sunkanmi')
            const data = response.data;
            console.log(data, '123')
            dispatch({
              type: DELETE_SINGLE_AGENT,
              payload: data,
            });
          })
          .catch((error) => {
            console.log(error)
            console.log(error.response.data.message);
          });
  }
}
