import { Checkbox } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import "./Message.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pushElectedMail } from "../../features/composeSlice";
function Message(props) {
  const dispatch = useDispatch();
  const pushInformations = () => {
    dispatch(
      pushElectedMail({
        title: props.title,
        message: props.message,
        owner: props.owner,
        sender: props.sender,
        icon: props.icon,
      })
    );
  };
  const navigate = useNavigate();
  return (
    <div
      className="message"
      onClick={() => {
        pushInformations();
        navigate("/mail");
      }}
    >
      <Checkbox className="icon__message" style={{ color: "gray" }} />
      <StarIcon className="icon__message" style={{ color: "gray" }} />
      <div className="message__h1">
        {" "}
        <h1>{props.title}</h1>
      </div>
      <div className="message__p">
        {" "}
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default Message;
