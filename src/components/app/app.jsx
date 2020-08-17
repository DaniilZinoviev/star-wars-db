import React, { Component } from "react";

import "./app.scss";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/SwapiService";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";

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
    this.setState({
      selectedPerson: id,
    });
  }

  render() {
    const itemList = (
      <ItemList
        onChangeSelected={(id) => this.onChangeSelected(id)}
        getData={() => this.swapiService.getAllPeoples()}
      >
        {(item) => (
          <span>
            {item.name} ({item.gender})
          </span>
        )}
      </ItemList>
    );

    const details = (
      <PersonDetails selectedPerson={this.state.selectedPerson} />
    );

    return (
      <div className="app container">
        <Header />

        <RandomPlanet />

        <ErrorBoundary>
          <Row left={itemList} right={details} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
