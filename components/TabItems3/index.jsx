import React from "react";
import Bar from "../Bar";
import "./TabItems3.sass";

class TabItems3 extends React.Component {
  render() {
    const { itemName, barProps } = this.props;

    return (
      <article className="tab-items-2">
        <div className="item-name-2 neuehaasgroteskdisplaystd-bold-black-14px">{itemName}</div>
        <Bar className={barProps.className} />
      </article>
    );
  }
}

export default TabItems3;
