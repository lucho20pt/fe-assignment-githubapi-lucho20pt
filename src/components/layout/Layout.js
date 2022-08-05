import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header></Header>
      <main className="container">{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
