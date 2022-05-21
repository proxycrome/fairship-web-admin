import { useEffect, useState } from "react";
// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress} from "@material-ui/core";
import { getPropertyList, propertyapproval } from "../../redux/property/propertyActions";



export default function PropertyList() {
  const [search, setSearch] = useState("");
  // const [property, setProperty] = useState('COLLECTIVE_ENTITY');
  const [stat, setStat] = useState(false)
  const dispatch = useDispatch();
  const propertyList = useSelector((state) => state.properties);
  const properties = propertyList.allProperties.entities;

  
  // console.log({ propertyList, properties }, "propertyList");

  //getAllAgent
  useEffect(() => {
    
    dispatch(getPropertyList())
    // console.log(property)
    
 }, [dispatch]);



//  const propertyapprove = (id) => {
//    dispatch(propertyapproval(id))
//    setStat(true)
//  }

  //! come back to it.....
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "propertyRef",
      headerName: "Property Ref",
      width: 200,
      //   renderCell: (params) => {
      //     return (
      //       <div className="userListUser">
      //         <img className="userListImg" src={params.row.profilePhoto} alt="" />
      //         {`${params.row.lastName} ${params.row.firstName}`}
      //       </div>
      //     );
      //   },
    },
    { field: "entityLevel", headerName: "Entity Level", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "indexImage",
      headerName: "Image",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.indexImage}
              alt=""
            />
            {/* {params.row.address?.state} */}
          </div>
        );
      },
    },
    // {
    //   field: "indexImage",
    //   headerName: "Image",
    //   width: 160,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        console.log(params)
        return (
          <>
            <Link to={"/property-list/" + params.row.id}>
              <button className="userListEdit">View</button>
            </Link>
              {stat ?
              (
                <button className="userListEdit">Approved</button>
              ) : 
              (
                params.row.status !== 'ACTIVE'  ? 
                <button className="userListEdit">UnApproved</button>
                : null
              )} 
        
            {/* <DeleteOutline
              className="userListDelete"
              // onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
  ];


  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //search
  const searchProperty = properties?.filter((item) => {
    return (
      item.propertyRef.toLowerCase().includes(search.toLowerCase()) ||
      item.entityLevel.toLowerCase().includes(search.toLowerCase()) ||
      item.status.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="containerSide">
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
          </div>
          {/* <select value='' onChange={(e) => setProperty(e.target.value)}>
            <option value=' COLLECTIVE_ENTITY'>Collective Property</option>
            <option value='SINGLE_ENTITY'>Single Entity Property</option>
            <option value=' UNIT_ENTITY'>Unity Entity Property</option>
          </select> */}

          {/* <Link to="/new-staff">
            <button className="userAddButton">Create</button>
          </Link> */}
        </div>
        {!searchProperty ? (
          <CircularProgress />
        ) : (
          <DataGrid
            rows={searchProperty && searchProperty}
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
