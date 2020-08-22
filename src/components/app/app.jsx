import React, { useState } from "react";

import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ErrorBoundary from "../error-boundary/error-boundary";
import SwapiContext from "../../contexts/swapi-service-context";
import SwapiService from "../../services/SwapiService";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.scss";
import StarshipPage from "../pages/starship-page";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import { DefaultStarshipDetails } from "../specific-components/item-details";
import LoginPage from "../pages/login-page";
import AdminPage from "../pages/admin-page";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const swapiService = new SwapiService();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ErrorBoundary>
      <SwapiContext.Provider value={swapiService}>
        <Router>
          <div className="app container">
            <Header />

            <RandomPlanet api={swapiService} />

            <ErrorBoundary>
              <Switch>
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

                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={setIsLoggedIn}
                    />
                  )}
                />
                <Route
                  path="/admin"
                  render={() => <AdminPage isLoggedIn={isLoggedIn} />}
                />
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
