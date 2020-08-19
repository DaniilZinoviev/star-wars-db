import React from "react";
import "./item-list.scss";

const ItemList = ({ data, children }) => {
  // Trim to 6 items
  data = data.slice(0, 6);

  return (
    <div className="item-list">
      <ul className="list-group">
        {data.map((item) => (
          <li
            className="list-group-item"
            key={item.id}
          >
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
