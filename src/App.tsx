import React from "react";
import { Layout } from "./components/HOCs/Layout";
import { Home } from "./components/pages/Home/Home";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default App;
