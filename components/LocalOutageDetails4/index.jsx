import React from "react";
import LocalBasicDetails from "../LocalBasicDetails";
import LocalSLADetails from "../LocalSLADetails";
import "./LocalOutageDetails4.sass";

class LocalOutageDetails4 extends React.Component {
  render() {
    const { localBasicDetailsProps, localSLADetailsProps } = this.props;

    return (
      <div className="attachments">
        <LocalBasicDetails {...localBasicDetailsProps} />
        <LocalSLADetails {...localSLADetailsProps} />
      </div>
    );
  }
}

export default LocalOutageDetails4;
