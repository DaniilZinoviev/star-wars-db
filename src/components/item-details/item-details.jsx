import React, { Component } from "react";

import "./item-details.scss";

class ItemDetails extends Component {
  render() {
    const { item, imageUrl, children } = this.props;

    return (
      <div className="item-details">
        <div className="row">
          <div className="col-sm-auto text-center mr-sm-2 mb-sm-0 mb-3">
            <img className="rounded img-fluid" src={imageUrl} alt="" />
          </div>
          <div className="col">
            <h3>{item.name}</h3>
            <ul className="list-group">
              {React.Children.map(children, (child) =>
                React.cloneElement(child, { item })
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
