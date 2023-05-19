import React from "react";
import "./ATOMSDIVIDERSLINE1PXGRAY.sass";

class ATOMSDIVIDERSLINE1PXGRAY extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`atomsdividersline1-pxgray ${className || ""}`}>
        <div className="rectangle-3"></div>
      </div>
    );
  }
}

export default ATOMSDIVIDERSLINE1PXGRAY;
