import React from "react";
import GlobalHeader2 from "../GlobalHeader2";
import GlobalHeader3 from "../GlobalHeader3";
import "./GlobalHeader.sass";

class GlobalHeader extends React.Component {
  render() {
    const { globalHeader2Props, globalHeader3Props } = this.props;

    return (
      <div className="global-header">
        <GlobalHeader2
          download={globalHeader2Props.download}
          iconProps={globalHeader2Props.iconProps}
          searchInputProps={globalHeader2Props.searchInputProps}
        />
        <GlobalHeader3 tabProps={globalHeader3Props.tabProps} dividerProps={globalHeader3Props.dividerProps} />
      </div>
    );
  }
}

export default GlobalHeader;
