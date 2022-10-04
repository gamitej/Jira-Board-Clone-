import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, ProtectedRoute } from "../pages";

const Routers = ({ loginProps }) => {
  return (
    <div>
      {/* Routes */}
      <Routes>
        {/* Protected Route */}
        <Route path="/" element={<ProtectedRoute {...loginProps} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login {...loginProps} />} />
        {/* Page Not Found */}
      </Routes>
    </div>
  );
};

export default Routers;
