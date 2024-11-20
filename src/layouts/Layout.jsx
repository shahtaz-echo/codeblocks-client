import Navbar from "@/components/navbar/navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container my-6">{children}</main>
    </>
  );
};

export default Layout;
