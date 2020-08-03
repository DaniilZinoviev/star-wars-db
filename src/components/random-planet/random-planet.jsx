import React, { Component } from "react";
import SwapiService from "../../services/SwapiService";

import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import "./random-planet.scss";

class RandomPlanet extends Component {

  swapiService = new SwapiService();
  interval = null;
  state = {
    isLoading: true,
    hasError: false,
    planet: {
      id: null,
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
    },
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(() => this.updatePlanet(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded(planet) {
    this.setState({
      planet: { ...planet },
      isLoading: false,
    });
  }

  onError(error) {
    clearInterval(this.interval);
    this.setState({
      hasError: true,
      isLoading: false,
    });
  }

  updatePlanet() {
    // Get random planet id
    let id = Math.floor(Math.random() * 13) + 2;
    this.swapiService
      .getPlanet(id)
      .then((planet) => this.onPlanetLoaded(planet))
      .catch((error) => this.onError(error));
  }

  render() {
    console.log("render()");
    const { planet, isLoading, hasError } = this.state;

    let wrapClass = "random-planet jumbotron";
    if (isLoading) {
      wrapClass   += " loading";
    }

    const showView        = !(isLoading || hasError);
    const errorIndicator  = hasError  ? <ErrorIndicator />              : null;
    const spinner         = isLoading ? <Spinner />                     : null;
    const content         = showView  ? <PlanetView planet={planet} />  : null;

    return (
      <div className={wrapClass}>
        {errorIndicator}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <div className="row">
      <div className="col-sm-auto text-center mr-sm-2 mb-3 mb-sm-0">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          className="planet-img"
          alt="Not found"
        />
      </div>
      <div className="col">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            Population: {population ? population.toLocaleString() : "unknown"}
          </li>
          <li className="list-group-item">
            Rotation period: {rotationPeriod ? rotationPeriod : "unknown"}
          </li>
          <li className="list-group-item">
            Diameter: {diameter ? diameter.toLocaleString() : "unknown"} km
            <sup>2</sup>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomPlanet;
