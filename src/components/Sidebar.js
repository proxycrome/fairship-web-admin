// import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  PeopleIcon,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";
// import PeopleIcon from "@mui/icons-material/People";

export default function Sidebar() {
  const activeLink = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "rgb(64, 202, 64)" : "rgb(240, 240, 255)",
    };
  };

  const handleLogOut = () => {
    window.localStorage.clear()
    window.location.href= '/'
  }

  return (
    <nav className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink style={activeLink} to="/home" className="link">
              <li className="sidebarListItem">
                {/* <LineStyle className="sidebarIcon" /> */}
                Home
              </li>
            </NavLink>
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users Menu</h3>
          <ul className="sidebarList">
            <NavLink style={activeLink} to="/agent" className="link">
              <li className="sidebarListItem">
                {/* <PermIdentity className="sidebarIcon" /> */}
                Agents
              </li>
            </NavLink>
            <NavLink style={activeLink} to="/tenants" className="link">
              <li className="sidebarListItem">
                {/* <Storefront className="sidebarIcon" /> */}
                Tenant
              </li>
            </NavLink>
            <NavLink style={activeLink} to="/property-owers" className="link">
              <li className="sidebarListItem">
                {/* <AttachMoney className="sidebarIcon" /> */}
                Property Owners
              </li>
            </NavLink>
            <NavLink
              style={activeLink}
              to="/service-provider-list"
              className="link"
            >
              <li className="sidebarListItem">
                {/* <BarChart className="sidebarIcon" /> */}
                Service Providers
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Manage Properties</h3>
          <ul className="sidebarList">
            <NavLink style={activeLink} to="/all-bookings" className="link">
              <li className="sidebarListItem">
                {/* <MailOutline className="sidebarIcon" /> */}
                Bookings
              </li>
            </NavLink>
            <NavLink style={activeLink} to="/property-list" className="link">
              <li className="sidebarListItem">
                {/* <DynamicFeed className="sidebarIcon" /> */}
                Property
              </li>
            </NavLink>
            {/* <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li> */}
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            {/* <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li> */}
            <li className="sidebarListItem">
              {/* <ChatBubbleOutline className="sidebarIcon" /> */}
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <NavLink style={activeLink} to="/staff-list" className="link">
              <li className="sidebarListItem">Manage staff</li>
            </NavLink>
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li> */}
            {/* <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Logout
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Settings</h3>
          <ul className="sidebarList">
            {/* <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage staff
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li> */}
            <li className="sidebarListItem" onClick={handleLogOut}>
              <Report className="sidebarIcon" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
