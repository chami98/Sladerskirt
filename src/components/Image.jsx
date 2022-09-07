import React from "react";
const Image = ({ content }) => {
  return (
    <div className="container">
      <div className="row">
        {content.map((c) => (
          <div className="col-md-4 mt-3">
            <img
              key={c.image}
              src={c.image}
              alt=""
              style={{
                width: "80%",
                borderRadius: "100px",
                margin: "5px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <h4
              style={{
                textAlign: "center",
                marginTop: "15px",
                fontWeight: "200",
                fontSize: "xx-large",
              }}
            >
              {c.title}
            </h4>
            <p >{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
