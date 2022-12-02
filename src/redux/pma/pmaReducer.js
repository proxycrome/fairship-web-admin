import {
  GET_PMA_FEES,
  GET_PMA_FEES_ERROR,
  GET_PMA_FEES_SUCCESS,
  UPDATE_PMA_FEES,
  UPDATE_PMA_FEES_ERROR,
  UPDATE_PMA_FEES_SUCCESS,
} from "./pmaTypes";

const initialState = {
  loading: false,
  pmaFees: null,
  pmaFeesError: null,
  pmaFeesMsg: null,
  pmaFeesMsgError: null,
};

const pmaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PMA_FEES:
    case UPDATE_PMA_FEES:
      state = {
        ...state,
        loading: action.payload,
      };
      break;

    case GET_PMA_FEES_SUCCESS:
      state = {
        ...state,
        loading: false,
        pmaFees: action.payload,
        pmaFeesError: null,
      };
      break;

    case GET_PMA_FEES_ERROR:
      state = {
        ...state,
        loading: false,
        pmaFees: null,
        pmaFeesError: action.payload,
      };
      break;

    case UPDATE_PMA_FEES_SUCCESS:
      state = {
        ...state,
        loading: false,
        pmaFeesMsg: action.payload,
        pmaFeesMsgError: null,
      };
      break;

    case UPDATE_PMA_FEES_ERROR:
      state = {
        ...state,
        loading: false,
        pmaFeesMsg: null,
        pmaFeesMsgError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default pmaReducer;
