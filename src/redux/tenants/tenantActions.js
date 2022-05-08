import authFetch from "../../authFetch";
import { GET_ALL_TENANT, GET_SINGLE_TENANT } from "./tenantType"

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
            localStorage.setItem("token", data.token);
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
        localStorage.getItem("token", data.token);
        //  console.log(data, '4444')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}