import React from "react";

import Row from "../row/row";
import { PeopleList } from "../specific-components/item-lists";
import { DefaultPersonDetails } from "../specific-components/item-details";

const PeoplePage = ({ match, history }) => {
  return (
    <Row
      left={
        <PeopleList
          onChangeSelected={(id) => {
            history.push(`/peoples/${id}`);
          }}
        />
      }
      right={<DefaultPersonDetails id={match.params.id} />}
    />
  );
};

export default PeoplePage;
