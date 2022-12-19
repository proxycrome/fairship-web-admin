// import axios from "asxios";
// import baseURL from "../../services";
import toast from "react-hot-toast";
import authFetch from "../../authFetch";
import {
  GET_ALL_AGENT,
  GET_SINGLE_AGENT,
  DELETE_SINGLE_AGENT,
  GET_ALL_AGENT_SUCCESS,
  GET_ALL_AGENT_ERROR,
  GET_SINGLE_AGENT_SUCCESS,
  GET_SINGLE_AGENT_ERROR,
  DELETE_SINGLE_AGENT_SUCCESS,
  DELETE_SINGLE_AGENT_ERROR,
} from "./agentType";

// export const getAgent = (token) => {
//   return {
//     type: GET_ALL_AGENT,
//     payload: token,
//   };
// };

//get all Agent list
export const getAllAgent = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_AGENT, payload: true });
    authFetch
      .get("/auth/admin/create-agents/all?status=ACTIVE")
      .then((response) => {
        // console.log(response, 'res234')
        const data = response.data;
        dispatch({
          type: GET_ALL_AGENT_SUCCESS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        // console.log(data, '4444')
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_ALL_AGENT_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
};

//  get a single Agent
export function getAgentDetailByEmail(email) {
  return (dispatch) => {
    dispatch({type: GET_SINGLE_AGENT, payload: true})
    authFetch
      .get(`/auth/${email}/users`)
      .then((response) => {
        //  console.log(response, "res234");
        const data = response.data;
        dispatch({
          type: GET_SINGLE_AGENT_SUCCESS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        //  console.log(data, '4444')
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_SINGLE_AGENT_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
}

export function deleteSingleAgent(userId) {
  return (dispatch) => {
    dispatch({type: DELETE_SINGLE_AGENT, payload: true})
    authFetch
      .delete(`/auth/admin/users/${userId}`)
      .then((response) => {
        // console.log(response, 'sunkanmi')
        const data = response.data;
        // console.log(data, '123')
        dispatch({
          type: DELETE_SINGLE_AGENT_SUCCESS,
          payload: data,
        });
        dispatch(getAllAgent());
        toast.success(response.data.message, {position: "top-right"})
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: DELETE_SINGLE_AGENT_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, {position: "top-right"})
      });
  };
}
