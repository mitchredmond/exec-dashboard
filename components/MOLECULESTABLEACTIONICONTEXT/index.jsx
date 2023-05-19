import React from "react";
import "./MOLECULESTABLEACTIONICONTEXT.sass";

class MOLECULESTABLEACTIONICONTEXT extends React.Component {
  render() {
    const { edit, className } = this.props;

    return (
      <div className={`moleculestableactionicontext-1 ${className || ""}`}>
        <img className="icon-plus" src="/img/atoms-icon-2019-common-plus-large.svg" alt="icon-plus" />
        <div className="edit neuehaasgroteskdisplaystd-regular-normal-black-15px">{edit}</div>
      </div>
    );
  }
}

export default MOLECULESTABLEACTIONICONTEXT;
