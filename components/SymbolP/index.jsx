import React from "react";
import "./SymbolP.sass";

class SymbolP extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <div className={`symbol-c ${className || ""}`}>
        <img className="letter-p-copy" src={src} alt="letter-p copy" />
      </div>
    );
  }
}

export default SymbolP;
