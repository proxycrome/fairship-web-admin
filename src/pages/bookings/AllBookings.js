import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { CircularProgress } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { appointmentBookingList } from "../../redux/bookings/bookingActions";

function AllBookings() {
  const dispatch = useDispatch();
  //get all appointment bookings
  const bookingList = useSelector((state) => state.bookings);
  const bookings = bookingList.allBookings;

  // local states
  // const [data, setData] = useState(productRows);

  //console.log
  // console.log({ bookingList, bookings }, "bookingReducer");

  //dispatch get all Agent
  useEffect(() => {
    dispatch(appointmentBookingList());
  }, [dispatch]);

  //!come back to this.....
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "tenant",
      headerName: "Tenants",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.tenant?.profilePhoto}
              alt=""
            />
            {`${params.row.tenant?.lastName} ${params.row.tenant?.firstName}`}
          </div>
        );
      },
    },
    {
      field: "recipient",
      headerName: "Recipients",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.recipient?.profilePhoto}
              alt=""
            />
            {`${params.row.recipient?.lastName} ${params.row.recipient?.firstName}`}
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "propertyRef",
      headerName: "PropertyRef",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {/* <img className="productListImg" src={params.row.img} alt="" /> */}
            {params.row.property?.propertyRef}
          </div>
        );
      },
    },
    //    {
    //      field: "phone",
    //      headerName: "Phone",
    //      width: 160,
    //    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/tenants/" + params.row.email}> */}
            <button className="productListEdit">View</button>
            {/* </Link> */}
            <DeleteOutline
              className="productListDelete"
              // onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="containerSide">
      <Sidebar />
      <div className="productList">
        <div className="search">
          <div>
            <input className="searchInput" type="search" placeholder="search" />
            <button className="searchButton" type="button">
              Search
            </button>
          </div>

          {/* <Link to="/new-staff">
            <button className="userAddButton">Create</button>
          </Link> */}
        </div>
        {!bookings ? (
          <CircularProgress />
        ) : (
          <DataGrid
            rows={bookings && bookings}
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

export default AllBookings;
