import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from "redux/store";

export interface TestProps {
  todos: string[];
  loading: boolean;
  quotes: any;
  error: boolean;
  errorMessage: string;
}

export const initialState: TestProps = {
  todos: [],
  loading: false,
  quotes: {},
  error: false,
  errorMessage: "",
};

// asyncThunk generate three extraReducers
export const fetchquotes = createAsyncThunk("test/fetchquotes", async () => {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    // await new Promise((r) => setTimeout(r, 2000));
    return data[Math.floor(Math.random() * 1640)];
  } catch (error) {
    return error;
  }
});

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
  },
  extraReducers: {
    [fetchquotes.pending.type]: (state, action) => {
      state.loading = true;
      state.error = false;
      state.errorMessage = "";
    },
    [fetchquotes.fulfilled.type]: (state, action) => {
      if (action.payload.hasOwnProperty("text")) {
        state.quotes = action.payload;
      } else {
        state.error = true;
        state.errorMessage = "" + action.payload + "";
      }
      state.loading = false;
    },
  },
});
export const { addToDo, removeTodo } = testSlice.actions;

//  without asyncThunk. No need for extraReducers

// export const fetchquotes = (): AppThunk => async (dispatch: AppDispatch) => {
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
