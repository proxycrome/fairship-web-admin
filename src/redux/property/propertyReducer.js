import {
  GET_ALL_PROPERTIES,
  VIEW_SINGLE_PROPERTY,
  GET_ALL_PROPERTIES_SUCCESS,
  GET_ALL_PROPERTIES_ERROR,
  VIEW_SINGLE_PROPERTY_SUCCESS,
  VIEW_SINGLE_PROPERTY_ERROR,
  APPROVE_PROPERTIES,
  APPROVE_PROPERTIES_SUCCESS,
  APPROVE_PROPERTIES_ERROR,
} from "./propertyType";

//declare initialState
const initialState = {
  allProperties: null,
  allPropertiesError: null,
  loading: false,
  viewProperty: null,
  viewPropertyError: null,
  approval: null,
  approvalError: null,
};
//define tenant reducer
const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROPERTIES:
    case VIEW_SINGLE_PROPERTY:
    case APPROVE_PROPERTIES:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        allProperties: action.payload,
        allPropertiesError: null,
      };

    case GET_ALL_PROPERTIES_ERROR:
      return {
        ...state,
        loading: false,
        allProperties: null,
        allPropertiesError: action.payload,
      };

    case VIEW_SINGLE_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        viewProperty: action.payload,
        viewPropertyError: null,
      };

    case VIEW_SINGLE_PROPERTY_ERROR:
      return {
        ...state,
        loading: false,
        viewProperty: null,
        viewPropertyError: action.payload,
      };

    case APPROVE_PROPERTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        approval: action.payload,
        approvalError: null,
      };

    case APPROVE_PROPERTIES_ERROR:
      return {
        ...state,
        loading: false,
        approval: null,
        approvalError: action.payload,
      };
    default:
      return state;
  }
};
export default propertyReducer;
