import React from "react";
import Divider from "../Divider";
import "./Icon.sass";

class Icon extends React.Component {
  render() {
    const { divider1Props, divider2Props } = this.props;

    return (
      <div className="atomsicon2019menu">
        <div className="group-1">
          <Divider />
          <Divider className={divider1Props.className} />
          <Divider className={divider2Props.className} />
        </div>
      </div>
    );
  }
}

export default Icon;
