import React from 'react'
import Navigation from "./../../Main/Navigation/Navigation"
import DeathSkull from "./../../Objects/DeathSkull/DeathSkull"
import Raven from "./../../Objects/Raven/Raven"
import Footer from "./../../Main/Navigation/Navigation"
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