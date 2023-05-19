import React from "react";
import ShowPage from "../ShowPage";
import Pages from "../Pages";
import GoTo from "../GoTo";
import Button62 from "../Button62";
import "./Pagination.sass";

class Pagination extends React.Component {
  render() {
    const { displaying5Of50Rows, showPageProps, pagesProps, goToProps, button6Props } = this.props;

    return (
      <div className="pagination">
        <div className="information">
          <ShowPage inputFieldsProps={showPageProps.inputFieldsProps} />
          <p className="displaying-5-of-50-rows neuehaasgroteskdisplaystd-regular-normal-black-14px">
            {displaying5Of50Rows}
          </p>
        </div>
        <div className="page">
          <Pages {...pagesProps} />
        </div>
        <GoTo text2={goToProps.text2} inputFields2Props={goToProps.inputFields2Props} />
        <Button62 text={button6Props.text} />
      </div>
    );
  }
}

export default Pagination;
