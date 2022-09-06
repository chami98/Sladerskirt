import React, { Component } from "react";
const Header = () => {
  return (
    <div className="container mt-4" style={{ fontFamily: "Roboto" }}>
      <h1 className="d-flex justify-content-center">Sladerskirt</h1>
      <div className="row">
        <div className="col-6 ">
          <h5 className="d-flex justify-content-end">RANDOMIZER</h5>
        </div>
        <div className="col-6">
          <h5>A-Z IMAGES/INFO</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
