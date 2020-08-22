import React, { Component } from "react";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundary from "../error-boundary/error-boundary";
import SwapiContext from "../../contexts/swapi-service-context";
import SwapiService from "../../services/SwapiService";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./app.scss";
import StarshipPage from "../pages/starship-page";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiContext.Provider value={this.swapiService}>
          <Router>
            <div className="app container">
              <Header />

              <RandomPlanet api={this.swapiService} />

              <ErrorBoundary>
                <Route path="/peoples" component={PeoplePage} />
                <Route path="/planets" component={PlanetPage} />
                <Route path="/starships" component={StarshipPage} />
              </ErrorBoundary>
            </div>
          </Router>
        </SwapiContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
