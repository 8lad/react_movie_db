import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function RoutesList() {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route key={i} exact path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
}

export default RoutesList;
