import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

const Header = () => {
  return (
    <>
      <header className="container-fluid bg-warning header ">
        <h1 className=" py-3 text-center ">
          <span className="note-icon">
            <NoteAltIcon />
          </span>
          NoteTaking
        </h1>
      </header>
    </>
  );
};

export default Header;
