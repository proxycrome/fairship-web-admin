import { GET_ALL_PROPERTIES,
   VIEW_SINGLE_PROPERTY,
    GET_APPROVE_PROPERTIES
   } from "./propertyType";

//declare initialState
const initialState = {
  allProperties: {
    properties: [],
    count: 0,
    currentPage: 0,
    totalPages: 0,
  },
  loading: false,
  viewProperty: "",
  approval: null
};
//define tenant reducer
const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROPERTIES:
      return {
        ...state,
        loading: false,
        allProperties: action.payload,
      };
    case VIEW_SINGLE_PROPERTY:
      return {
        ...state,
        loading: false,
        viewProperty: action.payload,
      };
   case GET_APPROVE_PROPERTIES:
     return {
       ...state,
       loading: false,
       approval: action.payload
     }   
    default:
      return state;
  }
};
export default propertyReducer;
