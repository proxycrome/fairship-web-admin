import {
  GET_ALL_TENANT,
  GET_ALL_TENANT_SUCCESS,
  GET_SINGLE_TENANT,
  GET_SINGLE_TENANT_ERROR,
  GET_SINGLE_TENANT_SUCCESS,
  GET_TENANT_PROPERTY,
  GET_TENANT_PROPERTY_ERROR,
  GET_TENANT_PROPERTY_SUCCESS,
} from "./tenantType";

//declare initialState
const initialState = {
  allTenant: null,
  allTenantError: null,
  loading: false,
  tenant: null,
  tenantError: null,
  property: null,
  propertyError: null,
};
//define tenant reducer
const tenantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TENANT:
    case GET_SINGLE_TENANT:
    case GET_TENANT_PROPERTY:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_ALL_TENANT_SUCCESS:
      return {
        ...state,
        loading: false,
        allTenant: action.payload,
        allTenantError: null,
      };

    case GET_SINGLE_TENANT_SUCCESS:
      return {
        ...state,
        loading: false,
        tenant: action.payload,
        tenantError: null,
      };

    case GET_SINGLE_TENANT_ERROR:
      return {
        ...state,
        loading: false,
        tenant: null,
        tenantError: action.payload,
      };

    case GET_TENANT_PROPERTY_SUCCESS:
      return {
        ...state,
        loading: false,
        property: action.payload,
        propertyError: null,
      };

    case GET_TENANT_PROPERTY_ERROR:
      return {
        ...state,
        loading: false,
        property: null,
        propertyError: action.payload,
      };

    default:
      return state;
  }
};
export default tenantReducer;
