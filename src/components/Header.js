import { IconButton } from "@mui/material";
import React from "react";
import "./Header.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import SearchIcon from "@mui/icons-material/Search";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
function Header() {
  return (
    <div className="header">
      <div className="header__part1">
        <IconButton>
          <ViewHeadlineIcon style={{ fontSize: "2rem", marginTop: "0.3rem" }} />
        </IconButton>
        <h1>M</h1>
        <h2>Gmail</h2>
      </div>
      <div className="header__part2">
        <div className="header__search__container">
          <SearchIcon style={{ color: "gray" }} />
          <input
            type="search"
            placeholder="search mail"
            className="input__search"
          />
        </div>
      </div>
      <div className="header__part3">
        <IconButton>
          <QuestionMarkIcon style={{ color: "gray" }} />
        </IconButton>
        <IconButton>
          <SettingsIcon style={{ color: "gray" }} />
        </IconButton>
        <IconButton>
          <AppsIcon style={{ color: "gray" }} />
        </IconButton>
        <IconButton>
          <Avatar style={{ color: "gray" }} sx={{ width: 30, height: 30 }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
