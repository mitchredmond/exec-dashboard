import React from "react";
import MOLECULESINPUTSDATADEFAULT from "../MOLECULESINPUTSDATADEFAULT";
import "./Group6Copy2.sass";

class Group6Copy2 extends React.Component {
  render() {
    const {
      className,
      mOLECULESINPUTSDATADEFAULT1Props,
      mOLECULESINPUTSDATADEFAULT2Props,
      mOLECULESINPUTSDATADEFAULT3Props,
      mOLECULESINPUTSDATADEFAULT4Props,
    } = this.props;

    return (
      <div className={`group-6-copy-2-2 ${className || ""}`}>
        <MOLECULESINPUTSDATADEFAULT
          label={mOLECULESINPUTSDATADEFAULT1Props.label}
          placeholderText={mOLECULESINPUTSDATADEFAULT1Props.placeholderText}
          className={mOLECULESINPUTSDATADEFAULT1Props.className}
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
    );
  }
}

export default Group6Copy2;
