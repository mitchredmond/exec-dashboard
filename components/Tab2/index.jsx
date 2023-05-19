import React from "react";
import TabItems3 from "../TabItems3";
import TabItems4 from "../TabItems4";
import "./Tab2.sass";

class Tab2 extends React.Component {
  render() {
    const { tabItems3Props, tabItems4Props } = this.props;

    return (
      <div className="tab-1">
        <TabItems3 itemName={tabItems3Props.itemName} barProps={tabItems3Props.barProps} />
        <TabItems4>{tabItems4Props.children}</TabItems4>
      </div>
    );
  }
}

export default Tab2;
