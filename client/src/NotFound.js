import React from 'react'
import Navigation from "./components/Main/Navigation/Navigation"
import DeathSkull from "./components/Objects/DeathSkull/DeathSkull"
import Raven from "./components/Objects/Raven/Raven"
import Footer from "./components/Main/Footer/Footer"
class NotFound extends React.Component {
    render() {
        return (
            <div id="notFoundWrapper">
                <Navigation />
                <div className="container text-center">
                    <h1 id="header404">404</h1>
                    <h2><u>Page Not Found</u></h2>
                    <DeathSkull />
                    <Raven/>
                    <p>The page you're looking for either doesn't exist or has moved somewhere else!</p>
                </div>
                <Footer/>
            </div>
        )
    }
    }
export default NotFound