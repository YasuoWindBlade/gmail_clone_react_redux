import { LockClock, Photo, Start } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import React from "react";
import "./SideBar.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupsIcon from "@mui/icons-material/Groups";
import { show } from "../../features/composeSlice";
import { useDispatch } from "react-redux";
function SideBar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <button
        className="compose__button"
        onClick={() => {
          dispatch(show());
        }}
      >
        <AddIcon
          style={{ color: "#0091ff", fontSize: "3rem", marginRight: "0.3rem" }}
        />
        <h1 className="h1__compose">compose</h1>
      </button>
      <div className="sidebar__container__icons">
        <ul className="sideBadr__ul">
          <li>
            <Photo style={{ color: "gray" }} />
            <span>inbox</span>
          </li>
          <li>
            <StarIcon style={{ color: "gray" }} />
            <span>starred</span>
          </li>
          <li>
            <AccessTimeIcon style={{ color: "gray" }} />
            <span>snoozed</span>
          </li>
          <li>
            <DraftsIcon style={{ color: "gray" }} />
            <span>Draft</span>
          </li>
          <li>
            <ExpandMoreIcon style={{ color: "gray" }} />
            <span>more</span>
          </li>
        </ul>
        <div className="borderButtom"></div>
        <ul className="sideBadr__ul">
          <li>
            <h3 style={{ fontSize: "1rem", color: "gray" }}>Meet</h3>
          </li>
          <li>
            <VideocamIcon style={{ color: "gray" }} />
            <span>new meeting</span>
          </li>
          <li>
            <GroupsIcon style={{ color: "gray" }} />
            <span>join a meeting</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
