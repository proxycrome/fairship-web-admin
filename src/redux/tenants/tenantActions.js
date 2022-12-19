import authFetch from "../../authFetch";
import {
  GET_ALL_TENANT,
  GET_SINGLE_TENANT,
  DELETE_SINGLE_TENANT,
  GET_TENANT_PROPERTY,
  GET_ALL_TENANT_SUCCESS,
  GET_ALL_TENANT_ERROR,
  GET_SINGLE_TENANT_SUCCESS,
  GET_SINGLE_TENANT_ERROR,
  GET_TENANT_PROPERTY_SUCCESS,
  GET_TENANT_PROPERTY_ERROR,
  DELETE_SINGLE_TENANT_SUCCESS,
  DELETE_SINGLE_TENANT_ERROR,
} from "./tenantType";
import toast from "react-hot-toast";

//get tenantList
export const getTenantList = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_TENANT, payload: true });
    authFetch
      .get("/auth/users/all?role=TENANT&limit=100")
      .then((response) => {
        //   console.log(response, "tenantRes");
        const data = response.data;
        dispatch({
          type: GET_ALL_TENANT_SUCCESS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        //   console.log(data, '4444')
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_ALL_TENANT_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
};
export function getTenantDetailsByEmail(email) {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_TENANT, payload: true });
    authFetch
      .get(`/auth/${email}/users`)
      .then((response) => {
        //  console.log(response, "res234");
        const data = response.data;
        dispatch({
          type: GET_SINGLE_TENANT_SUCCESS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        //  console.log(data, '4444')
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_SINGLE_TENANT_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
}

export function getTenantProperty(id) {
  return (dispatch) => {
    dispatch({ type: GET_TENANT_PROPERTY, payload: true });
    authFetch
      .get(`/properties?limit=1000000000`)
      .then((response) => {
        const data = response.data;
        const result = data?.entities?.filter(item => item?.rentedBy?.id === id);
        console.log({result});
        dispatch({
          type: GET_TENANT_PROPERTY_SUCCESS,
          payload: result,
        });
        console.log(data, "4444");
        
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: GET_TENANT_PROPERTY_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
}

export function deleteSingleTenant(userId) {
  return (dispatch) => {
    dispatch({ type: DELETE_SINGLE_TENANT, payload: true });
    authFetch
      .delete(`/auth/admin/users/${userId}`)
      .then((response) => {
        // console.log(response, 'sunkanmi')
        const data = response.data;
        // console.log(data, '123')
        dispatch({
          type: DELETE_SINGLE_TENANT_SUCCESS,
          payload: data,
        });
        dispatch(getTenantList());
        toast.success(data.message, {position: "top-right"})
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: DELETE_SINGLE_TENANT_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, {position: "top-right"})
      });
  };
}
