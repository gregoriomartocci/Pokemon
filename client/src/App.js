import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar.js";
import Page from "./components/Paginate/Page";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import PokemonResult from "./components/SearchResult/PokemonResult";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/" component={Main} />
          <Route exact path="/pokemon-results" component={PokemonResult} />
          <Route exact path="/pokemon/:num" component={PokemonDetails} />
          <Route exact path="/" component={Page} />
        </div>
      </div>
    </Router>
  );
}

export default App;
