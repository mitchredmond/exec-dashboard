import React from "react";
import ATOMSICON2019Commonsearch from "../ATOMSICON2019Commonsearch";
import "./MOLECULESINPUTSSEARCHDEFAULT.sass";

class MOLECULESINPUTSSEARCHDEFAULT extends React.Component {
  render() {
    const { className, aTOMSICON2019CommonsearchProps } = this.props;

    return (
      <div className={`moleculesformsearch-1-1 ${className || ""}`}>
        <div className="overlap-group-9">
          <div className="search-container">
            <div className="search neuehaasgroteskdisplaystd-regular-normal-sonic-silver-15px">Search</div>
            <ATOMSICON2019Commonsearch className={aTOMSICON2019CommonsearchProps.className} />
          </div>
          <img className="rectangle-7-2" src="/img/rectangle-7.svg" alt="Rectangle 7" />
        </div>
      </div>
    );
  }
}

export default MOLECULESINPUTSSEARCHDEFAULT;
