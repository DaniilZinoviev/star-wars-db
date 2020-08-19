import React, { Component } from "react";

import "./app.scss";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";
import { PlanetList, PeopleList } from "../specific-components/item-lists";
import {
  DefaultPersonDetails,
} from "../specific-components/item-details";

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
    const { selectedPersonId } = this.state;

    const peopleList = (
      <PeopleList onChangeSelected={(id) => this.onChangeSelected(id,"selectedPersonId")}>
        {(item) => item.name}
      </PeopleList>
    );

    return (
      <div className="app container">
        <Header />

        <RandomPlanet />

        <ErrorBoundary>
          <Row
            left={peopleList}
            right={<DefaultPersonDetails id={selectedPersonId} />}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
