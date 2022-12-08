import {
  GET_ALL_ADMIN,
  OPEN_ADMIN_DIALOG,
  CLOSE_ADMIN_DIALOG,
  ADD_NEW_ADMIN,
  GET_ALL_ADMIN_SUCCESS,
  GET_ALL_ADMIN_ERROR,
  ADD_NEW_ADMIN_SUCCESS,
  ADD_NEW_ADMIN_ERROR,
  DELETE_SINGLE_ADMIN,
  DELETE_SINGLE_ADMIN_SUCCESS,
  DELETE_SINGLE_ADMIN_ERROR,
} from "./adminType";

const initialState = {
  allAdmin: null,
  allAdminError: null,
  createAdmin: {
    props: {
      open: false,
    },
    data: null,
  },
  newAdminObj: null,
  newAdminError: null,
  loading: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ADMIN:
    case ADD_NEW_ADMIN:
    case DELETE_SINGLE_ADMIN:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_ALL_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        allAdmin: action.payload,
        allAdminError: null,
      };

    case GET_ALL_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        allAdmin: null,
        allAdminError: action.payload,
      };

    case OPEN_ADMIN_DIALOG:
      return {
        ...state,
        createAdmin: {
          props: {
            open: true,
          },
          data: action.payload,
        },
      };

    case CLOSE_ADMIN_DIALOG:
      return {
        ...state,
        createAdmin: {
          props: {
            open: false,
          },
          data: null,
        },
      };

    case ADD_NEW_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        newAdminObj: action.payload,
        newAdminError: null,
      };

    case ADD_NEW_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
        newAdminObj: null,
        newAdminError: action.payload,
      };

    case DELETE_SINGLE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case DELETE_SINGLE_ADMIN_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default adminReducer;
