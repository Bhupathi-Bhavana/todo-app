import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";

const appStore = configureStore({
  reducer: {
    task: taskReducer,
  },
});
export default appStore;
