import React from "react";
import Icon2 from "../Icon2";
import Divider from "../Divider";
import "./SearchInput.sass";

class SearchInput extends React.Component {
  render() {
    const { placeholderText, dividerProps2 } = this.props;

    return (
      <div className="moleculesformsearch">
        <div className="frame-18">
          <div className="frame-32">
            <div className="placeholder-text-1 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
              {placeholderText}
            </div>
          </div>
          <Icon2 />
        </div>
        <div className="elements">
          <Divider className={dividerProps2.className} />
        </div>
      </div>
    );
  }
}

export default SearchInput;
