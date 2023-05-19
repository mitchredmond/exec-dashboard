import React from "react";
import ShowPage from "../ShowPage";
import Pages2 from "../Pages2";
import GoTo from "../GoTo";
import Button62 from "../Button62";
import "./Pagination2.sass";

class Pagination2 extends React.Component {
  render() {
    const { displaying5Of50Rows, showPageProps, pages2Props, goToProps, button62Props } = this.props;

    return (
      <div className="pagination-1">
        <div className="information-1">
          <ShowPage inputFieldsProps={showPageProps.inputFieldsProps} />
          <p className="displaying-5-of-50-rows-1 neuehaasgroteskdisplaystd-regular-normal-black-14px">
            {displaying5Of50Rows}
          </p>
        </div>
        <div className="page-1">
          <Pages2
            arrow1Props={pages2Props.arrow1Props}
            pageNumberProps={pages2Props.pageNumberProps}
            pageNumber2Props={pages2Props.pageNumber2Props}
            arrow2Props={pages2Props.arrow2Props}
          />
        </div>
        <GoTo text2={goToProps.text2} inputFields2Props={goToProps.inputFields2Props} />
        <Button62 text={button62Props.text} />
      </div>
    );
  }
}

export default Pagination2;
