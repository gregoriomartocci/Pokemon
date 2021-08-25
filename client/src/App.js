import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar.js";
import Landing from "./screens/Landing/Landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/home" component={Landing}></Route>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/" component={Main} />
      </div>
    </Router>
  );
}

export default App;
