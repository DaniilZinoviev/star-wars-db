import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <div className="header row  align-items-center mb-4 pt-2">
      <div className="col-sm-auto">
        <Link to="/" className="logo text-white h3">
          Star Wars
        </Link>
      </div>

      <div className="col">
        <ul className="nav mb-0">
          <li className="nav-item">
            <Link to="/planets" className="nav-link">
              Planets
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/peoples" className="nav-link">
              Peoples
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/starships" className="nav-link">
              Starships
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
