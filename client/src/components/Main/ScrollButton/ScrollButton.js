import React from 'react'

class ScrollButton extends React.Component {
    render() {
        return (
            <div id="scrollButtonDiv" className="text-left">
                <button id="scrollButton" className="btn btn-success" type="button" onClick={() => {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }}>CLICK TO GO BACK TO THE TOP!</button>
            </div>
        )
    }
}
export default ScrollButton;
