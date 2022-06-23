import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useMatch, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { serviceCategories, serviceProviderApproved, serviceProviderByEmail } from "../../redux/serviceProviders/serviceProviderActions";

function SingleSerProvider() {
  const [formValue, setFormValue] = useState({
  action: "APPROVED",
  comments: "",
  serviceProviderId: 0
  })

  const dispatch = useDispatch();
  const params = useParams();

  const allServiceProvider = useSelector((state) => state.serviceProviders);
  const singleservice = allServiceProvider.serviceProvider;

  //  const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  // const serCategory = serviceProviderReducer.serviceCategories;

  console.log({ allServiceProvider,singleservice }, "servicePro");


  useEffect(() => {
    if (singleservice) {
      setFormValue({
        ...formValue,
        serviceProviderId: singleservice.serviceProviderDetail.id,
      });
    }
  }, [singleservice]);

  
  const approveSerProvider =(act)=>{
    const {comments, serviceProviderId } = formValue;
    const action = act
    dispatch(serviceProviderApproved(action, comments, serviceProviderId));


  }

  useEffect(() => {
    dispatch(serviceProviderByEmail(params.email));
  }, [params]);

  return (
    <div className="containerSide">
      <Sidebar />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Service Provider Details</h1>
          {/* <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link> */}
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={singleservice.profilePhoto}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {singleservice.fullName}
                </span>
                <span className="userShowUserTitle">
                  00000{singleservice.id}
                </span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Service Provider Details</span>
              <div className="userShowInfo">
                <span className="userShowIcon">Service Provider Type:</span>
                <span className="userShowInfoTitle">
                  {singleservice.serviceProviderDetail?.type}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon"> Status:</span>
                <span className="userShowInfoTitle">
                  {singleservice.serviceProviderDetail?.registrationStatus}
                </span>
                <span className="userShowInfoTitle">
                  {singleservice.serviceProviderDetail?.registrationStatus !==
                  "PENDING_VERIFICATION" ? null : (
                    <>
                      <button
                      className="userAddButton"
                      onClick={() => approveSerProvider('APPROVED')}
                    >
                      Approve
                    </button>
                    {/* <button
                    className="userAddButton"
                    onClick={() => approveSerProvider('REJECTED')}
                  >
                    Reject
                  </button> */}
                    </>
                  )}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon"> Company:</span>
                <span className="userShowInfoTitle">
                  {singleservice.agentDetail?.company}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Description:</span>
                <span className="userShowInfoTitle">
                  {singleservice.serviceProviderDetail?.shortDescription}
                </span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                Phone
                <span className="userShowInfoTitle">{singleservice.phone}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Email:</span>

                <span className="userShowInfoTitle">{singleservice.email}</span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Country:</span>
                <span className="userShowInfoTitle">
                  {singleservice.address?.country}
                </span>
              </div>
              <span className="userShowTitle"> Service Provider Address</span>
              <div className="userShowInfo">
                <span className="userShowIcon">House Address:</span>
                <span className="userShowInfoTitle">
                  {singleservice.address?.houseNoAddress}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">Local Govt Area:</span>
                <span className="userShowInfoTitle">
                  {singleservice.address?.lga}
                </span>
              </div>
              <div className="userShowInfo">
                <span className="userShowIcon">State:</span>
                <span className="userShowInfoTitle">
                  {singleservice.address?.state}
                </span>
              </div>
            </div>
          </div>
          {/* {more} */}
          <div className="userUpdate">
            <span className="userShowTitle"> Service Provided:</span>
            {!singleservice.serviceProviderDetail?.servicesProvided ? (
              <h6>update your profile</h6>
            ) : (
              <div className="userShowInfo">
                <span className="userShowInfoTitle">
                  <table className="widgetLgTable">
                    <tr className="widgetLgTr">
                      <th className="widgetLgTh">id</th>
                      <th className="widgetLgTh"> Type</th>
                      <th className="widgetLgTh">Price Range</th>
                      <th className="widgetLgTh">Yrs Of Experience</th>
                    </tr>
                    {singleservice.serviceProviderDetail?.servicesProvided.map(
                      (itm) => (
                        <tr className="widgetLgTr" key={itm.id}>
                          <td className="widgetLgName">{itm.id}</td>
                          <td className="widgetLgDate">{itm.serviceType}</td>
                          <td className="widgetLgAmount">{itm.priceRange}</td>
                          <td className="widgetLgAmount">
                            {itm.yearsOfExperience}
                          </td>
                        </tr>
                      )
                    )}
                  </table>
                </span>
              </div>
            )}

            <span className="userShowTitle"> Certificates</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                <table className="widgetLgTable">
                  <tr className="widgetLgTr">
                    <th className="widgetLgTh">Name</th>
                    <th className="widgetLgTh">Institution</th>
                    <th className="widgetLgTh">Status</th>
                    <th className="widgetLgTh">Documents</th>
                  </tr>
                  {singleservice.serviceProviderDetail?.certificates.map(
                    (itm) => {
                      return (
                        <tr className="widgetLgTr" key={itm.id}>
                          <td className="widgetLgName">{itm.name}</td>
                          <td className="widgetLgDate">{itm.institution}</td>
                          <td className="widgetLgAmount">{itm.status}</td>
                          <td className="widgetLgUser">
                            <a href={itm.imageLink} target="_blank">
                              <img
                                src={itm.imageLink}
                                alt=""
                                className="widgetLgImg"
                              />
                            </a>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </table>
              </span>
            </div>
            <span className="userShowTitle"> Identifications</span>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                <table className="widgetLgTable">
                  <tr className="widgetLgTr">
                    <th className="widgetLgTh">Id type</th>
                    <th className="widgetLgTh">Id Number</th>
                    <th className="widgetLgTh">Status</th>
                    <th className="widgetLgTh">Documents</th>
                  </tr>
                  {singleservice.serviceProviderDetail?.identifications.map(
                    (itm) => {
                      return (
                        <tr className="widgetLgTr" key={itm.id}>
                          <td className="widgetLgName">{itm.idType}</td>
                          <td className="widgetLgDate">{itm.idNumber}</td>
                          <td className="widgetLgAmount">{itm.entityStatus}</td>
                          <td className="widgetLgUser">
                            <a href={itm.imageLink} target="_blank">
                              <img
                                src={itm.imageLink}
                                alt=""
                                className="widgetLgImg"
                              />
                            </a>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </table>
              </span>
            </div>
            <div className="userShowInfo">
              <div className="userShowIcon">signature:</div>
              <br />
              <div className="userShowTop">
                <img
                  src={singleservice.profilePhoto}
                  alt=""
                  className="userShowImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSerProvider;

