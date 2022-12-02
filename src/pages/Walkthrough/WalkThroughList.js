import { useEffect, useState } from "react";
// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { CircularProgress } from "@material-ui/core";
import { openAdminCategoryDialog } from "../../redux/admins/adminActions";
import CreateWalkThroughFee from "./CreateWalkThroughFee";
import { getWalkthroughList } from "../../redux";

export default function WalkThroughList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const { walkthroughPlans, loading } = useSelector((state) => state.walkthrough);

  //getAllAgent
  useEffect(() => {
    dispatch(getWalkthroughList());
  }, [dispatch]);


  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "apartmentType",
      headerName: "Apartment Type",
      width: 300,
    },
    { field: "planType", headerName: "Plan Type", width: 200 },
    {
      field: "prices",
      headerName: "Prices",
      width: 160,
    },
  ];

  const walkRow = walkthroughPlans?.map((data) => ({
    id: data?.id,
    apartmentType: data?.apartmentType,
    planType: data?.walkthroughVideoPlanResponse?.planType,
    prices: data?.price,
  }));

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  

  return (
    <div className="containerSide">
      <Toaster />
      <Sidebar />
      <div className="productList">
        <div className="search">
          <div>
            <input
              className="searchInput"
              type="search"
              placeholder="search"
              value={search}
              onChange={handleChange}
            />
          </div>
          <button
            className="userAddButton"
            onClick={() => dispatch(openAdminCategoryDialog())}
            style={{width: "300px"}}
          >
            Create Walkthrough fee
          </button>
        </div>
        {!walkthroughPlans ? (
          <CircularProgress />
        ) : (
          <DataGrid
            rows={walkRow}
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
