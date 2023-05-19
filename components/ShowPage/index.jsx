import React from "react";
import InputFields from "../InputFields";
import "./ShowPage.sass";

class ShowPage extends React.Component {
  render() {
    const { inputFieldsProps } = this.props;

    return (
      <div className="show-page">
        <InputFields placeholderText={inputFieldsProps.placeholderText} dividerProps={inputFieldsProps.dividerProps} />
      </div>
    );
  }
}

export default ShowPage;
