import React from "react";
import Arrow from "../Arrow";
import PageNumber from "../PageNumber";
import PageNumber2 from "../PageNumber2";
import "./Pages.sass";

class Pages extends React.Component {
  render() {
    const {
      arrow1Props,
      pageNumberProps,
      pageNumber21Props,
      pageNumber22Props,
      pageNumber23Props,
      pageNumber24Props,
      pageNumber25Props,
      pageNumber26Props,
      pageNumber27Props,
      pageNumber28Props,
      pageNumber29Props,
      arrow2Props,
    } = this.props;

    return (
      <div className="pages">
        <Arrow dividerProps={arrow1Props.dividerProps} />
        <PageNumber>{pageNumberProps.children}</PageNumber>
        <PageNumber2>{pageNumber21Props.children}</PageNumber2>
        <PageNumber2>{pageNumber22Props.children}</PageNumber2>
        <PageNumber2>{pageNumber23Props.children}</PageNumber2>
        <PageNumber2>{pageNumber24Props.children}</PageNumber2>
        <PageNumber2 className={pageNumber25Props.className}>{pageNumber25Props.children}</PageNumber2>
        <PageNumber2>{pageNumber26Props.children}</PageNumber2>
        <PageNumber2 className={pageNumber27Props.className}>{pageNumber27Props.children}</PageNumber2>
        <PageNumber2 className={pageNumber28Props.className}>{pageNumber28Props.children}</PageNumber2>
        <PageNumber2 className={pageNumber29Props.className}>{pageNumber29Props.children}</PageNumber2>
        <Arrow className={arrow2Props.className} dividerProps={arrow2Props.dividerProps} />
      </div>
    );
  }
}

export default Pages;
