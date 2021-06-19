import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "./todo/todo.slice";

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
