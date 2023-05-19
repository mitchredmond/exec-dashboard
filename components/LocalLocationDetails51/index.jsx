import React from "react";
import ATOMSCONTENTCONTAINER from "../ATOMSCONTENTCONTAINER";
import MOLECULESHEADINGLEVEL1 from "../MOLECULESHEADINGLEVEL1";
import MOLECULESOUTAGEINFOPOWER from "../MOLECULESOUTAGEINFOPOWER";
import MOLECULESOUTAGEINFOAFFECTEDLOCATION from "../MOLECULESOUTAGEINFOAFFECTEDLOCATION";
import LocationTableClosed from "../LocationTableClosed";
import "./LocalLocationDetails51.sass";

class LocalLocationDetails51 extends React.Component {
  render() {
    const {
      overlapGroup11,
      insights,
      typeOfCustomers,
      number1,
      total1,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      spanText6,
      impactedServices,
      number2,
      total2,
      spanText7,
      spanText8,
      spanText9,
      spanText10,
      spanText11,
      spanText12,
      text,
      textCopy,
      textCopy2,
      aTOMSCONTENTCONTAINERProps,
      mOLECULESHEADINGLEVEL1Props,
      mOLECULESOUTAGEINFOPOWER1Props,
      mOLECULESOUTAGEINFOAFFECTEDLOCATION,
      mOLECULESOUTAGEINFOPOWER2Props,
      mOLECULESOUTAGEINFOAFFECTEDLOCATION2,
      locationTableClosedProps,
    } = this.props;

    return (
      <div className="local-location-equpiment-details">
        <div className="overlap-group20">
          <ATOMSCONTENTCONTAINER className={aTOMSCONTENTCONTAINERProps.className} />
          <MOLECULESHEADINGLEVEL1
            placeholderText={mOLECULESHEADINGLEVEL1Props.placeholderText}
            aTOMSCONTENTCONTAINERProps={mOLECULESHEADINGLEVEL1Props.aTOMSCONTENTCONTAINERProps}
          />
          <div className="group-6-1">
            <div className="overlap-group11" style={{ backgroundImage: `url(${overlapGroup11})` }}>
              <MOLECULESOUTAGEINFOPOWER x10={mOLECULESOUTAGEINFOPOWER1Props.x10} />
              <div className="flex-row-1">
                <div className="moleculesoutageinfo-container">
                  <MOLECULESOUTAGEINFOAFFECTEDLOCATION x3Copy={mOLECULESOUTAGEINFOAFFECTEDLOCATION.x3Copy} />
                  <MOLECULESOUTAGEINFOPOWER
                    x10={mOLECULESOUTAGEINFOPOWER2Props.x10}
                    className={mOLECULESOUTAGEINFOPOWER2Props.className}
                  />
                </div>
                <MOLECULESOUTAGEINFOAFFECTEDLOCATION
                  x3Copy={mOLECULESOUTAGEINFOAFFECTEDLOCATION2.x3Copy}
                  className={mOLECULESOUTAGEINFOAFFECTEDLOCATION2.className}
                />
              </div>
            </div>
            <div className="group-8-1">
              <div className="overlap-group5">
                <div className="flex-col">
                  <div className="insights neuehaasgroteskdisplaystd-bold-black-14px">{insights}</div>
                  <div className="group-4-2">
                    <div className="type-of-customers neuehaasgroteskdisplaystd-bold-black-12px">{typeOfCustomers}</div>
                    <div className="overlap-group1-2">
                      <div className="oval-copy-container">
                        <div className="oval-copy-27"></div>
                        <div className="oval-copy-41"></div>
                        <div className="oval-copy-43"></div>
                      </div>
                      <div className="oval-copy-42"></div>
                      <div className="group-3-2">
                        <div className="number neuehaasgroteskdisplaystd-bold-black-20px">{number1}</div>
                        <div className="total neuehaasgroteskdisplaystd-regular-normal-black-11px">{total1}</div>
                      </div>
                    </div>
                    <div className="group-4-copy">
                      <div className="group-2-copy-6">
                        <div className="rectangle-5"></div>
                        <div className="group-11-copy-2">
                          <div className="channels-786-60 neuehaasgroteskdisplaystd-regular-normal-black-11px">
                            <span className="neuehaasgroteskdisplaystd-regular-normal-black-11px">{spanText1}</span>
                            <span className="neuehaasgroteskdisplaystd-bold-black-11px">{spanText2}</span>
                          </div>
                        </div>
                      </div>
                      <div className="group-2-copy-4">
                        <div className="rectangle-7"></div>
                        <div className="group-11-copy-2-1">
                          <div className="residential-355-2 neuehaasgroteskdisplaystd-regular-normal-black-11px">
                            <span className="neuehaasgroteskdisplaystd-regular-normal-black-11px">{spanText3}</span>
                            <span className="neuehaasgroteskdisplaystd-bold-black-11px">{spanText4}</span>
                          </div>
                        </div>
                      </div>
                      <div className="group-2-copy-5">
                        <div className="rectangle-8"></div>
                        <div className="group-11-copy-2-2">
                          <div className="business-255-15 neuehaasgroteskdisplaystd-regular-normal-black-11px">
                            <span className="neuehaasgroteskdisplaystd-regular-normal-black-11px">{spanText5}</span>
                            <span className="neuehaasgroteskdisplaystd-bold-black-11px">{spanText6}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-5-2">
                  <div className="impacted-services neuehaasgroteskdisplaystd-bold-black-12px">{impactedServices}</div>
                  <div className="overlap-group1-3">
                    <div className="oval-copy-container">
                      <div className="oval-copy-27-1"></div>
                      <div className="oval-copy-41-1"></div>
                      <div className="oval-copy-43-1"></div>
                    </div>
                    <div className="oval-copy-42-1"></div>
                    <div className="group-3-3">
                      <div className="number-1 neuehaasgroteskdisplaystd-bold-black-20px">{number2}</div>
                      <div className="total-1 neuehaasgroteskdisplaystd-regular-normal-black-11px">{total2}</div>
                    </div>
                  </div>
                  <div className="group-6-copy-2-1">
                    <div className="group-2-copy-6-1">
                      <div className="rectangle-9"></div>
                      <div className="group-11-copy-2-3">
                        <div className="data-376-60 neuehaasgroteskdisplaystd-regular-normal-black-11px">
                          <span className="neuehaasgroteskdisplaystd-regular-normal-black-11px">{spanText7}</span>
                          <span className="neuehaasgroteskdisplaystd-bold-black-11px">{spanText8}</span>
                        </div>
                      </div>
                    </div>
                    <div className="group-2-copy-4-1">
                      <div className="rectangle-10"></div>
                      <div className="group-11-copy-2-4">
                        <div className="voice-255-25 neuehaasgroteskdisplaystd-regular-normal-black-11px">
                          <span className="neuehaasgroteskdisplaystd-regular-normal-black-11px">{spanText9}</span>
                          <span className="neuehaasgroteskdisplaystd-bold-black-11px">{spanText10}</span>
                        </div>
                      </div>
                    </div>
                    <div className="group-2-copy-5-1">
                      <div className="rectangle-11"></div>
                      <div className="group-11-copy-2-5">
                        <div className="video-78-15 neuehaasgroteskdisplaystd-regular-normal-black-11px">
                          <span className="neuehaasgroteskdisplaystd-regular-normal-black-11px">{spanText11}</span>
                          <span className="neuehaasgroteskdisplaystd-bold-black-11px">{spanText12}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-112">
            <div className="text-container">
              <div className="text-2 neuehaasgroteskdisplaystd-bold-black-12px">{text}</div>
              <div className="text-copy neuehaasgroteskdisplaystd-regular-normal-black-12px">{textCopy}</div>
              <div className="text-copy-2 neuehaasgroteskdisplaystd-regular-normal-black-12px">{textCopy2}</div>
            </div>
          </div>
        </div>
        <LocationTableClosed {...locationTableClosedProps} />
      </div>
    );
  }
}

export default LocalLocationDetails51;
