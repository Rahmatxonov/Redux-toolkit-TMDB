import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { ENV_API_TOKEN, ENV_HTTPS, ENV_KEY } from "../hook/useAxios";
export default function Navbar() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = React.useState([{ label: "", year: "" }]);
  const searchMovie = (e) => {
    axios
      .get(
        `${ENV_HTTPS}/search/movie?query=${e.target.value}&include_adult=false&api_key=${ENV_KEY}`,
        {
          headers: {
            Authorization: `Bearer ${ENV_API_TOKEN}`,
          },
        }
      )
      .then((res) => {
        setSearchData(
          res.data.results.map((item) => {
            return {
              label: item.title,
              year: item.id,
            };
          })
        );
      });
  };

  const handleSearchChange = (e, value) => {
    console.log(e);
    console.log(value);
    navigate(`/film/${value.year}`);
  };
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
        <Autocomplete
          onChange={handleSearchChange}
          onKeyUp={searchMovie}
          disablePortal
          id="combo-box-demo"
          options={searchData}
          sx={{ width: 200, borderRadius: "10px" }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Movie search..." />
          )}
        />
        <button className="ui-btn rounded-md hover:rounded-md">
          <span>Login</span>
        </button>
      </div>
    </div>
  );
}
