import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import FontStyles from "./styles/fontStyles";

const theme = {
  colors: {
    red: "#B33951",
    lightRed: "#B33951",
    yellow: "#E3D081",
    black: "#000000",
    white: "#FFFFFF",
    mint: "#F1F7ED",
    lightPink: "#EEE4E1",
    almond: "#E7D8C9",
    weirdWhite: "#F6F4F3",
    darkGrey: "#48494B",
    lightGrey: "#C8C8C9",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FontStyles />
      <GlobalStyle />
      <Router>
        <AuthProviderWrapper>
          <App />
        </AuthProviderWrapper>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
