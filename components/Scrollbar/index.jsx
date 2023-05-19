import React from "react";
import "./Scrollbar.sass";

class Scrollbar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`scrollbar ${className || ""}`}>
        <div className="scroller"></div>
      </div>
    );
  }
}

export default Scrollbar;
