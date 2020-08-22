import React from "react";

import Row from "../row/row";
import { PlanetList } from "../specific-components/item-lists";
import { DefaultPlanetDetails } from "../specific-components/item-details";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const PlanetPage = ({ history, match }) => {
  return (
    <Row
      left={
        <PlanetList
          onChangeSelected={(id) => {
            history.push(`/planets/${id}`);
          }}
        />
      }
      right={<DefaultPlanetDetails id={match.params.id} />}
    />
  );
};

export default withRouter(PlanetPage);
