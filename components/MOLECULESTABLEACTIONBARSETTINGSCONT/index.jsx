import React from "react";
import MOLECULESINPUTSDROPDOWNCOMPLETE from "../MOLECULESINPUTSDROPDOWNCOMPLETE";
import ATOMSICONFilterSave from "../ATOMSICONFilterSave";
import ATOMSICON2019trash from "../ATOMSICON2019trash";
import MOLECULESINPUTSSEARCHDEFAULT from "../MOLECULESINPUTSSEARCHDEFAULT";
import ATOMSTABLEFILTERDEFAULT from "../ATOMSTABLEFILTERDEFAULT";
import ATOMSICONFilterClear from "../ATOMSICONFilterClear";
import "./MOLECULESTABLEACTIONBARSETTINGSCONT.sass";

class MOLECULESTABLEACTIONBARSETTINGSCONT extends React.Component {
  render() {
    const {
      className,
      mOLECULESINPUTSDROPDOWNCOMPLETEProp,
      aTOMSICON2019trashProps2,
      mOLECULESINPUTSSEARCHDEFAULTProps,
      aTOMSTABLEFILTERDEFAULTProps,
    } = this.props;

    return (
      <div className={`moleculestableaction-1 ${className || ""}`}>
        <div className="group-19">
          <div className="group-3-4">
            <MOLECULESINPUTSDROPDOWNCOMPLETE dropdown={mOLECULESINPUTSDROPDOWNCOMPLETEProp.dropdown} />
            <ATOMSICONFilterSave />
          </div>
          <ATOMSICON2019trash className={aTOMSICON2019trashProps2.className} />
        </div>
        <MOLECULESINPUTSSEARCHDEFAULT
          aTOMSICON2019CommonsearchProps={mOLECULESINPUTSSEARCHDEFAULTProps.aTOMSICON2019CommonsearchProps}
        />
        <div className="group-2-2">
          <ATOMSTABLEFILTERDEFAULT aTOMSICON2019filterProps={aTOMSTABLEFILTERDEFAULTProps.aTOMSICON2019filterProps} />
        </div>
        <ATOMSICONFilterClear />
      </div>
    );
  }
}

export default MOLECULESTABLEACTIONBARSETTINGSCONT;
