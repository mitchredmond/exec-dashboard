import React from "react";
import Divider from "../Divider";
import ATOMSCOLLAPSIBLEICONBG from "../ATOMSCOLLAPSIBLEICONBG";
import MOLECULESCOLLAPSIBLETITLELEVEL12CLO2 from "../MOLECULESCOLLAPSIBLETITLELEVEL12CLO2";
import "./MOLECULESFORMCOLLAPSIBLELEVEL1.sass";

class MOLECULESFORMCOLLAPSIBLELEVEL1 extends React.Component {
  render() {
    const { className, dividerProps, mOLECULESCOLLAPSIBLETITLELEVEL12CLO } = this.props;

    return (
      <div className={`moleculesformcollapsiblelevel-2 ${className || ""}`}>
        <div className="overlap-group-2">
          <Divider className={dividerProps.className} />
          <ATOMSCOLLAPSIBLEICONBG />
          <MOLECULESCOLLAPSIBLETITLELEVEL12CLO2
            placeholderText={mOLECULESCOLLAPSIBLETITLELEVEL12CLO.placeholderText}
            className={mOLECULESCOLLAPSIBLETITLELEVEL12CLO.className}
          />
        </div>
      </div>
    );
  }
}

export default MOLECULESFORMCOLLAPSIBLELEVEL1;
