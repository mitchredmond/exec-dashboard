import React from "react";
import "./Button62.sass";

class Button62 extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <div className="button-2">
        <div className="content-2">
          <div className="text-4 neuehaasgroteskdisplaystd-bold-white-10px">{text}</div>
        </div>
        <div className="dropdown-1">
          <div className="rectangle-30"></div>
          <img className="icon-2" src="/img/icon-3.svg" alt="Icon" />
        </div>
      </div>
    );
  }
}

export default Button62;
