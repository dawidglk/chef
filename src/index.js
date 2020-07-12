import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

import theme from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
