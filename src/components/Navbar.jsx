import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <div className="container">
      <div className="navbar flex items-center justify-between">
        <NavLink to={"/"}>
          {" "}
          <img src={logo} alt="logo" width={50} height={50} />
        </NavLink>
        <ul className="menu flex items-center">
          <li className="menu-item">
            <NavLink to={"/"} className="menu-link">
              Now Playing
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={"/popular"} className="menu-link">
              Popular
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={"/top-rated"} className="menu-link">
              Top Rated
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to={"/up-coming"} className="menu-link">
              Upcoming
            </NavLink>
          </li>
        </ul>
        <button className="ui-btn rounded-md hover:rounded-md">
          <span>Login</span>
        </button>
      </div>
    </div>
  );
}
