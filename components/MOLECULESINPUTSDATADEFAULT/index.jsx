import React from "react";
import "./MOLECULESINPUTSDATADEFAULT.sass";

class MOLECULESINPUTSDATADEFAULT extends React.Component {
  render() {
    const { label, placeholderText, className } = this.props;

    return (
      <article className={`moleculesinputsstand-5 ${className || ""}`}>
        <div className="label neuehaasgroteskdisplaystd-regular-normal-black-12px">{label}</div>
        <p className="placeholder-text-4 neuehaasgroteskdisplaystd-bold-black-14px">{placeholderText}</p>
      </article>
    );
  }
}

export default MOLECULESINPUTSDATADEFAULT;
