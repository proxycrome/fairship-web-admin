import { useEffect, useState } from "react";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { singleOwerDetailsByEmail } from "../../redux/propertyOwers/propertyOwerActions";

function SinglePropertyOwner() {
  const dispatch = useDispatch();
  const params = useParams();

  const allPropertyOwers = useSelector((state) => state.propertyOwers);
  const singlePropertOwer = allPropertyOwers?.propertyOwer;

  // console.log(singlePropertOwer, "singlePropertOwer");

  // console.log({ allPropertyOwers, singlePropertOwer }, "propertyOwers");

  useEffect(() => {
    dispatch(singleOwerDetailsByEmail(params.email));
  }, [params.email]);

  return (
    <div className="containerSide">
      <Sidebar />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Property owner Details</h1>
          {/* <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link> */}
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={singlePropertOwer?.profilePhoto}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {singlePropertOwer?.fullName}
                </span>
                <span className="userShowUserTitle">
                  00000{singlePropertOwer?.id}
                </span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Property owner Details</span>
              <div className="userShowInfo">
                <span className="userShowIcon">Property ower Type:</span>
                <span className="userShowInfoTitle">
                  {singlePropertOwer?.agentDetail?.type}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Property ower Company:</span>
                <span className="userShowInfoTitle">
                  {singlePropertOwer?.agentDetail?.company}
                </span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                Phone
                <span className="userShowInfoTitle">
                  {singlePropertOwer?.phone}
                </span>
              </div>
              <div className="userShowInfo">
                {/* <MailOutline className="userShowIcon" /> */}
                <span className="userShowIcon">Email:</span>

                <span className="userShowInfoTitle">
                  {singlePropertOwer?.email}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Country:</span>
                <span className="userShowInfoTitle">
                  {singlePropertOwer?.address?.country}
                </span>
              </div>
            </div>
          </div>

          {/* {hello world} */}
          <div className="userUpdate">
            <span className="userShowTitle"> Property owner Address</span>
            <div className="userShowInfo">
              <span className="userShowIcon">House Address:</span>
              <span className="userShowInfoTitle">
                {singlePropertOwer?.address?.houseNoAddress}
              </span>
            </div>
            <div className="userShowInfo">
              {/* <LocationSearching className="userShowIcon" /> */}
              <span className="userShowIcon">Local Govt Area:</span>
              <span className="userShowInfoTitle">
                {singlePropertOwer?.address?.lga}
              </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowIcon">State:</span>
              <span className="userShowInfoTitle">
                {singlePropertOwer?.address?.state}
              </span>
            </div>
            {/* <span className="userShowTitle">Other info </span> */}

            <span className="userShowTitle">Properties</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                <table className="widgetLgTable">
                  <thead>
                    <tr className="widgetLgTr">
                      <th className="widgetLgTh">Title</th>
                      <th className="widgetLgTh">PropertyRef</th>
                      <th className="widgetLgTh">Entity Level</th>
                      <th className="widgetLgTh">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {singlePropertOwer?.properties?.map((itm) => {
                      return (
                        <tr className="widgetLgTr" key={itm.id}>
                          <td className="widgetLgName">{itm?.parentProperty?.title} {itm?.title}</td>
                          <td className="widgetLgName">{itm.propertyRef}</td>
                          <td className="widgetLgDate">{itm.entityLevel}</td>
                          <td className="widgetLgAmount">{itm.type}</td>
                          <td className="widgetLgUser">
                            <Link to={`/property-list/${itm.id}`}>
                              <h5>View</h5>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </span>
            </div>

            <div className="userShowInfo">
              <div className="userShowIcon">signature:</div>
              <br />
              <div className="userShowTop">
                <img
                  src={singlePropertOwer?.profilePhoto}
                  alt=""
                  className="userShowImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default SinglePropertyOwner;
