import toast from "react-hot-toast";
import authFetch from "../../authFetch";
import {
  GET_PMA_FEES,
  GET_PMA_FEES_ERROR,
  GET_PMA_FEES_SUCCESS,
  UPDATE_PMA_FEES,
  UPDATE_PMA_FEES_ERROR,
  UPDATE_PMA_FEES_SUCCESS,
} from "./pmaTypes";

//get tenantList
export const getPmaFees = (feeType) => {
  return (dispatch) => {
    dispatch({
      type: GET_PMA_FEES,
      payload: true,
    });
    authFetch
      .get(`/auth/pma-fee?feeType=${feeType}`)
      .then((response) => {    
        const data = response.data;
        dispatch({
          type: GET_PMA_FEES_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_PMA_FEES_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
};

export const updatePmaFees = (formData) => {
    return (dispatch) => {
      dispatch({
        type: UPDATE_PMA_FEES,
        payload: true,
      });
      authFetch
        .put(`/auth/admin/update-pma-fees`, formData)
        .then((response) => {    
          const data = response.data;
          dispatch({
            type: UPDATE_PMA_FEES_SUCCESS,
            payload: data,
          });
          toast.success(data.message, { position: "top-right" });
        })
        .catch((error) => {
          console.log(error?.response?.data?.message);
          dispatch({
            type: UPDATE_PMA_FEES_ERROR,
            payload: error?.response?.data?.message,
          });
          toast.error(error?.response?.data?.message, { position: "top-right" });
        });
    };
  };
