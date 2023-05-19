import React from "react";
import MOLECULESFORMCOLLAPSIBLELEVEL1 from "../MOLECULESFORMCOLLAPSIBLELEVEL1";
import LocalOutageDetails4 from "../LocalOutageDetails4";
import LocalLocationDetails51 from "../LocalLocationDetails51";
import LocalAdditionalEquipmentDetails from "../LocalAdditionalEquipmentDetails";
import LocalRelatedNotiicationsDetails from "../LocalRelatedNotiicationsDetails";
import LocalTicketDetails from "../LocalTicketDetails";
import LocalComentsDetails from "../LocalComentsDetails";
import "./TemplateNotification5Copy.sass";

class TemplateNotification5Copy extends React.Component {
  render() {
    const {
      mOLECULESFORMCOLLAPSIBLELEVEL11Prop,
      localOutageDetails4Props,
      localLocationDetails51Props,
      mOLECULESFORMCOLLAPSIBLELEVEL12Prop,
      mOLECULESFORMCOLLAPSIBLELEVEL13Prop,
      localAdditionalEquipmentDetailsProp,
      mOLECULESFORMCOLLAPSIBLELEVEL14Prop,
      localRelatedNotiicationsDetailsProp,
      mOLECULESFORMCOLLAPSIBLELEVEL15Prop,
      localTicketDetailsProps,
      mOLECULESFORMCOLLAPSIBLELEVEL16Prop,
      localComentsDetailsProps,
    } = this.props;

    return (
      <div className="templatewidget">
        <div className="overlap-group21">
          <MOLECULESFORMCOLLAPSIBLELEVEL1
            dividerProps={mOLECULESFORMCOLLAPSIBLELEVEL11Prop.dividerProps}
            mOLECULESCOLLAPSIBLETITLELEVEL12CLO={
              mOLECULESFORMCOLLAPSIBLELEVEL11Prop.mOLECULESCOLLAPSIBLETITLELEVEL12CLO
            }
          />
          <LocalOutageDetails4
            localBasicDetailsProps={localOutageDetails4Props.localBasicDetailsProps}
            localSLADetailsProps={localOutageDetails4Props.localSLADetailsProps}
          />
          <LocalLocationDetails51 {...localLocationDetails51Props} />
          <div className="group-2-1">
            <MOLECULESFORMCOLLAPSIBLELEVEL1
              className={mOLECULESFORMCOLLAPSIBLELEVEL12Prop.className}
              dividerProps={mOLECULESFORMCOLLAPSIBLELEVEL12Prop.dividerProps}
              mOLECULESCOLLAPSIBLETITLELEVEL12CLO={
                mOLECULESFORMCOLLAPSIBLELEVEL12Prop.mOLECULESCOLLAPSIBLETITLELEVEL12CLO
              }
            />
            <img className="attachments-copy-2" src="/img/attachments-copy-2.svg" alt="Attachments Copy 2" />
          </div>
          <div className="group-copy">
            <MOLECULESFORMCOLLAPSIBLELEVEL1
              className={mOLECULESFORMCOLLAPSIBLELEVEL13Prop.className}
              dividerProps={mOLECULESFORMCOLLAPSIBLELEVEL13Prop.dividerProps}
              mOLECULESCOLLAPSIBLETITLELEVEL12CLO={
                mOLECULESFORMCOLLAPSIBLELEVEL13Prop.mOLECULESCOLLAPSIBLETITLELEVEL12CLO
              }
            />
            <LocalAdditionalEquipmentDetails {...localAdditionalEquipmentDetailsProp} />
          </div>
          <div className="group-4-1">
            <MOLECULESFORMCOLLAPSIBLELEVEL1
              className={mOLECULESFORMCOLLAPSIBLELEVEL14Prop.className}
              dividerProps={mOLECULESFORMCOLLAPSIBLELEVEL14Prop.dividerProps}
              mOLECULESCOLLAPSIBLETITLELEVEL12CLO={
                mOLECULESFORMCOLLAPSIBLELEVEL14Prop.mOLECULESCOLLAPSIBLETITLELEVEL12CLO
              }
            />
            <LocalRelatedNotiicationsDetails {...localRelatedNotiicationsDetailsProp} />
          </div>
          <div className="group-3-1">
            <MOLECULESFORMCOLLAPSIBLELEVEL1
              className={mOLECULESFORMCOLLAPSIBLELEVEL15Prop.className}
              dividerProps={mOLECULESFORMCOLLAPSIBLELEVEL15Prop.dividerProps}
              mOLECULESCOLLAPSIBLETITLELEVEL12CLO={
                mOLECULESFORMCOLLAPSIBLELEVEL15Prop.mOLECULESCOLLAPSIBLETITLELEVEL12CLO
              }
            />
            <LocalTicketDetails {...localTicketDetailsProps} />
          </div>
          <div className="group-5-1">
            <MOLECULESFORMCOLLAPSIBLELEVEL1
              className={mOLECULESFORMCOLLAPSIBLELEVEL16Prop.className}
              dividerProps={mOLECULESFORMCOLLAPSIBLELEVEL16Prop.dividerProps}
              mOLECULESCOLLAPSIBLETITLELEVEL12CLO={
                mOLECULESFORMCOLLAPSIBLELEVEL16Prop.mOLECULESCOLLAPSIBLETITLELEVEL12CLO
              }
            />
            <LocalComentsDetails {...localComentsDetailsProps} />
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateNotification5Copy;
