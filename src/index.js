import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
,
  rootElement
);
