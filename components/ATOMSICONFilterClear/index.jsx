import React from "react";
import "./ATOMSICONFilterClear.sass";

class ATOMSICONFilterClear extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`icon-filter-clear-2 ${className || ""}`}>
        <div className="clear_filters">
          <img className="shape-5" src="/img/shape-11.svg" alt="Shape" />
        </div>
      </div>
    );
  }
}

export default ATOMSICONFilterClear;
