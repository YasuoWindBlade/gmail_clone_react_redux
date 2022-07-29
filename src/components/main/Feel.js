import { Checkbox } from "@mui/material";
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Photo from "@mui/icons-material/Photo";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import "./Feel.css";
import Message from "./Message";
import { useSelector } from "react-redux";
import { messages } from "../../features/composeSlice";
function Feel() {
  let msg = "the message is working";
  const array = useSelector(messages);
  console.log(array);
  return (
    <div className="Feel">
      <div className="Feel__header">
        <Checkbox
          style={{ fontSize: "1.3rem", color: "gray", marginLeft: "10px" }}
        />
        <ReplayIcon
          style={{ fontSize: "1.3rem", color: "gray", marginLeft: "10px" }}
        />
        <MoreVertIcon
          style={{ fontSize: "1.3rem", color: "gray", marginLeft: "10px" }}
        />
      </div>
      <div className="Feel__header__icons">
        <button
          className="button__header__router"
          style={{ borderBottom: "1px solid #0091ff" }}
        >
          <Photo
            style={{ color: "#0091ff", fontSize: "1.2rem" }}
            className="icon_h"
          />
          <span className="span__button" style={{ color: "#0091ff" }}>
            Primary
          </span>
        </button>
        <button className="button__header__router">
          <GroupIcon
            style={{ color: "gray", fontSize: "1.2rem" }}
            className="icon_h"
          />
          <span className="span__button">social</span>
        </button>
        <button className="button__header__router">
          <WorkIcon
            style={{ color: "gray", fontSize: "1.2rem" }}
            className="icon_h"
          />
          <span className="span__button">promotions</span>
        </button>
      </div>

      {array.map((item) => (
        <Message
          title={item.title}
          message={item.message}
          owner={item.owner}
          sender={item.sender}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default Feel;
