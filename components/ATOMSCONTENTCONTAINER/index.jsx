import React from "react";
import "./ATOMSCONTENTCONTAINER.sass";

class ATOMSCONTENTCONTAINER extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`atomscontentcontainer-1 ${className || ""}`}>
        <div className="rectangle-6"></div>
      </div>
    );
  }
}

export default ATOMSCONTENTCONTAINER;
