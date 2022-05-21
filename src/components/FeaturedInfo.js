import { useEffect } from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { getAllAgent } from "../redux/agents/agentActions";
import { getPropertyOwersList } from "../redux/propertyOwers/propertyOwerActions";
import { getTenantList } from "../redux/tenants/tenantActions";

import { Link } from "react-router-dom";

export default function FeaturedInfo() {
  const dispatch = useDispatch();

  //get the total of all registered agents
  const agentList = useSelector((state) => state.agents);
  const agent = agentList?.allAgent?.entities;

  //get the total of all registered property Ower
  const propertyOwersReducer = useSelector((state) => state.propertyOwers);
  const propertyOwersList = propertyOwersReducer?.allPropertyOwers?.entities;
  // const propertyower = propertyOwersList.length

  //get the total of all registered tenants
  const tenantReducer = useSelector((state) => state.tenants);
  const tenantList = tenantReducer?.allTenant?.entities;

  //get the total of all registered service provider
  const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  const serProviderList = serviceProviderReducer?.allServiceProviders?.entities;

  // console.log({ agentList, agent, agentLength }, "allagent");
  // console.log(agentLength, "agentLength");

  useEffect(() => {
    dispatch(getAllAgent());
    dispatch(getPropertyOwersList());
    dispatch(getTenantList());
  }, [dispatch]);

  return (
    <div className="featured">
      <Link to="/agent">
        <div className="featuredItem">
          <span className="featuredTitle">AGENTS</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              {!agent ? <CircularProgress /> : agent.length}
            </span>
          </div>
          <span className="featuredSub">All Registered Agents</span>
        </div>
      </Link>

      <Link to="/tenants">
        <div className="featuredItem">
          <span className="featuredTitle">TENANTS</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              {!tenantList ? <CircularProgress /> : tenantList.length}
            </span>
          </div>
          <span className="featuredSub">All registered Tenant</span>
        </div>
      </Link>

      <Link to="/property-owers">
        <div className="featuredItem">
          <span className="featuredTitle">PROPERTY OWNERS</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              {!propertyOwersList ? (
                <CircularProgress />
              ) : (
                propertyOwersList.length
              )}
            </span>
          </div>
          <span className="featuredSub">All Registered Property owners</span>
        </div>
      </Link>
      <Link to="/service-provider-list">
        <div className="featuredItem">
          <span className="featuredTitle">SERVICE PROVIDER</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              {!serProviderList ? <CircularProgress /> : serProviderList.length}
            </span>
          </div>
          <span className="featuredSub">All Registered service Provider</span>
        </div>
      </Link>
    </div>
  );
}
