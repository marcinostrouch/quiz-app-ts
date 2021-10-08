import React from "react";
import "./App.css";
import { Routes } from "./routes/Routes";
import { GlobalStyle } from "./styles/globalStyles";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
};

export default App;
