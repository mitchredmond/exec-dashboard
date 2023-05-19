import React from "react";
import TabItems from "../TabItems";
import TabItems2 from "../TabItems2";
import "./Tab.sass";

class Tab extends React.Component {
  render() {
    const { tabItemsProps, tabItems2Props } = this.props;

    return (
      <div className="tab">
        <TabItems
          tabItemBar={tabItemsProps.tabItemBar}
          itemName={tabItemsProps.itemName}
          rectangle4={tabItemsProps.rectangle4}
        />
        <TabItems2 itemName={tabItems2Props.itemName} rectangle4={tabItems2Props.rectangle4} />
      </div>
    );
  }
}

export default Tab;
