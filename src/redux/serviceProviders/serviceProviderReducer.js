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
  GET_ALL_SERVICE_PROVIDER_SUCCESS,
  GET_ALL_SERVICE_PROVIDER_ERROR,
  GET_SINGLE_SERVICE_PROVIDER_SUCCESS,
  GET_SINGLE_SERVICE_PROVIDER_ERROR,
  GET_ALL_SERVICE_TYPE_SUCCESS,
  GET_ALL_SERVICE_TYPE_ERROR,
  GET_SERVICE_CATEGORY_SUCCESS,
  GET_SERVICE_CATEGORY_ERROR,
  ADD_SERVICE_CATEGORY_SUCCESS,
  ADD_SERVICE_CATEGORY_ERROR,
  APPROVED_SERVICE_PROVIDER_SUCCESS,
  APPROVED_SERVICE_PROVIDER_ERROR,
  OPEN_EDIT_DIALOG_SERVICE_TYPE,
  CLOSE_EDIT_DIALOG_SERVICE_TYPE,
  EDIT_SERVICE_TYPE,
  EDIT_SERVICE_TYPE_SUCCESS,
  EDIT_SERVICE_TYPE_ERROR,
} from "./serviceProviderType";

//declare initialState
const initialState = {
  allServiceProviders: null,
  allServiceProvidersError: null,
  createServiceType: {
    props: {
      open: false,
    },
    data: null,
  },
  editServiceType: {
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
  addSerCategory: null,
  addSerCategoryError: null,
  loading: false,
  serviceProvider: null,
  serviceProviderError: null,
  serviceType: null,
  serviceTypeError: null,
  serviceCategories: null,
  serviceCategoriesError: null,
  approvalMsg: null,
  approvalError: null,
  editServiceTypeMsg: null,
  editServiceTypeError: null,
};
//define tenant reducer
const serviceProviderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SERVICE_PROVIDER:
    case GET_SINGLE_SERVICE_PROVIDER:
    case GET_ALL_SERVICE_TYPE:
    case GET_SERVICE_CATEGORY:
    case ADD_SERVICE_CATEGORY:
    case APPROVED_SERVICE_PROVIDER:
    case EDIT_SERVICE_TYPE:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_ALL_SERVICE_PROVIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        allServiceProviders: action.payload,
        allServiceProvidersError: null,
      };

    case GET_ALL_SERVICE_PROVIDER_ERROR:
      return {
        ...state,
        loading: false,
        allServiceProviders: null,
        allServiceProvidersError: action.payload,
      };

    case GET_SINGLE_SERVICE_PROVIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceProvider: action.payload,
        serviceProviderError: null,
      };

    case GET_SINGLE_SERVICE_PROVIDER_ERROR:
      return {
        ...state,
        loading: false,
        serviceProvider: null,
        serviceProviderError: action.payload,
      };

    case GET_ALL_SERVICE_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceType: action.payload,
        serviceTypeError: null,
      };

    case GET_ALL_SERVICE_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        serviceType: null,
        serviceTypeError: action.payload,
      };

    case GET_SERVICE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceCategories: action.payload,
        serviceCategoriesError: null,
      };

    case GET_SERVICE_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        serviceCategories: null,
        serviceCategoriesError: action.payload,
      };

    //add service category
    case ADD_SERVICE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        addSerCategory: action.payload,
        addSerCategoryError: null,
      };

    case ADD_SERVICE_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        addSerCategory: null,
        addSerCategoryError: action.payload,
      };
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

    case OPEN_EDIT_DIALOG_SERVICE_TYPE:
      return {
        ...state,
        editServiceType: {
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

    //close dialog service type
    case CLOSE_EDIT_DIALOG_SERVICE_TYPE:
      return {
        ...state,
        editServiceType: {
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
    case APPROVED_SERVICE_PROVIDER_SUCCESS:
      return {
        ...state,
        loading: false,
        approvalMsg: action.payload,
        approvalError: null,
      };

    case APPROVED_SERVICE_PROVIDER_ERROR:
      return {
        ...state,
        loading: false,
        approvalMsg: null,
        approvalError: action.payload,
      };

    case EDIT_SERVICE_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        editServiceTypeMsg: action.payload,
        editServiceTypeError: null,
      };

    case EDIT_SERVICE_TYPE_ERROR:
      return {
        ...state,
        loading: false,
        editServiceTypeMsg: null,
        editServiceTypeError: action.payload,
      };

    default:
      return state;
  }
};
export default serviceProviderReducer;
