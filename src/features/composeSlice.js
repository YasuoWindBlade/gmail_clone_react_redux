import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isInputVisible: false,
  messages: [],
  selectedMail: "",
};

const composeSlice = createSlice({
  name: "isClicked",
  initialState,
  reducers: {
    show: (state, action) => {
      state.isInputVisible = true;
    },

    hide: (state) => {
      state.isInputVisible = false;
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    pushElectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const { show, hide, addMessage, pushElectedMail } = composeSlice.actions;

export default composeSlice.reducer;

export const selectVisibility = (state) => state.isClicked.isInputVisible;
export const messages = (state) =>
  state.isClicked.messages.map((message) => message);
export const selectedMail = (state) => state.isClicked.selectedMail;
