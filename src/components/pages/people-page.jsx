import React, { Component } from "react";

import Row from "../row/row";
import { PeopleList } from "../specific-components/item-lists";
import { DefaultPersonDetails } from "../specific-components/item-details";

class PeoplePage extends Component {
  state = {
    selectedId: null,
  };

  onChangeSelected = (selectedId) => {
    this.setState({ selectedId });
  };

  render() {
    const { selectedId } = this.state;

    return (
      <Row
        left={<PeopleList onChangeSelected={this.onChangeSelected} />}
        right={<DefaultPersonDetails id={selectedId} />}
      />
    );
  }
}

export default PeoplePage;
