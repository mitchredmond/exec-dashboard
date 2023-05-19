import React from "react";
import "./ATOMSTABLEBODYCELLDATALEFTALIGNED.sass";

class ATOMSTABLEBODYCELLDATALEFTALIGNED extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`moleculestablebodycell-data-copy-2 ${className || ""}`}>
        <div className="cell-data neuehaasgroteskdisplaystd-regular-normal-black-14px">{children}</div>
      </div>
    );
  }
}

export default ATOMSTABLEBODYCELLDATALEFTALIGNED;
