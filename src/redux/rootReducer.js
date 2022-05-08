import { combineReducers } from "redux";
import agentReducer from "./agents/agentReducer";
import bookingReducer from "./bookings/bookingReducer";
import propertyReducer from "./property/propertyReducer";
import propertyOwersReducer from "./propertyOwers/propertyOwerReducer";
import serviceProviderReducer from "./serviceProviders/serviceProviderReducer";
import tenantReducer from "./tenants/tenantReducer";
import usersReducer from "./user/usersReducer"

const rootReducer = combineReducers({
  users: usersReducer,
  agents: agentReducer,
  tenants: tenantReducer,
  propertyOwers: propertyOwersReducer,
  serviceProviders: serviceProviderReducer,
  bookings: bookingReducer,
  properties: propertyReducer
});

export default rootReducer