import React from "react";
import { NavLink } from "react-router-dom";
import "../../../assets/styles/userNavBar.css"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/user/AllUsers" activeClassName="active">
            User List
          </NavLink>
        </li>
        <li>
          <NavLink to="/page1" activeClassName="active">
            Page 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/page2" activeClassName="active">
            Page 2
          </NavLink>
        </li>
        <li>
          <NavLink to="/page3" activeClassName="active">
            Page 3
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
//  =====================================================================================================================================================
