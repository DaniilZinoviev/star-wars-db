import React from "react";

const withChildFn = (View, fn) => {
  return (props) => {
    return <View {...props}>{fn}</View>;
  };
};

export default withChildFn;