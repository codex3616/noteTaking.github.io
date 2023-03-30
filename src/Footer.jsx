import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="container-fluid own-footer ">
        <p> copyright © {year} NoteTaking </p>
      </footer>
    </>
  );
};

export default Footer;
