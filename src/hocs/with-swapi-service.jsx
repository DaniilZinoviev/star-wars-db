import React from "react";

import SwapiContext from "../contexts/swapi-service-context";

const withSwapiService = (mapMethodsToProps) => (View) => {
  return (props) => {
    return (
      <SwapiContext.Consumer>
        {(swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <View {...props} {...serviceProps} />;
        }}
      </SwapiContext.Consumer>
    );
  };
};

export default withSwapiService;