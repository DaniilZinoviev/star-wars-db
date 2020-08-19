import React, { Component } from "react";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundary from "../error-boundary/error-boundary";
import SwapiContext from "../../contexts/swapi-service-context";
import SwapiService from "../../services/SwapiService";

import "./app.scss";
import StarshipPage from "../pages/starship-page";

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiContext.Provider value={this.swapiService}>

          <div className="app container">

            <Header />

            <RandomPlanet api={this.swapiService} />

            <ErrorBoundary>
              <StarshipPage />
            </ErrorBoundary>

          </div>

        </SwapiContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
