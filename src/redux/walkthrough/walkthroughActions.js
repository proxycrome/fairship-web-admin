import toast from "react-hot-toast";
import authFetch from "../../authFetch";
import { singlePropertyById } from "../property/propertyActions";
import {
  CLOSE_WALK_UPLOAD_DIALOG,
  GET_ALL_APARTMENT_TYPES,
  GET_ALL_APARTMENT_TYPES_ERROR,
  GET_ALL_APARTMENT_TYPES_SUCCESS,
  GET_WALK_VIDEO_PLANS,
  GET_WALK_VIDEO_PLANS_ERROR,
  GET_WALK_VIDEO_PLANS_SUCCESS,
  OPEN_WALK_UPLOAD_DIALOG,
  UPDATE_WALK_VIDEO_FEE,
  UPDATE_WALK_VIDEO_FEE_ERROR,
  UPDATE_WALK_VIDEO_FEE_SUCCESS,
  UPLOAD_VIDEO,
  UPLOAD_VIDEO_ERROR,
  UPLOAD_VIDEO_SUCCESS,
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

export function openWalkUploadDialog(payload) {
  return {
    type: OPEN_WALK_UPLOAD_DIALOG,
    payload,
  };
}

export function closeWalkUploadDialog() {
  return {
    type: CLOSE_WALK_UPLOAD_DIALOG,
  };
}

//upload Walkthrough video
export function uploadWalkVideo(formData) {
  return (dispatch) => {
    dispatch({ type: UPLOAD_VIDEO, payload: true });
    authFetch
      .post("/auth/admin/videos", formData)
      .then((response) => {
        console.log(response, "addservice");
        const data = response.data;
        dispatch({
          type: UPLOAD_VIDEO_SUCCESS,
          payload: data,
        });
        dispatch(closeWalkUploadDialog());
        dispatch(singlePropertyById(formData?.propertyId));
        toast.success(data.message, { position: "top-right" });
        // localStorage.getItem("token", data.token);
        // console.log(resp, "222");
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: UPLOAD_VIDEO_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, { position: "top-right" });
      });
  };
}