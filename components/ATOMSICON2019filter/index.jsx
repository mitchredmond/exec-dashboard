import React from "react";
import "./ATOMSICON2019filter.sass";

class ATOMSICON2019filter extends React.Component {
  render() {
    const { className } = this.props;

    return <div className={`atomsicon2019filter ${className || ""}`}></div>;
  }
}

export default ATOMSICON2019filter;
