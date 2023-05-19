import React from "react";
import ATOMSICON2019trash from "../ATOMSICON2019trash";
import "./MOLECULESTABLEACTIONICONTEXT3.sass";

class MOLECULESTABLEACTIONICONTEXT3 extends React.Component {
  render() {
    const { edit, className } = this.props;

    return (
      <div className={`moleculestableactionicontext-copy-2-1 ${className || ""}`}>
        <ATOMSICON2019trash />
        <div className="edit-2 neuehaasgroteskdisplaystd-regular-normal-black-15px">{edit}</div>
      </div>
    );
  }
}

export default MOLECULESTABLEACTIONICONTEXT3;
