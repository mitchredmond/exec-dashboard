import React from "react";
import "./TabItems.sass";

class TabItems extends React.Component {
  render() {
    const { tabItemBar, itemName, rectangle4 } = this.props;

    return (
      <article className="tab-items">
        <div className="frame-14">
          <img className="tab-item-bar" src={tabItemBar} alt="TAB / Item / Bar" />
          <div className="item-name neuehaasgroteskdisplaystd-regular-normal-black-14px">{itemName}</div>
        </div>
        <div className="frame-14">
          <img className="rectangle-4" src={rectangle4} alt="Rectangle 4" />
        </div>
      </article>
    );
  }
}

export default TabItems;
