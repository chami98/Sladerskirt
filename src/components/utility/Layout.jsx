import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
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
      {children}
    </div>
  );
};

export default Layout;
