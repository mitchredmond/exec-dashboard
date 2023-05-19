import React from "react";
import InputFields2 from "../InputFields2";
import "./GoTo.sass";

class GoTo extends React.Component {
  render() {
    const { text2, inputFields2Props } = this.props;

    return (
      <div className="go-to">
        <InputFields2
          placeholderText={inputFields2Props.placeholderText}
          dividerProps={inputFields2Props.dividerProps}
        />
        <div className="text-3 neuehaasgroteskdisplaystd-regular-normal-black-14px">{text2}</div>
      </div>
    );
  }
}

export default GoTo;
