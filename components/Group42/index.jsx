import React from "react";
import "./Group42.sass";

class Group42 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`group-42 ${className || ""}`}>
        <img className="path-7" src="/img/path-9.svg" alt="Path" />
      </div>
    );
  }
}

export default Group42;
