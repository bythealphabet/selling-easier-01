import React from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router basename="/">
      <MainRouter />
    </Router>
  );
};

export default App;
