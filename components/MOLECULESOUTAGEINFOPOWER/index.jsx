import React from "react";
import Controlspower from "../Controlspower";
import "./MOLECULESOUTAGEINFOPOWER.sass";

class MOLECULESOUTAGEINFOPOWER extends React.Component {
  render() {
    const { x10, className } = this.props;

    return (
      <div className={`moleculesoutageinfopower-copy-3 ${className || ""}`}>
        <div className="flex-row-2">
          <div className="group-14">
            <div className="overlap-group-5">
              <Controlspower />
            </div>
          </div>
          <div className="x10 helvetica-regular-normal-black-14px">{x10}</div>
        </div>
        <img className="combined-shape" src="/img/combined-shape-1.svg" alt="Combined Shape" />
      </div>
    );
  }
}

export default MOLECULESOUTAGEINFOPOWER;
