import { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { getServiceProviderList, deleteServiceProvider } from "../../redux/serviceProviders/serviceProviderActions";
import CustomDialog from "../../components/CustomDialog";


function ServiceProviderList({open}) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  //useSelector
  const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  const serProviderList = serviceProviderReducer?.allServiceProviders?.entities;
  const loading = serviceProviderReducer?.loading;

  // console.log(serProviderList, "serProvider");

  //  const getAllRequest = properties?.filter((r) => r.status === "PENDING");
  // const getAllRequest = properties?.filter((r) =>
  //   r.status.toLowerCase().includes(radioSearch.toLowerCase())
  // );

  // local states
  console.log({ serviceProviderReducer, serProviderList }, "service");

  useEffect(() => {
    dispatch(getServiceProviderList());
  }, [dispatch]);

  console.log(serProviderList);

  // !come back to this...
  const handleDelete = (id) => {
    dispatch(deleteServiceProvider(id));
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
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return(params.row.serviceProviderDetail.registrationStatus)
        // return (
        //   <div className="productListItem">
        //     {/* <img className="productListImg" src={params.row.img} alt="" /> */}
        //     {params.row.address?.state}
        //   </div>
        // );
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
          <div className="actionBtn">
            <div className="actionBtn2">
              <Link to={"/service-provider-list/" + params.row.email}>
                <button className="productListEdit">View</button>
              </Link>
            </div>
            <div className="actionBtn2">
              <DeleteOutline
                className="productListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </div>
          </div>
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
      item.lastName.includes(search) ||
      item.serviceProviderDetail
        .registrationStatus.toLowerCase()
        .includes(search.toLowerCase())
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
            {/* <Link to="/ser-category-List">
              <button className="userAddButton">Service Category</button>
            </Link> */}
          </div>
        </div>
        {!searchSerProvider || !serProviderList || loading ? (
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
      {/* <CustomDialog  open={false} /> */}
    </div>
  );
}

export default ServiceProviderList;
