import { useEffect, useState } from "react";
import { Visibility } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgent } from "../redux/agents/agentActions";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getPropertyList } from "../redux/property/propertyActions";
import { getServiceProviderList } from "../redux/serviceProviders/serviceProviderActions";

export default function SerProApprovalReq() {
  const dispatch = useDispatch();
  const [itemsToShow, setItemToShow] = useState(3);
  const [radioSearch, setRadioSearch] = useState("");


 const serviceProviderReducer = useSelector((state) => state.serviceProviders);
 const serProviderList = serviceProviderReducer.allServiceProviders.entities;


  const showMore = () => {
    setItemToShow(serProviderList.length);
  };
  const showLess = () => {
    setItemToShow(3);
  };


    useEffect(() => {
      dispatch(getServiceProviderList());
    }, [dispatch]);

  

   const serQuest = serProviderList?.filter((r) =>
     r?.serviceProviderDetail?.registrationStatus
       .toLowerCase()
       .includes(radioSearch.toLowerCase())
   );

  const allServiceProvider =
    serQuest &&
    serQuest.slice(0, itemsToShow).map((item) => {
      return (
        <>
          <ul className="widgetSmList">
            <Link to={`/service-provider-list/${item.email}`}>
              <li className="widgetSmListItem" key={item.id}>
                {/* <img src={item.profilePhoto} alt="" className="widgetSmImg" /> */}
                <div className="widgetSmUser2">
                  <span className="widgetSmUsername2">{`${item.firstName}`}</span>
                  <span className="widgetSmUserTitle2">{item.lastName}</span>
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
        </>
      );
    });

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle2">LIST OF SERVICE PROVIDER</span>
      <div className="radioBox">
        <div className="radioInput">
          <input
            type="radio"
            name="status"
            value="Approved"
            onChange={(e) => setRadioSearch(e.target.value)}
          />
          <h6>APPROVED</h6>
        </div>
        <div className="radioInput">
          <input
            type="radio"
            name="status"
            value="pending_verfication"
            onChange={(e) => setRadioSearch(e.target.value)}
          />
          <h6>PENDING</h6>
        </div>
        <div className="radioInput">
          <input
            type="radio"
            name="status"
            value="not_Started"
            onChange={(e) => setRadioSearch(e.target.value)}
          />
          <h6>NOT-STARTED</h6>
        </div>
      </div>

      {!allServiceProvider ? (
        <CircularProgress />
      ) : (
        allServiceProvider && allServiceProvider
      )}
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
