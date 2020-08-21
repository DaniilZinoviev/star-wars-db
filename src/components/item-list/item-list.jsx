import React from "react";
import PropTypes from "prop-types";

import "./item-list.scss";

const ItemList = ({ onChangeSelected, data, children }) => {
  // Trim to 6 items
  data = data.slice(0, 6);

  return (
    <div className="item-list">
      <ul className="list-group">
        {data.map((item) => (
          <li
            className="list-group-item"
            key={item.id}
            onClick={() => onChangeSelected(item.id)}
          >
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemList.defaultProps = {
  onChangeSelected: () => {},
};

ItemList.propTypes = {
  onChangeSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;
