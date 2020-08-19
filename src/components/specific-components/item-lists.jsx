import React from "react";

import withData from "../../hocs/with-data";
import ItemList from "../item-list/item-list";
import withSwapiService from "../../hocs/with-swapi-service";
import withChildFn from "../../hocs/with-child-fn";


const showNameFn = (item) => <span>{item.name}</span>;

export const PlanetList = withSwapiService(
  withData(withChildFn(ItemList, showNameFn)),
  ({ getAllPlanets }) => ({ getData: getAllPlanets })
);
export const PeopleList = withSwapiService(
  withData(withChildFn(ItemList, showNameFn)),
  ({ getAllPeoples }) => ({ getData: getAllPeoples })
);
export const StarshipList = withSwapiService(
  withData(withChildFn(ItemList, showNameFn)),
  ({ getAllStarships }) => ({ getData: getAllStarships })
);
