import { GET_ALL_PROPERTYOWERS, GET_SINGLE_PROPERTYOWER } from "./propertyOwerType";

//declare initialState
const initialState = {
  allPropertyOwers: {
    propertyOwers: [],
    count: 0,
    currentPage: 0,
    totalPages: 0,
  },
  loading: false,
  propertyOwer: "",
};
//define tenant reducer
const propertyOwersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROPERTYOWERS:
      return {
        ...state,
        loading: false,
        allPropertyOwers: action.payload,
      };
    case GET_SINGLE_PROPERTYOWER:
      return {
        ...state,
        loading: false,
        propertyOwer: action.payload,
      };
    default:
      return state;
  }
};
export default propertyOwersReducer;
