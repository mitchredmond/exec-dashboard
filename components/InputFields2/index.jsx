import React from "react";
import Divider from "../Divider";
import "./InputFields2.sass";

class InputFields2 extends React.Component {
  render() {
    const { placeholderText, dividerProps } = this.props;

    return (
      <div className="input-fields-1">
        <div className="page-number-2">
          <div className="placeholder-text-9 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
            {placeholderText}
          </div>
        </div>
        <Divider className={dividerProps.className} />
      </div>
    );
  }
}

export default InputFields2;
