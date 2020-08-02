import React from "react";

import "./app.scss";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

const App = () => {
  return (
    <div className="app container">
      <Header />
      <RandomPlanet />
      <div className="row">
        <div className="col-md-4">
          <ItemList />
        </div>
        <div className="col-md-8">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
