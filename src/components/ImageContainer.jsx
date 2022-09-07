import { makeStyles } from "@mui/material";
import React from "react";


const ImageContainer = ({ content, randomImageNumber }) => {
  

  return (
    <div>
      <img
        src={content[randomImageNumber].image}
        alt="While blue is not a common color in nature it turns out that blue Bettas are some of the most popular aquarium fish in the trade. In the wild Bettas tend to be a murky brown with red and blue mixed into their fins."
        style={{
          width: "40vw",
          borderTopLeftRadius: "42px",
          borderBottomRightRadius: "42px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </div>
  );
};

export default ImageContainer;
