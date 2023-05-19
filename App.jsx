import "./App.sass";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotificationScreen from "./components/NotificationScreen";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|notification-screen)">
            <NotificationScreen {...notificationScreenData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const divider2Data = {
    className: "rectangle-1",
};

const divider3Data = {
    className: "rectangle-2",
};

const iconData = {
    divider1Props: divider2Data,
    divider2Props: divider3Data,
};

const divider4Data = {
    className: "divider-3",
};

const searchInputData = {
    placeholderText: "Search",
    dividerProps2: divider4Data,
};

const globalHeader2Data = {
    download: "/img/download@2x.png",
    iconProps: iconData,
    searchInputProps: searchInputData,
};

const tabItemsData = {
    tabItemBar: "/img/tab---item---bar@2x.png",
    itemName: "Home",
    rectangle4: "/img/rectangle-4@2x.png",
};

const tabItems2Data = {
    itemName: "Notification Detail Page",
    rectangle4: "/img/rectangle-4@2x.png",
};

const tabData = {
    tabItemsProps: tabItemsData,
    tabItems2Props: tabItems2Data,
};

const divider5Data = {
    className: "divider-4",
};

const globalHeader3Data = {
    tabProps: tabData,
    dividerProps: divider5Data,
};

const globalHeaderData = {
    globalHeader2Props: globalHeader2Data,
    globalHeader3Props: globalHeader3Data,
};

const mOLECULESCOLLAPSIBLETITLELEVEL12CLOData = {
    children: "202211330058761",
};

const buttonData = {
    children: "Edit",
};

const button2Data = {
    children: "Close Notification",
};

const aTOMSCONTENTCONTAINER2Data = {
    className: "atomscontentcontainer-2",
};

const tabNAVWithoutIconsM34Data = {
    aTOMSCONTENTCONTAINERProps: aTOMSCONTENTCONTAINER2Data,
};

const bar2Data = {
    className: "bar-1",
};

const tabItems3Data = {
    itemName: "Notification Information",
    barProps: bar2Data,
};

const tabItems4Data = {
    children: "AshburnNMC Org Information",
};

const tab2Data = {
    tabItems3Props: tabItems3Data,
    tabItems4Props: tabItems4Data,
};

const divider6Data = {
    className: "atomscollapsiblecontainerborder",
};

const mOLECULESCOLLAPSIBLETITLELEVEL12CLO21Data = {
    placeholderText: " Details",
    className: "",
};

const mOLECULESFORMCOLLAPSIBLELEVEL11Data = {
    dividerProps: divider6Data,
    mOLECULESCOLLAPSIBLETITLELEVEL12CLO: mOLECULESCOLLAPSIBLETITLELEVEL12CLO21Data,
};

const aTOMSCONTENTCONTAINER3Data = {
    className: "atomscontentcontainer-copy-5",
};

const mOLECULESINPUTSDATADEFAULT1Data = {
    label: "Start Date",
    placeholderText: "2023 -01-17   09:04:00",
};

const mOLECULESINPUTSDATADEFAULT2Data = {
    label: "Reported Date",
    placeholderText: "2023 -01-17   09:09:34",
    className: "moleculesinputsstand-6",
};

const mOLECULESINPUTSDATADEFAULT3Data = {
    label: "Criteria Met",
    placeholderText: "2023 -01-17   09:04:34",
    className: "moleculesinputsstand-7",
};

const mOLECULESINPUTSDATADEFAULT4Data = {
    label: "Organisation",
    placeholderText: "AshburnNMC",
    className: "moleculesinputsstand-8",
};

const mOLECULESINPUTSDATADEFAULT5Data = {
    label: "Impact",
    placeholderText: "Air Traffic Impacting",
    className: "moleculesinputsstand-9",
};

const mOLECULESINPUTSDATADEFAULT6Data = {
    label: "Sub Network System",
    placeholderText: "American Idol",
    className: "moleculesinputsstand-10",
};

const mOLECULESINPUTSDATADEFAULT7Data = {
    label: "Special Services",
    placeholderText: "—",
    className: "moleculesinputsstand-11",
};

const mOLECULESINPUTSDATADEFAULT8Data = {
    label: "Restored Time",
    placeholderText: "—",
    className: "moleculesinputsstand-12",
};

const mOLECULESINPUTSDATADEFAULT9Data = {
    label: "Description",
    placeholderText: <React.Fragment>Lorem ipsum dolor sit amet, cons<br />ectetur adipiscing elit, sed do eius.</React.Fragment>,
    className: "moleculesinputsstand-13",
};

const mOLECULESINPUTSDATADEFAULT10Data = {
    label: "Outage Type",
    placeholderText: "Unplanned",
    className: "moleculesinputsstand-14",
};

const localBasicDetailsData = {
    aTOMSCONTENTCONTAINERProps: aTOMSCONTENTCONTAINER3Data,
    mOLECULESINPUTSDATADEFAULT1Props: mOLECULESINPUTSDATADEFAULT1Data,
    mOLECULESINPUTSDATADEFAULT2Props: mOLECULESINPUTSDATADEFAULT2Data,
    mOLECULESINPUTSDATADEFAULT3Props: mOLECULESINPUTSDATADEFAULT3Data,
    mOLECULESINPUTSDATADEFAULT4Props: mOLECULESINPUTSDATADEFAULT4Data,
    mOLECULESINPUTSDATADEFAULT5Props: mOLECULESINPUTSDATADEFAULT5Data,
    mOLECULESINPUTSDATADEFAULT6Props: mOLECULESINPUTSDATADEFAULT6Data,
    mOLECULESINPUTSDATADEFAULT7Props: mOLECULESINPUTSDATADEFAULT7Data,
    mOLECULESINPUTSDATADEFAULT8Props: mOLECULESINPUTSDATADEFAULT8Data,
    mOLECULESINPUTSDATADEFAULT9Props: mOLECULESINPUTSDATADEFAULT9Data,
    mOLECULESINPUTSDATADEFAULT10Props: mOLECULESINPUTSDATADEFAULT10Data,
};

const aTOMSCONTENTCONTAINER4Data = {
    className: "atomscontentcontainer-copy-1",
};

const aTOMSCONTENTCONTAINER5Data = {
    className: "atomscontentcontainer-3",
};

const mOLECULESHEADINGLEVEL11Data = {
    placeholderText: "SLA Details",
    aTOMSCONTENTCONTAINERProps: aTOMSCONTENTCONTAINER5Data,
};

const mOLECULESINPUTSDATADEFAULT11Data = {
    label: "SLA",
    placeholderText: <React.Fragment>Fiber Cuts: ETR 2 Hours to Restore<br />Service</React.Fragment>,
    className: "moleculesinputsstand-15",
};

const mOLECULESINPUTSDATADEFAULT12Data = {
    label: "Mean time to Repair",
    placeholderText: "-",
    className: "moleculesinputsstand-16",
};

const aTOMSDIVIDERSLINE1PXGRAY2Data = {
    className: "atomsdividersline-1",
};

const localSLADetailsData = {
    label: "SLA Restoral Progress",
    labelCopy: "Time :",
    labelCopy2: "0 h",
    labelCopy3: "3 h",
    labelCopy4: "6 h",
    aTOMSCONTENTCONTAINERProps: aTOMSCONTENTCONTAINER4Data,
    mOLECULESHEADINGLEVEL1Props: mOLECULESHEADINGLEVEL11Data,
    mOLECULESINPUTSDATADEFAULT1Props: mOLECULESINPUTSDATADEFAULT11Data,
    mOLECULESINPUTSDATADEFAULT2Props: mOLECULESINPUTSDATADEFAULT12Data,
    aTOMSDIVIDERSLINE1PXGRAYProps: aTOMSDIVIDERSLINE1PXGRAY2Data,
};

const localOutageDetails4Data = {
    localBasicDetailsProps: localBasicDetailsData,
    localSLADetailsProps: localSLADetailsData,
};

const aTOMSCONTENTCONTAINER6Data = {
    className: "atomscontentcontainer-copy-2",
};

const aTOMSCONTENTCONTAINER7Data = {
    className: "atomscontentcontainer",
};

const mOLECULESHEADINGLEVEL12Data = {
    placeholderText: "Location & Insights Details",
    aTOMSCONTENTCONTAINERProps: aTOMSCONTENTCONTAINER7Data,
};

const mOLECULESOUTAGEINFOPOWER1Data = {
    x10: "3",
};

const mOLECULESOUTAGEINFOAFFECTEDLOCATION1Data = {
    x3Copy: "2",
};

const mOLECULESOUTAGEINFOPOWER2Data = {
    x10: "01",
    className: "moleculesoutageinfopower-copy-2",
};

const mOLECULESOUTAGEINFOAFFECTEDLOCATION2Data = {
    x3Copy: "3",
    className: "moleculesoutageinfoon-generator-copy",
};

const aTOMSDIVIDERSLINE1PXGRAY23Data = {
    className: "rectangle-17",
};

const mOLECULESTABLEACTIONICONTEXT1Data = {
    edit: "Action",
};

const mOLECULESTABLEACTIONICONTEXT21Data = {
    edit: "Action",
};

const mOLECULESTABLEACTIONICONTEXT31Data = {
    edit: "Action",
};

const mOLECULESINPUTSDROPDOWNCOMPLETE1Data = {
    dropdown: "Select Template",
};

const aTOMSICON2019trash2Data = {
    className: "atomsicon2019trash-1-1",
};

const aTOMSICON2019Commonsearch1Data = {
    className: "",
};

const mOLECULESINPUTSSEARCHDEFAULT1Data = {
    aTOMSICON2019CommonsearchProps: aTOMSICON2019Commonsearch1Data,
};

const aTOMSICON2019filter1Data = {
    className: "",
};

const aTOMSTABLEFILTERDEFAULT1Data = {
    aTOMSICON2019filterProps: aTOMSICON2019filter1Data,
};

const mOLECULESTABLEACTIONBARSETTINGSCONT1Data = {
    mOLECULESINPUTSDROPDOWNCOMPLETEProp: mOLECULESINPUTSDROPDOWNCOMPLETE1Data,
    aTOMSICON2019trashProps2: aTOMSICON2019trash2Data,
    mOLECULESINPUTSSEARCHDEFAULTProps: mOLECULESINPUTSSEARCHDEFAULT1Data,
    aTOMSTABLEFILTERDEFAULTProps: aTOMSTABLEFILTERDEFAULT1Data,
};

const aTOMSDIVIDERSLINE1PXGRAY24Data = {
    className: "atomsdividersline1-pxgray-5",
};

const aTOMSICON2019filter2Data = {
    className: "atomsicon2019filter-1",
};

const aTOMSTABLEFILTERDEFAULT2Data = {
    aTOMSICON2019filterProps: aTOMSICON2019filter2Data,
};

const aTOMSICONFilterClear2Data = {
    className: "icon-filter-clear-1-1",
};

const mOLECULESTABLEACTIONBARSETTINGSCONT21Data = {
    aTOMSTABLEFILTERDEFAULTProps: aTOMSTABLEFILTERDEFAULT2Data,
    aTOMSICONFilterClearProps: aTOMSICONFilterClear2Data,
};

const aTOMSDIVIDERSLINE1PXGRAY3Data = {
    className: "atomsdividersline1-pxblack-1",
};

const mOLECULESTABLEACTIONBARTEMPLATESELE1Data = {
    mOLECULESTABLEACTIONBARSETTINGSCONT: mOLECULESTABLEACTIONBARSETTINGSCONT21Data,
    aTOMSDIVIDERSLINE1PXGRAYProps: aTOMSDIVIDERSLINE1PXGRAY3Data,
};

const aTOMSDIVIDERSLINE1PXGRAY4Data = {
    className: "atomsdividersline-2",
};

const aTOMSDIVIDERSLINE1PXGRAY5Data = {
    className: "atomsdividersline4-pxblack-3",
};

const mOLECULESTABLECOLUMNHEADERNEW1Data = {
    aTOMSDIVIDERSLINE1PXBLACK1Props: aTOMSDIVIDERSLINE1PXGRAY4Data,
    aTOMSDIVIDERSLINE1PXBLACK2Props: aTOMSDIVIDERSLINE1PXGRAY5Data,
};

const aTOMSDIVIDERSLINE1PXGRAY25Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY26Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW1Data = {
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY25Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY26Data,
};

const aTOMSDIVIDERSLINE1PXGRAY27Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY28Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW2Data = {
    className: "moleculestablerowdefaultnew-copy-5",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY27Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY28Data,
};

const aTOMSDIVIDERSLINE1PXGRAY29Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY210Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW3Data = {
    className: "moleculestablerowdefaultnew-copy-2-1",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY29Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY210Data,
};

const aTOMSDIVIDERSLINE1PXGRAY211Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY212Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW4Data = {
    className: "moleculestablerowdefaultnew-copy-3-1",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY211Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY212Data,
};

const aTOMSDIVIDERSLINE1PXGRAY213Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY214Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW5Data = {
    className: "moleculestablerowdefaultnew-copy",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY213Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY214Data,
};

const aTOMSDIVIDERSLINE1PXGRAY215Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY216Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW6Data = {
    className: "moleculestablerowdefaultnew-copy",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY215Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY216Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG1Data = {
    children: "PB",
    className: "",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED1Data = {
    children: "LoremIpsum",
    className: "",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED2Data = {
    children: "LoremIpsum",
    className: "moleculestablebodycell-data-copy-1-1",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED3Data = {
    children: "LoremIpsum",
    className: "moleculestablebodycell-data-copy-1-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED4Data = {
    children: "LoremIpsum",
    className: "moleculestablebodycell-data-copy-1-3",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED5Data = {
    children: "LoremIpsum",
    className: "moleculestablebodycell-data-copy-1-4",
};

const mOLECULESTABLECOLUMN101Data = {
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG1Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED1Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED2Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED3Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED4Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED5Data,
};

const aTOMSDIVIDERSLINE1PXGRAY6Data = {
    className: "atomsdividersline4-pxblack-2",
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG2Data = {
    children: "Code",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED6Data = {
    children: "ASTLGA",
    className: "moleculestablebodycell-data-copy-3",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED7Data = {
    children: "ASTLGA",
    className: "moleculestablebodycell-data-copy-1-5",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED8Data = {
    children: "ASTLGA",
    className: "moleculestablebodycell-data-copy-1-6",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED9Data = {
    children: "ASTLGA",
    className: "moleculestablebodycell-data-copy-1-7",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED10Data = {
    children: "ASTLGA",
    className: "moleculestablebodycell-data-copy-1-8",
};

const mOLECULESTABLECOLUMN102Data = {
    className: "moleculestablecolumn2-copy-6",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG2Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED6Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED7Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED8Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED9Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED10Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG3Data = {
    children: "Territory",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED11Data = {
    children: "Southeast",
    className: "moleculestablebodycell-data-copy-4",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED12Data = {
    children: "Southeast",
    className: "moleculestablebodycell-data-copy-1-9",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED13Data = {
    children: "Southeast",
    className: "moleculestablebodycell-data-copy-1-10",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED14Data = {
    children: "Southeast",
    className: "moleculestablebodycell-data-copy-1-11",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED15Data = {
    children: "Southeast",
    className: "moleculestablebodycell-data-copy-1-12",
};

const mOLECULESTABLECOLUMN103Data = {
    className: "moleculestablecolumn2-copy-7",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG3Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED11Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED12Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED13Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED14Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED15Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG4Data = {
    children: "Address",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED16Data = {
    children: "4351 Industri…",
    className: "moleculestablebodycell-data-copy-5",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED17Data = {
    children: "4351 Industri…",
    className: "moleculestablebodycell-data-copy-1-13",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED18Data = {
    children: "4351 Industri…",
    className: "moleculestablebodycell-data-copy-1-14",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED19Data = {
    children: "4351 Industri…",
    className: "moleculestablebodycell-data-copy-1-15",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED20Data = {
    children: "4351 Industri…",
    className: "moleculestablebodycell-data-copy-1-16",
};

const mOLECULESTABLECOLUMN104Data = {
    className: "moleculestablecolumn2-copy-8",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG4Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED16Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED17Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED18Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED19Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED20Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG5Data = {
    children: "Region",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED21Data = {
    children: "America",
    className: "moleculestablebodycell-data-copy-6",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED22Data = {
    children: "America",
    className: "moleculestablebodycell-data-copy-1-17",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED23Data = {
    children: "America",
    className: "moleculestablebodycell-data-copy-1-18",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED24Data = {
    children: "America",
    className: "moleculestablebodycell-data-copy-1-19",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED25Data = {
    children: "America",
    className: "moleculestablebodycell-data-copy-1-20",
};

const mOLECULESTABLECOLUMN105Data = {
    className: "moleculestablecolumn2-copy-9",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG5Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED21Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED22Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED23Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED24Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED25Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG6Data = {
    children: "City",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED26Data = {
    children: "Douglasville",
    className: "moleculestablebodycell-data-copy-7",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED27Data = {
    children: "Douglasville",
    className: "moleculestablebodycell-data-copy-1-21",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED28Data = {
    children: "Douglasville",
    className: "moleculestablebodycell-data-copy-1-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED29Data = {
    children: "Douglasville",
    className: "moleculestablebodycell-data-copy-1-23",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED30Data = {
    children: "Douglasville",
    className: "moleculestablebodycell-data-copy-1-24",
};

const mOLECULESTABLECOLUMN106Data = {
    className: "moleculestablecolumn2-copy-12",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG6Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED26Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED27Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED28Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED29Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED30Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG7Data = {
    children: "Sub-Region",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED31Data = {
    children: "North America",
    className: "moleculestablebodycell-data-copy-8",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED32Data = {
    children: "North America",
    className: "moleculestablebodycell-data-copy-1-25",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED33Data = {
    children: "North America",
    className: "moleculestablebodycell-data-copy-1-26",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED34Data = {
    children: "North America",
    className: "moleculestablebodycell-data-copy-1-27",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED35Data = {
    children: "North America",
    className: "moleculestablebodycell-data-copy-1-28",
};

const mOLECULESTABLECOLUMN107Data = {
    className: "moleculestablecolumn2-copy-11",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG7Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED31Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED32Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED33Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED34Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED35Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG8Data = {
    children: "State",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED36Data = {
    children: "GA",
    className: "moleculestablebodycell-data-copy-9",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED37Data = {
    children: "GA",
    className: "moleculestablebodycell-data-copy-1-29",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED38Data = {
    children: "GA",
    className: "moleculestablebodycell-data-copy-1-30",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED39Data = {
    children: "GA",
    className: "moleculestablebodycell-data-copy-1-31",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED40Data = {
    children: "GA",
    className: "moleculestablebodycell-data-copy-1-32",
};

const mOLECULESTABLECOLUMN108Data = {
    className: "moleculestablecolumn2-copy-13",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG8Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED36Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED37Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED38Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED39Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED40Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG9Data = {
    children: "Zip Code",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED41Data = {
    children: "30133",
    className: "moleculestablebodycell-data-copy-10",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED42Data = {
    children: "30133",
    className: "moleculestablebodycell-data-copy-1-33",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED43Data = {
    children: "30133",
    className: "moleculestablebodycell-data-copy-1-34",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED44Data = {
    children: "30133",
    className: "moleculestablebodycell-data-copy-1-35",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED45Data = {
    children: "30133",
    className: "moleculestablebodycell-data-copy-1-36",
};

const mOLECULESTABLECOLUMN109Data = {
    className: "moleculestablecolumn2-copy-14",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG9Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED41Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED42Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED43Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED44Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED45Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG10Data = {
    children: "Code-Type",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED46Data = {
    children: "SITE",
    className: "moleculestablebodycell-data-copy-11",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED47Data = {
    children: "SITE",
    className: "moleculestablebodycell-data-copy-1-37",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED48Data = {
    children: "SITE",
    className: "moleculestablebodycell-data-copy-1-38",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED49Data = {
    children: "SITE",
    className: "moleculestablebodycell-data-copy-1-39",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED50Data = {
    children: "SITE",
    className: "moleculestablebodycell-data-copy-1-40",
};

const mOLECULESTABLECOLUMN1010Data = {
    className: "moleculestablecolumn2-copy-10",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG10Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED46Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED47Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED48Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED49Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED50Data,
};

const locationTableClosedData = {
    label: "Total Affected Locations",
    number: "05",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY23Data,
    mOLECULESTABLEACTIONICONTEXTProps: mOLECULESTABLEACTIONICONTEXT1Data,
    mOLECULESTABLEACTIONICONTEXT2Props: mOLECULESTABLEACTIONICONTEXT21Data,
    mOLECULESTABLEACTIONICONTEXT3Props: mOLECULESTABLEACTIONICONTEXT31Data,
    mOLECULESTABLEACTIONBARSETTINGSCONT: mOLECULESTABLEACTIONBARSETTINGSCONT1Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY24Data,
    mOLECULESTABLEACTIONBARTEMPLATESELE: mOLECULESTABLEACTIONBARTEMPLATESELE1Data,
    mOLECULESTABLECOLUMNHEADERNEWProps: mOLECULESTABLECOLUMNHEADERNEW1Data,
    mOLECULESTABLEROWDEFAULTNEW1Props: mOLECULESTABLEROWDEFAULTNEW1Data,
    mOLECULESTABLEROWDEFAULTNEW2Props: mOLECULESTABLEROWDEFAULTNEW2Data,
    mOLECULESTABLEROWDEFAULTNEW3Props: mOLECULESTABLEROWDEFAULTNEW3Data,
    mOLECULESTABLEROWDEFAULTNEW4Props: mOLECULESTABLEROWDEFAULTNEW4Data,
    mOLECULESTABLEROWDEFAULTNEW5Props: mOLECULESTABLEROWDEFAULTNEW5Data,
    mOLECULESTABLEROWDEFAULTNEW6Props: mOLECULESTABLEROWDEFAULTNEW6Data,
    mOLECULESTABLECOLUMN101Props: mOLECULESTABLECOLUMN101Data,
    aTOMSDIVIDERSLINE1PXGRAYProps: aTOMSDIVIDERSLINE1PXGRAY6Data,
    mOLECULESTABLECOLUMN102Props: mOLECULESTABLECOLUMN102Data,
    mOLECULESTABLECOLUMN103Props: mOLECULESTABLECOLUMN103Data,
    mOLECULESTABLECOLUMN104Props: mOLECULESTABLECOLUMN104Data,
    mOLECULESTABLECOLUMN105Props: mOLECULESTABLECOLUMN105Data,
    mOLECULESTABLECOLUMN106Props: mOLECULESTABLECOLUMN106Data,
    mOLECULESTABLECOLUMN107Props: mOLECULESTABLECOLUMN107Data,
    mOLECULESTABLECOLUMN108Props: mOLECULESTABLECOLUMN108Data,
    mOLECULESTABLECOLUMN109Props: mOLECULESTABLECOLUMN109Data,
    mOLECULESTABLECOLUMN1010Props: mOLECULESTABLECOLUMN1010Data,
};

const localLocationDetails51Data = {
    overlapGroup11: "/img/group.png",
    insights: "Insights",
    typeOfCustomers: "Type of Customers",
    number1: "1396",
    total1: "Total",
    spanText1: "Channels ",
    spanText2: "(786) - 60%",
    spanText3: "Residential ",
    spanText4: "(355)- 25%",
    spanText5: "Business ",
    spanText6: "(255) - 15%",
    impactedServices: "Impacted Services",
    number2: "709",
    total2: "Total",
    spanText7: "Data ",
    spanText8: "(376) - 60%",
    spanText9: "Voice ",
    spanText10: "(255)- 25%",
    spanText11: "Video ",
    spanText12: "(78) - 15%",
    text: "",
    textCopy: "Latitute  : 201:1234567556634",
    textCopy2: "Longitude : 201:1234567556634",
    aTOMSCONTENTCONTAINERProps: aTOMSCONTENTCONTAINER6Data,
    mOLECULESHEADINGLEVEL1Props: mOLECULESHEADINGLEVEL12Data,
    mOLECULESOUTAGEINFOPOWER1Props: mOLECULESOUTAGEINFOPOWER1Data,
    mOLECULESOUTAGEINFOAFFECTEDLOCATION: mOLECULESOUTAGEINFOAFFECTEDLOCATION1Data,
    mOLECULESOUTAGEINFOPOWER2Props: mOLECULESOUTAGEINFOPOWER2Data,
    mOLECULESOUTAGEINFOAFFECTEDLOCATION2: mOLECULESOUTAGEINFOAFFECTEDLOCATION2Data,
    locationTableClosedProps: locationTableClosedData,
};

const divider7Data = {
    className: "atomscollapsiblecontainerborder",
};

const mOLECULESCOLLAPSIBLETITLELEVEL12CLO22Data = {
    placeholderText: "Images",
    className: "",
};

const mOLECULESFORMCOLLAPSIBLELEVEL12Data = {
    className: "local-accordion-copy",
    dividerProps: divider7Data,
    mOLECULESCOLLAPSIBLETITLELEVEL12CLO: mOLECULESCOLLAPSIBLETITLELEVEL12CLO22Data,
};

const divider8Data = {
    className: "atomscollapsiblecontainerborder",
};

const mOLECULESCOLLAPSIBLETITLELEVEL12CLO23Data = {
    placeholderText: "Additional Equipment",
    className: "moleculesaccordiontitle-level-1-closed-3",
};

const mOLECULESFORMCOLLAPSIBLELEVEL13Data = {
    className: "local-accordion-copy",
    dividerProps: divider8Data,
    mOLECULESCOLLAPSIBLETITLELEVEL12CLO: mOLECULESCOLLAPSIBLETITLELEVEL12CLO23Data,
};

const aTOMSCONTENTCONTAINER8Data = {
    className: "atomscontentcontainer-copy",
};

const mOLECULESINPUTSDATADEFAULT13Data = {
    label: "Relay rack",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand",
};

const mOLECULESINPUTSDATADEFAULT14Data = {
    label: "Unit Shelf",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-1",
};

const mOLECULESINPUTSDATADEFAULT15Data = {
    label: "System ID",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-2",
};

const mOLECULESINPUTSDATADEFAULT16Data = {
    label: "Z LOC CLLI",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-3",
};

const group6Copy21Data = {
    mOLECULESINPUTSDATADEFAULT1Props: mOLECULESINPUTSDATADEFAULT13Data,
    mOLECULESINPUTSDATADEFAULT2Props: mOLECULESINPUTSDATADEFAULT14Data,
    mOLECULESINPUTSDATADEFAULT3Props: mOLECULESINPUTSDATADEFAULT15Data,
    mOLECULESINPUTSDATADEFAULT4Props: mOLECULESINPUTSDATADEFAULT16Data,
};

const mOLECULESINPUTSDATADEFAULT17Data = {
    label: "Master Related",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand",
};

const mOLECULESINPUTSDATADEFAULT18Data = {
    label: "Phone",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-1",
};

const mOLECULESINPUTSDATADEFAULT19Data = {
    label: "Work List Name",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-2",
};

const mOLECULESINPUTSDATADEFAULT20Data = {
    label: "Z  LOC CLLI",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-3",
};

const group6Copy22Data = {
    className: "group-6-copy-3-1",
    mOLECULESINPUTSDATADEFAULT1Props: mOLECULESINPUTSDATADEFAULT17Data,
    mOLECULESINPUTSDATADEFAULT2Props: mOLECULESINPUTSDATADEFAULT18Data,
    mOLECULESINPUTSDATADEFAULT3Props: mOLECULESINPUTSDATADEFAULT19Data,
    mOLECULESINPUTSDATADEFAULT4Props: mOLECULESINPUTSDATADEFAULT20Data,
};

const mOLECULESINPUTSDATADEFAULT21Data = {
    label: "NE Name",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand",
};

const mOLECULESINPUTSDATADEFAULT22Data = {
    label: "A LOC CLLI",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-1",
};

const mOLECULESINPUTSDATADEFAULT23Data = {
    label: "Work List Name",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-2",
};

const mOLECULESINPUTSDATADEFAULT24Data = {
    label: "Entity Type",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-3",
};

const group6Copy23Data = {
    className: "group-21",
    mOLECULESINPUTSDATADEFAULT1Props: mOLECULESINPUTSDATADEFAULT21Data,
    mOLECULESINPUTSDATADEFAULT2Props: mOLECULESINPUTSDATADEFAULT22Data,
    mOLECULESINPUTSDATADEFAULT3Props: mOLECULESINPUTSDATADEFAULT23Data,
    mOLECULESINPUTSDATADEFAULT4Props: mOLECULESINPUTSDATADEFAULT24Data,
};

const mOLECULESINPUTSDATADEFAULT25Data = {
    label: "Condition List 1",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand",
};

const mOLECULESINPUTSDATADEFAULT26Data = {
    label: "Condition List 2",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-1",
};

const mOLECULESINPUTSDATADEFAULT27Data = {
    label: "System ID",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-2",
};

const mOLECULESINPUTSDATADEFAULT28Data = {
    label: "CAC",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-3",
};

const group6Copy24Data = {
    className: "group-copy-1",
    mOLECULESINPUTSDATADEFAULT1Props: mOLECULESINPUTSDATADEFAULT25Data,
    mOLECULESINPUTSDATADEFAULT2Props: mOLECULESINPUTSDATADEFAULT26Data,
    mOLECULESINPUTSDATADEFAULT3Props: mOLECULESINPUTSDATADEFAULT27Data,
    mOLECULESINPUTSDATADEFAULT4Props: mOLECULESINPUTSDATADEFAULT28Data,
};

const mOLECULESINPUTSDATADEFAULT29Data = {
    label: "Bandwidth",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-4",
};

const mOLECULESINPUTSDATADEFAULT30Data = {
    label: "Entity ID",
    placeholderText: "Lorem Ipsum",
    className: "moleculesinputsstand-4",
};

const aTOMSDIVIDERSLINE1PXGRAY7Data = {
    className: "atomsdividersline1-pxgray-1",
};

const localAdditionalEquipmentDetailsData = {
    aTOMSCONTENTCONTAINERProps: aTOMSCONTENTCONTAINER8Data,
    group6Copy21Props: group6Copy21Data,
    group6Copy22Props: group6Copy22Data,
    group6Copy23Props: group6Copy23Data,
    group6Copy24Props: group6Copy24Data,
    mOLECULESINPUTSDATADEFAULT1Props: mOLECULESINPUTSDATADEFAULT29Data,
    mOLECULESINPUTSDATADEFAULT2Props: mOLECULESINPUTSDATADEFAULT30Data,
    aTOMSDIVIDERSLINE1PXGRAYProps: aTOMSDIVIDERSLINE1PXGRAY7Data,
};

const divider9Data = {
    className: "atomscollapsiblecontainerborder",
};

const mOLECULESCOLLAPSIBLETITLELEVEL12CLO24Data = {
    placeholderText: "Related Notifications",
    className: "moleculesaccordiontitle-level-1-closed-4",
};

const mOLECULESFORMCOLLAPSIBLELEVEL14Data = {
    className: "local-accordion-copy-1",
    dividerProps: divider9Data,
    mOLECULESCOLLAPSIBLETITLELEVEL12CLO: mOLECULESCOLLAPSIBLETITLELEVEL12CLO24Data,
};

const aTOMSCONTENTCONTAINER9Data = {
    className: "atomscontentcontainer-copy-3",
};

const aTOMSDIVIDERSLINE1PXGRAY217Data = {
    className: "rectangle-15",
};

const mOLECULESTABLEACTIONICONTEXT4Data = {
    edit: "Action",
    className: "moleculestableactionicontext",
};

const mOLECULESTABLEACTIONICONTEXT22Data = {
    edit: "Action",
    className: "moleculestableactionicontext-copy",
};

const mOLECULESTABLEACTIONICONTEXT32Data = {
    edit: "Action",
    className: "moleculestableactionicontext-copy-2",
};

const mOLECULESINPUTSDROPDOWNCOMPLETE2Data = {
    dropdown: "Select Template",
};

const aTOMSICON2019trash4Data = {
    className: "atomsicon2019trash-1-2",
};

const aTOMSICON2019Commonsearch2Data = {
    className: "",
};

const mOLECULESINPUTSSEARCHDEFAULT2Data = {
    aTOMSICON2019CommonsearchProps: aTOMSICON2019Commonsearch2Data,
};

const aTOMSICON2019filter3Data = {
    className: "",
};

const aTOMSTABLEFILTERDEFAULT3Data = {
    aTOMSICON2019filterProps: aTOMSICON2019filter3Data,
};

const mOLECULESTABLEACTIONBARSETTINGSCONT3Data = {
    className: "moleculestableaction",
    mOLECULESINPUTSDROPDOWNCOMPLETEProp: mOLECULESINPUTSDROPDOWNCOMPLETE2Data,
    aTOMSICON2019trashProps2: aTOMSICON2019trash4Data,
    mOLECULESINPUTSSEARCHDEFAULTProps: mOLECULESINPUTSSEARCHDEFAULT2Data,
    aTOMSTABLEFILTERDEFAULTProps: aTOMSTABLEFILTERDEFAULT3Data,
};

const aTOMSDIVIDERSLINE1PXGRAY218Data = {
    className: "atomsdividersline1-pxgray-4",
};

const aTOMSICON2019Commonsearch3Data = {
    className: "atomsicon2019-commonsearch",
};

const mOLECULESINPUTSSEARCHDEFAULT3Data = {
    className: "moleculesformsearch-2",
    aTOMSICON2019CommonsearchProps: aTOMSICON2019Commonsearch3Data,
};

const aTOMSICON2019filter4Data = {
    className: "atomsicon2019filter-1",
};

const aTOMSTABLEFILTERDEFAULT4Data = {
    className: "atomstablefilterenabled-1",
    aTOMSICON2019filterProps: aTOMSICON2019filter4Data,
};

const aTOMSICONFilterClear4Data = {
    className: "icon-filter-clear",
};

const mOLECULESTABLEACTIONBARSETTINGSCONT32Data = {
    mOLECULESINPUTSSEARCHDEFAULTProps: mOLECULESINPUTSSEARCHDEFAULT3Data,
    aTOMSTABLEFILTERDEFAULTProps: aTOMSTABLEFILTERDEFAULT4Data,
    aTOMSICONFilterClearProps: aTOMSICONFilterClear4Data,
};

const aTOMSDIVIDERSLINE1PXGRAY8Data = {
    className: "atomsdividersline1-pxblack-2",
};

const mOLECULESTABLEACTIONBARTEMPLATESELE2Data = {
    address: "1 Selected",
    mOLECULESTABLEACTIONBARSETTINGSCONT: mOLECULESTABLEACTIONBARSETTINGSCONT32Data,
    aTOMSDIVIDERSLINE1PXGRAYProps: aTOMSDIVIDERSLINE1PXGRAY8Data,
};

const aTOMSDIVIDERSLINE1PXGRAY9Data = {
    className: "atomsdividersline-3",
};

const aTOMSDIVIDERSLINE1PXGRAY10Data = {
    className: "atomsdividersline4-pxblack-4",
};

const mOLECULESTABLECOLUMNHEADERNEW2Data = {
    className: "moleculestablecolumnheadernew",
    aTOMSDIVIDERSLINE1PXBLACK1Props: aTOMSDIVIDERSLINE1PXGRAY9Data,
    aTOMSDIVIDERSLINE1PXBLACK2Props: aTOMSDIVIDERSLINE1PXGRAY10Data,
};

const aTOMSDIVIDERSLINE1PXGRAY219Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY220Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW7Data = {
    className: "moleculestablerowdefaultnew",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY219Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY220Data,
};

const aTOMSDIVIDERSLINE1PXGRAY221Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY222Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW8Data = {
    className: "moleculestablerowdefaultnew-copy-1",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY221Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY222Data,
};

const aTOMSDIVIDERSLINE1PXGRAY223Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY224Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW9Data = {
    className: "moleculestablerowdefaultnew-copy-2",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY223Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY224Data,
};

const aTOMSDIVIDERSLINE1PXGRAY225Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY226Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW10Data = {
    className: "moleculestablerowdefaultnew-copy-3",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY225Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY226Data,
};

const aTOMSDIVIDERSLINE1PXGRAY227Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY228Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW11Data = {
    className: "moleculestablerowdefaultnew-copy-4",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY227Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY228Data,
};

const aTOMSDIVIDERSLINE1PXGRAY229Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY230Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW12Data = {
    className: "moleculestablerowdefaultnew-copy-5-1",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY229Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY230Data,
};

const aTOMSDIVIDERSLINE1PXGRAY231Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY232Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW13Data = {
    className: "moleculestablerowdefaultnew-copy-6",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY231Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY232Data,
};

const aTOMSDIVIDERSLINE1PXGRAY233Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY234Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW14Data = {
    className: "moleculestablerowdefaultnew-copy-7",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY233Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY234Data,
};

const aTOMSDIVIDERSLINE1PXGRAY235Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY236Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW15Data = {
    className: "moleculestablerowdefaultnew-copy-8",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY235Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY236Data,
};

const aTOMSDIVIDERSLINE1PXGRAY237Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY238Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW16Data = {
    className: "moleculestablerowdefaultnew-copy-9",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY237Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY238Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG11Data = {
    children: "Notification #",
    className: "moleculestableheaderdefault-copy-2-1",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED210Data = {
    children: "202211330058761",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED211Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED212Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED213Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED214Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED215Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED216Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED217Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED218Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED219Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const mOLECULESTABLECOLUMN1052Data = {
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG11Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED210Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P2: aTOMSTABLEBODYCELLDATALEFTALIGNED211Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED212Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED213Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED214Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED215Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED6P: aTOMSTABLEBODYCELLDATALEFTALIGNED216Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED7P: aTOMSTABLEBODYCELLDATALEFTALIGNED217Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED8P: aTOMSTABLEBODYCELLDATALEFTALIGNED218Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED9P: aTOMSTABLEBODYCELLDATALEFTALIGNED219Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG12Data = {
    children: "Severity",
    className: "moleculestableheaderdefault-copy-2-1",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED51Data = {
    children: "Cata",
    className: "moleculestablebodycell-data-copy-12",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED52Data = {
    children: "Major",
    className: "moleculestablebodycell-data-copy-1-41",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED53Data = {
    children: "Minor",
    className: "moleculestablebodycell-data-copy-1-42",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED54Data = {
    children: "Major",
    className: "moleculestablebodycell-data-copy-1-43",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED55Data = {
    children: "Jeopardy",
    className: "moleculestablebodycell-data-copy-1-44",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED56Data = {
    children: "Minor",
    className: "moleculestablebodycell-data-copy-1-45",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED57Data = {
    children: "Minor",
    className: "moleculestablebodycell-data-copy-1-46",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED58Data = {
    children: "Cata",
    className: "moleculestablebodycell-data-copy-1-47",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED59Data = {
    children: "Major",
    className: "moleculestablebodycell-data-copy-1-48",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED60Data = {
    children: "Jeopardy",
    className: "moleculestablebodycell-data-copy-1-49",
};

const mOLECULESTABLECOLUMN1032Data = {
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG12Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED51Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED52Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED53Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED54Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED55Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED6P: aTOMSTABLEBODYCELLDATALEFTALIGNED56Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED7P: aTOMSTABLEBODYCELLDATALEFTALIGNED57Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED8P: aTOMSTABLEBODYCELLDATALEFTALIGNED58Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED9P: aTOMSTABLEBODYCELLDATALEFTALIGNED59Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED10: aTOMSTABLEBODYCELLDATALEFTALIGNED60Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG13Data = {
    children: "Relationship",
    className: "moleculestableheaderdefault-copy-2-1",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED61Data = {
    children: "",
    className: "moleculestablebodycell-data-copy-13",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED62Data = {
    children: "",
    className: "moleculestablebodycell-data-copy-1-50",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED63Data = {
    children: "",
    className: "moleculestablebodycell-data-copy-1-51",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED64Data = {
    children: "",
    className: "moleculestablebodycell-data-copy-1-52",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED65Data = {
    children: "",
    className: "moleculestablebodycell-data-copy-1-53",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED66Data = {
    children: "",
    className: "moleculestablebodycell-data-copy-1-54",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED67Data = {
    children: "",
    className: "moleculestablebodycell-data-copy-1-55",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED68Data = {
    children: "",
    className: "moleculestablebodycell-data-copy-1-56",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED69Data = {
    children: "",
    className: "moleculestablebodycell-data-copy-1-57",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED70Data = {
    children: "",
    className: "moleculestablebodycell-data-copy-1-58",
};

const mOLECULESTABLECOLUMN1033Data = {
    className: "moleculestablecolumn2-copy-4",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG13Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED61Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED62Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED63Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED64Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED65Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED6P: aTOMSTABLEBODYCELLDATALEFTALIGNED66Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED7P: aTOMSTABLEBODYCELLDATALEFTALIGNED67Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED8P: aTOMSTABLEBODYCELLDATALEFTALIGNED68Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED9P: aTOMSTABLEBODYCELLDATALEFTALIGNED69Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED10: aTOMSTABLEBODYCELLDATALEFTALIGNED70Data,
};

const symbolP1Data = {
    src: "/img/letter-p-copy@2x.png",
};

const symbolP2Data = {
    src: "/img/letter-p-copy@2x.png",
    className: "symbol-c-copy-3",
};

const symbolP3Data = {
    src: "/img/letter-p-copy@2x.png",
    className: "symbol-c-copy-2",
};

const symbolP4Data = {
    src: "/img/letter-p-copy@2x.png",
    className: "symbol-c-copy-9",
};

const symbolP5Data = {
    src: "/img/letter-p-copy@2x.png",
    className: "symbol-c-copy-7",
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG14Data = {
    children: "Status",
    className: "moleculestableheaderdefault-copy-2-1",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED71Data = {
    children: "Initial Verified",
    className: "moleculestablebodycell-data-copy-14",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED72Data = {
    children: "Initial Verified",
    className: "moleculestablebodycell-data-copy-1-59",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED73Data = {
    children: "Initial Verified",
    className: "moleculestablebodycell-data-copy-1-60",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED74Data = {
    children: "Update Verified",
    className: "moleculestablebodycell-data-copy-1-61",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED75Data = {
    children: "Initial Verified",
    className: "moleculestablebodycell-data-copy-1-62",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED76Data = {
    children: "Initial Verified",
    className: "moleculestablebodycell-data-copy-1-63",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED77Data = {
    children: "Initial Verified",
    className: "moleculestablebodycell-data-copy-1-64",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED78Data = {
    children: "Initial Verified",
    className: "moleculestablebodycell-data-copy-1-65",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED79Data = {
    children: "Initial Verified",
    className: "moleculestablebodycell-data-copy-1-66",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED80Data = {
    children: "Initial Verified",
    className: "moleculestablebodycell-data-copy-1-67",
};

const mOLECULESTABLECOLUMN1034Data = {
    className: "moleculestablecolumn2-copy-6-2",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG14Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED71Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED72Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED73Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED74Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED75Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED6P: aTOMSTABLEBODYCELLDATALEFTALIGNED76Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED7P: aTOMSTABLEBODYCELLDATALEFTALIGNED77Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED8P: aTOMSTABLEBODYCELLDATALEFTALIGNED78Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED9P: aTOMSTABLEBODYCELLDATALEFTALIGNED79Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED10: aTOMSTABLEBODYCELLDATALEFTALIGNED80Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG15Data = {
    children: "Outage Start",
    className: "moleculestableheaderdefault-copy-2-1",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED81Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-15",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED82Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-68",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED83Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-69",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED84Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-70",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED85Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-71",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED86Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-72",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED87Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-73",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED88Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-74",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED89Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-75",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED90Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-76",
};

const mOLECULESTABLECOLUMN1035Data = {
    className: "moleculestablecolumn2-copy-5-1",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG15Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED81Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED82Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED83Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED84Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED85Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED6P: aTOMSTABLEBODYCELLDATALEFTALIGNED86Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED7P: aTOMSTABLEBODYCELLDATALEFTALIGNED87Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED8P: aTOMSTABLEBODYCELLDATALEFTALIGNED88Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED9P: aTOMSTABLEBODYCELLDATALEFTALIGNED89Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED10: aTOMSTABLEBODYCELLDATALEFTALIGNED90Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG16Data = {
    children: "Last Updated",
    className: "moleculestableheaderdefault-copy-2-1",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED91Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-16",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED92Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-77",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED93Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-78",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED94Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-79",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED95Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-80",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED96Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-81",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED97Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-82",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED98Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-83",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED99Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-84",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED100Data = {
    children: "2022-11-30-TO7:26:5…",
    className: "moleculestablebodycell-data-copy-1-85",
};

const mOLECULESTABLECOLUMN1036Data = {
    className: "moleculestablecolumn2-copy-7-2",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG16Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED91Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED92Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED93Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED94Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED95Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED6P: aTOMSTABLEBODYCELLDATALEFTALIGNED96Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED7P: aTOMSTABLEBODYCELLDATALEFTALIGNED97Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED8P: aTOMSTABLEBODYCELLDATALEFTALIGNED98Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED9P: aTOMSTABLEBODYCELLDATALEFTALIGNED99Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED10: aTOMSTABLEBODYCELLDATALEFTALIGNED100Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG17Data = {
    children: "Ticket #",
    className: "moleculestableheaderdefault-copy-2-1",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED101Data = {
    children: "VOC2022133567",
    className: "moleculestablebodycell-data-copy-17",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED102Data = {
    children: "MAH65432346",
    className: "moleculestablebodycell-data-copy-1-86",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED103Data = {
    children: "AUTO5678",
    className: "moleculestablebodycell-data-copy-1-87",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED104Data = {
    children: "AUTO5678",
    className: "moleculestablebodycell-data-copy-1-88",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED105Data = {
    children: "AUTO5678",
    className: "moleculestablebodycell-data-copy-1-89",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED106Data = {
    children: "VOC2022133567",
    className: "moleculestablebodycell-data-copy-1-90",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED107Data = {
    children: "VOC2022133567",
    className: "moleculestablebodycell-data-copy-1-91",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED108Data = {
    children: "AUTO5678",
    className: "moleculestablebodycell-data-copy-1-92",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED109Data = {
    children: "MAH65432346",
    className: "moleculestablebodycell-data-copy-1-93",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED110Data = {
    children: "AUTO5678",
    className: "moleculestablebodycell-data-copy-1-94",
};

const mOLECULESTABLECOLUMN1037Data = {
    className: "moleculestablecolumn2-copy-11-1",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG17Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED101Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED102Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED103Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED104Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED105Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED6P: aTOMSTABLEBODYCELLDATALEFTALIGNED106Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED7P: aTOMSTABLEBODYCELLDATALEFTALIGNED107Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED8P: aTOMSTABLEBODYCELLDATALEFTALIGNED108Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED9P: aTOMSTABLEBODYCELLDATALEFTALIGNED109Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED10: aTOMSTABLEBODYCELLDATALEFTALIGNED110Data,
};

const aTOMSSCROLLBARVERTICAL2Data = {
    className: "atomsscrollbarvertical-3",
};

const group422Data = {
    className: "group-42-copy-8",
};

const group423Data = {
    className: "group-42-copy",
};

const group424Data = {
    className: "group-42-copy-2",
};

const group425Data = {
    className: "group-42-copy-3",
};

const group426Data = {
    className: "group-42-copy-6",
};

const group427Data = {
    className: "group-42-copy-5",
};

const group428Data = {
    className: "group-42-copy-4",
};

const group429Data = {
    className: "group-42-copy-7",
};

const group4210Data = {
    className: "group-42-copy-9",
};

const aTOMSDIVIDERSLINE1PXGRAY11Data = {
    className: "atomsdividersline4-pxblack-1-1",
};

const aTOMSDIVIDERSLINE1PXGRAY12Data = {
    className: "atomsdividersline-1",
};

const localRelatedNotiicationsDetailsData = {
    bitmap: "/img/bitmap@2x.png",
    bitmapCopy: "/img/bitmap@2x.png",
    bitmapCopy2: "/img/bitmap@2x.png",
    bitmapCopy3: "/img/bitmap@2x.png",
    bitmapCopy4: "/img/bitmap@2x.png",
    aTOMSCONTENTCONTAINERProps: aTOMSCONTENTCONTAINER9Data,
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY217Data,
    mOLECULESTABLEACTIONICONTEXTProps: mOLECULESTABLEACTIONICONTEXT4Data,
    mOLECULESTABLEACTIONICONTEXT2Props: mOLECULESTABLEACTIONICONTEXT22Data,
    mOLECULESTABLEACTIONICONTEXT3Props: mOLECULESTABLEACTIONICONTEXT32Data,
    mOLECULESTABLEACTIONBARSETTINGSCONT: mOLECULESTABLEACTIONBARSETTINGSCONT3Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY218Data,
    mOLECULESTABLEACTIONBARTEMPLATESELE: mOLECULESTABLEACTIONBARTEMPLATESELE2Data,
    mOLECULESTABLECOLUMNHEADERNEWProps: mOLECULESTABLECOLUMNHEADERNEW2Data,
    mOLECULESTABLEROWDEFAULTNEW1Props: mOLECULESTABLEROWDEFAULTNEW7Data,
    mOLECULESTABLEROWDEFAULTNEW2Props: mOLECULESTABLEROWDEFAULTNEW8Data,
    mOLECULESTABLEROWDEFAULTNEW3Props: mOLECULESTABLEROWDEFAULTNEW9Data,
    mOLECULESTABLEROWDEFAULTNEW4Props: mOLECULESTABLEROWDEFAULTNEW10Data,
    mOLECULESTABLEROWDEFAULTNEW5Props: mOLECULESTABLEROWDEFAULTNEW11Data,
    mOLECULESTABLEROWDEFAULTNEW6Props: mOLECULESTABLEROWDEFAULTNEW12Data,
    mOLECULESTABLEROWDEFAULTNEW7Props: mOLECULESTABLEROWDEFAULTNEW13Data,
    mOLECULESTABLEROWDEFAULTNEW8Props: mOLECULESTABLEROWDEFAULTNEW14Data,
    mOLECULESTABLEROWDEFAULTNEW9Props: mOLECULESTABLEROWDEFAULTNEW15Data,
    mOLECULESTABLEROWDEFAULTNEW10Props: mOLECULESTABLEROWDEFAULTNEW16Data,
    mOLECULESTABLECOLUMN105Props: mOLECULESTABLECOLUMN1052Data,
    mOLECULESTABLECOLUMN1031Props: mOLECULESTABLECOLUMN1032Data,
    mOLECULESTABLECOLUMN1032Props: mOLECULESTABLECOLUMN1033Data,
    symbolP1Props: symbolP1Data,
    symbolP2Props: symbolP2Data,
    symbolP3Props: symbolP3Data,
    symbolP4Props: symbolP4Data,
    symbolP5Props: symbolP5Data,
    mOLECULESTABLECOLUMN1033Props: mOLECULESTABLECOLUMN1034Data,
    mOLECULESTABLECOLUMN1034Props: mOLECULESTABLECOLUMN1035Data,
    mOLECULESTABLECOLUMN1035Props: mOLECULESTABLECOLUMN1036Data,
    mOLECULESTABLECOLUMN1036Props: mOLECULESTABLECOLUMN1037Data,
    aTOMSSCROLLBARVERTICALProps: aTOMSSCROLLBARVERTICAL2Data,
    group421Props: group422Data,
    group422Props: group423Data,
    group423Props: group424Data,
    group424Props: group425Data,
    group425Props: group426Data,
    group426Props: group427Data,
    group427Props: group428Data,
    group428Props: group429Data,
    group429Props: group4210Data,
    aTOMSDIVIDERSLINE1PXGRAY1Props: aTOMSDIVIDERSLINE1PXGRAY11Data,
    aTOMSDIVIDERSLINE1PXGRAY2Props: aTOMSDIVIDERSLINE1PXGRAY12Data,
};

const divider10Data = {
    className: "atomscollapsiblecontainerborder",
};

const mOLECULESCOLLAPSIBLETITLELEVEL12CLO25Data = {
    placeholderText: "Tickets  05",
    className: "moleculesaccordiontitle-level-1-closed-5",
};

const mOLECULESFORMCOLLAPSIBLELEVEL15Data = {
    className: "local-accordion-copy-1",
    dividerProps: divider10Data,
    mOLECULESCOLLAPSIBLETITLELEVEL12CLO: mOLECULESCOLLAPSIBLETITLELEVEL12CLO25Data,
};

const aTOMSCONTENTCONTAINER10Data = {
    className: "atomscontentcontainer-copy-4",
};

const aTOMSDIVIDERSLINE1PXGRAY239Data = {
    className: "rectangle-15",
};

const mOLECULESTABLEACTIONICONTEXT5Data = {
    edit: "Action",
    className: "moleculestableactionicontext",
};

const mOLECULESTABLEACTIONICONTEXT23Data = {
    edit: "Action",
    className: "moleculestableactionicontext-copy",
};

const mOLECULESTABLEACTIONICONTEXT33Data = {
    edit: "Action",
    className: "moleculestableactionicontext-copy-2",
};

const mOLECULESINPUTSDROPDOWNCOMPLETE3Data = {
    dropdown: "Select Template",
};

const aTOMSICON2019trash6Data = {
    className: "atomsicon2019trash-1",
};

const aTOMSICON2019Commonsearch4Data = {
    className: "",
};

const mOLECULESINPUTSSEARCHDEFAULT4Data = {
    aTOMSICON2019CommonsearchProps: aTOMSICON2019Commonsearch4Data,
};

const aTOMSICON2019filter5Data = {
    className: "",
};

const aTOMSTABLEFILTERDEFAULT5Data = {
    aTOMSICON2019filterProps: aTOMSICON2019filter5Data,
};

const mOLECULESTABLEACTIONBARSETTINGSCONT4Data = {
    className: "moleculestableaction",
    mOLECULESINPUTSDROPDOWNCOMPLETEProp: mOLECULESINPUTSDROPDOWNCOMPLETE3Data,
    aTOMSICON2019trashProps2: aTOMSICON2019trash6Data,
    mOLECULESINPUTSSEARCHDEFAULTProps: mOLECULESINPUTSSEARCHDEFAULT4Data,
    aTOMSTABLEFILTERDEFAULTProps: aTOMSTABLEFILTERDEFAULT5Data,
};

const aTOMSDIVIDERSLINE1PXGRAY240Data = {
    className: "atomsdividersline1-pxgray-4",
};

const aTOMSICON2019filter6Data = {
    className: "atomsicon2019filter-1",
};

const aTOMSTABLEFILTERDEFAULT6Data = {
    aTOMSICON2019filterProps: aTOMSICON2019filter6Data,
};

const aTOMSICONFilterClear6Data = {
    className: "icon-filter-clear-1",
};

const mOLECULESTABLEACTIONBARSETTINGSCONT22Data = {
    aTOMSTABLEFILTERDEFAULTProps: aTOMSTABLEFILTERDEFAULT6Data,
    aTOMSICONFilterClearProps: aTOMSICONFilterClear6Data,
};

const aTOMSDIVIDERSLINE1PXGRAY13Data = {
    className: "atomsdividersline1-pxblack",
};

const mOLECULESTABLEACTIONBARTEMPLATESELE3Data = {
    className: "moleculestableactionbartemplate-selected-1",
    mOLECULESTABLEACTIONBARSETTINGSCONT: mOLECULESTABLEACTIONBARSETTINGSCONT22Data,
    aTOMSDIVIDERSLINE1PXGRAYProps: aTOMSDIVIDERSLINE1PXGRAY13Data,
};

const aTOMSDIVIDERSLINE1PXGRAY14Data = {
    className: "atomsdividersline-4",
};

const aTOMSDIVIDERSLINE1PXGRAY15Data = {
    className: "atomsdividersline4-pxblack-5",
};

const mOLECULESTABLECOLUMNHEADERNEW3Data = {
    className: "moleculestablecolumnheadernew",
    aTOMSDIVIDERSLINE1PXBLACK1Props: aTOMSDIVIDERSLINE1PXGRAY14Data,
    aTOMSDIVIDERSLINE1PXBLACK2Props: aTOMSDIVIDERSLINE1PXGRAY15Data,
};

const aTOMSDIVIDERSLINE1PXGRAY241Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY242Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW17Data = {
    className: "moleculestablerowdefaultnew",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY241Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY242Data,
};

const aTOMSDIVIDERSLINE1PXGRAY243Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY244Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW18Data = {
    className: "moleculestablerowdefaultnew-copy-1",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY243Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY244Data,
};

const aTOMSDIVIDERSLINE1PXGRAY245Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY246Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW19Data = {
    className: "moleculestablerowdefaultnew-copy-2",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY245Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY246Data,
};

const aTOMSDIVIDERSLINE1PXGRAY247Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY248Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW20Data = {
    className: "moleculestablerowdefaultnew-copy-3",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY247Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY248Data,
};

const aTOMSDIVIDERSLINE1PXGRAY249Data = {
    className: "moleculestablerowstatedefault",
};

const aTOMSDIVIDERSLINE1PXGRAY250Data = {
    className: "atomsdividersline1-pxblack-3",
};

const mOLECULESTABLEROWDEFAULTNEW21Data = {
    className: "moleculestablerowdefaultnew-copy-4",
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY249Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY250Data,
};

const aTOMSSCROLLBARVERTICAL3Data = {
    className: "atomsscrollbarvertical-2",
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG18Data = {
    children: "Ticket  #",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED220Data = {
    children: "MAH4567654653",
    className: "moleculestablebodycell-data-copy-21",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED221Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED222Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED223Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED224Data = {
    children: "202211330058761",
    className: "moleculestablebodycell-data-copy-22",
};

const mOLECULESTABLECOLUMN1042Data = {
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG18Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED21: aTOMSTABLEBODYCELLDATALEFTALIGNED220Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED22: aTOMSTABLEBODYCELLDATALEFTALIGNED221Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED23: aTOMSTABLEBODYCELLDATALEFTALIGNED222Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED24: aTOMSTABLEBODYCELLDATALEFTALIGNED223Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED25: aTOMSTABLEBODYCELLDATALEFTALIGNED224Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG19Data = {
    children: "Ticket Type",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED111Data = {
    children: "Internal",
    className: "moleculestablebodycell-data-copy-18",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED112Data = {
    children: "Internal",
    className: "moleculestablebodycell-data-copy-1-95",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED113Data = {
    children: "Internal",
    className: "moleculestablebodycell-data-copy-1-96",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED114Data = {
    children: "Internal",
    className: "moleculestablebodycell-data-copy-1-97",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED115Data = {
    children: "Internal",
    className: "moleculestablebodycell-data-copy-1-98",
};

const mOLECULESTABLECOLUMN1011Data = {
    className: "moleculestablecolumn2-copy",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG19Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED111Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED112Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED113Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED114Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED115Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG20Data = {
    children: "Contact #",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED116Data = {
    children: "99534534343",
    className: "moleculestablebodycell-data-copy-19",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED117Data = {
    children: "99534534343",
    className: "moleculestablebodycell-data-copy-1-99",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED118Data = {
    children: "99534534343",
    className: "moleculestablebodycell-data-copy-1-100",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED119Data = {
    children: "99534534343",
    className: "moleculestablebodycell-data-copy-1-101",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED120Data = {
    children: "99534534343",
    className: "moleculestablebodycell-data-copy-1-102",
};

const mOLECULESTABLECOLUMN1012Data = {
    className: "moleculestablecolumn2-copy-6-1",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG20Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED116Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED117Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED118Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED119Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED120Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG21Data = {
    children: "Ticket Source",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED121Data = {
    children: "VREPAIR",
    className: "moleculestablebodycell-data-copy-20",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED122Data = {
    children: "VREPAIR",
    className: "moleculestablebodycell-data-copy-1-103",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED123Data = {
    children: "LOREM",
    className: "moleculestablebodycell-data-copy-1-104",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED124Data = {
    children: "VREPAIR",
    className: "moleculestablebodycell-data-copy-1-105",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED125Data = {
    children: "VREPAIR",
    className: "moleculestablebodycell-data-copy-1-106",
};

const mOLECULESTABLECOLUMN1013Data = {
    className: "moleculestablecolumn2-copy-5",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG21Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED121Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED122Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED123Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED124Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED125Data,
};

const mOLECULESTABLEHEADERDEFAULTLEFTALIG22Data = {
    children: "LEC / OCC",
    className: "moleculestableheaderdefault-copy-2",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED126Data = {
    children: "loremipsum",
    className: "moleculestablebodycell-data-copy",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED127Data = {
    children: "loremipsum",
    className: "moleculestablebodycell-data-copy-1-107",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED128Data = {
    children: "loremipsum",
    className: "moleculestablebodycell-data-copy-1-108",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED129Data = {
    children: "loremipsum",
    className: "moleculestablebodycell-data-copy-1-109",
};

const aTOMSTABLEBODYCELLDATALEFTALIGNED130Data = {
    children: "loremipsum",
    className: "moleculestablebodycell-data-copy-1",
};

const mOLECULESTABLECOLUMN1014Data = {
    className: "moleculestablecolumn2-copy-7-1",
    mOLECULESTABLEHEADERDEFAULTLEFTALIG: mOLECULESTABLEHEADERDEFAULTLEFTALIG22Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED1P: aTOMSTABLEBODYCELLDATALEFTALIGNED126Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED2P: aTOMSTABLEBODYCELLDATALEFTALIGNED127Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED3P: aTOMSTABLEBODYCELLDATALEFTALIGNED128Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED4P: aTOMSTABLEBODYCELLDATALEFTALIGNED129Data,
    aTOMSTABLEBODYCELLDATALEFTALIGNED5P: aTOMSTABLEBODYCELLDATALEFTALIGNED130Data,
};

const aTOMSSCROLLBARVERTICAL4Data = {
    className: "atomsscrollbarvertical",
};

const aTOMSDIVIDERSLINE1PXGRAY16Data = {
    className: "atomsdividersline4-pxblack-1",
};

const aTOMSDIVIDERSLINE1PXGRAY17Data = {
    className: "atomsdividersline1-pxgray-2",
};

const localTicketDetailsData = {
    aTOMSCONTENTCONTAINERProps: aTOMSCONTENTCONTAINER10Data,
    aTOMSDIVIDERSLINE1PXGRAY21Props: aTOMSDIVIDERSLINE1PXGRAY239Data,
    mOLECULESTABLEACTIONICONTEXTProps: mOLECULESTABLEACTIONICONTEXT5Data,
    mOLECULESTABLEACTIONICONTEXT2Props: mOLECULESTABLEACTIONICONTEXT23Data,
    mOLECULESTABLEACTIONICONTEXT3Props: mOLECULESTABLEACTIONICONTEXT33Data,
    mOLECULESTABLEACTIONBARSETTINGSCONT: mOLECULESTABLEACTIONBARSETTINGSCONT4Data,
    aTOMSDIVIDERSLINE1PXGRAY22Props: aTOMSDIVIDERSLINE1PXGRAY240Data,
    mOLECULESTABLEACTIONBARTEMPLATESELE: mOLECULESTABLEACTIONBARTEMPLATESELE3Data,
    mOLECULESTABLECOLUMNHEADERNEWProps: mOLECULESTABLECOLUMNHEADERNEW3Data,
    mOLECULESTABLEROWDEFAULTNEW1Props: mOLECULESTABLEROWDEFAULTNEW17Data,
    mOLECULESTABLEROWDEFAULTNEW2Props: mOLECULESTABLEROWDEFAULTNEW18Data,
    mOLECULESTABLEROWDEFAULTNEW3Props: mOLECULESTABLEROWDEFAULTNEW19Data,
    mOLECULESTABLEROWDEFAULTNEW4Props: mOLECULESTABLEROWDEFAULTNEW20Data,
    mOLECULESTABLEROWDEFAULTNEW5Props: mOLECULESTABLEROWDEFAULTNEW21Data,
    aTOMSSCROLLBARVERTICAL1Props: aTOMSSCROLLBARVERTICAL3Data,
    mOLECULESTABLECOLUMN104Props: mOLECULESTABLECOLUMN1042Data,
    mOLECULESTABLECOLUMN101Props: mOLECULESTABLECOLUMN1011Data,
    mOLECULESTABLECOLUMN102Props: mOLECULESTABLECOLUMN1012Data,
    mOLECULESTABLECOLUMN103Props: mOLECULESTABLECOLUMN1013Data,
    mOLECULESTABLECOLUMN104Props2: mOLECULESTABLECOLUMN1014Data,
    aTOMSSCROLLBARVERTICAL2Props: aTOMSSCROLLBARVERTICAL4Data,
    aTOMSDIVIDERSLINE1PXGRAY1Props: aTOMSDIVIDERSLINE1PXGRAY16Data,
    aTOMSDIVIDERSLINE1PXGRAY2Props: aTOMSDIVIDERSLINE1PXGRAY17Data,
};

const divider11Data = {
    className: "atomscollapsiblecontainerborder",
};

const mOLECULESCOLLAPSIBLETITLELEVEL12CLO26Data = {
    placeholderText: "Comments  10",
    className: "moleculesaccordiontitle-level-1-closed",
};

const mOLECULESFORMCOLLAPSIBLELEVEL16Data = {
    className: "local-accordion-copy",
    dividerProps: divider11Data,
    mOLECULESCOLLAPSIBLETITLELEVEL12CLO: mOLECULESCOLLAPSIBLETITLELEVEL12CLO26Data,
};

const aTOMSDIVIDERSLINE1PXGRAY18Data = {
    className: "atomsdividersline",
};

const aTOMSDIVIDERSLINE1PXGRAY19Data = {
    className: "atomsdividersline4-pxblack",
};

const mOLECULESTABLECOLUMNHEADERNEW4Data = {
    className: "moleculestablecolumnheadernew-2",
    aTOMSDIVIDERSLINE1PXBLACK1Props: aTOMSDIVIDERSLINE1PXGRAY18Data,
    aTOMSDIVIDERSLINE1PXBLACK2Props: aTOMSDIVIDERSLINE1PXGRAY19Data,
};

const aTOMSDIVIDERSLINE1PXGRAY20Data = {
    className: "atomsdividersline1-pxgray-3",
};

const localComentsDetailsData = {
    comments: "Comments",
    dateTime: "Date & Time",
    x1LoremIpsumDolor: "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    x20221130At1130: "2022-11-30 at 11:30 PM",
    x2LoremIpsumDolor: "2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    x20221130At1130Copy: "2022-11-30 at 11:30 PM",
    x3LoremIpsumDolor: "3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    x20221130At1130Copy2: "2022-11-30 at 11:30 PM",
    x4LoremIpsumDolor: "4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    x20221130At1130Copy3: "2022-11-30 at 11:30 PM",
    x5LoremIpsumDolor: "5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    x20221130At1130Copy4: "2022-11-30 at 11:30 PM",
    mOLECULESTABLECOLUMNHEADERNEWProps: mOLECULESTABLECOLUMNHEADERNEW4Data,
    aTOMSDIVIDERSLINE1PXGRAYProps: aTOMSDIVIDERSLINE1PXGRAY20Data,
};

const templateNotification5CopyData = {
    mOLECULESFORMCOLLAPSIBLELEVEL11Prop: mOLECULESFORMCOLLAPSIBLELEVEL11Data,
    localOutageDetails4Props: localOutageDetails4Data,
    localLocationDetails51Props: localLocationDetails51Data,
    mOLECULESFORMCOLLAPSIBLELEVEL12Prop: mOLECULESFORMCOLLAPSIBLELEVEL12Data,
    mOLECULESFORMCOLLAPSIBLELEVEL13Prop: mOLECULESFORMCOLLAPSIBLELEVEL13Data,
    localAdditionalEquipmentDetailsProp: localAdditionalEquipmentDetailsData,
    mOLECULESFORMCOLLAPSIBLELEVEL14Prop: mOLECULESFORMCOLLAPSIBLELEVEL14Data,
    localRelatedNotiicationsDetailsProp: localRelatedNotiicationsDetailsData,
    mOLECULESFORMCOLLAPSIBLELEVEL15Prop: mOLECULESFORMCOLLAPSIBLELEVEL15Data,
    localTicketDetailsProps: localTicketDetailsData,
    mOLECULESFORMCOLLAPSIBLELEVEL16Prop: mOLECULESFORMCOLLAPSIBLELEVEL16Data,
    localComentsDetailsProps: localComentsDetailsData,
};

const divider12Data = {
    className: "divider",
};

const inputFields1Data = {
    placeholderText: "10",
    dividerProps: divider12Data,
};

const showPage1Data = {
    inputFieldsProps: inputFields1Data,
};

const divider13Data = {
    className: "divider-1",
};

const arrow1Data = {
    dividerProps: divider13Data,
};

const pageNumber1Data = {
    children: "1",
};

const pageNumber21Data = {
    children: "2",
};

const pageNumber22Data = {
    children: "3",
};

const pageNumber23Data = {
    children: "4",
};

const pageNumber24Data = {
    children: "5",
};

const pageNumber25Data = {
    children: "6",
    className: "page-number-1-5",
};

const pageNumber26Data = {
    children: "7",
};

const pageNumber27Data = {
    children: "8",
    className: "page-number-1-6",
};

const pageNumber28Data = {
    children: "9",
    className: "page-number-1-7",
};

const pageNumber29Data = {
    children: "10",
    className: "page-number-1",
};

const divider14Data = {
    className: "divider-1",
};

const arrow2Data = {
    className: "arrow",
    dividerProps: divider14Data,
};

const pagesData = {
    arrow1Props: arrow1Data,
    pageNumberProps: pageNumber1Data,
    pageNumber21Props: pageNumber21Data,
    pageNumber22Props: pageNumber22Data,
    pageNumber23Props: pageNumber23Data,
    pageNumber24Props: pageNumber24Data,
    pageNumber25Props: pageNumber25Data,
    pageNumber26Props: pageNumber26Data,
    pageNumber27Props: pageNumber27Data,
    pageNumber28Props: pageNumber28Data,
    pageNumber29Props: pageNumber29Data,
    arrow2Props: arrow2Data,
};

const divider15Data = {
    className: "divider-2",
};

const inputFields21Data = {
    placeholderText: "1",
    dividerProps: divider15Data,
};

const goTo1Data = {
    text2: "/ 20",
    inputFields2Props: inputFields21Data,
};

const button621Data = {
    text: "Export",
};

const paginationData = {
    displaying5Of50Rows: "Displaying 10 of 100 Rows",
    showPageProps: showPage1Data,
    pagesProps: pagesData,
    goToProps: goTo1Data,
    button6Props: button621Data,
};

const divider16Data = {
    className: "divider",
};

const inputFields3Data = {
    placeholderText: "5",
    dividerProps: divider16Data,
};

const showPage2Data = {
    inputFieldsProps: inputFields3Data,
};

const divider17Data = {
    className: "divider-1",
};

const arrow3Data = {
    className: "arrow",
    dividerProps: divider17Data,
};

const pageNumber3Data = {
    children: "1",
};

const pageNumber210Data = {
    children: "2",
};

const divider18Data = {
    className: "divider-1",
};

const arrow4Data = {
    className: "arrow",
    dividerProps: divider18Data,
};

const pages2Data = {
    arrow1Props: arrow3Data,
    pageNumberProps: pageNumber3Data,
    pageNumber2Props: pageNumber210Data,
    arrow2Props: arrow4Data,
};

const divider19Data = {
    className: "divider-2",
};

const inputFields22Data = {
    placeholderText: "1",
    dividerProps: divider19Data,
};

const goTo2Data = {
    text2: "/ 2",
    inputFields2Props: inputFields22Data,
};

const button622Data = {
    text: "Export",
};

const pagination2Data = {
    displaying5Of50Rows: "Displaying 5 of 2 Rows",
    showPageProps: showPage2Data,
    pages2Props: pages2Data,
    goToProps: goTo2Data,
    button62Props: button622Data,
};

const scrollbar2Data = {
    className: "scrollbar-1",
};

const notificationScreenData = {
    spanText1: "Network",
    spanText2: " : Wireless",
    contact: "Contact :",
    sushmanthReddy: "Sushmanth Reddy",
    placeholderText: "sushmanth.reddy@one.verizon.com",
    phone: "7854323456",
    spanText3: "Span",
    spanText4: " : 1 week ago",
    spanText5: "Status",
    spanText6: " : Initial Verified",
    cata: "Cata",
    globalHeaderProps: globalHeaderData,
    mOLECULESCOLLAPSIBLETITLELEVEL12CLO: mOLECULESCOLLAPSIBLETITLELEVEL12CLOData,
    buttonProps: buttonData,
    button2Props: button2Data,
    tabNAVWithoutIconsM34Props: tabNAVWithoutIconsM34Data,
    tab2Props: tab2Data,
    templateNotification5CopyProps: templateNotification5CopyData,
    paginationProps: paginationData,
    pagination2Props: pagination2Data,
    scrollbarProps: scrollbar2Data,
};

