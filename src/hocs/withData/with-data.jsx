import React, { Component } from "react";
import Spinner from "../../components/spinner/spinner";

const withData = (View, getData) => {
  return class WithData extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      getData().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      if (!this.state.data) {
        return <Spinner />;
      }

      console.log('withData', this.props);

      return <View {...this.props} data={this.state.data} />;
    }
  };
};

export default withData;