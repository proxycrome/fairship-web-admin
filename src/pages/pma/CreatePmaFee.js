import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { closeAdminCategoryDialog } from "../../redux/admins/adminActions";
import { getAllApartmentTypes, updatePmaFees } from "../../redux";


function CreateWalkThroughFee() {
  const [formValue, setFormValue] = useState({
    fee: "",
    feeType: "",
  });
  const dispatch = useDispatch();

  const adminReducer = useSelector((state) => state.admin);
  const admincate = adminReducer.createAdmin;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fee, feeType } = formValue;
    const formData = {
      feeType,
      fee: Number(fee),
    };

    // console.log(formData);
    await dispatch(updatePmaFees(formData));
    await closeAdmins();
    setFormValue({
      fee: "",
      feeType: "",
    });
  };

  useEffect(() => {
    dispatch(getAllApartmentTypes());
  }, [dispatch]);

  function closeAdmins() {
    dispatch(closeAdminCategoryDialog());
  }

  return (
    <Dialog open={admincate.props.open} onClose={closeAdmins}>
      <form
        onSubmit={handleSubmit}
        // className="flex flex-col overflow-hidden"
      >
        <DialogContent>
          <DialogTitle>Create PMA fee</DialogTitle>
          <TextField
            autoFocus
            margin="dense"
            id="type-name1"
            label="Enter PMA Fee"
            type="number"
            fullWidth
            variant="standard"
            name="fee"
            value={formValue.fee}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="type-name2"
            select
            name="feeType"
            label="fee Type"
            defaultValue={formValue.feeType}
            onChange={handleChange}
            variant="standard"
            fullWidth
            SelectProps={{
              native: true,
            }}
          >
            <option value="" hidden></option>
            <option value="PMA_VERIFICATION">PMA VERIFICATION</option>
            <option value="AGENT_SUBSCRIPTION">AGENT SUBSCRIPTION</option>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Create</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default CreateWalkThroughFee;
