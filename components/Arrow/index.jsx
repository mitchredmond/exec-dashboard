import React from "react";
import Divider from "../Divider";
import "./Arrow.sass";

class Arrow extends React.Component {
  render() {
    const { className, dividerProps } = this.props;

    return (
      <div className={`arrow-1 ${className || ""}`}>
        <img className="atomsicon2019close-2" src="/img/atoms-icon-2019-close-1.svg" alt="ATOMS/ICON/2019/close" />
        <Divider className={dividerProps.className} />
        <img className="atomsicon2019close-2" src="/img/atoms-icon-2019-close-6.svg" alt="ATOMS/ICON/2019/close" />
      </div>
    );
  }
}

export default Arrow;
