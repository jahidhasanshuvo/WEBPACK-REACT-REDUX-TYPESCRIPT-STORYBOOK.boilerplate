import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TestProps {
  clicked: number;
}

export const initialState: TestProps = {
  clicked: 0,
};
export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.clicked += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.clicked -= action.payload;
    },
  },
});
export const { increment, decrement } = testSlice.actions;
