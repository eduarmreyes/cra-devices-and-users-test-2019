import React from "react";
import { NavLink } from "react-router-dom";

import "../navigation.css";

const Navigation = () => (
  <nav className="flex content-start flex-wrap bg-grey-light h-auto rounded p-1">
    <div className="w-1-2 rounded">
      <NavLink to="/" exact className="no-underline text-black" activeClassName="active-navigation">
        <div className="w-full p-2 text-center active-bg-white active-rounded active-shadow">Devices</div>
      </NavLink>
    </div>
    <div className="w-1-2">
      <NavLink to="/users" className="no-underline text-black" activeClassName="active-navigation">
        <div className="w-full p-2 text-center active-bg-white active-rounded active-shadow">Users</div>
      </NavLink>
    </div>
  </nav>
);
export default Navigation;
