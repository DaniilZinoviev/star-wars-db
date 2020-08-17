import React, { Component } from "react";

import "./item-details.scss";

class ItemDetails extends Component {
  state = {
    item: null,
    imageUrl: null,
  };

  componentDidMount() {
    const { getData, selectedId, getImageUrl } = this.props;
    getData(selectedId).then((item) => {
      this.setState({
        item,
        imageUrl: getImageUrl(item.id),
      });
    });
  }

  render() {
    const { item, imageUrl } = this.state;

    if (!item) {
      return <p>Wait...</p>;
    }

    return (
      <div className="person-details">
        <div className="row">
          <div className="col-sm-auto text-center mr-sm-2 mb-sm-0 mb-3">
            <img className="person-image img-fluid" src={imageUrl} alt="" />
          </div>
          <div className="col">
            <h3>{item.name}</h3>
            <ul className="list-group">
              <li className="list-group-item">Gender: n/a</li>
              <li className="list-group-item">Birth Year: 33BBY</li>
              <li className="list-group-item">Eye color: Red</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
