import { useEffect, useState } from "react";
import { Visibility } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgent } from "../redux/agents/agentActions";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getPropertyList } from "../redux/property/propertyActions";

export default function PropertyApprovalReq() {
  const dispatch = useDispatch();
  const [itemsToShow, setItemToShow] = useState(3);
  const [radioSearch, setRadioSearch] = useState('')
  const propertyList = useSelector((state) => state.properties);
  const properties = propertyList?.allProperties?.entities;
  
  const showMore = () => {
    setItemToShow(properties.length);
  };
  const showLess = () => {
    setItemToShow(3);
  };

  useEffect(() => {
    dispatch(getPropertyList());

  }, [dispatch]);


  

  //  const getAllRequest = properties?.filter((r) => r.status === "PENDING");
   const getAllRequest = properties?.filter((r) =>
     r.status.toLowerCase().includes(radioSearch.toLowerCase())
   );


  const allProperties =
    getAllRequest &&
    getAllRequest.slice(0, itemsToShow).map((item) => {
      return (
        <div key={item.id}>
          <ul className="widgetSmList">
            <Link to={`/property-list/${item.id}`}>
              <li className="widgetSmListItem" key={item.id}>
                {/* <img src={item.profilePhoto} alt="" className="widgetSmImg" /> */}
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">{`${item.title}`}</span>
                  <span className="widgetSmUserTitle">{item.propertyRef}</span>
                </div>
                {/* <button className="widgetSmButton2">
                <Link to={`/agent/${item.email}`}>
                  <Visibility className="widgetSmIcon" />
                  Display
                </Link>
              </button> */}
              </li>
            </Link>
          </ul>
        </div>
      );
    });


  return (
    <div className="widgetSm">
      <span className="widgetSmTitle2">LIST OF PROPERTIES</span>
      <div className="radioBox">
        <div className="radioInput">
          <input
            type="radio"
            name="status"
            value="active"
            onChange={(e) => setRadioSearch(e.target.value)}
          />
          <h6>ACTIVE</h6>
        </div>
        <div className="radioInput">
          <input
            type="radio"
            name="status"
            value="pending"
            onChange={(e) => setRadioSearch(e.target.value)}
          />
          <h6>PENDING</h6>
        </div>
        <div className="radioInput">
          <input
            type="radio"
            name="status"
            value="RESTRICTED_VIEW"
            onChange={(e) => setRadioSearch(e.target.value)}
          />
          <h6>Restricted View</h6>
        </div>
      </div>
      {/* // RESTRICTED_VIEW, rented, pending */}

      {!allProperties ? <CircularProgress /> : allProperties && allProperties}
      {itemsToShow === 3 ? (
        <button className="widgetSmButton" onClick={showMore}>
          Show more
        </button>
      ) : (
        <button className="widgetSmButton" onClick={showLess}>
          Show Less
        </button>
      )}
      {/* <Link to={`/property-list`}>
        {itemsToShow === 3 && (
          <button className="widgetSmButton" onClick={showMore}>
            Show more
          </button>
        )}
      </Link> */}
    </div>
  );
}
