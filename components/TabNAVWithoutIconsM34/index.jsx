import React from "react";
import ATOMSCONTENTCONTAINER from "../ATOMSCONTENTCONTAINER";
import "./TabNAVWithoutIconsM34.sass";

class TabNAVWithoutIconsM34 extends React.Component {
  render() {
    const { aTOMSCONTENTCONTAINERProps } = this.props;

    return (
      <div className="tab-nav-without-icons-1">
        <ATOMSCONTENTCONTAINER className={aTOMSCONTENTCONTAINERProps.className} />
      </div>
    );
  }
}

export default TabNAVWithoutIconsM34;
