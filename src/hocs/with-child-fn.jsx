import React from "react";

const withChildFn = (fn) => (View) => {
  return (props) => {
    return <View {...props}>{fn}</View>;
  };
};

export default withChildFn;