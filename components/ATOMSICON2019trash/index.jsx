import React from "react";
import "./ATOMSICON2019trash.sass";

class ATOMSICON2019trash extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`atomsicon2019trash-2 ${className || ""}`}>
        <img className="shape-4" src="/img/shape-6.svg" alt="Shape" />
        <div className="overlap-group-7">
          <div className="rectangle-18"></div>
          <div className="rectangle-18 variant-1"></div>
        </div>
      </div>
    );
  }
}

export default ATOMSICON2019trash;
