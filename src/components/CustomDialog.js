import React from 'react'
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

const CustomDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(false);
    };

    // const handleClose = () => {
    //   setOpen(false);
    // };
  return (
    <div>
      <Dialog
        open={handleClickOpen}
        // onClose={handleClose}
      >
        <DialogContent>
          <div>
            <h1>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </h1>
          </div>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomDialog