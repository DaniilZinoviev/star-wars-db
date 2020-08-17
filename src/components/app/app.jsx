import React, { Component } from "react";

import "./app.scss";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/SwapiService";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";

class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    selectedId: null,
  };

  toggleRandomPlanet() {
    this.setState((state) => ({
      showRandomPlanet: !state.showRandomPlanet,
    }));
  }

  onChangeSelected(id) {
    this.setState({
      selectedId: id,
    });
  }

  render() {
    const {
      getPerson,
      getPersonImage,
      getSpaceship,
      getSpaceshipImage,
    } = this.swapiService;

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
      <ItemDetails
        selectedId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
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
