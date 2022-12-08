import {
  GET_ALL_ADMIN,
  OPEN_ADMIN_DIALOG,
  CLOSE_ADMIN_DIALOG,
  ADD_NEW_ADMIN,
  GET_ALL_ADMIN_SUCCESS,
  GET_ALL_ADMIN_ERROR,
  ADD_NEW_ADMIN_SUCCESS,
  ADD_NEW_ADMIN_ERROR,
  DELETE_SINGLE_ADMIN,
  DELETE_SINGLE_ADMIN_SUCCESS,
  DELETE_SINGLE_ADMIN_ERROR,
} from "./adminType";
import authFetch from "../../authFetch";
import toast from "react-hot-toast";


////Get all Admin
export const getAllAdmin = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_ADMIN, payload: true });
    authFetch
      .get("/admin/admin-users")
      .then((response) => {
        const data = response.data;
        dispatch({
          type: GET_ALL_ADMIN_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_ALL_ADMIN_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
};

///opening modal of Add creation
export function openAdminCategoryDialog() {
  console.log("sodiq");
  return {
    type: OPEN_ADMIN_DIALOG,
    // payload
  };
}

///close modal of Add creation

export function closeAdminCategoryDialog() {
  return {
    type: CLOSE_ADMIN_DIALOG,
  };
}

//add Admin
export function addNewAdmin(email, fullName, password, phone, role) {
  console.log(email, fullName, password, phone, role);
  return (dispatch) => {
    dispatch({ type: ADD_NEW_ADMIN, payload: true });
    authFetch
      .post("/auth/admin/admin-users", {
        email,
        fullName,
        password,
        phone,
        role,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        dispatch({
          type: ADD_NEW_ADMIN_SUCCESS,
          payload: data,
        });
        dispatch(closeAdminCategoryDialog());
        dispatch(getAllAdmin());
        toast.success(data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: ADD_NEW_ADMIN_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, { position: "top-right" });
      });
  };
}

export function deleteSingleAdmin(userId) {
  return (dispatch) => {
    dispatch({type: DELETE_SINGLE_ADMIN, payload: true})
    authFetch
      .delete(`/auth/admin/users/${userId}`)
      .then((response) => {
        // console.log(response, 'sunkanmi')
        const data = response.data;
        // console.log(data, '123')
        dispatch({
          type: DELETE_SINGLE_ADMIN_SUCCESS,
          payload: data,
        });
        dispatch(getAllAdmin());
        toast.success(response.data.message, {position: "top-right"})
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: DELETE_SINGLE_ADMIN_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, {position: "top-right"})
      });
  };
}