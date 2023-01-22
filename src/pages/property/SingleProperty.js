import { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { CircularProgress } from "@material-ui/core";
import {
  singlePropertyById,
  propertyapproval,
} from "../../redux/property/propertyActions";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.css";
import { openWalkUploadDialog } from "../../redux";
import UploadWalkVideo from "./UploadWalkVideo";

function SingleProperty() {
  const dispatch = useDispatch();
  const params = useParams();
  // console.log(params, 'proParams')

  const propertyList = useSelector((state) => state.properties);
  const singleProperty = propertyList?.viewProperty;
  const loading = propertyList?.loading;

  // console.log(singleProperty, "singleProperty");

  useEffect(() => {
    dispatch(singlePropertyById(params.id));
  }, [params]);

  const propertyapprove = (id) => {
    dispatch(propertyapproval(id));
  };

  return (
    <div className="containerSide">
      <Toaster />
      <Sidebar />
      <div className="user">
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <div className="userTitleContainer">
              <h1 className="userTitle">Property Details</h1>
              <button
                className="userAddButton"
                style={{ width: "300px" }}
                onClick={() => dispatch(openWalkUploadDialog(singleProperty))}
              >
                Upload Walkthrough Video
              </button>
            </div>
            <div className="userContainer">
              <div className="userShow">
                <div className="userShowTop">
                  {singleProperty?.images?.map((img) => {
                    return (
                      <a
                        href={img.imageUrl}
                        target="_blank"
                        rel="noreferrer"
                        key={img.id}
                      >
                        <img
                          src={img.imageUrl}
                          alt=""
                          className="userShowImg"
                        />
                      </a>
                    );
                  })}
                  <div className="userShowTopTitle">
                    <span className="userShowUserTitle">
                      {singleProperty?.propertyRef}
                    </span>
                    <span className="userShowUsername">
                      {singleProperty?.entityLevel}
                    </span>
                    <span className="userShowUsername">
                      {singleProperty?.feature}
                    </span>
                  </div>
                </div>
                <div className="userShowBottom">
                  <span className="userShowTitle">Property Details</span>
                  <div className="userShowInfo">
                    <span className="userShowIcon">Bathroom:</span>
                    <span className="userShowInfoTitle">
                      {singleProperty?.bathrooms}
                    </span>
                  </div>
                  <div className="userShowInfo">
                    <span className="userShowIcon">Bedroom:</span>
                    <span className="userShowInfoTitle">
                      {singleProperty?.bedrooms}
                    </span>
                  </div>
                  <div className="userShowInfo">
                    <span className="userShowIcon">Description:</span>
                    <span className="userShowInfoTitle">
                      {singleProperty?.description}
                    </span>
                  </div>
                  <span className="userShowTitle">Payment Details</span>
                  <div className="userShowInfo">
                    Price:
                    <span className="userShowInfoTitle">
                      {singleProperty?.price}
                    </span>
                  </div>
                  <div className="userShowInfo">
                    <span className="userShowIcon">Period:</span>

                    <span className="userShowInfoTitle">
                      {singleProperty?.periodInMonths}{" "}
                      {singleProperty?.periodInMonths ? "months" : ""}
                    </span>
                  </div>
                  <div className="userShowInfo">
                    <span className="userShowIcon">Parking Lot:</span>
                    <span className="userShowInfoTitle">
                      {singleProperty?.parkingLot}
                    </span>
                  </div>
                </div>
              </div>

              <div className="userUpdate">
                <span className="userShowTitle"> Property Address</span>
                <div className="userShowInfo">
                  <span className="userShowIcon">House Address:</span>
                  <span className="userShowInfoTitle">
                    {singleProperty?.address?.houseNoAddress}
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowIcon">city:</span>
                  <span className="userShowInfoTitle">
                    {singleProperty?.address?.city}
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowIcon">country:</span>
                  <span className="userShowInfoTitle">
                    {singleProperty?.address?.country}
                  </span>
                </div>
                <span className="userShowTitle">Other info </span>
                {singleProperty?.feature === "RENT" ? (
                  <div className="userShowInfo">
                    <span className="userShowIcon">rented By:</span>
                    <span className="userShowInfoTitle">
                      {singleProperty?.rentedBy?.firstName}
                    </span>
                    <span className="userShowInfoTitle">
                      {singleProperty?.rentedBy?.lastName}
                    </span>
                  </div>
                ) : (
                  <div className="userShowInfo">
                    <span className="userShowIcon">Purchased By:</span>
                    <span className="userShowInfoTitle">
                      {singleProperty?.purchasedBy?.firstName}
                    </span>
                    <span className="userShowInfoTitle">
                      {singleProperty?.purchasedBy?.lastName}
                    </span>
                  </div>
                )}
                <div className="userShowInfo">
                  <span className="userShowIcon">Agent:</span>
                  <span className="userShowInfoTitle">
                    {singleProperty?.agentDetail?.firstName}
                  </span>
                  <span className="userShowInfoTitle">
                    {singleProperty?.agentDetail?.lastName}
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowIcon">Published By:</span>
                  <span className="userShowInfoTitle">
                    {singleProperty?.publishedBy?.firstName}
                  </span>
                  <span className="userShowInfoTitle">
                    {singleProperty?.publishedBy?.lastName}
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowIcon">Status:</span>
                  <span className="userShowInfoTitle">
                    {singleProperty?.status}
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowIcon">Title:</span>
                  <span className="userShowInfoTitle">
                    {singleProperty?.title}
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowIcon">Type:</span>
                  <span className="userShowInfoTitle">
                    {singleProperty?.type}
                  </span>
                </div>
                <div className="userShowInfo">
                  <span className="userShowIcon">Size:</span>
                  <span className="userShowInfoTitle">
                    {singleProperty?.size}
                  </span>
                </div>

                <div className="userShowInfo">
                  <div className="userShowIcon">Unit No:</div>
                  <span className="userShowInfoTitle">
                    {singleProperty?.unitNo}
                  </span>
                </div>

                <div className="userShowInfo">
                  <div className="userShowIcon">Walkthrough Video:</div>
                  <span className="userShowInfoTitle">
                    <a
                      href={singleProperty?.video?.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {singleProperty?.video?.videoUrl}
                    </a>
                  </span>
                </div>

                {singleProperty?.entityLevel === "COLLECTIVE_ENTITY" ? (
                  <>
                    <span className="userShowTitle">Unit Properties</span>
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
                            {singleProperty?.unitProperties?.map((itm) => {
                              return (
                                <tr className="widgetLgTr" key={itm.id}>
                                  <td className="widgetLgName">
                                    {itm?.parentProperty?.title} {itm?.title}
                                  </td>
                                  <td className="widgetLgName">
                                    {itm.propertyRef}
                                  </td>
                                  <td className="widgetLgDate">
                                    {itm.entityLevel}
                                  </td>
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
                  </>
                ) : singleProperty?.entityLevel === "UNIT_ENTITY" ? (
                  <>
                    <span className="userShowTitle">Parent Property</span>
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
                            <tr
                              className="widgetLgTr"
                              key={singleProperty?.parentProperty?.id}
                            >
                              <td className="widgetLgName">
                                {singleProperty?.parentProperty?.title}
                              </td>
                              <td className="widgetLgName">
                                {singleProperty?.parentProperty?.propertyRef}
                              </td>
                              <td className="widgetLgDate">
                                {singleProperty?.parentProperty?.entityLevel}
                              </td>
                              <td className="widgetLgAmount">
                                {singleProperty?.parentProperty?.type}
                              </td>
                              <td className="widgetLgUser">
                                <Link
                                  to={`/property-list/${singleProperty?.parentProperty?.id}`}
                                >
                                  <h5>View</h5>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </span>
                    </div>
                  </>
                ) : null}

                {singleProperty?.status !== "ACTIVE" ? (
                  <button
                    className="userListEdit"
                    onClick={() => propertyapprove(params.id)}
                    style={{ background: "#ff0000" }}
                  >
                    UnApproved
                  </button>
                ) : (
                  <button className="userListEdit" disabled>
                    Approved
                  </button>
                )}
              </div>
            </div>
            <Card className="mt-4">
              <CardBody>
                <div>
                  <h6>Documents</h6>
                  <div>
                    {/* <span>Lease Agreement</span> */}
                    <div className="d-flex flex-wrap mt-2">
                      {singleProperty?.documents?.length > 0
                        ? singleProperty?.documents?.map((item) => (
                            <Card key={item.id} className="shadow-lg mr-3 mt-3">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <CardBody className="">
                                  <h6 className="card-title">
                                    {item.name === "OTHERS"
                                      ? item?.title
                                      : item.name}
                                  </h6>
                                </CardBody>
                              </a>
                            </Card>
                          ))
                        : "No document found"}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </>
        )}
      </div>
      <UploadWalkVideo />
    </div>
  );
}

export default SingleProperty;
