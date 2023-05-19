import React from "react";
import MOLECULESTABLEACTIONBARSETTINGSCONT2 from "../MOLECULESTABLEACTIONBARSETTINGSCONT2";
import ATOMSDIVIDERSLINE1PXGRAY from "../ATOMSDIVIDERSLINE1PXGRAY";
import "./MOLECULESTABLEACTIONBARTEMPLATESELE.sass";

class MOLECULESTABLEACTIONBARTEMPLATESELE extends React.Component {
  render() {
    const { className, mOLECULESTABLEACTIONBARSETTINGSCONT, aTOMSDIVIDERSLINE1PXGRAYProps } = this.props;

    return (
      <div className={`moleculestableactionbartemplate-selected ${className || ""}`}>
        <div className="overlap-group3">
          <div className="address neuehaasgroteskdisplaystd-regular-normal-black-14px">1 Selected</div>
          <div className="overlap-group2-2">
            <MOLECULESTABLEACTIONBARSETTINGSCONT2
              aTOMSTABLEFILTERDEFAULTProps={mOLECULESTABLEACTIONBARSETTINGSCONT.aTOMSTABLEFILTERDEFAULTProps}
              aTOMSICONFilterClearProps={mOLECULESTABLEACTIONBARSETTINGSCONT.aTOMSICONFilterClearProps}
            />
            <ATOMSDIVIDERSLINE1PXGRAY className={aTOMSDIVIDERSLINE1PXGRAYProps.className} />
          </div>
        </div>
      </div>
    );
  }
}

export default MOLECULESTABLEACTIONBARTEMPLATESELE;
