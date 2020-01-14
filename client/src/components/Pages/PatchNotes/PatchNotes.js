import React from "react";
import Navigation from "./../../Main/Navigation/Navigation";
import Footer from "./../../Main/Footer/Footer";
class PatchNotes extends React.Component {
  render() {
    return (
      <div classNameName="patchNotesWrapper">
        <Navigation />
        <div className="container text-center">
          <p>
            <h1>PATCH-NOTES:</h1>
            <hr />
          <h3>V1.3-alpha  (01/13/2020):</h3>
          <div className="sectionBg">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; <u>JSRPG is now full-stack MERN REACT APP!</u>
              <br/><br/>
              It took a lot of trial and error to get it working properly, but JSRPG has been React-ified. "Why does that matter?" you ask?
              React is a super-powered front-end, that when coupled with an express back-end provides a beautiful UI and an unparalleled UX. Fear not, for JSRPG just got the fuel-injected overhaul it's been waiting for!
              <br/><br/>
              <ul className="text-left">
                <li><u>JSRPG is now deployed to Heroku @</u> <a className="patchNotesLink" href="https://gainstrive-jsrpg.herokuapp.com/">https://gainstrive-jsrpg.herokuapp.com/</a></li>
                &nbsp;&nbsp;If you follow that beautiful URL, you'll be directed to the NEW home of JSRPG. You'll see right off that bat that a LOT of new content has been added.
                <li><u>Landing Page Added:</u></li>
                &nbsp;&nbsp;Currently you can see a familiar site logo along with a demo video of the game. In future updates, I will be adding more content.
               <li><u>Game Page Added:</u></li>
                &nbsp;&nbsp;Play JSRPG by clicking the "PLAY" button in the top navigation bar! It will load up the game for you and take you to config screen! To Exit the game, click "EXIT" at the bottom right corner of the screen. If the dimensions of your viewport are too small to render the game, JSRPG will now display messages telling you to resize the window.
                <li><u>Patch-Notes Added:</u></li>
                &nbsp;&nbsp;You can now view JSRPG's update history on the site, just as it appears in the README.md file.
                <li><u>Dev-Blog Added:</u></li>
                &nbsp;&nbsp;This is a new page where I will post small blurbs about what I'm working on for JSRPG. Expect videos/audio/images to come soon!
             </ul>
              The site will be undergoing heavy maintenance over the course of the next two weeks. I'm currently working on coding out the back-end, adding user authentication and MongoDB integration (to save character data and progress) and more! JSRPG is going to be premiered at an event on January 30th, so wish me luck!
          </p>
          </div>
            <h3>V1.2-alpha (01/09/2020):</h3>
            <div className="sectionBg">
              <u>Added autoplay functionality to the following screens:</u>
              <p className="text-center">
                <ul className="text-left">
                  <li>
                    shop.js (if the player has enough gold, the AI will attempt to
                    buy health)
                </li>
                  <li>
                    well.js (the AI interacts with the well, either collecting
                    gold or healing)
                </li>
                  <li>
                    riddle.js (the AI will attempt to solve the riddle, awarding
                    gold/exp)
                </li>
                  <li>
                    scroll.js (the AI will always attempt to decipher the scroll)
                </li>
                  <li>
                    tutorial.js (the AI will skip the tutorial if the user opts
                    out in options menu)
                </li>
                  <li>
                    tutorialFight.js (the AI will complete the encounter and redir
                    to traverse.html)
                </li>
                </ul>
              </p>
              <pre className="text-left ascii">
                {String.raw`
                ____   
               /___/\_
              _\   \/_/\__
            __\       \/_/\            BUG FIXES (V1.2-alpha):
            \   __    __ \ \                Fixed recursive memory-leak on traverse.js
           __\  \_\   \_\ \ \   __        where autoplay x/y coords were not calculated 
          /_/\\   __   __  \ \_/_/\       before autoMove() is fired. The function will
          \_\/_\__\/\__\/\__\/_\_\/       now attempt to generate new coords if the
            \_\/_/\       /_\_\/         values of either x or y are undefined.
                \_\/       \_\/
                `}
              </pre>
            </div>
            <hr />
            <h3>V1.1-alpha (01/06/2020):</h3>
            <div className="sectionBg">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; If you're reading this changelog, HAPPY NEW
                YEARS INTERNET STRANGER! 2020 is going to be a great year for JSRPG,
                and this is the first of many new updates to the game!
          </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp; In this patch, I've added a couple of neat
                features for players to enjoy. If you look in the options menu (now
                also located on the login screen), you'll notice a new option called
                "autoplay toggle". Enabling this feature will put JSRPG into a state
                in which IT PLAYS ITSELF! The "computer" will take control of the
                player's actions playing through JSRPG just as YOU would. It will
                move the player through the overworld, engage in combat scenarios,
                and interact with non-combat room events! This feature is in it's
                infancy, but as the game develops, the AI will become more optimal
                and "better" at making choices!
          </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                This release is meant to be a proof-of-concept/tech demo
                presentation, NOT a major release.
          </p>
              <p align="center">
                ------------------------------------------------------------
          </p>
              <h3>New Features:</h3>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <u>
                  You can now enable AUTOPLAY in the options menu! The "computer"
                  AI can:
              </u>
                <br /><br />
                <ul className="text-left">
                  <li>
                    <u>Navigate the overworld, just as YOU would!</u>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp; Instead of the player pressing the
                  movement keys to get around, the AI will fixate on a particular
                  pair of coordinates (X,Y) that correspond to a random room
                  encounter. It will intelligently turn left, right, and move
                  forward, triggering animations. The AI will first move to the
                  chosen X coordinate. Once it reaches that room tile, it will begin
                  movement towards the chosen Y coordinate. On the way to it's
                  destination, the computer will trigger other encounters if it
                  moves over them along it's path!
              <li>
                    <u>Choose actions in combat!</u>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp; Upon entering a combat encounter, the RNG
                  turn decider will determine who goes first (the computer or the
                  enemy AI). Once it is the players turn, it will execute actions in
                  turn order. Currently, because blocking on your turn is NOT
                  optimal and has little gameplay value, the computer has a 1/4
                  chance of choosing block. The algorithm will become more advanced
                  when new gameplay options become available (e.g using items,
                  spells, etc...)!
              <li>
                    <u>Interact with non-combat encounters!</u>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp; Depending on the encounter, the AI will
                  determine the optimal choice out of all actions. It will then
                  proceed through the encounter attempting to finish it.
              <u>
                    It will ONLY choose to abandon an encounter if there is no
                    chance of a positive outcome, assuming that there is an option
                    to abandon.
              </u>
                  .
            </ul>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <u>Added a new combat encounter!</u>
                <br />
                <br />
                <ul className="text-left">
                  <li>
                    <u>BEWARE THE PUMPKING!</u>
                  </li>
                  &nbsp;&nbsp;&nbsp;&nbsp; Most farmers in nearby towns have been
                  dealing with a deadly famine for seasons without end. However,
                  there are a few whose farms are seemingly unaffected; their land
                  remaining fertile while others had withered long ago. Local
                  legends (if you're one to believe in legends) speak of a dark pact
                  they made with a spirit of nature, promising healthy crops in
                  exchange for a human sacrifice each hallows eve. Some say it takes
                  on the form of a seasonal gourd, brought to life and seeking souls
                  of wanderers to drain. It's the Great Pumpkin, Charlie Brown!
            </ul>
              </p>
            </div>
            <h3>V1.0-alpha  (12/11/2019):</h3>
            <div className="sectionBg">
              <p>
                JSRPG v1.0-alpha is available to play-test now! Features are limited, but the game itself is fully functional. <b>index.html</b> serves as the hub page for the game, in which the game itself is played inside of an <i>iframe</i>. This allows the user to navigate the various game screens without leaving this index.html page. Currently, the user creates a character by entering a character name. You then go through character creation and play a short tutorial. <b><u>Note:</u> In it's current state, the game will RESET each time you create a character. You can only "continue" where you left off after exiting the game by clicking the "i" button and entering the console command <i>"g.nav traverse "</i>. This will bring you back to traverse.html, retaining your stats/gold/health.</b> In future versions, there will be a continue functionality AND a skip tutorial button.
</p>
              <p>
                In JSRPG's current state, you can navigate the overworld, discover random encounters displayed on the map, and see demonstrations of various gameplay systems. At the moment, combat is limited to the "attack" and "defend" buttons. Enemies can only perform basic attacks and have no additional traits or attributes that contribute to their stats. As I continue to build onto combat systems, enemies will be much more dynamic and take randomized actions.
</p>
              <p>
                This release is meant to be a proof-of-concept/tech demo presentation, NOT a major release. Hundreds of hours have gone into JSRPG's development and concept design so far, and this is only the start of it's journey! Stay posted for very frequent updates and newly iterated features!
</p>
              <h3>New Features:</h3>
              <p>
                The User console now accepts various commands! Try entering the following, and play around with it to get a feel for what it can do:
    <br /><br />
                <div className="text-left">
                  <ul>
                    <li><u>g.nav (name of screen you want to go to):</u></li>
                    &nbsp;&nbsp;&nbsp;&nbsp; This will redirect the iframe to a particular game page.
            <br /><br />
                    <li><u>color:</u></li>
                    &nbsp;&nbsp;&nbsp;&nbsp; This will display a slider you can drag to change the game color.
            <br /><br />
                    <li><u>invert (0-200):</u></li>
                    &nbsp;&nbsp;&nbsp;&nbsp; This will invert the screen's colors by the given number (percentage).
            <br /><br />
                    <li><u>contrast (0-200):</u></li>
                    &nbsp;&nbsp;&nbsp;&nbsp; This adjusts screen contrast by the given number (percentage).
            <br /><br />
                    <li><u>sepia (0-100):</u></li>
                    &nbsp;&nbsp;&nbsp;&nbsp; This applies a sepia filter by the given number (percentage).
            <br /><br />
                  </ul>
                </div>
              </p>
            </div>
            </p>
        </div>
          <Footer />
        </div>
        );
      }
    }
    export default PatchNotes;
