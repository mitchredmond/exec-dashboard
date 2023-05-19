import React from "react";
import "./MOLECULESOUTAGEINFOAFFECTEDLOCATION.sass";

class MOLECULESOUTAGEINFOAFFECTEDLOCATION extends React.Component {
  render() {
    const { x3Copy, className } = this.props;

    return (
      <div className={`moleculesoutageinfoon-generator ${className || ""}`}>
        <div className="overlap-group-6">
          <div className="overlap-group1-4">
            <div className="group-111">
              <div className="overlap-group-6">
                <img className="combined-shape-copy" src="/img/combined-shape-copy.svg" alt="Combined Shape Copy" />
                <div className="rectangle-12"></div>
                <div className="x3-copy helvetica-regular-normal-black-14px">{x3Copy}</div>
                <div className="affected-location-so neuehaasgroteskdisplaystd-bold-black-8px">
                  Affected Location-South East
                </div>
              </div>
            </div>
            <div className="rectangle-13"></div>
          </div>
          <div className="overlap-group2-1">
            <div className="group-109-copy-3">
              <img className="shape-3" src="/img/shape-34.svg" alt="Shape" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MOLECULESOUTAGEINFOAFFECTEDLOCATION;
