import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import {
  getAgentDetailByEmail,
  getAllAgent,
} from "../../redux/agents/agentActions";
// import "./user.css";

export default function Agent() {
  const dispatch = useDispatch();
  const params = useParams();

  const allAgents = useSelector((state) => state.agents);
  const singleAgent = allAgents.agent;
  // console.log({ singleAgent, allAgents }, "singleAgent");

  useEffect(() => {
    dispatch(getAgentDetailByEmail(params.email));
  }, [params]);

  return (
    <div className="containerSide">
      <Sidebar />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Agent Details</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={singleAgent?.profilePhoto}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {singleAgent?.fullName}
                </span>
                <span className="userShowUserTitle">
                  00000{singleAgent?.id}
                </span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Agent Details</span>
              <div className="userShowInfo">
                {/* <PermIdentity className="userShowIcon" /> */}
                <span className="userShowIcon">Agent Type:</span>
                <span className="userShowInfoTitle">
                  {singleAgent?.agentDetail?.type}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Agent Company:</span>
                <span className="userShowInfoTitle">
                  {singleAgent?.agentDetail?.company?.companyName}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Gender:</span>
                <span className="userShowInfoTitle">{singleAgent?.gender}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                {/* <PhoneAndroid className="userShowIcon" /> */}
                Phone
                <span className="userShowInfoTitle">{singleAgent?.phone}</span>
              </div>
              <div className="userShowInfo">
                {/* <MailOutline className="userShowIcon" /> */}
                <span className="userShowIcon">Email:</span>

                <span className="userShowInfoTitle">{singleAgent?.email}</span>
              </div>
              <div className="userShowInfo">
                {/* <LocationSearching className="userShowIcon" /> */}
                <span className="userShowIcon">Country:</span>
                <span className="userShowInfoTitle">
                  {singleAgent?.address?.country}
                </span>
              </div>
            </div>
          </div>

          {/* {hello world} */}
          <div className="userUpdate">
            <span className="userShowTitle"> Agent Address</span>
            <div className="userShowInfo">
              {/* <LocationSearching className="userShowIcon" /> */}
              <span className="userShowIcon">House Address:</span>
              <span className="userShowInfoTitle">
                {singleAgent?.address?.houseNoAddress}
              </span>
            </div>
            <div className="userShowInfo">
              {/* <LocationSearching className="userShowIcon" /> */}
              <span className="userShowIcon">Local Govt Area:</span>
              <span className="userShowInfoTitle">
                {singleAgent?.address?.lga}
              </span>
            </div>
            <div className="userShowInfo">
              {/* <LocationSearching className="userShowIcon" /> */}
              <span className="userShowIcon">State:</span>
              <span className="userShowInfoTitle">
                {singleAgent?.address?.state}
              </span>
            </div>
            {/* //!other info */}
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
                    {singleAgent?.properties?.map((itm) => {
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
              {/* <LocationSearching className="userShowIcon" /> */}
              <div className="userShowIcon">signature:</div>
              <br />
              <div className="userShowTop">
                <img
                  src={singleAgent?.profilePhoto}
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
