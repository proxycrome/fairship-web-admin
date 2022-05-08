import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import Sidebar from "../../../components/Sidebar";
import {
  openServiceCategoryDialog,
  serviceCategories,
} from "../../../redux/serviceProviders/serviceProviderActions";
import CreateSerCategory from "./CreateSerCategory";

function SerCategoryList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  const serCategory = serviceProviderReducer.serviceCategories;

  // console.log({ serviceProviderReducer, serCategory}, "service999");

  useEffect(() => {
    dispatch(serviceCategories());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Service Category", width: 300 },

    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to="#">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              //   onClick={() => handleDelete(params.row.id)}
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
  const searchSerCategory = serCategory?.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="containerSide">
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
            onClick={() => dispatch(openServiceCategoryDialog())}
          >
            Create
          </button>
        </div>

        {!searchSerCategory ? (
          <CircularProgress className="spinner" />
        ) : (
          <DataGrid
            rows={searchSerCategory && searchSerCategory}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection
          />
        )}
      </div>
      <CreateSerCategory />
    </div>
  );
}

export default SerCategoryList;
