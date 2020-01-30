import React from 'react'
import Navigation from "./../../Main/Navigation/Navigation"
import Footer from "./../../Main/Footer/Footer"
import "./Code.css"

class Code extends React.Component {
  render() {
    return (
      <div id="designWrapper">
        <Navigation />
        <div className="container text-center">
          <h1>THE CODE</h1>
          <p> Watch an indepth tutorial demonstrating how JSRPG brings all of it's art to life with HTML, CSS, and JavaScript! I've prepared a template for you to follow along
              with the video that you can download from github!
            </p>
          <br/><br/>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZlQ3m8k4uR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br></br><br></br>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Code;