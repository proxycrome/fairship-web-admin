import authFetch from "../../authFetch";
import { GET_ALL_PROPERTIES, VIEW_SINGLE_PROPERTY } from "./propertyType";

//get property  List api call
export const getPropertyList = () => {
  return (dispatch) => {
    authFetch
      .get("/properties?limit=100")
      .then((response) => {
        // console.log(response, "property");
        const data = response.data;
        dispatch({
          type: GET_ALL_PROPERTIES,
          payload: data,
        });
        // localStorage.setItem("token", data.token);
        // console.log(data, 'property')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

// get a single property 
export function singlePropertyById(id) {
  return (dispatch) => {
    authFetch
      .get(`/properties/${id}`)
      .then((response) => {
         console.log(response, "proId");
        const data = response.data;
        dispatch({
          type: VIEW_SINGLE_PROPERTY,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
         console.log(data, '4444')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}
