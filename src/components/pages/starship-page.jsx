import React from "react";

import { StarshipList } from "../specific-components/item-lists";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const StarshipPage = ({ history }) => {
  return (
    <StarshipList
      onChangeSelected={(id) => {
        const newPath = `/starships/${id}`;
        history.push(newPath);
      }}
    />
  );
};

export default withRouter(StarshipPage);
