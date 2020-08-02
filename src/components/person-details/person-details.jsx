import React from "react";

import "./person-details.scss";

const testSrc = "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest?cb=20161108040914";

const PersonDetails = () => {
  return (
    <div className="person-details">
      <div className="row">
        <div className="col-sm-auto text-center mr-sm-2 mb-sm-0 mb-3">
          <img className="person-image img-fluid" src={testSrc} alt="" />
        </div>
        <div className="col">
          <h3>R2-D2</h3>
          <ul className="list-group">
            <li className="list-group-item">Gender: n/a</li>
            <li className="list-group-item">Birth Year: 33BBY</li>
            <li className="list-group-item">Eye color: Red</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
