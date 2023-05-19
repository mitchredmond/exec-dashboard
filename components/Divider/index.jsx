import React from "react";
import "./Divider.sass";

class Divider extends React.Component {
  render() {
    const { className } = this.props;

    return <div className={`rectangle ${className || ""}`}></div>;
  }
}

export default Divider;
