import React from "react";
import ATOMSDIVIDERSLINE1PXGRAY2 from "../ATOMSDIVIDERSLINE1PXGRAY2";
import "./MOLECULESTABLEROWDEFAULTNEW.sass";

class MOLECULESTABLEROWDEFAULTNEW extends React.Component {
  render() {
    const { className, aTOMSDIVIDERSLINE1PXGRAY21Props, aTOMSDIVIDERSLINE1PXGRAY22Props } = this.props;

    return (
      <div className={`moleculestablerowdefaultnew-1 ${className || ""}`}>
        <div className="overlap-group-10">
          <ATOMSDIVIDERSLINE1PXGRAY2 className={aTOMSDIVIDERSLINE1PXGRAY21Props.className} />
          <ATOMSDIVIDERSLINE1PXGRAY2 className={aTOMSDIVIDERSLINE1PXGRAY22Props.className} />
        </div>
      </div>
    );
  }
}

export default MOLECULESTABLEROWDEFAULTNEW;
