import React from "react";
import Navigation from "./../../Main/Navigation/Navigation";
import Skeleton from "./../../Enemies/Skeleton/Skeleton";
import Footer from "./../../Main/Footer/Footer";

class Crashed extends React.Component {

  render() {
    return (
      <div id="notFoundWrapper">
        <Navigation />
        <div className="container text-center">
          <h1 id="headerCrashed">OOPS...</h1>
          <h2>
            <u>JSRPG CRASHED!</u>
          </h2>
          <Skeleton />
          <div id="skeletonBox" className="container text-center"></div>
          <div className="container text-center">
            <p id="crashedSubtext">
              Something went wrong while trying to save your game data.
            </p>
          </div>
          <br />
          <button className="btn btn-success" type="button" onClick={() => {
              window.location.href = "/"
          }}>
            CLICK HERE TO GO BACK TO THE HOMEPAGE
          </button>
          <div className="container text-left">
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Crashed;
