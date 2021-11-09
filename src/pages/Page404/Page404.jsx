import React from "react";
import { Link } from "react-router-dom";
const Page404 = () => {
  return (
    <div>
      <h1>Unfortunatyle, but this page doesn't exist</h1>
      <Link to="/">Main page</Link>
    </div>
  );
};

export default Page404;
