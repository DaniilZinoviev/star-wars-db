import React, { Component } from "react";

import Row from "../row/row";
import { StarshipList } from "../specific-components/item-lists";
import { DefaultStarshipDetails } from "../specific-components/item-details";

class StarshipPage extends Component {
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
        left={<StarshipList onChangeSelected={this.onChangeSelected} />}
        right={<DefaultStarshipDetails id={selectedId} />}
      />
    );
  }
}

export default StarshipPage;
