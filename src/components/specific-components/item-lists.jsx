import withData from "../../hocs/withData/with-data";
import ItemList from "../item-list/item-list";
import SwapiService from "../../services/SwapiService";

const {
  getAllPlanets,
  getAllPeoples,
  getAllSpaceships
} = new SwapiService;

export const PlanetList = withData(ItemList, getAllPlanets);
export const PeopleList = withData(ItemList, getAllPeoples);
export const SpaceshipList = withData(ItemList, getAllSpaceships);
