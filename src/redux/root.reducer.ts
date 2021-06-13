import { combineReducers } from "@reduxjs/toolkit";
import { testSlice } from "./test/test.slice";

const rootReducer = combineReducers({
  test: testSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
