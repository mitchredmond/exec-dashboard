import React from "react";
import "./LogoCanvasLogo.sass";

class LogoCanvasLogo extends React.Component {
  render() {
    return (
      <div className="override-logo">
        <div className="overlap-group1">
          <img className="path" src="/img/path.svg" alt="Path" />
          <div className="group-2">
            <img className="path-1" src="/img/path-1.svg" alt="Path" />
            <img className="shape" src="/img/shape.svg" alt="Shape" />
            <img className="path-2" src="/img/path-2.svg" alt="Path" />
            <div className="overlap-group-1">
              <img className="path-3" src="/img/path-3.svg" alt="Path" />
              <img className="shape-1" src="/img/shape-1.svg" alt="Shape" />
            </div>
            <img className="path-4" src="/img/path-4.svg" alt="Path" />
          </div>
        </div>
      </div>
    );
  }
}

export default LogoCanvasLogo;
