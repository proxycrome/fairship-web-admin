import { useEffect, useState } from "react";
// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { CircularProgress } from "@material-ui/core";
import { openAdminCategoryDialog } from "../../redux/admins/adminActions";
import CreateWalkThroughFee from "./CreatePmaFee";
import { getPmaFees } from "../../redux";

export default function PmaFeeList() {
  const [search, setSearch] = useState("PMA_VERIFICATION");
  const dispatch = useDispatch();

  const { pmaFees, loading } = useSelector((state) => state.pma);

  //   const admin = adminReducer.allAdmin.entities;

  //console.log
  // console.log({ agentList, agent }, "allagent");
  // console.log(agent, 'data')

  //getAllAgent
  useEffect(() => {
    dispatch(getPmaFees(search));
  }, [dispatch, search]);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "feeType",
      headerName: "Fee Type",
      width: 300,
    },
    { field: "fee", headerName: "Fee", width: 200 },
  ];

  const pmaRow = [
    {
      id: pmaFees?.id,
      feeType: pmaFees?.feeType,
      fee: pmaFees?.fee,
    },
  ];

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //search
  //   const searchWalkPlan = walkthroughPlans?.filter((item) => {
  //     return (
  //       item.email.toLowerCase().includes(search.toLowerCase()) ||
  //       item?.administrator?.fullName.toLowerCase().includes(search.toLowerCase())
  //     );
  //   });

  return (
    <div className="containerSide">
      <Toaster />
      <Sidebar />
      <div className="productList">
        <div className="search">
          <div>
            <select
              style={{width: "300px", height: "40px", outline: "none", border: "2px solid #ccc"}}
              name="search"
              defaultValue={search}
              onChange={handleChange}
            >
              <option value="PMA_VERIFICATION" selected>PMA VERIFICATION</option>
              <option value="AGENT_SUBSCRIPTION">AGENT SUBSCRIPTION</option>
            </select>
            {/* <button className="searchButton" type="button">
              Search
            </button> */}
          </div>
          <button
            className="userAddButton"
            onClick={() => dispatch(openAdminCategoryDialog())}
            style={{ width: "300px" }}
          >
            Update Fees
          </button>
        </div>
        {!pmaFees || loading ? (
          <CircularProgress />
        ) : (
          <DataGrid
            rows={pmaRow}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection
          />
        )}
        <CreateWalkThroughFee />
        {/* <Outlet /> */}
      </div>
    </div>
  );
}
