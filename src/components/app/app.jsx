import React, { Component } from "react";

import "./app.scss";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/SwapiService";

class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    selectedPerson: null,
  };

  toggleRandomPlanet() {
    this.setState((state) => ({
      showRandomPlanet: !state.showRandomPlanet,
    }));
  }

  onChangeSelected(id) {
    console.log(`App: onChangeSelected with id ${id}`);
    this.setState({
      selectedPerson: id,
    });
  }

  render() {
    return (
      <div className="app container">
        <Header />
        {this.state.showRandomPlanet ? <RandomPlanet /> : null}

        <button
          className="btn btn-warning mb-3"
          onClick={() => this.toggleRandomPlanet()}
        >
          Toggle random planet
        </button>

        <div className="row mb-2">
          <div className="col-md-4">
            <ItemList
              onChangeSelected={(id) => this.onChangeSelected(id)}
              getData={() => this.swapiService.getAllPeoples()}
              renderItem={(item) => (
                <React.Fragment>
                  <span>{item.name}</span>{" "}
                  <em>
                    ({item.birthYear}, {item.gender})
                  </em>
                </React.Fragment>
              )}
            />
          </div>
          <div className="col-md-8">
            <PersonDetails selectedPerson={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <ItemList
              onChangeSelected={(id) => this.onChangeSelected(id)}
              getData={() => this.swapiService.getAllSpaceships()}
              renderItem={(item) => (
                <React.Fragment>
                  <span>{item.name}</span>{" "}
                  <em>
                    ({item.manufacturer})
                  </em>
                </React.Fragment>
              )}
            />
          </div>
          <div className="col-md-8">
            <PersonDetails selectedPerson={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
