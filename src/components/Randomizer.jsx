import React from "react";
import Header from "./Header";
import ImageContainer from "./ImageContainer";
import DescriptionContainer from "./DescriptionContainer";

const Randomizer = ({
  content,
  randomImageNumber,
  setrandomImageNumberHandler,
  isLoading,
}) => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(270deg, #8f28e8 0%, #ad43f8 100%)",
        minHeight: "100vh",
        color: "white",
        overflow: "hidden",
        paddingTop: "20px",
      }}
    >
      <Header />

      {isLoading ? (
        <div class="d-flex justify-content-center" style={{marginTop:"25vh", }}>
        <div class="spinner-border" role="status" style={{width: "4rem", height: "4rem"}}>
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      ) : (
        <div className="row mt-4">
          <div className="col-xs-12 col-md-6">
            <ImageContainer
              content={content}
              randomImageNumber={randomImageNumber}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <DescriptionContainer
              setrandomImageNumberHandler={setrandomImageNumberHandler}
              content={content}
              randomImageNumber={randomImageNumber}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Randomizer;
