import React from "react";
import "./TabItems4.sass";

class TabItems4 extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <article className="tab-items-3">
        <div className="item-name-3 neuehaasgroteskdisplaystd-regular-normal-black-14px">{children}</div>
      </article>
    );
  }
}

export default TabItems4;
