import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "redux/store";

export interface TestProps {
  clicked: number;
  loading: boolean;
  users: any[];
  error: boolean;
  errorMessage: string;
}

export const initialState: TestProps = {
  clicked: 0,
  loading: false,
  users: [],
  error: false,
  errorMessage: "",
};

// asyncThunk generate three extraReducers
export const fetchUsers = createAsyncThunk("test/fetchUsers", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    await new Promise((r) => setTimeout(r, 5000));
    return data;
  } catch (error) {
    return error;
  }
});

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
  extraReducers: {
    [fetchUsers.pending.type]: (state, action) => {
      state.loading = true;
      state.error = false;
      state.errorMessage = "";
    },
    [fetchUsers.fulfilled.type]: (state, action) => {
      if (action.payload.length) {
        state.users = action.payload;
      } else {
        state.error = true;
        state.errorMessage = "" + action.payload + "";
      }
      state.loading = false;
    },
  },
});
export const { increment, decrement } = testSlice.actions;

//  without asyncThunk. No need for extraReducers

// export const fetchUsers = (): AppThunk => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(setLoading(true));
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     dispatch(addUser(data));
//     dispatch(setLoading(false));
//   } catch (error) {
//     dispatch(setLoading(false));
//     dispatch(setError(error));
//   }
// };
