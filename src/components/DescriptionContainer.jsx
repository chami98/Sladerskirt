import React from "react";

const DescriptionContainer = ({
  setrandomImageNumberHandler,
  content,
  randomImageNumber,
}) => {
  return (
    <div className="container">
      <h3
        style={{
          textAlign: "center",
          marginTop: "10px",
          fontWeight: "200",
          fontSize: "xx-large",
        }}
      >
        {content[randomImageNumber].title}
      </h3>
      {content[randomImageNumber].text.map((txt) => (
        <p key={txt}>{txt}</p>
      ))}

      <div class="d-flex justify-content-center">
        <button
          onClick={() => setrandomImageNumberHandler()}
          className="btn btn-primary btn-lg"
          style={{ fontSize: "36px", fontWeight: "200", borderRadius: "30px" }}
        >
          Randomize!
        </button>
      </div>
    </div>
  );
};

export default DescriptionContainer;
