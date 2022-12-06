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
  closeServiceTypeEditDialog,
  editSerType,
} from "../../../redux/serviceProviders/serviceProviderActions";

function EditSerType() {
  const dispatch = useDispatch();
  const editServiceType = useSelector(
    (state) => state.serviceProviders?.editServiceType
  );
  //   const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  //   const serCategory = serviceProviderReducer.serviceCategories;

  console.log({ editServiceType });

  const [formValue, setFormValue] = useState({
    id: null,
    name: "",
    status: "ACTIVE",
  });

  console.log(formValue, "5689");

  //   useEffect(() => {
  //     dispatch(getServiceProviderList());
  //     dispatch(serviceCategories());
  //   }, [dispatch]);

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
    const formData = {
      ...formValue,
      id: editServiceType?.data?.id,
    };
    dispatch(editSerType(formData));
    // console.log(formData);
    setFormValue({})
  };

  function closeComposeDialog() {
    dispatch(closeServiceTypeEditDialog());
  }

  const status = ["ACTIVE", "INACTIVE", "DELETE", "PENDING_VERIFICATIONS"];

  return (
    <>
      {editServiceType && (
        <Dialog open={editServiceType.props.open} onClose={closeComposeDialog}>
          <form
            onSubmit={handleSubmit}
            // className="flex flex-col overflow-hidden"
          >
            <DialogContent>
              <DialogTitle>Edit Service Type</DialogTitle>
              <TextField
                autoFocus
                margin="dense"
                type="text"
                id="standard-helperText"
                label="Service Type Name"
                defaultValue={formValue?.name || editServiceType?.data?.name}
                fullWidth
                variant="standard"
                name="name"
                onChange={handleChange}
                required
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
              <Button type="submit">Edit</Button>
              {/* <Button>Create</Button> */}
            </DialogActions>
          </form>
        </Dialog>
      )}
    </>
  );
}

export default EditSerType;
