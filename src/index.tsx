import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import store from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
