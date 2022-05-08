import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  closeServiceTypeDialog,
  getServiceProviderList,
  serviceCategories,
} from "../../../redux/serviceProviders/serviceProviderActions";

// const defaultState = {
//   createdBy: "",
//   id: 0,
//   name: "",
//   serviceCategory: {
//     id: 0,
//     name: "",
//   },
//   status: ""
// }

function CreateSerType() {
  const [formValue, setFormValue] = useState({
    createdBy: "",
    id: 0,
    name: "",
    serviceCategory: {
      id: 0,
      name: "",
    },
    status: "",
  });


  const dispatch = useDispatch();
  const createServiceType = useSelector(
    (state) => state.serviceProviders.createServiceType
  );
  const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  const serCategory = serviceProviderReducer.serviceCategories;

  // console.log({ serviceProviderReducer, serCategory }, "service234");

// useEffect(() => {
  
    // const newSerId = serCategory && serCategory.find(i => i.id === serCategory.id)
    // console.log(newSerId, '700')
      // setFormValue({
      //   ...formValue,
      //   serviceCategory:{
      //     id : newSerId?.id
      //   } 
      // })
   
// }, [serCategory]);
// useEffect(() => {
//   if (serCategory) {
//     const newSerId =  serCategory.find(i => i.id === serCategory.id)
//     setFormValue({
//       ...formValue,
//       serviceCategory: {
//         id: newSerId.id,
//       },
//     });
//   }
// }, [serCategory]);

console.log(formValue, '5689');


  useEffect(() => {
    dispatch(getServiceProviderList());
    dispatch(serviceCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeServiceType = (e, data) => {
    setFormValue({
      ...formValue,
      serviceCategory: {
        ...formValue.serviceCategory,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  function closeComposeDialog() {
    dispatch(closeServiceTypeDialog());
  }

  const status = ["ACTIVE", "INACTIVE", "DELETE", "PENDING_VERIFICATIONS"];

  return (
    <Dialog open={createServiceType.props.open} onClose={closeComposeDialog}>
      <form
        onSubmit={handleSubmit}
        // className="flex flex-col overflow-hidden"
      >
        <DialogContent>
          <DialogTitle>Create Service Type</DialogTitle>
          <TextField
            // autoFocus
            margin="dense"
            id="type-name"
            label=" Serivce Type Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={formValue.name}
            onChange={handleChange}
          />
          {/* <TextField
            // autoFocus
            margin="dense"
            id="category-name"
            label="Service Category Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={formValue.serviceCategory.name}
            onChange={handleChangeServiceType}
          /> */}
          <InputLabel id="demo-simple-select-label">
            Service Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            margin="dense"
            fullWidth
            value={formValue.serviceCategory.name}
            name="name"
            label="data"
            onChange={handleChangeServiceType}
          >
            {serCategory &&
              serCategory?.map((item) => {
                return (
                  //   <option key={item.id} value={item.id}>
                  //   {item.name}
                  // </option>
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                );
              })}
            {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            margin="dense"
            fullWidth
            value={formValue.status}
            name="status"
            label="status"
            onChange={handleChange}
          >
            {status.map((item, i) => {
              return (
                //   <option key={i} value={item}>
                //   {item}
                // </option>
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Create</Button>
          {/* <Button>Create</Button> */}
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default CreateSerType;
