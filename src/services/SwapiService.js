/**
 * The main service to communicate with SWAPI
 */
export default class SwapiService {
  _apiBase = "https://swapi.dev/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";
  
  getResource = async (url) => {
    const res = await fetch(url);
    if (! res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status} code.`)
    }
    const body = await res.json();
    return body;
  }

  getAllPeoples = async () => {
    const res = await this.getResource(`${this._apiBase}/people/`);
    return res.results.map((people) => this._transformPeople(people));
  }

  getPerson = async (id) => {
    const people = await this.getResource(`${this._apiBase}/people/${id}/`);
    return this._transformPeople(people);
  }

  getPersonImage = (id) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`${this._apiBase}/planets/`);
    return res.results.map((planet) => this._transformPlanet(planet));
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`${this._apiBase}/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getPlanetImage = (id) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  }

  getAllStarships = async () => {
    const res = await this.getResource(`${this._apiBase}/starships/`);
    return res.results.map((starship) => this._transformStarship(starship));
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`${this._apiBase}/starships/${id}/`);
    return this._transformStarship(starship);
  }

  getStarshipImage = (id) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  _extractId(url) {
    return +url.match(/^.+?\/(\d+)\/$/)[1];
  }

  _transformPlanet(planet) {
    // Get id by end digit of the url
    const id = this._extractId(planet.url);
    return {
      id,
      name: planet.name,
      population: planet.population === 'unknown' ? null : +planet.population,
      rotationPeriod: +planet.rotation_period,
      diameter: +planet.diameter,
    };
  }

  _transformPeople(people) {
    // Get id by end digit of the url
    const id = this._extractId(people.url);
    return {
      id,
      name: people.name,
      gender: people.gender,
      birthYear: people.birth_year,
      eyeColor: people.eye_color,
    };
  }
  
  _transformStarship(starship) {
    // Get id by end digit of the url
    const id = this._extractId(starship.url);
    return {
      id,
      name: starship.name,
      cargoCapacity: starship.cargo_capacity,
      costInCredits: starship.cost_in_credits,
      crew: starship.crew,
      manufacturer: starship.manufacturer,
    };
  }
  
}