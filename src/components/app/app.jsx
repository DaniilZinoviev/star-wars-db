import React, { Component } from "react";

import "./app.scss";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/SwapiService";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";
import Record from "../record/record";

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
      getAllPeoples,
      getAllSpaceships
    } = this.swapiService;

    const peopleList = (
      <ItemList
        onChangeSelected={(id) => this.onChangeSelected(id)}
        getData={getAllPeoples}
      >
        {(item) => item.name}
      </ItemList>
    );
    const peopleDetails = (
      <ItemDetails
        selectedId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
      </ItemDetails>
    );
    const spaceshipList = (
      <ItemList
        onChangeSelected={(id) => this.onChangeSelected(id)}
        getData={getAllSpaceships}
      >
        {(item) => item.name}
      </ItemList>
    );
    const spaceshipDetails = (
      <ItemDetails
        selectedId={11}
        getData={getSpaceship}
        getImageUrl={getSpaceshipImage}
      >
        <Record field="manufacturer" label="Manufacturer" />
        <Record field="cargoCapacity" label="Cargo capacity" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <div className="app container">
        <Header />

        <RandomPlanet />

        <ErrorBoundary>
          <Row left={peopleList} right={peopleDetails} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Row left={spaceshipList} right={spaceshipDetails} />
        </ErrorBoundary>
        
      </div>
    );
  }
}

export default App;
