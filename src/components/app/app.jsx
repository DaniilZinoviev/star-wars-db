import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundary from "../error-boundary/error-boundary";
import SwapiContext from "../../contexts/swapi-service-context";
import SwapiService from "../../services/SwapiService";
import StarshipPage from "../pages/starship-page";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import { DefaultStarshipDetails } from "../specific-components/item-details";
import HomePage from "../pages/home-page";
import "./app.scss";

const App = () => {
  const swapiService = new SwapiService();

  return (
    <ErrorBoundary>
      <SwapiContext.Provider value={swapiService}>
        <Router>
          <div className="app container">
            <Header />

            <RandomPlanet api={swapiService} />

            <ErrorBoundary>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/peoples/:id?" component={PeoplePage} />
                <Route path="/planets/:id?" component={PlanetPage} />
                <Route path="/starships/:id?" component={StarshipPage} />
                <Route
                  render={() => (
                    <h2>
                      404 Error: page not found! <Link to="/">Return back</Link>
                    </h2>
                  )}
                />
              </Switch>
            </ErrorBoundary>
          </div>
        </Router>
      </SwapiContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
