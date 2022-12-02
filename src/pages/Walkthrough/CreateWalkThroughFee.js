import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  Select,
  Input,
  Checkbox,
  ListItemText,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAdminCategoryDialog,
} from "../../redux/admins/adminActions";
import { getAllApartmentTypes, updateWalkVideoFee } from "../../redux";
import { planTypesData, featuresData } from "../../dummyData";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(1),
    width: "100%",
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      width: "inherit",
    },
  },
};

function CreateWalkThroughFee() {
  const classes = useStyles();
  const [formValue, setFormValue] = useState({
    price: "",
    apartmentType: "",
    planType: "",
    features: [],
  });
  const dispatch = useDispatch();

  const adminReducer = useSelector((state) => state.admin);
  const admincate = adminReducer.createAdmin;

  const { apartmentTypes } = useSelector((state) => state.walkthrough);


  // console.log({ serviceProviderReducer }, "servicecategory");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    const { price, apartmentType, planType, features } = formValue;
    const formData = {
      apartmentType,
      price: Number(price),
      walkthroughVideoPlan: {
        features,
        planType,
      },
    };

    // console.log(formData);
    await dispatch(updateWalkVideoFee(formData));
    await closeAdmins();
    setFormValue({
      price: "",
      apartmentType: "",
      planType: "",
      features: [],
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
          <DialogTitle>Create Walk Through Video fee</DialogTitle>
          <TextField
            autoFocus
            margin="dense"
            id="type-name1"
            label="Enter Price"
            type="number"
            fullWidth
            variant="standard"
            name="price"
            value={formValue.price}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="type-name2"
            select
            name="apartmentType"
            label="Apartment Type"
            defaultValue={formValue.apartmentType}
            onChange={handleChange}
            variant="standard"
            fullWidth
            SelectProps={{
              native: true,
            }}
          >
            <option value="" hidden></option>
            {apartmentTypes?.map((option, index) => (
              <option key={index} value={option}>
                {option.split("_")[0]} {option.split("_")[1]}
              </option>
            ))}
          </TextField>

          <TextField
            margin="dense"
            id="type-name2"
            select
            name="planType"
            label="Plan Type"
            defaultValue={formValue.planType}
            onChange={handleChange}
            variant="standard"
            fullWidth
            SelectProps={{
              native: true,
            }}
          >
            <option value="" hidden></option>
            {planTypesData?.map((option, index) => (
              <option key={index} value={option}>
                {option.split("_")[0]} {option.split("_")[1]}
              </option>
            ))}
          </TextField>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-checkbox-label">Features</InputLabel>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              name="features"
              placeholder="features"
              value={formValue.features}
              onChange={handleChange}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {featuresData.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={formValue.features.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Create</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default CreateWalkThroughFee;
