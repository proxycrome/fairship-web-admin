import authFetch from "../../authFetch";
import {
  GET_SINGLE_PROPERTYOWER,
  GET_ALL_PROPERTYOWERS,
  DELETE_SINGLE_PROPERTYOWER,
  GET_ALL_PROPERTYOWERS_SUCCESS,
  GET_ALL_PROPERTYOWERS_ERROR,
  GET_SINGLE_PROPERTYOWER_SUCCESS,
  GET_SINGLE_PROPERTYOWER_ERROR,
  DELETE_SINGLE_PROPERTYOWER_SUCCESS,
  DELETE_SINGLE_PROPERTYOWER_ERROR,
} from "./propertyOwerType";

import toast from "react-hot-toast";

//get property owers List api call
export const getPropertyOwersList = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_PROPERTYOWERS, payload: true });
    authFetch
      .get("/auth/users/all?role=PROPERTY_OWNER")
      .then((response) => {
        // console.log(response, "propertyRes");
        const data = response.data;
        dispatch({
          type: GET_ALL_PROPERTYOWERS_SUCCESS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        // console.log(data, 'propertyData')
      })
      .catch((error) => {
        // console.log(error?.response?.data?.message);
        dispatch({
          type: GET_ALL_PROPERTYOWERS_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
};

// get a single property ower
export function singleOwerDetailsByEmail(email) {
  return (dispatch) => {
    dispatch({type: GET_SINGLE_PROPERTYOWER, payload: true})
    authFetch
      .get(`/auth/${email}/users`)
      .then((response) => {
        //  console.log(response, "res234");
        const data = response.data;
        dispatch({
          type: GET_SINGLE_PROPERTYOWER_SUCCESS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        //  console.log(data, '4444')
      })
      .catch((error) => {
        // console.log(error?.response?.data?.message);
        dispatch({
          type: GET_SINGLE_PROPERTYOWER_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
}

export function deleteSingleOwner(userId) {
  return (dispatch) => {
    dispatch({type: DELETE_SINGLE_PROPERTYOWER, payload: true})
    authFetch
      .delete(`/auth/admin/users/${userId}`)
      .then((response) => {
        // console.log(response, 'sunkanmi')
        const data = response.data;
        // console.log(data, '123')
        dispatch({
          type: DELETE_SINGLE_PROPERTYOWER_SUCCESS,
          payload: data,
        });
        dispatch(getPropertyOwersList());
        toast.success(data.message, {position: "top-right"})
      })
      .catch((error) => {
        // console.log(error?.response?.data?.message);
        dispatch({
          type: DELETE_SINGLE_PROPERTYOWER_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, {position: "top-right"})
      });
  };
}
