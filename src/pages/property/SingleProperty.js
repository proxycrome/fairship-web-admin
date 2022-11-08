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
import { singlePropertyById ,propertyapproval} from "../../redux/property/propertyActions";

function SingleProperty() {
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params, 'proParams')

  const propertyList = useSelector((state) => state.properties);
  const singleProperty = propertyList.viewProperty;

  console.log({ propertyList, singleProperty }, "propertyList");

  useEffect(() => {
    dispatch(singlePropertyById(params.id));
  }, [params]);

  const propertyapprove = (id) => {
    console.log(id)
    dispatch(propertyapproval(id))
  }

  return (
    <div className="containerSide">
      <Sidebar />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Property Details</h1>
          {/* <Link to="/newUser">
           <button className="userAddButton">Create</button>
         </Link> */}
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              {singleProperty.images?.map((img) => {
                return (
                  <a href={img.imageUrl} target="_blank">
                    <img src={img.imageUrl} alt="" className="userShowImg" />
                  </a>
                );
              })}
              <div className="userShowTopTitle">
                <span className="userShowUserTitle">
                  {singleProperty.propertyRef}
                </span>
                <span className="userShowUsername">
                  {singleProperty.entityLevel}
                </span>
                <span className="userShowUsername">
                  {singleProperty.feature}
                </span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Property Details</span>
              <div className="userShowInfo">
                <span className="userShowIcon">Bathroom:</span>
                <span className="userShowInfoTitle">
                  {singleProperty.bathrooms}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Bedroom:</span>
                <span className="userShowInfoTitle">
                  {singleProperty.bedrooms}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Description:</span>
                <span className="userShowInfoTitle">
                  {singleProperty.description}
                </span>
              </div>
              <span className="userShowTitle">Payment Details</span>
              <div className="userShowInfo">
                Price:
                <span className="userShowInfoTitle">
                  {singleProperty.price}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Period:</span>

                <span className="userShowInfoTitle">
                  {singleProperty.periodInMonths} months
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Parking Lot:</span>
                <span className="userShowInfoTitle">
                  {singleProperty.parkingLot}
                </span>
              </div>
            </div>
          </div>

          <div className="userUpdate">
            <span className="userShowTitle"> Property Address</span>
            <div className="userShowInfo">
              <span className="userShowIcon">House Address:</span>
              <span className="userShowInfoTitle">
                {singleProperty.address?.houseNoAddress}
              </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowIcon">city:</span>
              <span className="userShowInfoTitle">
                {singleProperty.address?.city}
              </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowIcon">country:</span>
              <span className="userShowInfoTitle">
                {singleProperty.address?.country}
              </span>
            </div>
            <span className="userShowTitle">Other info </span>
            <div className="userShowInfo">
              <span className="userShowIcon">rented By:</span>
              <span className="userShowInfoTitle">
                {singleProperty?.rentedBy?.firstName}
              </span>
              <span className="userShowInfoTitle">
                {singleProperty?.rentedBy?.lastName}
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
              <span className="userShowInfoTitle">{singleProperty?.title}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowIcon">Type:</span>
              <span className="userShowInfoTitle">{singleProperty?.type}</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowIcon">Size:</span>
              <span className="userShowInfoTitle">{singleProperty?.size}</span>
            </div>

            <div className="userShowInfo">
              <div className="userShowIcon">Unit No:</div>
              <span className="userShowInfoTitle">
                {singleProperty?.unitNo}
              </span>
            </div>

            {singleProperty?.status !== "ACTIVE" ? (
              <button
                className="userListEdit"
                onClick={propertyapprove(params.id)}
              >
                UnApproved
              </button>
            ) : (
              <button className="userListEdit">Approved</button>
            )}
          </div>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default SingleProperty;
