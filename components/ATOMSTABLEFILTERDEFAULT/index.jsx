import React from "react";
import ATOMSICON2019filter from "../ATOMSICON2019filter";
import "./ATOMSTABLEFILTERDEFAULT.sass";

class ATOMSTABLEFILTERDEFAULT extends React.Component {
  render() {
    const { className, aTOMSICON2019filterProps } = this.props;

    return (
      <div className={`atomstablefilterenabled-2 ${className || ""}`}>
        <ATOMSICON2019filter className={aTOMSICON2019filterProps.className} />
      </div>
    );
  }
}

export default ATOMSTABLEFILTERDEFAULT;
