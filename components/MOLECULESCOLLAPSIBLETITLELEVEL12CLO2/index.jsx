import React from "react";
import "./MOLECULESCOLLAPSIBLETITLELEVEL12CLO2.sass";

class MOLECULESCOLLAPSIBLETITLELEVEL12CLO2 extends React.Component {
  render() {
    const { placeholderText, className } = this.props;

    return (
      <div className={`moleculesaccordiontitle-level-1-closed-1 ${className || ""}`}>
        <img
          className="atomsicon2019cta-caret-white-down"
          src="/img/atoms-icon-2019-cta-caret-white-down-5.svg"
          alt="ATOMS/ICON/2019/CTA-caret white down"
        />
        <div className="placeholder-text-3 neuehaasgroteskdisplaystd-bold-black-20px">{placeholderText}</div>
      </div>
    );
  }
}

export default MOLECULESCOLLAPSIBLETITLELEVEL12CLO2;
