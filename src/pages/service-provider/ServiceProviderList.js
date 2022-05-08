import { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { getServiceProviderList } from "../../redux/serviceProviders/serviceProviderActions";


function ServiceProviderList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  //useSelector
  const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  const serProviderList = serviceProviderReducer.allServiceProviders.entities;

  // local states
  // console.log({ serviceProviderReducer, serProviderList }, "service");

  useEffect(() => {
    dispatch(getServiceProviderList());
  }, [dispatch]);

  //!come back to this...
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

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
              src={params.row.profilePhoto}
              alt=""
            />
            {`${params.row.lastName} ${params.row.firstName}`}
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
            <Link to={"/service-provider-list/" + params.row.email}>
              <button className="productListEdit">View</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              // onClick={() => handleDelete(params.row.id)}
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
  const searchSerProvider = serProviderList?.filter((item) => {
    return (
      item.email.includes(search) ||
      item.firstName.includes(search) ||
      item.lastName.includes(search)
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
          <div className="services">
            <Link to="/ser-type-list">
              <button className="userAddButton">Service Type</button>
            </Link>
            <Link to="/ser-category-List">
              <button className="userAddButton">Service Category</button>
            </Link>
          </div>
        </div>
        {!searchSerProvider ? (
          <CircularProgress className="spinner" />
        ) : (
          <DataGrid
            rows={searchSerProvider && searchSerProvider}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            checkboxSelection
          />
        )}
      </div>
    </div>
  );
}

export default ServiceProviderList;
