import React from "react";
import ScrollButton from "../ScrollButton/ScrollButton"
class Footer extends React.Component {
  render() {
    return (
      <div id="footerDiv">
        <footer className="container-fluid">
          <div className="row">
          <div className="text-left col">
            <ScrollButton/>
          </div>
          <div className="text-right col">
          <span id="semVer" className="text-right">Current Release: V 1.2-alpha (01/09/20)</span>
          </div>

          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;