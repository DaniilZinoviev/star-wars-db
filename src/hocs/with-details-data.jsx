import React, { Component } from "react";
import Spinner from "../components/spinner/spinner";
import ErrorBoundary from "../components/error-boundary/error-boundary";

const withDetailsData = (View) => {
  return class WithDetailsData extends Component {
    state = {
      item: null,
      imageUrl: null,
      loading: true,
      error: false
    };

    componentDidMount() {
      const { id } = this.props;
      if (id) {
        this.updateData(id);
      }
    }

    componentDidUpdate({id: oldId}) {
      const {id: newId} = this.props;
      if (oldId !== newId && newId) {
        this.updateData(newId);
      }
    }

    updateData(id) {
      // Reset
      const { getData, getImageUrl } = this.props;
      this.setState({
        item: null,
        loading: true,
        error: false
      });

      getData(id)
        .then((item) => {
          this.setState({
            item,
            imageUrl: getImageUrl(item.id),
            loading: false,
            error: false
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true
          });
        });
    }

    render() {
      const { item, imageUrl, error, loading } = this.state;
      if (!this.props.id) {
        return <p>Please, choose an item to show</p>;
      }
      if (loading) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorBoundary />;
      }
      return <View {...this.props} item={item} imageUrl={imageUrl} />;
    }
  };
};

export default withDetailsData;
