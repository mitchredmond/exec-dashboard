import React from "react";
import GlobalHeader from "../GlobalHeader";
import MOLECULESCOLLAPSIBLETITLELEVEL12CLO from "../MOLECULESCOLLAPSIBLETITLELEVEL12CLO";
import Button from "../Button";
import Button2 from "../Button2";
import ATOMSCONTENTCONTAINER from "../ATOMSCONTENTCONTAINER";
import ATOMSICON2019email from "../ATOMSICON2019email";
import ATOMSICON2019phone from "../ATOMSICON2019phone";
import TabNAVWithoutIconsM34 from "../TabNAVWithoutIconsM34";
import Tab2 from "../Tab2";
import TemplateNotification5Copy from "../TemplateNotification5Copy";
import Scrollbar from "../Scrollbar";
import Pagination from "../Pagination";
import Pagination2 from "../Pagination2";
import Scrollbar2 from "../Scrollbar2";
import "./NotificationScreen.sass";

class NotificationScreen extends React.Component {
  render() {
    const {
      spanText1,
      spanText2,
      contact,
      sushmanthReddy,
      placeholderText,
      phone,
      spanText3,
      spanText4,
      spanText5,
      spanText6,
      cata,
      globalHeaderProps,
      mOLECULESCOLLAPSIBLETITLELEVEL12CLO,
      buttonProps,
      button2Props,
      tabNAVWithoutIconsM34Props,
      tab2Props,
      templateNotification5CopyProps,
      paginationProps,
      pagination2Props,
      scrollbarProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="notification-screen screen">
          <GlobalHeader
            globalHeader2Props={globalHeaderProps.globalHeader2Props}
            globalHeader3Props={globalHeaderProps.globalHeader3Props}
          />
          <div className="flex-row">
            <MOLECULESCOLLAPSIBLETITLELEVEL12CLO>
              {mOLECULESCOLLAPSIBLETITLELEVEL12CLO.children}
            </MOLECULESCOLLAPSIBLETITLELEVEL12CLO>
            <div className="group-3">
              <div className="network-wireless neuehaasgroteskdisplaystd-regular-normal-black-14px">
                <span className="neuehaasgroteskdisplaystd-regular-normal-black-14px">{spanText1}</span>
                <span className="neuehaasgroteskdisplaystd-bold-black-14px">{spanText2}</span>
              </div>
              <Button>{buttonProps.children}</Button>
              <Button2>{button2Props.children}</Button2>
            </div>
          </div>
          <div className="group-16">
            <div className="overlap-group22">
              <ATOMSCONTENTCONTAINER />
              <div className="group-15">
                <div className="group-7 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                  <div className="group-5">
                    <div className="contact neuehaasgroteskdisplaystd-regular-normal-black-14px">{contact}</div>
                    <div className="sushmanth-reddy neuehaasgroteskdisplaystd-bold-black-14px">{sushmanthReddy}</div>
                  </div>
                  <div className="group-4">
                    <ATOMSICON2019email />
                    <div className="placeholder-text">{placeholderText}</div>
                  </div>
                  <div className="group-6">
                    <ATOMSICON2019phone />
                    <div className="phone">{phone}</div>
                  </div>
                  <p className="span-1-week-ago">
                    <span className="neuehaasgroteskdisplaystd-regular-normal-black-14px">{spanText3}</span>
                    <span className="neuehaasgroteskdisplaystd-bold-black-14px">{spanText4}</span>
                  </p>
                  <div className="status-initial-ver">
                    <span className="neuehaasgroteskdisplaystd-regular-normal-black-14px">{spanText5}</span>
                    <span className="neuehaasgroteskdisplaystd-bold-black-14px">{spanText6}</span>
                  </div>
                </div>
                <div className="group">
                  <div className="overlap-group">
                    <div className="cata">{cata}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group24">
            <TabNAVWithoutIconsM34 aTOMSCONTENTCONTAINERProps={tabNAVWithoutIconsM34Props.aTOMSCONTENTCONTAINERProps} />
            <Tab2 tabItems3Props={tab2Props.tabItems3Props} tabItems4Props={tab2Props.tabItems4Props} />
          </div>
          <div className="overlap-group23">
            <TemplateNotification5Copy {...templateNotification5CopyProps} />
            <Scrollbar />
            <Pagination
              displaying5Of50Rows={paginationProps.displaying5Of50Rows}
              showPageProps={paginationProps.showPageProps}
              pagesProps={paginationProps.pagesProps}
              goToProps={paginationProps.goToProps}
              button6Props={paginationProps.button6Props}
            />
            <Pagination2
              displaying5Of50Rows={pagination2Props.displaying5Of50Rows}
              showPageProps={pagination2Props.showPageProps}
              pages2Props={pagination2Props.pages2Props}
              goToProps={pagination2Props.goToProps}
              button62Props={pagination2Props.button62Props}
            />
            <Scrollbar className={scrollbarProps.className} />
            <Scrollbar2 />
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationScreen;
