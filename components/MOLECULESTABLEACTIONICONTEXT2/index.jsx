import React from "react";
import ATOMSICON2019edit from "../ATOMSICON2019edit";
import "./MOLECULESTABLEACTIONICONTEXT2.sass";

class MOLECULESTABLEACTIONICONTEXT2 extends React.Component {
  render() {
    const { edit, className } = this.props;

    return (
      <div className={`moleculestableactionicontext-copy-1 ${className || ""}`}>
        <ATOMSICON2019edit />
        <div className="edit-1 neuehaasgroteskdisplaystd-regular-normal-black-15px">{edit}</div>
      </div>
    );
  }
}

export default MOLECULESTABLEACTIONICONTEXT2;
