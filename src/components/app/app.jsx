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
import { DefaultStarshipDetails } from "../specific-components/item-details";

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
                <Route
                  path="/"
                  exact
                  render={() => <h2>Welcome to Star DB</h2>}
                />
                <Route path="/peoples/:id?" component={PeoplePage} />
                <Route path="/planets/:id?" component={PlanetPage} />
                <Route path="/starships" exact component={StarshipPage} />
                <Route
                  path="/starships/:id"
                  exact
                  render={({ match }) => {
                    const { id } = match.params;
                    return <DefaultStarshipDetails id={id} />;
                  }}
                />
              </ErrorBoundary>
            </div>
          </Router>
        </SwapiContext.Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
