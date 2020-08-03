import React, { Component } from "react";

import "./app.scss";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

class App extends Component {

  state = {
    showRandomPlanet: true
  }

  toggleRandomPlanet() {
    this.setState((state) => ({
      showRandomPlanet: !state.showRandomPlanet
    }));
  }

  render() {
    return (
      <div className="app container">
        <Header />
        {this.state.showRandomPlanet ? <RandomPlanet /> : null}
        
        <button className="btn btn-warning mb-3" onClick={() => this.toggleRandomPlanet()}>
          Toggle random planet
        </button>
        <div className="row">
          <div className="col-md-4">
            <ItemList />
          </div>
          <div className="col-md-8">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
