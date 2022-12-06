import {
  GET_ALL_PROPERTYOWERS,
  GET_ALL_PROPERTYOWERS_ERROR,
  GET_ALL_PROPERTYOWERS_SUCCESS,
  GET_SINGLE_PROPERTYOWER,
  GET_SINGLE_PROPERTYOWER_ERROR,
  GET_SINGLE_PROPERTYOWER_SUCCESS,
} from "./propertyOwerType";

//declare initialState
const initialState = {
  allPropertyOwers: null,
  allPropertyOwersError: null,
  loading: false,
  propertyOwer: null,
  propertyOwerError: null,
};
//define tenant reducer
const propertyOwersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROPERTYOWERS:
    case GET_SINGLE_PROPERTYOWER:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_ALL_PROPERTYOWERS_SUCCESS:
      return {
        ...state,
        loading: false,
        allPropertyOwers: action.payload,
        allPropertyOwersError: null,
      };

    case GET_ALL_PROPERTYOWERS_ERROR:
      return {
        ...state,
        loading: false,
        allPropertyOwers: null,
        allPropertyOwersError: action.payload,
      };

    case GET_SINGLE_PROPERTYOWER_SUCCESS:
      return {
        ...state,
        loading: false,
        propertyOwer: action.payload,
        propertyOwerError: null,
      };

      case GET_SINGLE_PROPERTYOWER_ERROR:
        return {
          ...state,
          loading: false,
          propertyOwer: null,
          propertyOwerError: action.payload,
        };

    default:
      return state;
  }
};
export default propertyOwersReducer;
