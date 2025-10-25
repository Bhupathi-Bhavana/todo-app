import { createSlice } from "@reduxjs/toolkit";
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const tasksSlice = createSlice({
  name: "task",
  initialState: {
    items: savedTodos,
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    removeTask: (state, action) => {
      const index = state.items.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
  },
});
export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
