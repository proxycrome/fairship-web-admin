import {
  GET_ALL_APARTMENT_TYPES,
  GET_ALL_APARTMENT_TYPES_ERROR,
  GET_ALL_APARTMENT_TYPES_SUCCESS,
  GET_WALK_VIDEO_PLANS,
  GET_WALK_VIDEO_PLANS_ERROR,
  GET_WALK_VIDEO_PLANS_SUCCESS,
  UPDATE_WALK_VIDEO_FEE,
  UPDATE_WALK_VIDEO_FEE_ERROR,
  UPDATE_WALK_VIDEO_FEE_SUCCESS,
} from "./walkthroughType";

const initialState = {
  loading: false,
  walkthroughPlans: null,
  walkthroughPlansError: null,
  apartmentTypes: null,
  apartmentTypesError: null,
  walkFeeMsg: null,
  walkFeeError: null,
};

const walkThroughReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WALK_VIDEO_PLANS:
    case GET_ALL_APARTMENT_TYPES:
    case UPDATE_WALK_VIDEO_FEE:
      state = {
        ...state,
        loading: action.payload,
      };
      break;

    case GET_WALK_VIDEO_PLANS_SUCCESS:
      state = {
        ...state,
        loading: false,
        walkthroughPlans: action.payload,
        walkthroughPlansError: null,
      };
      break;

    case GET_WALK_VIDEO_PLANS_ERROR:
      state = {
        ...state,
        loading: false,
        walkthroughPlans: null,
        walkthroughPlansError: action.payload,
      };
      break;

    case GET_ALL_APARTMENT_TYPES_SUCCESS:
      state = {
        ...state,
        loading: false,
        apartmentTypes: action.payload,
        apartmentTypesError: null,
      };
      break;

    case GET_ALL_APARTMENT_TYPES_ERROR:
      state = {
        ...state,
        loading: false,
        apartmentTypes: null,
        apartmentTypesError: action.payload,
      };
      break;

    case UPDATE_WALK_VIDEO_FEE_SUCCESS:
      state = {
        ...state,
        loading: false,
        walkFeeMsg: action.payload,
        walkFeeError: null,
      };
      break;

    case UPDATE_WALK_VIDEO_FEE_ERROR:
      state = {
        ...state,
        loading: false,
        walkFeeMsg: null,
        walkFeeError: action.payload,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default walkThroughReducer;
