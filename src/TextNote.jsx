import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const TextNote = (props) => {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // const { name, value } = e.target;

    setNote((preVal) => {
      return { ...preVal, [name]: value };
    });
    // console.log(note);
  };

  const ClickEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const ShowFull = () => {
    setShow(true);
  };

  const HideFew = () => {
    setShow(false);
  };

  return (
    <>
      <div className=" mb-3 my-5 text-note  " onDoubleClick={HideFew}>
        {show ? (
          <input
            type="text"
            value={note.title}
            name="title"
            onChange={InputEvent}
            placeholder="Title"
            className=" px-3 pt-3 "
            autoComplete="off"
          />
        ) : null}
        <textarea
          className="text-area"
          value={note.content}
          name="content"
          onChange={InputEvent}
          placeholder="Write a note..."
          onClick={ShowFull}
        ></textarea>
        <h2 className="own-space"></h2>

        {show ? (
          <Button onClick={ClickEvent}>
            <AddIcon className="add" />
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default TextNote;
