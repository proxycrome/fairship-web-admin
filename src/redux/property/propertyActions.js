import authFetch from "../../authFetch";
import {
  GET_ALL_PROPERTIES,
  VIEW_SINGLE_PROPERTY,
  GET_ALL_PROPERTIES_SUCCESS,
  GET_ALL_PROPERTIES_ERROR,
  VIEW_SINGLE_PROPERTY_SUCCESS,
  APPROVE_PROPERTIES,
  APPROVE_PROPERTIES_SUCCESS,
  APPROVE_PROPERTIES_ERROR,
} from "./propertyType";
import toast from "react-hot-toast";

//get property  List api call
export const getPropertyList = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_PROPERTIES, payload: true });
    authFetch
      // .get(`/auth/properties?entityLevel=${property}&limit=100`)
      .get("/auth/admin/properties?limit=1000000")
      .then((response) => {
        const data = response.data;
        dispatch({
          type: GET_ALL_PROPERTIES_SUCCESS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        // console.log(data, 'property')
      })
      .catch((error) => {
        // console.log(error?.response?.data?.message);
        dispatch({
          type: GET_ALL_PROPERTIES_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
};

///get Collective Property
// export const  getCollectiveProperty = () => {
//   return (dispatch) => {
//     authFetch
//       .get("/properties?entityLevel='COLLECTIVE_ENTITY'&limit=100")
//       .then((response) => {
//         // console.log(response, "property");
//         const data = response.data;
//         console.log(data)
//         dispatch({
//           type: GET_ALL_COLLECTIVE_PROPERTIES,
//           payload: data,
//         });
//         // localStorage.getItem("token", data.token);
//         // console.log(data, 'property')
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
// };

//getsingleEntityProperties
///get Collective Property
// export const  getSingleEntityProperty = () => {
//   return (dispatch) => {
//     authFetch
//       .get("/properties?entityLevel='SINGLE_ENTITY'&limit=100")
//       .then((response) => {
//         // console.log(response, "property");
//         const data = response.data;
//         console.log(data)
//         dispatch({
//           type: GET_ALL_SINGLE_ENTITY_PROPERTIES,
//           payload: data,
//         });
//         // localStorage.getItem("token", data.token);
//         // console.log(data, 'property')
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
// };

// get a single property
export function singlePropertyById(id) {
  return (dispatch) => {
    dispatch({ type: VIEW_SINGLE_PROPERTY, payload: true });
    authFetch
      .get(`/properties/${id}`)
      .then((response) => {
        const data = response.data;
        dispatch({
          type: VIEW_SINGLE_PROPERTY_SUCCESS,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        // console.log(data, "4444");
      })
      .catch((error) => {
        // console.log(error?.response?.data?.message);
        dispatch({
          type: VIEW_SINGLE_PROPERTY_SUCCESS,
          payload: error?.response?.data?.message,
        });
      });
  };
}

export const propertyapproval = (id) => {
  // console.log(id);
  return (dispatch) => {
    dispatch({ type: APPROVE_PROPERTIES, payload: true });
    authFetch
      // .get(`/auth/properties?entityLevel=${property}&limit=100`)
      .post(`/admin/approve-property/${id}`)
      .then((response) => {
        // console.log(response, "property");
        const data = response.data;
        dispatch({
          type: APPROVE_PROPERTIES_SUCCESS,
          payload: data,
        });
        dispatch(singlePropertyById(id));
        toast.success(data.message, {position: "top-right"});
        // localStorage.getItem("token", data.token);
        // console.log(data, 'property')
      })
      .catch((error) => {
        // console.log(error?.response?.data?.message);
        dispatch({
          type: APPROVE_PROPERTIES_ERROR,
          payload: error?.response?.data?.message,
        });
        toast.error(error?.response?.data?.message, {position: "top-right"});
      });
  };
};
