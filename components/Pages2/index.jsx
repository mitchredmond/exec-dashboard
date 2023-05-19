import React from "react";
import Arrow from "../Arrow";
import PageNumber from "../PageNumber";
import PageNumber2 from "../PageNumber2";
import "./Pages2.sass";

class Pages2 extends React.Component {
  render() {
    const { arrow1Props, pageNumberProps, pageNumber2Props, arrow2Props } = this.props;

    return (
      <div className="pages-1">
        <Arrow className={arrow1Props.className} dividerProps={arrow1Props.dividerProps} />
        <PageNumber>{pageNumberProps.children}</PageNumber>
        <PageNumber2>{pageNumber2Props.children}</PageNumber2>
        <Arrow className={arrow2Props.className} dividerProps={arrow2Props.dividerProps} />
      </div>
    );
  }
}

export default Pages2;
