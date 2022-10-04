import React from "react";
import { checkUser } from "../../services";
import { logout } from "../../redux/loginSlice/loginSlice.js";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //========================== Event Handlers ================================

  const handleLogout = () => {
    window.sessionStorage.removeItem("user");
    dispatch(logout());
    handleNavigate();
  };
  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-6">
        <Link to="/">
          <div className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
            <span className="font-semibold text-xl tracking-tight">
              Set-Up
            </span>
          </div>
        </Link>
        <div>
          {checkUser() && (
            <button
              onClick={handleLogout}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white  lg:mt-0"
            >
              Logout
            </button>
          )}
          {!checkUser() && (
            <p
              className="text-white text-lg font-medium hover:text-gray-500 cursor-pointer"
              onClick={handleNavigate}
            >
              Login
            </p>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
