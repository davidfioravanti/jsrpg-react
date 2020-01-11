import React from 'react'
import Navigation from "./components/Main/Navigation/Navigation"
import DeathScreen from "./components/Screens/DeathScreen/DeathScreen"
import Footer from "./components/Main/Footer/Footer"
class NotFound extends React.Component {
    render() {
        return (
            <div id="notFoundWrapper">
                <Navigation />
                <div className="container text-center">
                    <h1 id="header404">404</h1>
                    <h2><u>Page Not Found</u></h2>
                    <DeathScreen />
                    <p>The page you're looking for either doesn't exist or has moved somewhere else!</p>
                    <h2></h2>
                </div>
                <Footer/>
            </div>
        )
    }
    }
export default NotFound