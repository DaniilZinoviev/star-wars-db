import React, { Component } from "react";

import Row from "../row/row";
import { PlanetList } from "../specific-components/item-lists";
import { DefaultPlanetDetails } from "../specific-components/item-details";

class PlanetPage extends Component {
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
        left={<PlanetList onChangeSelected={this.onChangeSelected} />}
        right={<DefaultPlanetDetails id={selectedId} />}
      />
    );
  }
}

export default PlanetPage;
