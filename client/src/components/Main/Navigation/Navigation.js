import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
class Navigation extends React.Component {
    render() {
        return (
            <div id="navigationDiv">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">JSRPG</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="">MENU</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/game.html">PLAY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href="https://github.com/gainstrive/Javascript-RPG">GITHUB</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/patch-notes">PATCH-NOTES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dev-blog">DEV-BLOG</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navigation;
