import React, { Component } from "react";

import "./app.scss";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";
import Record from "../record/record";
import { PlanetList } from "../specific-components/item-lists";
import { PersonDetails } from "../specific-components/item-details";


class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPersonId: 11,
    selectedSpaceshipId: 11,
  };

  toggleRandomPlanet() {
    this.setState((state) => ({
      showRandomPlanet: !state.showRandomPlanet,
    }));
  }

  onChangeSelected(id, key) {
    this.setState({
      [key]: id,
    });
  }

  render() {

    const peopleList = (
      <PlanetList onChangeSelected={(id) => this.onChangeSelected(id, 'selectedPersonId')}>
        {(item) => item.name}
      </PlanetList>
    );

    const peopleDetails = (
      <PersonDetails selectedId={this.state.selectedPersonId}>
        <Record field="gender" label="Gender" />
        <Record field="birthYear" label="Birth Year" />
      </PersonDetails>
    );

    return (
      <div className="app container">
        <Header />

        <RandomPlanet />

        <ErrorBoundary>
          <Row left={peopleList} right={peopleDetails} />
        </ErrorBoundary>
        
      </div>
    );
  }
}

export default App;
