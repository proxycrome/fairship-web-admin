import { GET_ALL_ADMIN, OPEN_ADMIN_DIALOG , CLOSE_ADMIN_DIALOG,  ADD_NEW_ADMIN } from "./adminType";
import authFetch from "../../authFetch";

////Get all Admin
export const getAllAdmin = () => {
   return (dispatch) => {
    authFetch
    .get("/admin/admin-users")
    .then((response) => {
     
      const data = response.data;
      dispatch({
        type: GET_ALL_ADMIN,
        payload: data,
      });
      
    })
    .catch((error) => {
      console.log(error.message);
    });
   }
}

///opening modal of Add creation
export function openAdminCategoryDialog (){
  console.log('sodiq')
  return {
    type: OPEN_ADMIN_DIALOG,
    // payload
  }
}

///close modal of Add creation

export function closeAdminCategoryDialog () {
  return {
    type: CLOSE_ADMIN_DIALOG
  }
}


//add Admin
export function addNewAdmin(email, fullName, password, phone, role) {
  console.log(email, fullName, password, phone, role)
  return (dispatch) => {
    authFetch
      .post("/auth/admin/admin-users", {
        email, 
        fullName, 
        password,
         phone,
          role
      })
      .then((response) => {
        const data = response.data;
        console.log(data)
        dispatch({
          type: ADD_NEW_ADMIN,
          payload: data,
        });
        window.location.reload();
 
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}