import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Wrapper(props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Wrapper;
