import React from "react";

import withData from "../../hocs/with-data";
import ItemList from "../item-list/item-list";
import withSwapiService from "../../hocs/with-swapi-service";
import withChildFn from "../../hocs/with-child-fn";
import compose from "../../hocs/compose";

const showNameFn = (item) => <span>{item.name}</span>;

const planetsToProps = ({ getAllPlanets }) => ({
  getData: getAllPlanets,
});
const peoplesToProps = ({ getAllPlanets }) => ({
  getData: getAllPlanets,
});
const starshipsToProps = ({ getAllPlanets }) => ({
  getData: getAllPlanets,
});

export const PlanetList = compose(
                            withSwapiService(planetsToProps),
                            withData,
                            withChildFn(showNameFn)
                          )(ItemList);
export const PeopleList = compose(
                            withSwapiService(peoplesToProps),
                            withData,
                            withChildFn(showNameFn)
                          )(ItemList);
export const StarshipList = compose(
                              withSwapiService(starshipsToProps),
                              withData,
                              withChildFn(showNameFn)
                            )(ItemList);