import { configureStore } from "@reduxjs/toolkit";
import composeSlice from "../features/composeSlice";
export default configureStore({
  reducer: {
    isClicked: composeSlice,
  },
});
