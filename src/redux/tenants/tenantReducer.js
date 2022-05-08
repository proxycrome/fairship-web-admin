import  { GET_ALL_TENANT, GET_SINGLE_TENANT} from "./tenantType"


//declare initialState
const initialState = {
  allTenant: {
    tenants: [],
    count: 0,
    currentPage: 0,
    totalPages: 0,
  },
  loading: false,
  tenant: "",
};
//define tenant reducer
const tenantReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TENANT:
        return {
            ...state,
            loading: false,
            allTenant: action.payload,
        };
        case GET_SINGLE_TENANT:
        return {
            ...state,
            loading: false,
            tenant: action.payload,
        };
        default:
        return state;
    }
    };
 export default tenantReducer;