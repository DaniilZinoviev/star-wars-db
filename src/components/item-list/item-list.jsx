import React, { Component } from "react";

import "./item-list.scss";
import SwapiService from "../../services/SwapiService";
import Spinner from "../spinner/spinner";

class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    this.props.getData().then((items) => {
      this.setState({
        itemList: items.slice(0, 6), // Trim to 6 peoples
      });
    });
  }

  render() {
    const { itemList } = this.state;
    const { onChangeSelected, renderItem } = this.props;

    if (!itemList) {
      return <Spinner />;
    }

    return (
      <div className="item-list">
        <ul className="list-group">
          {itemList.map((item) => (
            <li
              className="list-group-item"
              key={item.id}
              onClick={() => onChangeSelected(item.id)}
            >
              {renderItem(item)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
