import React from "react";

import { StarshipList } from "../specific-components/item-lists";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Row from "../row/row";
import { DefaultStarshipDetails } from "../specific-components/item-details";

const StarshipPage = ({ history, match }) => {
  return (
    <Row
      left={
        <StarshipList
          onChangeSelected={(id) => {
            const newPath = `/starships/${id}`;
            history.push(newPath);
          }}
        />
      }
      right={<DefaultStarshipDetails id={match.params.id} />}
    />
  );
};

export default withRouter(StarshipPage);
