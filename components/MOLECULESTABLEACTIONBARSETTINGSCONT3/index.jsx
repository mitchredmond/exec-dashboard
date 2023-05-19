import React from "react";
import MOLECULESINPUTSSEARCHDEFAULT from "../MOLECULESINPUTSSEARCHDEFAULT";
import ATOMSTABLEFILTERDEFAULT from "../ATOMSTABLEFILTERDEFAULT";
import ATOMSICONFilterClear from "../ATOMSICONFilterClear";
import "./MOLECULESTABLEACTIONBARSETTINGSCONT3.sass";

class MOLECULESTABLEACTIONBARSETTINGSCONT3 extends React.Component {
  render() {
    const { mOLECULESINPUTSSEARCHDEFAULTProps, aTOMSTABLEFILTERDEFAULTProps, aTOMSICONFilterClearProps } = this.props;

    return (
      <div className="moleculestableaction-3">
        <MOLECULESINPUTSSEARCHDEFAULT
          className={mOLECULESINPUTSSEARCHDEFAULTProps.className}
          aTOMSICON2019CommonsearchProps={mOLECULESINPUTSSEARCHDEFAULTProps.aTOMSICON2019CommonsearchProps}
        />
        <ATOMSTABLEFILTERDEFAULT
          className={aTOMSTABLEFILTERDEFAULTProps.className}
          aTOMSICON2019filterProps={aTOMSTABLEFILTERDEFAULTProps.aTOMSICON2019filterProps}
        />
        <ATOMSICONFilterClear className={aTOMSICONFilterClearProps.className} />
      </div>
    );
  }
}

export default MOLECULESTABLEACTIONBARSETTINGSCONT3;
