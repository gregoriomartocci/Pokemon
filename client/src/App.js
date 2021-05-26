import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards.js";
import Navbar from "./components/Navbar/Navbar.js";
import Page from "./components/Paginate/Page";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails"
import PokemonResult from "./components/SearchResult/PokemonResult";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route path="/" component={Navbar}/>
          <Route exact path="/" component={Sidebar}/>
          <Route exact path="/" component={Cards}/>
          <Route exact path="/pokemon-results" component={PokemonResult}/>
          <Route path="/:num" component={PokemonDetails}/>
          <Route exact path="/" component={Page}/>

        </div>
      </div>
    </Router>
  );
}

export default App;
