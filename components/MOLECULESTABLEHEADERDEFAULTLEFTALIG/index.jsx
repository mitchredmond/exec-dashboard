import React from "react";
import "./MOLECULESTABLEHEADERDEFAULTLEFTALIG.sass";

class MOLECULESTABLEHEADERDEFAULTLEFTALIG extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`moleculestableheaderdefault-copy-2-2 ${className || ""}`}>
        <div className="column neuehaasgroteskdisplaystd-bold-black-14px">{children}</div>
      </div>
    );
  }
}

export default MOLECULESTABLEHEADERDEFAULTLEFTALIG;
