import React, { useEffect } from "react";
// import "./landlordlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  getPropertyOwersList,
  deleteSingleOwner,
} from "../../redux/propertyOwers/propertyOwerActions";
import { deleteSingleAgent } from "../../redux/agents/agentActions";
import { CircularProgress } from "@material-ui/core";
import { Toaster } from "react-hot-toast";

function PropertOwners() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  //get property ower list from Reducer
  const propertyOwersReducer = useSelector((state) => state.propertyOwers);
  const propertyOwersList = propertyOwersReducer?.allPropertyOwers?.entities;
  const loading = propertyOwersReducer?.loading;

  //define states and console.log
  // const [data, setData] = useState(propertyOwersList);
  // console.log({ propertyOwersList }, "propertyower234");

  useEffect(() => {
    dispatch(getPropertyOwersList());
  }, [dispatch]);

  //! come back to this...
  const handleDelete = (id) => {
    dispatch(deleteSingleOwner(id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "full Name",
      headerName: "Full Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row?.profilePhoto}
              alt=""
            />
            {`${params.row?.lastName} ${params.row?.firstName}`}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 120,
    // },
    {
      field: "state",
      headerName: "State",
      width: 120,
      renderCell: (params) => {
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
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/property-owers/" + params.row.email}>
              <button className="productListEdit">View</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
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
  const searchPropertyOwner = propertyOwersList?.filter((item) => {
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

          {/* <Link to="/new-staff">
            <button className="userAddButton">Create</button>
          </Link> */}
        </div>
        {!searchPropertyOwner || !propertyOwersList || loading ? (
          <CircularProgress />
        ) : (
          <DataGrid
            rows={searchPropertyOwner && searchPropertyOwner}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        )}
      </div>
    </div>
  );
}

export default PropertOwners;
