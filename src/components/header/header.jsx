import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  const links = [
    {
      label: "Planets",
      to: "/planets",
    },
    {
      label: "Peoples",
      to: "/peoples",
    },
    {
      label: "Starships",
      to: "/starships",
    },
  ];

  return (
    <div className="header row  align-items-center mb-4 pt-2">
      <div className="col-sm-auto">
        <Link to="/" className="logo text-white h3">
          Star Wars
        </Link>
      </div>

      <div className="col">
        <ul className="nav mb-0">
          {links.map(({ label, to }) => (
            <li className="nav-item">
              <Link to={to} className="nav-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
