import React from "react";
import "./MOLECULESINPUTSDROPDOWNCOMPLETE.sass";

class MOLECULESINPUTSDROPDOWNCOMPLETE extends React.Component {
  render() {
    const { dropdown } = this.props;

    return (
      <div className="moleculesinputsdropdowncomplete">
        <div className="overlap-group-8">
          <div className="down-container">
            <div className="dropdown neuehaasgroteskdisplaystd-regular-normal-black-15px">{dropdown}</div>
            <img
              className="atomsiconarrowchevron-downdefault"
              src="/img/atoms-icon-arrow-chevron-down-default.svg"
              alt="ATOMS/ICON/ARROW/CHEVRON-DOWN/DEFAULT"
            />
          </div>
          <img className="rectangle-7-1" src="/img/rectangle-7.svg" alt="Rectangle 7" />
        </div>
      </div>
    );
  }
}

export default MOLECULESINPUTSDROPDOWNCOMPLETE;
