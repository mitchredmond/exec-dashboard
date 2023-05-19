import React from "react";
import Divider from "../Divider";
import "./InputFields.sass";

class InputFields extends React.Component {
  render() {
    const { placeholderText, dividerProps } = this.props;

    return (
      <div className="input-fields">
        <div className="elements-1">
          <div className="frame-31">
            <div className="placeholder-text-6 neuehaasgroteskdisplaystd-regular-normal-black-14px">
              {placeholderText}
            </div>
            <img className="atomsicon2019close-1" src="/img/atoms-icon-2019-close.svg" alt="ATOMS/ICON/2019/close" />
          </div>
          <Divider className={dividerProps.className} />
        </div>
      </div>
    );
  }
}

export default InputFields;
