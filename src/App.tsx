import React from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from "./components/Router/Router";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
