import React from "react";
import { NavLink, Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <header>
        <ToastContainer />
        <nav className=" h-16 w-full bg-green-300 flex items-center justify-centers">
          <ul className=" inline-flex gap-3 items-center w-full justify-center">
            <li>
              {" "}
              <NavLink to="/">Home</NavLink>-
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="privacy">Privacy</NavLink>
            </li>
            <li>
              <NavLink to="login">login</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Register</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Your application components go here */}
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
