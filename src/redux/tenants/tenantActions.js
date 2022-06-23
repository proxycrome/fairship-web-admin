import authFetch from "../../authFetch";
import { GET_ALL_TENANT, GET_SINGLE_TENANT, DELETE_SINGLE_TENANT, GET_TENANT_PROPERTY } from "./tenantType"

//get tenantList
export const getTenantList = ()=>{
    return(dispatch)=>{
        authFetch
          .get("/auth/users/all?role=TENANT&limit=100")
          .then((response) => {
            //   console.log(response, "tenantRes");
            const data = response.data;
            dispatch({
              type: GET_ALL_TENANT,
              payload: data,
            });
            // localStorage.getItem("token", data.token);
            //   console.log(data, '4444')
          })
          .catch((error) => {
            console.log(error.message);
          });
    }
}
export function getTenantDetailsByEmail(email) {
  return (dispatch) => {
    authFetch
      .get(`/auth/${email}/users`)
      .then((response) => {
        //  console.log(response, "res234");
        const data = response.data;
        dispatch({
          type: GET_SINGLE_TENANT,
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

export function getTenantProperty(id) {
  return (dispatch) => {
    authFetch
      .get(`/properties`)
      .then((response) => {
        const data = response.data;
        dispatch({
          type: GET_TENANT_PROPERTY,
          payload: data,
        });
         console.log(data, '4444')
         const result = data.filter(findProperty);

        function findProperty(rentedBy) {
          return rentedBy === id;
          console.log(result)
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export function deleteSingleTenant(userId){
  return  (dispatch) => {
    // console.log(userId)
    authFetch
          .delete(`/auth/admin/users/${userId}`)
          .then((response) => {
            // console.log(response, 'sunkanmi')
            const data = response.data;
            // console.log(data, '123')
            dispatch({
              type: DELETE_SINGLE_TENANT,
              payload: data,
            });
          })
          .catch((error) => {
            console.log(error)
            console.log(error.response.data.message);
          });
  }
}
