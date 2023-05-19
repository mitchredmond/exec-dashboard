import React from "react";
import ATOMSCONTENTCONTAINER from "../ATOMSCONTENTCONTAINER";
import "./MOLECULESHEADINGLEVEL1.sass";

class MOLECULESHEADINGLEVEL1 extends React.Component {
  render() {
    const { placeholderText, aTOMSCONTENTCONTAINERProps } = this.props;

    return (
      <div className="moleculesheadinglevel-1">
        <div className="overlap-group-4">
          <ATOMSCONTENTCONTAINER className={aTOMSCONTENTCONTAINERProps.className} />
          <div className="placeholder-text-5 neuehaasgroteskdisplaystd-bold-black-16px">{placeholderText}</div>
        </div>
      </div>
    );
  }
}

export default MOLECULESHEADINGLEVEL1;
