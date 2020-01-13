import React from 'react'
import Navigation from "./components/Main/Navigation/Navigation"
import Footer from "./components/Main/Footer/Footer"

class DevBlog extends React.Component {

    render() {
        return (
            <div id="soundtrackWrapper">
                <Navigation />
                <div className="container text-center">
                    <h1>DEV-BLOG:</h1>
                    
                </div>
                <Footer />
            </div>
        )
    }
}
export default DevBlog