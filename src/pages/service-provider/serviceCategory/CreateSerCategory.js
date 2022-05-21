import React, { useState } from "react";
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
  addSerCategory,
  closeServiceCategoryDialog,
} from "../../../redux/serviceProviders/serviceProviderActions";

function CreateSerCategory() {
  const [formValue, setFormValue] = useState({
    id: 0,
    name: "",
  });
  const dispatch = useDispatch();

  const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  const serCategory = serviceProviderReducer.createServiceCategory;

  console.log()

  // console.log({ serviceProviderReducer }, "servicecategory");

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, name } = formValue;
    dispatch(addSerCategory(id, name));
    closeComposeDialog();

    console.log(formValue, "value");
  };

  function closeComposeDialog() {
    dispatch(closeServiceCategoryDialog());
  }

  return (
    <Dialog open={serCategory.props.open} onClose={closeComposeDialog}>
      <form
        onSubmit={handleSubmit}
        // className="flex flex-col overflow-hidden"
      >
        <DialogContent>
          <DialogTitle>Add Service Category</DialogTitle>
          <TextField
            // autoFocus
            margin="dense"
            id="type-name"
            label=" Serivce Category Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={formValue.name}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Create</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default CreateSerCategory;
