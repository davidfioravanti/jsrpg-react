import React from 'react'
import Hellbat from "./components/Enemies/Hellbat/Hellbat"
import Navigation from "./components/Main/Navigation/Navigation"
import Footer from "./components/Main/Footer/Footer"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class App extends React.Component {
  render() {
    
    return (
            <div className="App">
      <div id="landingPageWrapper">
          <Navigation />
    <div className="container text-center">
        <div id="headerDiv">
            <h1 id="pageHeader">JSRPG</h1>
            <h2 id="pageSubheader"><u>An ASCII turn-based RPG!</u></h2>
        </div>
        <div id="hellbatWrapper">
        <Hellbat/>
        </div>
        <br></br>
        <button id="playButton" className="btn btn-success" onClick={function() {window.location.href = "/game"}} type="button">CLICK HERE TO PLAY NOW FOR FREE!</button>
        <br/><br/>
        <div id="bodyDiv">
            <h5 className="darkText">Do you love turn based RPG's like Final Fantasy and Fallout?
                <br/>
                Do you miss that Zork-esque old school text adventure asthetic?
            </h5>
            <p className="darkText">
                JSRPG is a throwback to classics like those mentioned above, drawing inspiration from
                text-adventures and modern RPG's alike!
            </p>
            <br/>
            <h2><u>WATCH THE DEMO:</u></h2>
            <div className="container text-center">
            <iframe className="embeddedVideo" title="demoVideo" width="100%" height="315" src="https://www.youtube.com/embed/wgFCjmEVceg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <br/><br/>
    </div>
        <Footer/>
    </div>
    </div>
    )
  }
}
export default App