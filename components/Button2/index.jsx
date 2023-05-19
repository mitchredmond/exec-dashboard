import React from "react";
import "./Button2.sass";

class Button2 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="button-1">
        <div className="content-1">
          <div className="text-1">{children}</div>
        </div>
      </div>
    );
  }
}

export default Button2;
