import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "./usersType";

const initialState = {
    loading: false,
    user: null,
    error: ''
}

const userReducer = (state=initialState, action) =>{
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loading: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: true,
          user: action.payload,
          error: "",
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          user: null,
          error: action.payload,
        };

      default:
        return state;
    }
}

export default userReducer;
 