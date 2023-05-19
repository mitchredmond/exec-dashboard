import React from "react";
import ATOMSTABLEFILTERDEFAULT from "../ATOMSTABLEFILTERDEFAULT";
import ATOMSICONFilterClear from "../ATOMSICONFilterClear";
import "./MOLECULESTABLEACTIONBARSETTINGSCONT2.sass";

class MOLECULESTABLEACTIONBARSETTINGSCONT2 extends React.Component {
  render() {
    const { aTOMSTABLEFILTERDEFAULTProps, aTOMSICONFilterClearProps } = this.props;

    return (
      <div className="moleculestableaction-2">
        <ATOMSTABLEFILTERDEFAULT aTOMSICON2019filterProps={aTOMSTABLEFILTERDEFAULTProps.aTOMSICON2019filterProps} />
        <ATOMSICONFilterClear className={aTOMSICONFilterClearProps.className} />
      </div>
    );
  }
}

export default MOLECULESTABLEACTIONBARSETTINGSCONT2;
