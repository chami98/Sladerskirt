import React from "react";

const Spinner = () => {
  return (
    <div class="d-flex justify-content-center" style={{ marginTop: "25vh" }}>
      <div
        class="spinner-border"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
