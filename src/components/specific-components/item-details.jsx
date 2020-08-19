import React from 'react';

import ItemDetails from "../item-details/item-details";
import withDetailsData from "../../hocs/with-details-data";
import Record from '../record/record';
import withSwapiService from '../../hocs/with-swapi-service';

export const PersonDetails = withSwapiService(
  withDetailsData(ItemDetails),
  ({ getPerson, getPersonImage }) => ({ getData: getPerson, getImageUrl: getPersonImage})
);
export const StarshipDetails = withSwapiService(
  withDetailsData(ItemDetails),
  ({ getStarship, getStarshipImage }) => ({ getData: getStarship, getImageUrl: getStarshipImage})
);
export const PlanetDetails = withSwapiService(
  withDetailsData(ItemDetails),
  ({ getPlanet, getPlanetImage }) => ({ getData: getPlanet, getImageUrl: getPlanetImage})
);

export const DefaultPersonDetails = (props) => {
  return (
    <PersonDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
    </PersonDetails>
  );
};

export const DefaultPlanetDetails = (props) => {
  return (
    <PlanetDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="diameter" label="Diameter" />
      <Record field="rotationPeriod" label="Rotation period" />
    </PlanetDetails>
  );
};

export const DefaultStarshipDetails = (props) => {
  return (
    <StarshipDetails {...props}>
      <Record field="manufacturer" label="Manufacturer" />
      <Record field="crew" label="Crew" />
      <Record field="cargoCapacity" label="Cargo capacity" />
      <Record field="costInCredits" label="Cost in credits" />
    </StarshipDetails>
  );
};
