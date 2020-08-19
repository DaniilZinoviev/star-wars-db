import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/SwapiService";
import withDetailsData from "../../hocs/withData/with-details-data";

const {
  getPerson,
  getPersonImage,
  getSpaceship,
  getSpaceshipImage,
  getPlanet,
  getPlanetImage,
} = new SwapiService();


export const PersonDetails = withDetailsData(
  ItemDetails,
  getPerson,
  getPersonImage
);
export const StarshipDetails = withDetailsData(
  ItemDetails,
  getSpaceship,
  getSpaceshipImage
);
export const PlanetDetails = withDetailsData(
  ItemDetails,
  getPlanet,
  getPlanetImage
);
