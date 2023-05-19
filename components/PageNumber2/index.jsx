import React from "react";
import "./PageNumber2.sass";

class PageNumber2 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`page-number-1-1 ${className || ""}`}>
        <div className="placeholder-text-8 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">{children}</div>
      </div>
    );
  }
}

export default PageNumber2;
