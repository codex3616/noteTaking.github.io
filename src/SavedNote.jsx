import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";

const SavedNote = (props) => {
  const DeleteEvent = () => {
    props.deleteNote(props.id);
  };
  return (
    <>
      {/* <div className="row container mx-auto my-5  saved-note "> */}
      <div className="col-xs-4 col-sm-5 col-md-3 col-lg-3 col-xxl-2 mb-3 own-col own-single-note mx-3">
        <h3 className="  py-1 px-1">{props.title}</h3>
        <p className="px-1 ">{props.content}</p>
        <Button onClick={DeleteEvent}>
          <DeleteOutlineIcon className="cross" />
        </Button>
      </div>
      {/* </div> */}
    </>
  );
};

export default SavedNote;
