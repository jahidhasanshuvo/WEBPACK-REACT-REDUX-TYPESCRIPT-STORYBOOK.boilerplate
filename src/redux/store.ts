import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "./root.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: process.env.NODE_ENV !== "production" ? [logger] : [],
  devTools: process.env.NODE_ENV !== "production",
});

type AppDispatch = typeof store.dispatch;
export const UseAppDispatch = () => useDispatch<AppDispatch>();
export default store;
