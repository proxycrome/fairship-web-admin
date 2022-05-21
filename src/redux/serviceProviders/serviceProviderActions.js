import authFetch from "../../authFetch";
import {
  GET_ALL_SERVICE_PROVIDER,
  GET_SINGLE_SERVICE_PROVIDER,
  GET_ALL_SERVICE_TYPE,
  GET_SERVICE_CATEGORY,
  OPEN_DIALOG_SERVICE_TYPE,
  CLOSE_DIALOG_SERVICE_TYPE,
  ADD_SERVICE_CATEGORY,
  OPEN_DIALOG_SERVICE_CATEGORY,
  CLOSE_DIALOG_SERVICE_CATEGORY,
  APPROVED_SERVICE_PROVIDER
} from "./serviceProviderType";

//get tenantList
export const getServiceProviderList = () => {
  return (dispatch) => {
    authFetch
      .get("/auth/users/all?role=SERVICE_PROVIDER&limit=100")
      .then((response) => {
          // console.log(response, "tenantRes");
        const data = response.data;
        dispatch({
          type: GET_ALL_SERVICE_PROVIDER,
          payload: data,
        });
        // localStorage.getItem("token", data.token);
          // console.log(data, '4444')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

//  get a single service provider 
export function serviceProviderByEmail(email) {
     return (dispatch) => {
       authFetch
         .get(`/auth/${email}/users`)
         .then((response) => {
           //  console.log(response, "res234");
           const data = response.data;
           dispatch({
             type: GET_SINGLE_SERVICE_PROVIDER,
             payload: data,
           });
          //  localStorage.getItem("token", data.token);
           //  console.log(data, '4444')
         })
         .catch((error) => {
           console.log(error.message);
         });
     };
}



// get service Type
export function getAllServiceType() {
  return (dispatch) =>{
    authFetch
      .get("/auth/service-types")
      .then((response) => {
        // console.log(response, "serTypeFRes");
        const data = response.data;
        dispatch({
          type: GET_ALL_SERVICE_TYPE,
          payload: data,
        });
        // console.log(data, "4444");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}

//add service category
export function addSerCategory(id,name) {
  return (dispatch) => {
    authFetch
      .post("/auth/admin/service-category", {
        id,
        name,
      })
      .then((response) => {
        // console.log(response, "addservice");
        const data = response.data;
        dispatch({
          type: ADD_SERVICE_CATEGORY,
          payload: data,
        });
        window.location.reload();
        // localStorage.getItem("token", data.token);
        // console.log(data, "222");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

//approve service provider
 export function serviceProviderApproved(action, comments, serviceProviderId) {
   return (dispatch) => {
     authFetch
       .put("/auth/admin/review-pending-sp-registration", {
         action,
         comments,
         serviceProviderId,
       })
       .then((response) => {
        //  console.log(response, "APPROVED");
         const data = response.data;
         dispatch({
           type: APPROVED_SERVICE_PROVIDER,
           payload: data,
         });
        window.location.reload();

        //  console.log(data, "APPROVED");
       })
       .catch((error) => {
         console.log(error.message);
       });
   };
 }

//GET ALL SERVICE CATEGORIES
export function serviceCategories() {
  return (dispatch) => {
    authFetch
      .get("/auth/admin/service-category")
      .then((response) => {
        // console.log(response, "sercategories");
        const data = response.data;
        dispatch({
          type: GET_SERVICE_CATEGORY,
          payload: data,
        });
        // console.log(data, "Category");
      })
      .catch((error) => {
        console.log(error.message);
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
export function closeServiceTypeDialog() {
  return {
    type: CLOSE_DIALOG_SERVICE_TYPE,
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

