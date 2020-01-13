import React from 'react'
import Navigation from "./components/Main/Navigation/Navigation"
import DeathScreen from "./components/Screens/DeathScreen/DeathScreen"
import Raven from "./components/Objects/Raven/Raven"
import Footer from "./components/Main/Footer/Footer"

class Soundtrack extends React.Component {

    render() {
        return (
            <div id="soundtrackWrapper">
                <Navigation />
                <div className="container text-center">
                    <h1>THE SOUNDTRACK</h1>
                    <p>JSRPG's soundtrack is an interesting blend between 8/16Bit chiptune oscillators, ambient and athmospheric piano, and electronic snyth-wave!
                    It was designed to immerse players in the moment, creating a small sense of world-building within a tiny game screen. Achieving this eclectic
                    mix was no small feat, challenging us to broaden our inspirations and to utilize a wide library of tools. This video will give you a brief
                    glimpse at how it all came together, showcasing both the software and sound design!
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Soundtrack