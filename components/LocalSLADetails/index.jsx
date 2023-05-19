import React from "react";
import ATOMSCONTENTCONTAINER from "../ATOMSCONTENTCONTAINER";
import MOLECULESHEADINGLEVEL1 from "../MOLECULESHEADINGLEVEL1";
import MOLECULESINPUTSDATADEFAULT from "../MOLECULESINPUTSDATADEFAULT";
import ATOMSDIVIDERSLINE1PXGRAY from "../ATOMSDIVIDERSLINE1PXGRAY";
import "./LocalSLADetails.sass";

class LocalSLADetails extends React.Component {
  render() {
    const {
      label,
      labelCopy,
      labelCopy2,
      labelCopy3,
      labelCopy4,
      aTOMSCONTENTCONTAINERProps,
      mOLECULESHEADINGLEVEL1Props,
      mOLECULESINPUTSDATADEFAULT1Props,
      mOLECULESINPUTSDATADEFAULT2Props,
      aTOMSDIVIDERSLINE1PXGRAYProps,
    } = this.props;

    return (
      <div className="local-outage-details-1-copy-4">
        <div className="overlap-group1-1">
          <ATOMSCONTENTCONTAINER className={aTOMSCONTENTCONTAINERProps.className} />
          <MOLECULESHEADINGLEVEL1
            placeholderText={mOLECULESHEADINGLEVEL1Props.placeholderText}
            aTOMSCONTENTCONTAINERProps={mOLECULESHEADINGLEVEL1Props.aTOMSCONTENTCONTAINERProps}
          />
          <MOLECULESINPUTSDATADEFAULT
            label={mOLECULESINPUTSDATADEFAULT1Props.label}
            placeholderText={mOLECULESINPUTSDATADEFAULT1Props.placeholderText}
            className={mOLECULESINPUTSDATADEFAULT1Props.className}
          />
          <div className="group-13">
            <div className="label-1 neuehaasgroteskdisplaystd-regular-normal-black-12px">{label}</div>
            <div className="overlap-group-3">
              <div className="rectangle-copy-7"></div>
            </div>
            <div className="path-container">
              <img className="path-5-1" src="/img/path-5-1.svg" alt="Path 5" />
              <img className="path-5-copy" src="/img/path-5-1.svg" alt="Path 5 Copy" />
              <img className="path-5-copy" src="/img/path-5-1.svg" alt="Path 5 Copy 2" />
            </div>
            <div className="label-copy-container neuehaasgroteskdisplaystd-regular-normal-black-10px">
              <div className="label-copy">{labelCopy}</div>
              <div className="label-copy-2">{labelCopy2}</div>
              <div className="label-copy-3">{labelCopy3}</div>
              <div className="label-copy-4">{labelCopy4}</div>
            </div>
          </div>
          <MOLECULESINPUTSDATADEFAULT
            label={mOLECULESINPUTSDATADEFAULT2Props.label}
            placeholderText={mOLECULESINPUTSDATADEFAULT2Props.placeholderText}
            className={mOLECULESINPUTSDATADEFAULT2Props.className}
          />
        </div>
        <ATOMSDIVIDERSLINE1PXGRAY className={aTOMSDIVIDERSLINE1PXGRAYProps.className} />
      </div>
    );
  }
}

export default LocalSLADetails;
