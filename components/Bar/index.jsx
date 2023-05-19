import React from "react";
import "./Bar.sass";

class Bar extends React.Component {
  render() {
    const { className } = this.props;

    return <div className={`bar ${className || ""}`}></div>;
  }
}

export default Bar;
