import React from "react";
import MOLECULESTABLECOLUMNHEADERNEW from "../MOLECULESTABLECOLUMNHEADERNEW";
import ATOMSDIVIDERSLINE1PXGRAY from "../ATOMSDIVIDERSLINE1PXGRAY";
import "./LocalComentsDetails.sass";

class LocalComentsDetails extends React.Component {
  render() {
    const {
      comments,
      dateTime,
      x1LoremIpsumDolor,
      x20221130At1130,
      x2LoremIpsumDolor,
      x20221130At1130Copy,
      x3LoremIpsumDolor,
      x20221130At1130Copy2,
      x4LoremIpsumDolor,
      x20221130At1130Copy3,
      x5LoremIpsumDolor,
      x20221130At1130Copy4,
      mOLECULESTABLECOLUMNHEADERNEWProps,
      aTOMSDIVIDERSLINE1PXGRAYProps,
    } = this.props;

    return (
      <div className="attachments-copy-6">
        <div className="overlap-group1-6 neuehaasgroteskdisplaystd-bold-black-14px">
          <MOLECULESTABLECOLUMNHEADERNEW
            className={mOLECULESTABLECOLUMNHEADERNEWProps.className}
            aTOMSDIVIDERSLINE1PXBLACK1Props={mOLECULESTABLECOLUMNHEADERNEWProps.aTOMSDIVIDERSLINE1PXBLACK1Props}
            aTOMSDIVIDERSLINE1PXBLACK2Props={mOLECULESTABLECOLUMNHEADERNEWProps.aTOMSDIVIDERSLINE1PXBLACK2Props}
          />
          <div className="comments">{comments}</div>
          <div className="date-time">{dateTime}</div>
        </div>
        <div className="flex-row-5 neuehaasgroteskdisplaystd-regular-normal-black-15px">
          <p className="x-lorem-ipsum-dolor">{x1LoremIpsumDolor}</p>
          <div className="x2022-11-30-at-1130">{x20221130At1130}</div>
        </div>
        <div className="flex-row-3 neuehaasgroteskdisplaystd-regular-normal-black-15px">
          <p className="x-lorem-ipsum-dolor-1">{x2LoremIpsumDolor}</p>
          <div className="x2022-11-30-at-1130-copy">{x20221130At1130Copy}</div>
        </div>
        <div className="flex-row-4 neuehaasgroteskdisplaystd-regular-normal-black-15px">
          <p className="x-lorem-ipsum-dolor">{x3LoremIpsumDolor}</p>
          <div className="x2022-11-30-at-1130">{x20221130At1130Copy2}</div>
        </div>
        <div className="flex-row-3 neuehaasgroteskdisplaystd-regular-normal-black-15px">
          <p className="x-lorem-ipsum-dolor-1">{x4LoremIpsumDolor}</p>
          <div className="x2022-11-30-at-1130-copy">{x20221130At1130Copy3}</div>
        </div>
        <div className="flex-row-4 neuehaasgroteskdisplaystd-regular-normal-black-15px">
          <p className="x-lorem-ipsum-dolor">{x5LoremIpsumDolor}</p>
          <div className="x2022-11-30-at-1130">{x20221130At1130Copy4}</div>
        </div>
        <ATOMSDIVIDERSLINE1PXGRAY className={aTOMSDIVIDERSLINE1PXGRAYProps.className} />
      </div>
    );
  }
}

export default LocalComentsDetails;
