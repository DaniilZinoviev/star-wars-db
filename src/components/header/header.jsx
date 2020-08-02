import React from "react";

import "./header.scss";

const Header = () => {
  return (
    <div className="header row  align-items-center mb-4 pt-2">
      <div className="col-sm-auto">
        <a href="#" className="logo text-white h3">
          Star Wars
        </a>
      </div>

      <div className="col">
        <ul className="nav mb-0">
          <li className="nav-item">
            <a href="" className="nav-link">
              Planets
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Peoples
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Spaceships
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
