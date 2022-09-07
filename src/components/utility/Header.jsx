import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container" style={{ fontFamily: "Roboto" }}>
      <h1 className="d-flex justify-content-center mt-2 title">Sladerskirt</h1>
      <div
        className="  btn-container "
        style={{
          display: "flex",
          justifyContent: "center",
         
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "20px", }}>
          <button className="btn btn-outline-primary random-btn header-btn">
            RANDOMIZER
          </button>
          {/* <h5 className="d-flex justify-content-end">RANDOMIZER</h5> */}
        </Link>

        <Link to="/images" style={{ color: "white", textDecoration: "none" }}>
          <button className="btn btn-outline-primary random-btn header-btn">
            A-Z IMAGES/INFO
          </button>
          {/* <h5>A-Z IMAGES/INFO</h5> */}
        </Link>
      </div>
    </div>
  );
};

export default Header;
