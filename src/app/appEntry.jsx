import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./providers/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/drinkHelper">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
