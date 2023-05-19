import React from "react";
import Icon from "../Icon";
import LogoCanvasLogo from "../LogoCanvasLogo";
import SearchInput from "../SearchInput";
import ATOMSICON2019notification from "../ATOMSICON2019notification";
import ATOMSICON2019support from "../ATOMSICON2019support";
import ATOMSAVATARDEFAULT from "../ATOMSAVATARDEFAULT";
import "./GlobalHeader2.sass";

class GlobalHeader2 extends React.Component {
  render() {
    const { download, iconProps, searchInputProps } = this.props;

    return (
      <article className="global-header-1">
        <div className="frame-3">
          <div className="menu-logo">
            <Icon divider1Props={iconProps.divider1Props} divider2Props={iconProps.divider2Props} />
            <LogoCanvasLogo />
          </div>
          <div className="global-search-icons">
            <SearchInput
              placeholderText={searchInputProps.placeholderText}
              dividerProps2={searchInputProps.dividerProps2}
            />
            <ATOMSICON2019notification />
            <ATOMSICON2019support />
            <img className="download" src={download} alt="download" />
            <ATOMSAVATARDEFAULT />
          </div>
        </div>
      </article>
    );
  }
}

export default GlobalHeader2;
