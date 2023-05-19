import React from "react";
import Tab from "../Tab";
import Divider from "../Divider";
import "./GlobalHeader3.sass";

class GlobalHeader3 extends React.Component {
  render() {
    const { tabProps, dividerProps } = this.props;

    return (
      <article className="global-header-2">
        <Tab tabItemsProps={tabProps.tabItemsProps} tabItems2Props={tabProps.tabItems2Props} />
        <Divider className={dividerProps.className} />
      </article>
    );
  }
}

export default GlobalHeader3;
