import React from "react";

import "./record.scss";

const Record = ({ item, field, label }) => {
  console.log(item)
  return (
    <li className="list-group-item">
      {label}: {item[field]}
    </li>
  );
};

export default Record;