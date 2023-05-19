import React from "react";
import ATOMSCONTENTCONTAINER from "../ATOMSCONTENTCONTAINER";
import Group6Copy2 from "../Group6Copy2";
import MOLECULESINPUTSDATADEFAULT from "../MOLECULESINPUTSDATADEFAULT";
import ATOMSDIVIDERSLINE1PXGRAY from "../ATOMSDIVIDERSLINE1PXGRAY";
import "./LocalAdditionalEquipmentDetails.sass";

class LocalAdditionalEquipmentDetails extends React.Component {
  render() {
    const {
      aTOMSCONTENTCONTAINERProps,
      group6Copy21Props,
      group6Copy22Props,
      group6Copy23Props,
      group6Copy24Props,
      mOLECULESINPUTSDATADEFAULT1Props,
      mOLECULESINPUTSDATADEFAULT2Props,
      aTOMSDIVIDERSLINE1PXGRAYProps,
    } = this.props;

    return (
      <div className="attachments-copy">
        <div className="overlap-group1-5">
          <ATOMSCONTENTCONTAINER className={aTOMSCONTENTCONTAINERProps.className} />
          <Group6Copy2
            mOLECULESINPUTSDATADEFAULT1Props={group6Copy21Props.mOLECULESINPUTSDATADEFAULT1Props}
            mOLECULESINPUTSDATADEFAULT2Props={group6Copy21Props.mOLECULESINPUTSDATADEFAULT2Props}
            mOLECULESINPUTSDATADEFAULT3Props={group6Copy21Props.mOLECULESINPUTSDATADEFAULT3Props}
            mOLECULESINPUTSDATADEFAULT4Props={group6Copy21Props.mOLECULESINPUTSDATADEFAULT4Props}
          />
          <Group6Copy2
            className={group6Copy22Props.className}
            mOLECULESINPUTSDATADEFAULT1Props={group6Copy22Props.mOLECULESINPUTSDATADEFAULT1Props}
            mOLECULESINPUTSDATADEFAULT2Props={group6Copy22Props.mOLECULESINPUTSDATADEFAULT2Props}
            mOLECULESINPUTSDATADEFAULT3Props={group6Copy22Props.mOLECULESINPUTSDATADEFAULT3Props}
            mOLECULESINPUTSDATADEFAULT4Props={group6Copy22Props.mOLECULESINPUTSDATADEFAULT4Props}
          />
          <Group6Copy2
            className={group6Copy23Props.className}
            mOLECULESINPUTSDATADEFAULT1Props={group6Copy23Props.mOLECULESINPUTSDATADEFAULT1Props}
            mOLECULESINPUTSDATADEFAULT2Props={group6Copy23Props.mOLECULESINPUTSDATADEFAULT2Props}
            mOLECULESINPUTSDATADEFAULT3Props={group6Copy23Props.mOLECULESINPUTSDATADEFAULT3Props}
            mOLECULESINPUTSDATADEFAULT4Props={group6Copy23Props.mOLECULESINPUTSDATADEFAULT4Props}
          />
          <Group6Copy2
            className={group6Copy24Props.className}
            mOLECULESINPUTSDATADEFAULT1Props={group6Copy24Props.mOLECULESINPUTSDATADEFAULT1Props}
            mOLECULESINPUTSDATADEFAULT2Props={group6Copy24Props.mOLECULESINPUTSDATADEFAULT2Props}
            mOLECULESINPUTSDATADEFAULT3Props={group6Copy24Props.mOLECULESINPUTSDATADEFAULT3Props}
            mOLECULESINPUTSDATADEFAULT4Props={group6Copy24Props.mOLECULESINPUTSDATADEFAULT4Props}
          />
        </div>
        <div className="group-copy-2">
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
        </div>
        <ATOMSDIVIDERSLINE1PXGRAY className={aTOMSDIVIDERSLINE1PXGRAYProps.className} />
      </div>
    );
  }
}

export default LocalAdditionalEquipmentDetails;
