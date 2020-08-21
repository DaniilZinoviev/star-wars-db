import React from "react";
import PropTypes from 'prop-types';

import "./item-details.scss";

const ItemDetails = ({ item, imageUrl, children }) => {
  return (
    <div className="item-details">
      <div className="row">
        <div className="col-sm-auto text-center mr-sm-2 mb-sm-0 mb-3">
          <img className="rounded img-fluid" src={imageUrl} alt="item" />
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
};

ItemDetails.propTypes = {
  item: PropTypes.object,
  imageUrl: PropTypes.string,
  children: PropTypes.node
};

export default ItemDetails;
