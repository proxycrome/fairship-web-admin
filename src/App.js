import "./App.css";
import { Routes, Route} from "react-router-dom";
import { useSelector } from "react-redux";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import AgentList from "./pages/agents/AgentList";
import Agent from "./pages/agents/Agent";
import TenantList from "./pages/tenants/TenantList";
import SingleTenant from "./pages/tenants/SingleTenant";
import PropertyOwers from "./pages/propertyOwners/PropertyOwners";
import Home from "./pages/Home";
import Login from "./components/Login";
import ServiceProviderList from "./pages/service-provider/ServiceProviderList";
import AllBookings from "./pages/bookings/AllBookings";
import SinglePropertyOwner from "./pages/propertyOwners/SinglePropertyOwner";
import SingleServiceProvider from "./pages/service-provider/SingleSerProvider";
import PropertyList from "./pages/property/PropertyList";
import SingleProperty from "./pages/property/SingleProperty";
import StaffList from "./pages/staffs/StaffList";
// import CreateStaff from "./pages/staffs/newStaff/CreateStaff";
import SerTypeList from "./pages/service-provider/serviceCategory/SerTypeList";
import SerCategoryList from "./pages/service-provider/serviceCategory/SerCategoryList";


function App() {

 
  return (
    <>
      <Topbar />


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="agent" element={<AgentList />} />
        <Route path="/agent/:email" element={<Agent />} />
        {/* <Route path="newUser" element={<NewUser />} /> */}
        <Route path="tenants" element={<TenantList />} />
        <Route path="/tenants/:email" element={<SingleTenant />} />
        <Route path="/property-owers" element={<PropertyOwers />} />
        <Route path="/property-owers/:email" element={<SinglePropertyOwner />} />
        <Route
          path="/service-provider-list"
          element={<ServiceProviderList />}
        />
        <Route
          path="service-provider-list/:email"
          element={<SingleServiceProvider />}
        />
        <Route path="/ser-type-list" element={<SerTypeList />} />
        <Route path="/ser-category-List" element={<SerCategoryList />} />
        <Route path="/all-bookings" element={<AllBookings />} />
        <Route path="property-list" element={<PropertyList />} />
        <Route path="/property-list/:id" element={<SingleProperty />} />
        <Route path="/staff-list" element={<StaffList />} />
        {/* <Route path="/new-staff" element={<CreateStaff />} /> */}

        {/* <Route path="/newproduct" element={<NewProduct />} /> */}
      </Routes>
    </>
  );
}

export default App;
