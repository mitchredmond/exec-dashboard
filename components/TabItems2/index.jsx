import React from "react";
import Bar from "../Bar";
import "./TabItems2.sass";

class TabItems2 extends React.Component {
  render() {
    const { itemName, rectangle4 } = this.props;

    return (
      <article className="tab-items-1">
        <div className="frame-14-1">
          <Bar />
          <div className="item-name-1 neuehaasgroteskdisplaystd-bold-black-14px">{itemName}</div>
        </div>
        <div className="frame-14-1">
          <img className="rectangle-4-1" src={rectangle4} alt="Rectangle 4" />
          <img className="icon" src="/img/icon.svg" alt="Icon" />
        </div>
      </article>
    );
  }
}

export default TabItems2;
