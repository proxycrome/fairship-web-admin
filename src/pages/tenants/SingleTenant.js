import { Link, useParams } from "react-router-dom";
// import { Publish } from "@material-ui/icons";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTenantDetailsByEmail, getTenantProperty } from "../../redux/tenants/tenantActions";


export default function SingleTenant() {
  const dispatch = useDispatch();
  const params = useParams();

  const allTenants = useSelector((state) => state.tenants);
  const singleTenant = allTenants?.tenant;
  const tenantProperties = allTenants?.property;

  // console.log(singleTenant, "tenant400");

  useEffect(() => {
    dispatch(getTenantDetailsByEmail(params.email));
  }, [params]);

  useEffect(() => {
    if(singleTenant){
      dispatch(getTenantProperty(singleTenant?.id));
    }   
  }, [singleTenant]);

  return (
    <div className="containerSide">
      <Sidebar />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Tenant Details</h1>
          {/* <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link> */}
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src={singleTenant?.profilePhoto}
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {singleTenant?.fullName}
                </span>
                <span className="userShowUserTitle">
                  00000{singleTenant?.id}
                </span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Tenant Details</span>
              <div className="userShowInfo">
                {/* <PermIdentity className="userShowIcon" /> */}
                <span className="userShowIcon">Tenant Type:</span>
                <span className="userShowInfoTitle">
                  {singleTenant?.agentDetail?.type}
                </span>
              </div>
              <div className="userShowInfo">
                {/* <CalendarToday className="userShowIcon" /> */}
                <span className="userShowIcon">Gender:</span>
                <span className="userShowInfoTitle">{singleTenant?.gender}</span>
              </div>
              <div className="userShowInfo">
                {/* <CalendarToday className="userShowIcon" /> */}
                <span className="userShowIcon">Tenant Company:</span>
                <span className="userShowInfoTitle">
                  {singleTenant?.agentDetail?.company}
                </span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                {/* <PhoneAndroid className="userShowIcon" /> */}
                Phone
                <span className="userShowInfoTitle">{singleTenant?.phone}</span>
              </div>
              <div className="userShowInfo">
                {/* <MailOutline className="userShowIcon" /> */}
                <span className="userShowIcon">Email:</span>

                <span className="userShowInfoTitle">{singleTenant?.email}</span>
              </div>
              <div className="userShowInfo">
                {/* <LocationSearching className="userShowIcon" /> */}
                <span className="userShowIcon">Country:</span>
                <span className="userShowInfoTitle">
                  {singleTenant?.address?.country}
                </span>
              </div>
            </div>
          </div>

          {/* {hello world} */}
          <div className="userUpdate">
            <span className="userShowTitle"> Tenant Address</span>
            <div className="userShowInfo">
              {/* <LocationSearching className="userShowIcon" /> */}
              <span className="userShowIcon">House Address:</span>
              <span className="userShowInfoTitle">
                {singleTenant?.address?.houseNoAddress}
              </span>
            </div>
            <div className="userShowInfo">
              {/* <LocationSearching className="userShowIcon" /> */}
              <span className="userShowIcon">Local Govt Area:</span>
              <span className="userShowInfoTitle">
                {singleTenant?.address?.lga}
              </span>
            </div>
            <div className="userShowInfo">
              {/* <LocationSearching className="userShowIcon" /> */}
              <span className="userShowIcon">State:</span>
              <span className="userShowInfoTitle">
                {singleTenant?.address?.state}
              </span>
            </div>
            {/* <span className="userShowTitle">Other info </span> */}
            {/* <div className="userShowInfo">
              <span className="userShowIcon">serviceProviderDetail:</span>
              <span className="userShowInfoTitle">
                {singleTenant.serviceProviderDetail}
              </span>
            </div> */}
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
                    {tenantProperties?.map((itm) => {
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
                  src={singleTenant?.profilePhoto}
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
