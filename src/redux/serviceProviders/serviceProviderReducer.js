import {
  GET_ALL_SERVICE_PROVIDER,
  GET_SINGLE_SERVICE_PROVIDER,
  DELETE_SINGLE_SERVICE_PROVIDER,
  GET_ALL_SERVICE_TYPE,
  GET_SERVICE_CATEGORY,
  OPEN_DIALOG_SERVICE_TYPE,
  CLOSE_DIALOG_SERVICE_TYPE,
  ADD_SERVICE_CATEGORY,
  ADD_SERVICE_TYPE,
  OPEN_DIALOG_SERVICE_CATEGORY,
  CLOSE_DIALOG_SERVICE_CATEGORY,
  APPROVED_SERVICE_PROVIDER,
} from "./serviceProviderType";

//declare initialState
const initialState = {
  allServiceProviders: {
    serviceProviders: [],
    count: 0,
    currentPage: 0,
    total: 0,
  },
  createServiceType: {
    props: {
      open: false,
    },
    data: null,
  },
  createServiceCategory: {
    props: {
      open: false,
    },
    data: null,
  },
  addSerCategory:[],
  loading: false,
  serviceProvider: "",
  serviceType:[],
  serviceCategories:[]
};
//define tenant reducer
const serviceProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SERVICE_PROVIDER:
      return {
        ...state,
        loading: false,
        allServiceProviders: action.payload,
      };
    case GET_SINGLE_SERVICE_PROVIDER:
      return {
        ...state,
        loading: false,
        serviceProvider: action.payload,
      };
    case GET_ALL_SERVICE_TYPE:
      return {
        ...state,
        serviceType: action.payload,
      };
    case GET_SERVICE_CATEGORY:
      return {
        ...state,
        serviceCategories: action.payload,
      };
      //add service category
      case ADD_SERVICE_CATEGORY:
        return{
          ...state,
          addSerCategory: action.payload
        }
        //add service category
      // case ADD_SERVICE_TYPE:
      //   return{
      //     ...state,
      //     addSerCategory: action.payload
      //   }
    //open dialog service type
    case OPEN_DIALOG_SERVICE_TYPE:
      return {
        ...state,
        createServiceType: {
          props: {
            open: true,
          },
          data: action.payload,
        },
      };
    //close dialog service type
    case CLOSE_DIALOG_SERVICE_TYPE:
      return {
        ...state,
        createServiceType: {
          props: {
            open: false,
          },
          data: null,
        },
      };
    //open service category
    case OPEN_DIALOG_SERVICE_CATEGORY:
      return {
        ...state,
        createServiceCategory: {
          props: {
            open: true,
          },
          data: action.payload,
        },
      };
    //close service category
    case CLOSE_DIALOG_SERVICE_CATEGORY:
      return {
        ...state,
        createServiceCategory: {
          props: {
            open: false,
          },
          data: null,
        },
      };
      case APPROVED_SERVICE_PROVIDER:{
        return {
          ...state,
          loading: false
        }
      }
    default:
      return state;
  }
};
export default serviceProviderReducer;
