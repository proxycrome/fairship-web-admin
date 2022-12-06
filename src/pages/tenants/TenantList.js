// import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../../dummyData";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getTenantList, deleteSingleTenant } from "../../redux/tenants/tenantActions";
import { Toaster } from "react-hot-toast";


export default function TenantList() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  //get tenantList
  const tenantReducer = useSelector((state) => state.tenants);
  const tenantList = tenantReducer?.allTenant?.entities;
  const loading = tenantReducer?.loading;

  //dispatch get all Agent
  useEffect(() => {
    dispatch(getTenantList());
  }, [dispatch]);

  //!come back to this.....
  const handleDelete = (id) => {
    dispatch(deleteSingleTenant(id));
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
            <div className="actionBtn">
              <div className="actionBtn2">
                <Link to={"/tenants/" + params.row.email}>
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
          </>
        );
      },
    },
  ];
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //search
  const searchTenant = tenantList?.filter((item) => {
    return (
      item.email.includes(search) ||
      item.firstName.includes(search) ||
      item.lastName.includes(search)
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
        {!searchTenant || !tenantList || loading ? (
          <CircularProgress />
        ) : (
          <DataGrid
            rows={searchTenant && searchTenant}
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
