import { useEffect, useState } from "react";
// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteSingleAdmin, getAllAdmin } from "../../redux/admins/adminActions";
import { CircularProgress } from "@material-ui/core";
import { openAdminCategoryDialog } from "../../redux/admins/adminActions";
import CreateStaffList from "./CreateStaffList";
import { Toaster } from "react-hot-toast";

export default function StaffList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const adminReducer = useSelector((state) => state.admin);
  // console.log(adminReducer);

  const admin = adminReducer?.allAdmin?.entities;
  const loading = adminReducer?.loading;

  // console.log({admin});
  // console.log({ agentList, agent }, "allagent");
  // console.log(agent, 'data')

  //getAllAgent
  useEffect(() => {
    dispatch(getAllAdmin());
  }, [dispatch]);

  //! come back to it.....
  const handleDelete = (id) => {
    dispatch(deleteSingleAdmin(id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "full Name",
      headerName: "Full Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row?.profilePhoto} alt="" />
            {params.row?.administrator?.fullName === "null null"
              ? ""
              : params.row?.administrator?.fullName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 200,
    // },
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/agent/" + params.row.email}>
              <button className="userListEdit">View</button>
            </Link> */}
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //search
  const searchAdmin = admin?.filter((item) => {
    return (
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item?.administrator?.fullName.toLowerCase().includes(search.toLowerCase())
    );
  });

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
            {/* <button className="searchButton" type="button">
              Search
            </button> */}
          </div>
          <button
            className="userAddButton"
            onClick={() => dispatch(openAdminCategoryDialog())}
          >
            Create Admin
          </button>
        </div>
        {!searchAdmin || !admin || loading ? (
          <CircularProgress />
        ) : (
          <DataGrid
            rows={searchAdmin && searchAdmin}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection
          />
        )}
        <CreateStaffList />
        {/* <Outlet /> */}
      </div>
    </div>
  );
}
