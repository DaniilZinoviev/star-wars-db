import React, { Component } from "react";
import Spinner from "../../components/spinner/spinner";

const withDetailsData = (View, getData, getImageUrl) => {
  return class WithDetailsData extends Component {
    state = {
      item: null,
      imageUrl: null,
    };

    componentDidMount() {
      const { id } = this.props;
      this.updateData(id);
    }

    componentDidUpdate({id: oldId}) {
      const {id: newId} = this.props;
      if (oldId !== newId) {
        this.updateData(newId);
      }
    }

    updateData(id) {
      // Reset
      this.setState({ item: null });

      getData(id).then((item) => {
        this.setState({
          item,
          imageUrl: getImageUrl(item.id),
        });
      });
    }

    render() {
      const { item, imageUrl } = this.state;
      if (!item) {
        return <Spinner />;
      }
      return <View {...this.props} item={item} imageUrl={imageUrl} />;
    }
  };
};

export default withDetailsData;
