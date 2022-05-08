import { GET_ALL_BOOKINGS, GET_SINGLE_BOOKING } from "./bookingType";

//declare initialState
const initialState = {
  allBookings: [],
  loading: false,
  singleBooking: "",
};
//define booking reducer
const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
        case GET_ALL_BOOKINGS:
        return {
          ...state,
          loading: false,
          allBookings: action.payload,
        };
    //     case GET_SINGLE_BOOKING:
    //       return {
    //         ...state,
    //         loading: false,
    //         propertyOwer: action.payload,
    //       };
        default:
          return state;
      }
}
export default bookingReducer;
