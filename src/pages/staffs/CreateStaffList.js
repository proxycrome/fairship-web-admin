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
import {closeAdminCategoryDialog, addNewAdmin} from '../../redux/admins/adminActions'


function CreateStaffList() {
  const [formValue, setFormValue] = useState({
    email: "",
    fullName: '',
    password: '',
    phone: '',
    role: 'ADMIN'
  });
  const dispatch = useDispatch();

  const adminReducer = useSelector((state) => state.admin);
  console.log(adminReducer)
  const admincate = adminReducer.createAdmin;

  

  // console.log({ serviceProviderReducer }, "servicecategory");

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValue({
      ...formValue,
      [name]:value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue)
    const { email, fullName, password, phone, role } = formValue;
    dispatch(addNewAdmin(email, fullName, password, phone, role));
    closeAdmins();
    setFormValue({
      email: '',
      fullName : '',
      password : '',
      phone : '',
    })
  };

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
          <DialogTitle>Add Admin</DialogTitle>
          <TextField
            // autoFocus
            margin="dense"
            id="type-name1"
            label="Email"
            type="text"
            fullWidth
            variant="standard"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
           <TextField
            // autoFocus
            margin="dense"
            id="type-name2"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            name="fullName"
            value={formValue.fullName}
            onChange={handleChange}
            required
          />
           <TextField
            // autoFocus
            margin="dense"
            id="type-name3"
            label="Password Must be at least Eight letters "
            type="text"
            fullWidth
            variant="standard"
            name="password"
            value={formValue.password}
            onChange={handleChange}
            required
          />
            <TextField
            // autoFocus
            margin="dense"
            id="type-name4"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            name="phone"
            value={formValue.phone}
            onChange={handleChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default CreateStaffList;
