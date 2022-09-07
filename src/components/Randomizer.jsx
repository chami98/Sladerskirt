import React from "react";
import ImageContainer from "./ImageContainer";
import DescriptionContainer from "./DescriptionContainer";
import Spinner from "./utility/Spinner";
import Layout from "./utility/Layout";

const Randomizer = ({
  content,
  randomImageNumber,
  setrandomImageNumberHandler,
  isLoading,
}) => {
  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="row randomizer">
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
    </Layout>
  );
};

export default Randomizer;
