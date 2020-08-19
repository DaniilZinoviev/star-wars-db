import React, { Component } from "react";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";
import { PeopleList } from "../specific-components/item-lists";
import { DefaultPersonDetails } from "../specific-components/item-details";
import SwapiContext from "../../contexts/swapi-service-context";
import SwapiService from "../../services/SwapiService";

import "./app.scss";

class App extends Component {
  swapiService = new SwapiService();

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

    return (
      <ErrorBoundary>
        <SwapiContext.Provider value={this.swapiService}>

          <div className="app container">

            <Header />

            <RandomPlanet api={this.swapiService} />

            <ErrorBoundary>
              <Row
                left={
                  <PeopleList
                    onChangeSelected={(id) =>
                      this.onChangeSelected(id, "selectedPersonId")
                    }
                  />
                }
                right={<DefaultPersonDetails id={selectedPersonId} />}
              />
            </ErrorBoundary>

          </div>

        </SwapiContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
