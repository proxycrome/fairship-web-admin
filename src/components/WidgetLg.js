// import "./widgetLg.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import {getAllAdmin} from  '../redux/admins/adminActions';

export default function WidgetLg() {

  const dispatch = useDispatch();

  const [itemsToShow, setItemToShow] = useState(3);

  // const Button = ({ type }) => {
  //   return <button className={"widgetLgButton " + type}>{type}</button>;
  // };
  
  const adminList = useSelector((state) => state.admin);
  const admin = adminList.allAdmin.entities;

  // console.log(admin, 'admin')
  const showMore = () => {
    setItemToShow(admin.length);
  };
  const showLess = () => {
    setItemToShow(3);
  };

  useEffect(() => {
    dispatch(getAllAdmin());
  }, [dispatch]);


  const allAdminPeople =
  admin &&
  admin.slice(0, itemsToShow).map((item) => {
    return (
      <>
        <ul className="widgetSmList">
          <li className="widgetSmListItem" key={item.id}>
            {/* <img src={item.profilePhoto} alt="" className="widgetSmImg" /> */}
            <div className="widgetLgUser">
              <span className="widgetSmUsername">{item?.email}</span>
            </div>
            {/* <div className="widgetLgUser">
              <span className="widgetSmUserTitle">{item.phone}</span>
            </div> */}
          </li>
        </ul>
      </>
    );
  });

  // console.log(admin)
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">List of Staffs</h3>
      {!allAdminPeople ? <CircularProgress /> : allAdminPeople && allAdminPeople}
      {itemsToShow === 3 ? (
        <button className="widgetSmButton" onClick={showMore}>
          Show more
        </button>
      ) : (
        <button className="widgetSmButton" onClick={showLess}>
          Show Less
        </button>
      )}
    </div>
  );
}
