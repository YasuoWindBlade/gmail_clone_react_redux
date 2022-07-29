import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Mail.css";
import { Avatar, IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import BuildIcon from "@mui/icons-material/Build";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedMail } from "../../features/composeSlice";
function Mail() {
  const navigate = useNavigate();
  const mailInfo = useSelector(selectedMail);
  return (
    <div className="mail-container">
      <div className="mail-header">
        <IconButton>
          <ArrowBackIcon onClick={() => navigate("/")} />
        </IconButton>
        <div className="icons">
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <BuildIcon />
          </IconButton>
          <IconButton>
            <CheckIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail-content">
        <div className="mail-avatar">
          <Avatar sx={{ width: 50, height: 50 }} />
          <h1>{mailInfo.owner}</h1>
          <br />
          <h1>to : {mailInfo.sender}</h1>
        </div>
        <div className="message_area">
          <h2>{mailInfo.title}</h2>
          <p>{mailInfo.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
