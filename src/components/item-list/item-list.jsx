import React from "react";

import "./item-list.scss";

const ItemList = () => {
  return (
    <div className="item-list">
      <ul className=" list-group">
        <li className="list-group-item">Luke Skywalker</li>
        <li className="list-group-item">C-3P0</li>
        <li className="list-group-item">R2-D2</li>
      </ul>
    </div>
  );
};

export default ItemList;
