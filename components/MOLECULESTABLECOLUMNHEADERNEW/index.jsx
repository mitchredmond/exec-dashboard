import React from "react";
import ATOMSDIVIDERSLINE1PXGRAY from "../ATOMSDIVIDERSLINE1PXGRAY";
import "./MOLECULESTABLECOLUMNHEADERNEW.sass";

class MOLECULESTABLECOLUMNHEADERNEW extends React.Component {
  render() {
    const { className, aTOMSDIVIDERSLINE1PXBLACK1Props, aTOMSDIVIDERSLINE1PXBLACK2Props } = this.props;

    return (
      <div className={`moleculestablecolumnheadernew-1 ${className || ""}`}>
        <ATOMSDIVIDERSLINE1PXGRAY className={aTOMSDIVIDERSLINE1PXBLACK1Props.className} />
        <ATOMSDIVIDERSLINE1PXGRAY className={aTOMSDIVIDERSLINE1PXBLACK2Props.className} />
      </div>
    );
  }
}

export default MOLECULESTABLECOLUMNHEADERNEW;
