import authFetch from "../../authFetch";
import {
  GET_ALL_SERVICE_PROVIDER,
  GET_SINGLE_SERVICE_PROVIDER,
  DELETE_SINGLE_SERVICE_PROVIDER,
  GET_ALL_SERVICE_TYPE,
  GET_SERVICE_CATEGORY,
  OPEN_DIALOG_SERVICE_TYPE,
  CLOSE_DIALOG_SERVICE_TYPE,
  ADD_SERVICE_CATEGORY,
  ADD_SERVICE_TYPE,
  OPEN_DIALOG_SERVICE_CATEGORY,
  CLOSE_DIALOG_SERVICE_CATEGORY,
  APPROVED_SERVICE_PROVIDER,
  GET_ALL_SERVICE_PROVIDER_SUCCESS,
  GET_SINGLE_SERVICE_PROVIDER_SUCCESS,
  GET_SINGLE_SERVICE_PROVIDER_ERROR,
  GET_ALL_SERVICE_TYPE_SUCCESS,
  GET_ALL_SERVICE_TYPE_ERROR,
  GET_SERVICE_CATEGORY_SUCCESS,
  GET_SERVICE_CATEGORY_ERROR,
  ADD_SERVICE_CATEGORY_SUCCESS,
  ADD_SERVICE_CATEGORY_ERROR,
  DELETE_SINGLE_SERVICE_PROVIDER_SUCCESS,
  DELETE_SINGLE_SERVICE_PROVIDER_ERROR,
  GET_ALL_SERVICE_PROVIDER_ERROR,
  APPROVED_SERVICE_PROVIDER_SUCCESS,
  APPROVED_SERVICE_PROVIDER_ERROR,
  DELETE_SERVICE_TYPE,
  DELETE_SERVICE_TYPE_SUCCESS,
  DELETE_SERVICE_TYPE_ERROR,
  OPEN_EDIT_DIALOG_SERVICE_TYPE,
  CLOSE_EDIT_DIALOG_SERVICE_TYPE,
  EDIT_SERVICE_TYPE,
  EDIT_SERVICE_TYPE_SUCCESS,
  EDIT_SERVICE_TYPE_ERROR,
} from "./serviceProviderType";
import toast from "react-hot-toast";

//get tenantList
export const getServiceProviderList = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_SERVICE_PROVIDER, payload: true });
    authFetch
      .get("/auth/users/all?role=SERVICE_PROVIDER&limit=100")
      .then((response) => {
        // console.log(response, "tenantRes");
        const data = response.data;
        dispatch({
          type: GET_ALL_SERVICE_PROVIDER_SUCCESS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        // console.log(data, '4444')
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_ALL_SERVICE_PROVIDER_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
};

//  get a single service provider
export function serviceProviderByEmail(email) {
  return (dispatch) => {
    dispatch({ type: GET_SINGLE_SERVICE_PROVIDER, payload: true });
    authFetch
      .get(`/auth/${email}/users`)
      .then((response) => {
        //  console.log(response, "res234");
        const data = response.data;
        dispatch({
          type: GET_SINGLE_SERVICE_PROVIDER_SUCCESS,
          payload: data,
        });
        //  localStorage.getItem("token", data.token);
        //  console.log(data, '4444')
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_SINGLE_SERVICE_PROVIDER_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
}

export function deleteServiceProvider(userId) {
  return (dispatch) => {
    dispatch({ type: DELETE_SINGLE_SERVICE_PROVIDER, payload: true });
    authFetch
      .delete(`/auth/admin/users/${userId}`)
      .then((response) => {
        // console.log(response, 'sunkanmi')
        const data = response.data;
        console.log(data, "123");
        dispatch({
          type: DELETE_SINGLE_SERVICE_PROVIDER_SUCCESS,
          payload: data,
        });
        dispatch(getServiceProviderList());
        toast.success(data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: DELETE_SINGLE_SERVICE_PROVIDER_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, { position: "top-right" });
      });
  };
}

// get service Type
export function getAllServiceType() {
  return (dispatch) => {
    dispatch({ type: GET_ALL_SERVICE_TYPE, payload: true });
    authFetch
      .get("/auth/service-types")
      .then((response) => {
        // console.log(response, "serTypeFRes");
        const data = response.data;
        dispatch({
          type: GET_ALL_SERVICE_TYPE_SUCCESS,
          payload: data,
        });
        // console.log(data, "4444");
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_ALL_SERVICE_TYPE_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
}

//add service category
export function addSerCategory(id, name) {
  return (dispatch) => {
    dispatch({ type: ADD_SERVICE_CATEGORY, payload: true });
    authFetch
      .post("/auth/admin/service-category", {
        id,
        name,
      })
      .then((response) => {
        // console.log(response, "addservice");
        const data = response.data;
        dispatch({
          type: ADD_SERVICE_CATEGORY_SUCCESS,
          payload: data,
        });
        dispatch(closeServiceCategoryDialog());
        dispatch(serviceCategories());
        toast.success(data.message, { position: "top-right" });
        // localStorage.getItem("token", data.token);
        // console.log(data, "222");
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: ADD_SERVICE_CATEGORY_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, { position: "top-right" });
      });
  };
}

//add service type
export function addSerType(formData) {
  return (dispatch) => {
    dispatch({ type: ADD_SERVICE_CATEGORY, payload: true });
    authFetch
      .post("/auth/admin/services", formData)
      .then((response) => {
        console.log(response, "addservice");
        const data = response.data;
        dispatch({
          type: ADD_SERVICE_CATEGORY_SUCCESS,
          payload: data,
        });
        dispatch(closeServiceTypeDialog());
        dispatch(getAllServiceType());
        toast.success(data.message, { position: "top-right" });
        // localStorage.getItem("token", data.token);
        // console.log(resp, "222");
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: ADD_SERVICE_CATEGORY_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, { position: "top-right" });
      });
  };
}

//edit service type
export function editSerType(formData) {
  return (dispatch) => {
    console.log(formData?.id);
    dispatch({ type: EDIT_SERVICE_TYPE, payload: true });
    authFetch
      .put(`/auth/admin/services/${formData?.id}`, formData)
      .then((response) => {
        console.log(response, "addservice");
        const data = response.data;
        dispatch({
          type: EDIT_SERVICE_TYPE_SUCCESS,
          payload: data,
        });
        dispatch(closeServiceTypeEditDialog());
        dispatch(getAllServiceType());
        toast.success(data.message, { position: "top-right" });
        // localStorage.getItem("token", data.token);
        // console.log(resp, "222");
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: EDIT_SERVICE_TYPE_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, { position: "top-right" });
      });
  };
}

//approve service provider
export function serviceProviderApproved(action, comments, serviceProviderId) {
  const sp = {
    action,
    comments,
    serviceProviderId,
  };

  console.log(sp);
  return (dispatch) => {
    dispatch({ type: APPROVED_SERVICE_PROVIDER, payload: true });
    authFetch
      .put("/auth/admin/review-pending-sp-registration", {
        action,
        comments,
        serviceProviderId,
      })
      .then((response) => {
        console.log(response, "APPROVED");
        const data = response.data;
        dispatch({
          type: APPROVED_SERVICE_PROVIDER_SUCCESS,
          payload: data,
        });
        dispatch(getServiceProviderList());
        toast.success(data.message, { position: "top-right" });
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: APPROVED_SERVICE_PROVIDER_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, { position: "top-right" });
      });
  };
}

//GET ALL SERVICE CATEGORIES
export function serviceCategories() {
  return (dispatch) => {
    dispatch({ type: GET_SERVICE_CATEGORY, payload: true });
    authFetch
      .get("/auth/admin/service-category")
      .then((response) => {
        // console.log(response, "sercategories");
        const data = response.data;
        dispatch({
          type: GET_SERVICE_CATEGORY_SUCCESS,
          payload: data,
        });
        // console.log(data, "Category");
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: GET_SERVICE_CATEGORY_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
}

export function deleteServiceType(id) {
  return (dispatch) => {
    console.log(id);
    dispatch({ type: DELETE_SERVICE_TYPE, payload: true });
    authFetch
      .delete(`/auth/admin/services/${id}`)
      .then((response) => {
        // console.log(response, 'sunkanmi')
        const data = response.data;
        console.log(data, "123");
        dispatch({
          type: DELETE_SERVICE_TYPE_SUCCESS,
          payload: data,
        });
        dispatch(getAllServiceType());
        toast.success(data.message, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error?.response?.data?.message);
        dispatch({
          type: DELETE_SERVICE_TYPE_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, { position: "top-right" });
      });
  };
}

//open and close create service type dialog box
export function openServiceTypeDialog(payload) {
  return {
    type: OPEN_DIALOG_SERVICE_TYPE,
    payload,
  };
}

export function openServiceTypeEditDialog(payload) {
  return {
    type: OPEN_EDIT_DIALOG_SERVICE_TYPE,
    payload,
  };
}

export function closeServiceTypeDialog() {
  return {
    type: CLOSE_DIALOG_SERVICE_TYPE,
  };
}

export function closeServiceTypeEditDialog() {
  return {
    type: CLOSE_EDIT_DIALOG_SERVICE_TYPE,
  };
}
//open and close create service  categorydialog box
export function openServiceCategoryDialog(payload) {
  return {
    type: OPEN_DIALOG_SERVICE_CATEGORY,
    payload,
  };
}
export function closeServiceCategoryDialog() {
  return {
    type: CLOSE_DIALOG_SERVICE_CATEGORY,
  };
}
