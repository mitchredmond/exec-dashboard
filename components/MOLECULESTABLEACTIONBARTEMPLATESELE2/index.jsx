import React from "react";
import MOLECULESTABLEACTIONBARSETTINGSCONT3 from "../MOLECULESTABLEACTIONBARSETTINGSCONT3";
import ATOMSDIVIDERSLINE1PXGRAY from "../ATOMSDIVIDERSLINE1PXGRAY";
import "./MOLECULESTABLEACTIONBARTEMPLATESELE2.sass";

class MOLECULESTABLEACTIONBARTEMPLATESELE2 extends React.Component {
  render() {
    const { address, mOLECULESTABLEACTIONBARSETTINGSCONT, aTOMSDIVIDERSLINE1PXGRAYProps } = this.props;

    return (
      <div className="moleculestableactionbartemplate-selected-2">
        <div className="overlap-group3-1">
          <div className="address-1 neuehaasgroteskdisplaystd-regular-normal-black-14px">{address}</div>
          <div className="overlap-group2-3">
            <MOLECULESTABLEACTIONBARSETTINGSCONT3
              mOLECULESINPUTSSEARCHDEFAULTProps={mOLECULESTABLEACTIONBARSETTINGSCONT.mOLECULESINPUTSSEARCHDEFAULTProps}
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

export default MOLECULESTABLEACTIONBARTEMPLATESELE2;
