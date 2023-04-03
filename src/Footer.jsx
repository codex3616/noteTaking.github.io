import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="container-fluid own-footer text-center bg-light ">
        <p className=" text-capitalize">
          copyright © {year} NoteTaking, All rights reserved...
        </p>
      </footer>
    </>
  );
};

export default Footer;
