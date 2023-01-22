import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  closeServiceTypeDialog,
  getServiceProviderList,
  serviceCategories,
  addSerType,
} from "../../../redux/serviceProviders/serviceProviderActions";


function CreateSerType() {
  const [formValue, setFormValue] = useState({
    createdBy: "",
    id: 0,
    name: "",
    serviceCategory: {
      id: 0,
      name: "",
    },
    status: "ACTIVE",
  });


  const dispatch = useDispatch();
  const createServiceType = useSelector(
    (state) => state.serviceProviders.createServiceType
  );
  const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  const serCategory = serviceProviderReducer.serviceCategories;

// console.log(formValue, '5689');


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
    
    dispatch(addSerType(formValue));
    // console.log(formValue);
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
         
          {/* <InputLabel id="demo-simple-select-label">Status</InputLabel>
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
          </Select> */}
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
