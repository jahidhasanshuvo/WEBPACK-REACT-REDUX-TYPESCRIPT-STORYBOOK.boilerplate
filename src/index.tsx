import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import store from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
