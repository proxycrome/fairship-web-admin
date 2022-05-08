import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
// import "./stafflist.css";
import {
  getAllServiceType,
  openServiceTypeDialog,
  serviceCategories,
} from "../../../redux/serviceProviders/serviceProviderActions";
import CreateSerType from "./CreateSerType";



function SerTypeList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  const serTypeList = serviceProviderReducer.serviceType;

  //  const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  const serCategory = serviceProviderReducer.serviceCategories;

  console.log({  serTypeList, serCategory }, "service");

  //!coming back to this...
  //   const handleDelete = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };

  useEffect(() => {
    dispatch(getAllServiceType());
    dispatch(serviceCategories());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Service Type", width: 300 },
    // { field: "priceRange", headerName: "Price Range", width: 200 },
    { field: "status", headerName: "Status", width: 200 },

    {
      field: "action",
      headerName: "Action",
      width: 250,
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
  const searchSerType = serTypeList?.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.status.toLowerCase().includes(search.toLowerCase())
    );
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
            onClick={() => dispatch(openServiceTypeDialog(serTypeList))}
          >
            create
          </button>
        </div>

        {!searchSerType ? (
          <CircularProgress className="spinner" />
        ) : (
          <DataGrid
            rows={searchSerType && searchSerType}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection
          />
        )}
      </div>
      <CreateSerType />
    </div>
  );
}

export default SerTypeList;
