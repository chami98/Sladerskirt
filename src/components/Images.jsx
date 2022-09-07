import React from "react";
import Image from "./Image";
import Layout from "./utility/Layout";
const Images = ({ content }) => {
  return (
    <Layout>
      <Image content={content} />
    </Layout>
  );
};

export default Images;
