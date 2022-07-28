import authFetch from "../../authFetch";
import { GET_ALL_PROPERTIES,
   VIEW_SINGLE_PROPERTY,
   GET_APPROVE_PROPERTIES
  } from "./propertyType";

//get property  List api call
export const getPropertyList = () => {
  
  return (dispatch) => {
    authFetch
      // .get(`/auth/properties?entityLevel=${property}&limit=100`)
      .get("/auth/admin/properties?limit=1000")
      .then((response) => {
        // console.log(response, "property");
        const data = response.data;
        console.log(data);
        dispatch({
          type: GET_ALL_PROPERTIES,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        // console.log(data, 'property')
      })
      .catch((error) => {
        console.log(error.message);
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


export const propertyapproval = (id) => {
  console.log(id)
  return (dispatch) => {
    authFetch
      // .get(`/auth/properties?entityLevel=${property}&limit=100`)
      .post(`/admin/approve-property/${id}`)
      .then((response) => {
        // console.log(response, "property");
        const data = response.data;
        console.log(data)
        dispatch({
          type: GET_APPROVE_PROPERTIES,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
        // console.log(data, 'property')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};