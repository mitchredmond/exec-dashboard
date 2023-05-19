import React from "react";
import "./Button.sass";

class Button extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="button">
        <div className="content">
          <div className="text">{children}</div>
        </div>
      </div>
    );
  }
}

export default Button;
