import toast from "react-hot-toast";
import authFetch from "../../authFetch";
import {
  GET_ALL_APARTMENT_TYPES,
  GET_ALL_APARTMENT_TYPES_ERROR,
  GET_ALL_APARTMENT_TYPES_SUCCESS,
  GET_WALK_VIDEO_PLANS,
  GET_WALK_VIDEO_PLANS_ERROR,
  GET_WALK_VIDEO_PLANS_SUCCESS,
  UPDATE_WALK_VIDEO_FEE,
  UPDATE_WALK_VIDEO_FEE_ERROR,
  UPDATE_WALK_VIDEO_FEE_SUCCESS,
} from "./walkthroughType";

//get tenantList
export const getWalkthroughList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_WALK_VIDEO_PLANS,
      payload: true,
    });
    authFetch
      .get("/auth/walkthrough-video-packages")
      .then((response) => {
        //   console.log(response, "tenantRes");
        const data = response.data;
        dispatch({
          type: GET_WALK_VIDEO_PLANS_SUCCESS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        //   console.log(data, '4444')
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_WALK_VIDEO_PLANS_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
};

export const getAllApartmentTypes = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_APARTMENT_TYPES,
      payload: true,
    });
    authFetch
      .get("/auth/walkthrough-video/apartment-types")
      .then((response) => {
        //   console.log(response, "tenantRes");
        const data = response.data;
        dispatch({
          type: GET_ALL_APARTMENT_TYPES_SUCCESS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        //   console.log(data, '4444')
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_ALL_APARTMENT_TYPES_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
};

export const updateWalkVideoFee = (formData) => {
    console.log(formData)
  return (dispatch) => {
    dispatch({
      type: UPDATE_WALK_VIDEO_FEE,
      payload: true,
    });
    authFetch
      .put("/auth/admin/update-walkthrough-video-fee", formData)
      .then((response) => {
        const data = response.data;
        dispatch({
          type: UPDATE_WALK_VIDEO_FEE_SUCCESS,
          payload: data,
        });
        toast.success(data.message, { position: "top-right" });
        dispatch(getWalkthroughList());
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: UPDATE_WALK_VIDEO_FEE_ERROR, 
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, { position: "top-right" });
      });
  };
};
