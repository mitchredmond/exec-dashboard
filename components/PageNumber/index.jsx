import React from "react";
import "./PageNumber.sass";

class PageNumber extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="page-number">
        <div className="placeholder-text-7 neuehaasgroteskdisplaystd-regular-normal-white-14px">{children}</div>
      </div>
    );
  }
}

export default PageNumber;
