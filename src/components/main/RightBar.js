import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./RightBar.css";
function RightBar() {
  return (
    <div className="RightBar">
      <IconButton>
        <CalendarMonthIcon style={{ color: "blue", fontSize: "1.8rem" }} />
      </IconButton>
      <IconButton>
        <LocalPhoneIcon style={{ color: "green", fontSize: "1.8rem" }} />
      </IconButton>
      <IconButton>
        <PermContactCalendarIcon
          style={{ color: "yellow", fontSize: "1.8rem" }}
        />
      </IconButton>
      <div className="borderButtom"></div>
      <IconButton>
        <AddIcon style={{ color: "gray", fontSize: "1.8rem" }} />
      </IconButton>
    </div>
  );
}

export default RightBar;
