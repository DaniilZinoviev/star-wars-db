import React from 'react';
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/SwapiService";
import withDetailsData from "../../hocs/withData/with-details-data";
import Record from '../record/record';

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

export const DefaultPersonDetails = (props) => {
  return (
    <PersonDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
    </PersonDetails>
  );
};
