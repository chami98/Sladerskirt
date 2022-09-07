import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container" style={{ fontFamily: "Roboto" }}>
      <h1 className="d-flex justify-content-center mt-2" style={{fontFamily: 'Roboto Mono',fontSize:"55px"}}>Sladerskirt</h1>
      <div className="row mt-4">
        <div className="col-6 ">
          <Link to="/" style={{ color: "white" , textDecoration: 'none'}}>
            <h5 className="d-flex justify-content-end">RANDOMIZER</h5>
          </Link>
        </div>
        <div className="col-6">
          <Link to="/images" style={{ color: "white" ,textDecoration: 'none' }}>
            <h5>A-Z IMAGES/INFO</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
