import { useEffect, useState } from "react";
// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAgent,
  deleteSingleAgent,
} from "../../redux/agents/agentActions";
import { CircularProgress } from "@material-ui/core";
import { Toaster } from "react-hot-toast";

export default function AgentList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const agentList = useSelector((state) => state.agents);
  const agent = agentList?.allAgent?.entities;
  const loading = agentList?.loading;

  //console.log
  console.log({ agentList, agent }, "allagent");
  // console.log(agent, 'data')

  //getAllAgent
  useEffect(() => {
    dispatch(getAllAgent());
  }, [dispatch]);

  //! come back to it.....
  const handleDelete = async (id) => {
    await dispatch(deleteSingleAgent(id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "full Name",
      headerName: "Full Name",
      width: 200,
      renderCell: (params) => {
        // console.log(params)
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilePhoto} alt="" />
            {params.row.lastName} {params.row.firstName}
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
      field: "state",
      headerName: "State",
      width: 120,
      renderCell: (params) => {
        // console.log(params)
        return (
          <div className="productListItem">
            {/* <img className="productListImg" src={params.row.img} alt="" /> */}
            {params.row.address?.state}
          </div>
        );
      },
    },
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
        // console.log(params, 'sodiq')
        return (
          <>
            <div className="actionBtn">
              <div className="actionBtn2">
                <Link to={"/agent/" + params.row.email}>
                  <button className="userListEdit">View</button>
                </Link>
              </div>
              <div className="actionBtn2">
                <DeleteOutline
                  className="userListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </div>
            </div>
          </>
        );
      },
    },
  ];

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //search
  const searchAgent = agent?.filter((item) => {
    return (
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.firstName.toLowerCase().includes(search.toLowerCase()) ||
      item.lastName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="containerSide">
      <Toaster />
      <Sidebar />
      <div className="userList">
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

          {/* <Link to="/new-staff">
            <button className="userAddButton">Create</button>
          </Link> */}
        </div>
        {!agent || !searchAgent || loading ? (
          <CircularProgress />
        ) : (
          <DataGrid
            rows={searchAgent && searchAgent}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection
          />
        )}

        <Outlet />
      </div>
    </div>
  );
}
