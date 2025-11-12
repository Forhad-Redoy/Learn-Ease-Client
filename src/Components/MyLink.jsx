import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-purple-500 font-bold text-lg" : `${className} font-bold text-lg`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
