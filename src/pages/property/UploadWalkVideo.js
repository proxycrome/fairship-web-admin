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
import { closeWalkUploadDialog, uploadWalkVideo } from "../../redux";

function UploadWalkVideo() {
  const dispatch = useDispatch();
  const {
    walkVideo: {
      props: { open },
      data,
    },
  } = useSelector((state) => state.walkthrough);
  //   const serviceProviderReducer = useSelector((state) => state.serviceProviders);
  //   const serCategory = serviceProviderReducer.serviceCategories;
  // console.log(open);

  const [formValue, setFormValue] = useState({
    description: "",
    propertyId: "",
    title: "",
    videoUrl: "",
  });

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(formValue, "5689");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      ...formValue,
      propertyId: data?.id,
    };

    dispatch(uploadWalkVideo(formData));
    // console.log(formData);
  };

  function closeComposeDialog() {
    dispatch(closeWalkUploadDialog());
  }

  return (
    <Dialog open={open} onClose={closeComposeDialog}>
      <form
        onSubmit={handleSubmit}
        // className="flex flex-col overflow-hidden"
      >
        <DialogContent>
          <DialogTitle>Upload Walkthrough Video</DialogTitle>
          <TextField
            autoFocus
            margin="dense"
            id="type-name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            name="title"
            value={formValue.title}
            onChange={handleChange}
            required
          />

          <TextField
            margin="dense"
            id="type-name"
            label="Video URl (example. https://youtube.com)"
            type="text"
            fullWidth
            variant="standard"
            name="videoUrl"
            value={formValue.videoUrl}
            onChange={handleChange}
            required
          />

          <textarea
            className="form-control mt-4"
            placeholder="Description"
            name="description"
            value={formValue.description}
            onChange={handleChange}
            rows="4"
            cols="30"
          >
            {" "}
          </textarea>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Upload Video</Button>
          {/* <Button>Create</Button> */}
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default UploadWalkVideo;
