import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuth }) => {
	const isLoggedIn = isAuth;
	return !isLoggedIn ? <Navigate to="/login" replace /> : <Outlet />;
};

export default ProtectedRoute;
