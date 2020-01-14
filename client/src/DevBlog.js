import React from 'react'
import Navigation from "./components/Main/Navigation/Navigation"
import Footer from "./components/Main/Footer/Footer"
import Me from './components/Objects/Me/Me.js'
import "./DevBlog.css"

class DevBlog extends React.Component {
    render() {
        return (
            <div id="soundtrackWrapper">
                <Navigation />
                <div className="container text-center">
                    <h1>DEV-BLOG:</h1>
                    <br />
                    <Me />
                    <div id="blogPostsDiv">
                    <div className="sectionBg container text-center">
                    <h2 className="blogDate text-left">01/13/20:</h2>
                        <h3 className="blogHeader">NO TIME TO REACT!</h3>
                        <div className="blogBody container text-left">
                            &nbsp;&nbsp; Oh hey, I didn't see you there... on account of not being able to see you at all... JSRPG is a project
                                I've been working on for nearly six months as my final project for UPENN's Webdev Bootcamp. It started off
                                slowly, as I learned full stack web development from the VERY beginning.
                                I'd always been fascinated with ASCII art, especially back when you'd
                                see it in the wild (on oldschool forums and the like). That's when it hit me... Why not make a browser-based RPG like
                                all those old flash games from the early 2000s, BUT USING ONLY JAVASCRIPT, HTML, AND CSS!
                                <br/>
                                <br /><br />
                                <div className="collapse" id="blog1">
                                    &nbsp;&nbsp; What a beautifully weird rabbit hole I dug through to get here... If you want to learn more about my adventures
                                    in developing JSRP, I'll be posting some dev videos shortly. But the current challenge is integrating six months
                                    worth of work into REACT!!!
                                <br /><br />
                                    &nbsp;&nbsp; For those who don't know, React is front-end development on
                                <span className="theMoreYouKnow">
                                        <span className="red"> N </span>
                                        <span className="orange">A </span>
                                        <span className="yellow">R </span>
                                        <span className="green">C </span>
                                        <span className="blue">O </span>
                                        <span className="indigo">T </span>
                                        <span className="violet">I </span>
                                        <span className="red">C </span>
                                        <span className="orange">S </span>
                                    </span>
                                    , imagined and brought to life by  the brilliant sadists at Facebook. It optimizes the way that we interact with
                                    the DOM by not letting us TOUCH THE DOM AT ALL! For real though, it's awesome. Instead of sphagetti
                                    string DOM manipulation (*cough cough* JQuery *cough cough*), we can immaculately structure all of our code to
                                be SUPER performant. The only problem was... <u>I had already spent month of work developing the game with JQuery</u>...
                                <br />
                                    &nbsp;&nbsp; At this point, I had two options; either I could scrap everything and remake it (with React in mind) or modify
                                    what I already had to play nicely with React. Now I'm one usually one for taking the scorched earth approach, but I only have a few weeks to get it
                                    finished and shipped!
                                <br /><br />
                                    * ENTER: THE PUBLIC DIRECTORY *
                                <br /><br />
                                    &nbsp;&nbsp; Because of the heavy dependence on JQuery, JSRPG couldn't just be thrown willy-nilly into a boilerplate Create-React-App. BUT, because
                                    React allows you to serve up static assets AS WELL AS your component based JSX, I WAS IN BUSINESS! This allowed me to host up the game via my
                                    Node Express server seamlessly alongside my React content.
                                {/* <header className="imageOverlay">
                                        <section className='text-center'>
                                            <img src="https://media1.tenor.com/images/c1c29e5715456f9f24839960399353ad/tenor.gif?itemid=15384188" alt="Five developers at work." />
                                        </section>
                                    </header> */}
                                </div>
                                <div className="text-center">
                                <button className="btn btn-success" type="button" data-toggle="collapse" data-target="#blog1" aria-expanded="false" aria-controls="blog1">
                                    CLICK TO SHOW/HIDE!
                                </button>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default DevBlog