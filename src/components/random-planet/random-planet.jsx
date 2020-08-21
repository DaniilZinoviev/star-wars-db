import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

import "./random-planet.scss";

class RandomPlanet extends Component {
  interval = null;

  static defaultProps = {
    interval: 10000,
  };

  static propTypes = {
    interval: PropTypes.number,
  };

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
    const { interval } = this.props;

    this.updatePlanet();
    this.interval = setInterval(() => this.updatePlanet(), interval);
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
    const { api } = this.props;
    // Get random planet id
    let id = Math.floor(Math.random() * 13) + 2;
    api
      .getPlanet(id)
      .then((planet) => this.onPlanetLoaded(planet))
      .catch((error) => this.onError(error));
  }

  render() {
    const { planet, isLoading, hasError } = this.state;

    let wrapClass = "random-planet jumbotron";
    if (isLoading) {
      wrapClass += " loading";
    }

    const showView = !(isLoading || hasError);
    const errorIndicator = hasError ? <ErrorIndicator /> : null;
    const spinner = isLoading ? <Spinner /> : null;
    const content = showView ? <PlanetView planet={planet} /> : null;

    return (
      <div className={wrapClass}>
        {errorIndicator}
        {spinner}
        {content}
      </div>
    );
  }
}

/**
 * Helper function to display a Planet
 *
 * @param {Object} planet A planet object
 */
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

PlanetView.propTypes = {
  planet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default RandomPlanet;
