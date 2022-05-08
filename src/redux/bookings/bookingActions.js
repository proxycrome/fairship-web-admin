import authFetch from "../../authFetch";
import {
  GET_SINGLE_BOOKING,
  GET_ALL_BOOKINGS,
} from "./bookingType";

//get property owers List api call
export const appointmentBookingList = () => {
  return (dispatch) => {
    authFetch
      .get("/auth/appointment-booking&limit=100")
      .then((response) => {
        // console.log(response, "booking");
        const data = response.data;
        dispatch({
          type: GET_ALL_BOOKINGS,
          payload: data,
        });
        localStorage.getItem("token", data.token);
        // console.log(data, 'dataBooking')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
