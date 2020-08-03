import React, { Component } from "react";

import "./item-list.scss";
import SwapiService from "../../services/SwapiService";
import Spinner from "../spinner/spinner";

class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeoples().then((peoples) => {
      this.setState({
        peopleList: peoples.slice(0, 6), // Trim to 6 peoples
      });
    });
  }

  render() {
    const { peopleList } = this.state;
    const { onChangeSelected } = this.props;

    if (!peopleList) {
      return <Spinner />;
    }

    return (
      <div className="item-list">
        <ul className="list-group">
          {peopleList.map(({ id, name }) => (
            <li
              className="list-group-item"
              key={id}
              onClick={() => onChangeSelected(id)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
