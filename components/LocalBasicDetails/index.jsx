import React from "react";
import ATOMSCONTENTCONTAINER from "../ATOMSCONTENTCONTAINER";
import MOLECULESINPUTSDATADEFAULT from "../MOLECULESINPUTSDATADEFAULT";
import ATOMSDIVIDERSLINE1PXGRAY from "../ATOMSDIVIDERSLINE1PXGRAY";
import "./LocalBasicDetails.sass";

class LocalBasicDetails extends React.Component {
  render() {
    const {
      aTOMSCONTENTCONTAINERProps,
      mOLECULESINPUTSDATADEFAULT1Props,
      mOLECULESINPUTSDATADEFAULT2Props,
      mOLECULESINPUTSDATADEFAULT3Props,
      mOLECULESINPUTSDATADEFAULT4Props,
      mOLECULESINPUTSDATADEFAULT5Props,
      mOLECULESINPUTSDATADEFAULT6Props,
      mOLECULESINPUTSDATADEFAULT7Props,
      mOLECULESINPUTSDATADEFAULT8Props,
      mOLECULESINPUTSDATADEFAULT9Props,
      mOLECULESINPUTSDATADEFAULT10Props,
    } = this.props;

    return (
      <div className="local-outage-details-1-copy-5">
        <div className="overlap-group2">
          <ATOMSCONTENTCONTAINER className={aTOMSCONTENTCONTAINERProps.className} />
          <div className="group-6-copy-2">
            <MOLECULESINPUTSDATADEFAULT
              label={mOLECULESINPUTSDATADEFAULT1Props.label}
              placeholderText={mOLECULESINPUTSDATADEFAULT1Props.placeholderText}
            />
            <MOLECULESINPUTSDATADEFAULT
              label={mOLECULESINPUTSDATADEFAULT2Props.label}
              placeholderText={mOLECULESINPUTSDATADEFAULT2Props.placeholderText}
              className={mOLECULESINPUTSDATADEFAULT2Props.className}
            />
            <MOLECULESINPUTSDATADEFAULT
              label={mOLECULESINPUTSDATADEFAULT3Props.label}
              placeholderText={mOLECULESINPUTSDATADEFAULT3Props.placeholderText}
              className={mOLECULESINPUTSDATADEFAULT3Props.className}
            />
            <MOLECULESINPUTSDATADEFAULT
              label={mOLECULESINPUTSDATADEFAULT4Props.label}
              placeholderText={mOLECULESINPUTSDATADEFAULT4Props.placeholderText}
              className={mOLECULESINPUTSDATADEFAULT4Props.className}
            />
          </div>
          <div className="group-6-copy-3">
            <MOLECULESINPUTSDATADEFAULT
              label={mOLECULESINPUTSDATADEFAULT5Props.label}
              placeholderText={mOLECULESINPUTSDATADEFAULT5Props.placeholderText}
              className={mOLECULESINPUTSDATADEFAULT5Props.className}
            />
            <MOLECULESINPUTSDATADEFAULT
              label={mOLECULESINPUTSDATADEFAULT6Props.label}
              placeholderText={mOLECULESINPUTSDATADEFAULT6Props.placeholderText}
              className={mOLECULESINPUTSDATADEFAULT6Props.className}
            />
            <MOLECULESINPUTSDATADEFAULT
              label={mOLECULESINPUTSDATADEFAULT7Props.label}
              placeholderText={mOLECULESINPUTSDATADEFAULT7Props.placeholderText}
              className={mOLECULESINPUTSDATADEFAULT7Props.className}
            />
            <MOLECULESINPUTSDATADEFAULT
              label={mOLECULESINPUTSDATADEFAULT8Props.label}
              placeholderText={mOLECULESINPUTSDATADEFAULT8Props.placeholderText}
              className={mOLECULESINPUTSDATADEFAULT8Props.className}
            />
          </div>
          <MOLECULESINPUTSDATADEFAULT
            label={mOLECULESINPUTSDATADEFAULT9Props.label}
            placeholderText={mOLECULESINPUTSDATADEFAULT9Props.placeholderText}
            className={mOLECULESINPUTSDATADEFAULT9Props.className}
          />
          <ATOMSDIVIDERSLINE1PXGRAY />
          <MOLECULESINPUTSDATADEFAULT
            label={mOLECULESINPUTSDATADEFAULT10Props.label}
            placeholderText={mOLECULESINPUTSDATADEFAULT10Props.placeholderText}
            className={mOLECULESINPUTSDATADEFAULT10Props.className}
          />
        </div>
      </div>
    );
  }
}

export default LocalBasicDetails;
