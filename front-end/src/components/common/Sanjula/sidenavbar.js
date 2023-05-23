import React from "react";
import "../../../assets/styles/newsidebar.css";
import { SidebarData } from "./sidebarData";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="row"
              id={window.location.pathname == val.Link ? "active" : ""}
              key={key}
              onClick={() => {
                window.location.pathname = val.Link;
              }}
            >
              {" "}
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;
