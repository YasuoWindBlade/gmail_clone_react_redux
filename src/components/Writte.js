import React from "react";
import "./Writte.css";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";

import { selectVisibility } from "../features/composeSlice";
import { hide, addMessage } from "../features/composeSlice";
import { useDispatch } from "react-redux";
function Writte() {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectVisibility);
  const [isVisibleState, setisVisibleState] = React.useState(
    useSelector(selectVisibility)
  );
  console.log(isVisible);
  const changeVisibility = () => {
    dispatch(hide());
    console.log(isVisible);
  };
  const [input, setInput] = React.useState({
    title: "",
    message: "",
    icon: "",
    owner: "mahdi.chahri55@gmail.com",
    sender: "",
    id: "",
  });
  const addToTheMailList = () => {
    dispatch(addMessage(input));
    console.log(input);
    changeVisibility();
  };
  return (
    <motion.div
      className="POP__TO__writte"
      style={
        useSelector(selectVisibility)
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <div className="Header__pop">
        <h1 style={{ color: "white" }}> new Message </h1>
        <IconButton onClick={changeVisibility}>
          <CloseIcon style={{ color: "white" }} />
        </IconButton>
      </div>
      <input
        type="text"
        className="input__to outLine"
        placeholder="to ?"
        onChange={(e) => setInput({ ...input, sender: e.target.value })}
      />
      <input
        type="text"
        className="input__to outLine"
        placeholder="subject ?"
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      />
      <input
        type="text"
        className="input__message outLine"
        placeholder="wirte your message here ?"
        onChange={(e) => setInput({ ...input, message: e.target.value })}
      />
      <div className="input__Button__sender">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon style={{ color: "#0091ff" }} />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon style={{ color: "white" }} />}
          onClick={addToTheMailList}
        >
          Send
        </Button>
      </div>
    </motion.div>
  );
}

export default Writte;
