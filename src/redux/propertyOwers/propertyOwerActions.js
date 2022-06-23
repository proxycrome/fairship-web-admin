import authFetch from "../../authFetch";
import { GET_SINGLE_PROPERTYOWER, GET_ALL_PROPERTYOWERS, DELETE_SINGLE_PROPERTYOWER } from "./propertyOwerType";

//get property owers List api call
export const getPropertyOwersList = () => {
  return (dispatch) => {
    authFetch
      .get("/auth/users/all?role=PROPERTY_OWNER")
      .then((response) => {
          // console.log(response, "propertyRes");
        const data = response.data;
        dispatch({
          type: GET_ALL_PROPERTYOWERS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
          // console.log(data, 'propertyData')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};


// get a single property ower 
export function singleOwerDetailsByEmail(email) {
     return (dispatch) => {
       authFetch
         .get(`/auth/${email}/users`)
         .then((response) => {
          //  console.log(response, "res234");
           const data = response.data;
           dispatch({
             type: GET_SINGLE_PROPERTYOWER,
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

export function deleteSingleOwner(userId){
  return  (dispatch) => {
    // console.log(userId)
    authFetch
          .delete(`/auth/admin/users/${userId}`)
          .then((response) => {
            // console.log(response, 'sunkanmi')
            const data = response.data;
            // console.log(data, '123')
            dispatch({
              type: DELETE_SINGLE_PROPERTYOWER,
              payload: data,
            });
          })
          .catch((error) => {
            console.log(error)
            console.log(error.response.data.message);
          });
  }
}
