<h1 align="center">
    JavaScript-RPG
</h1>

<h2 align="center">
    A fully-featured browser-based ASCII Art RPG!
</h2>
<h3 align="center"><a href="https://gainstrive.github.io/Javascript-RPG/">https://gainstrive.github.io/Javascript-RPG/</a></h3>
<p align="center">Do you love turn based RPGs like Final Fantasy, Darkest Dungeon, and Fallout?
<br><br>
Do you miss that Zork-esque old school text adventure asthetic?
</p>

<h3 align="center">LOOK NO FURTHER!</h3>

<p>
    &nbsp;&nbsp;&nbsp;&nbsp;
    JavaScript-RPG is a throwback to classics like those mentioned above. It draws inspiration from text-adventures and modern role playing games alike. Fallout fans
    will feel at home with the green and black Pipboy color scheme. Final Fantasy players will feel tactical in turn based action! DOOM enthusiasts will rip and tear through the first person 2D exploration! JSRPG has it all (for real)!
    <br><br>
    <h3 align="center">WHAT IS IT?</h3>
    &nbsp;&nbsp;&nbsp;&nbsp; In JSRPG, you play as an intrepid adventurer, braving the untold perils of a dangerous dungeon. When you start the game, you get to roll your characters stats, similar to how you would in a game of DnD. Your attributes have far reaching consequences in the adventures to come. Low Strength? You'd better pray for CRITS! Maxed out constitution? You can shrug off the deadliest of attacks! Make your way down each flight of the dungeon, learning spells, finding loot, playing minigames, and fighting baddies!</p>

<h3 align="center">TEXT-ONLY ASCII STYLE</h3>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;
    You might think to yourself "wait... there
    are definitely images, you said this was a
    text-only game". Nope, no images. All of the game graphics are done using ASCII characters,with nothing more than good ol' html, css, and some clever javascript! All of these animations are hand drawn and converted into ASCII art by an image-to-text algorithm (<a href="https://www.text-image.com/convert/ascii.html">thanks to text-image.com</a>). Not only does it give a modern game an older sheen, but it also makes the total file size MUCH lighter.
</p>

<h2 align="center">FEATURES:</h2>
    <dl align="center"> 
    <dt>Swing sharp swords and cast magnificent magic at enemies both large and small!</dt>
    <dt>Enjoy endless replayability thanks to the "Roguelite" randomness!</dt>
<dd>Because encounters are decided randomly each time you spawn into the dungeon, it will constantly update and move with you!</dd>
<dd>Only important encounters, like boss-fights, shops, and entrances/exits will stay in the same place.</dd>
    <dt>Get all nostalgic over JSRPGs ORIGINAL SOUNDTRACK, inspired by 8bit game music of old, with a modern twist!</dt>
<dt>AND SO MUCH MORE!!!</dt>
</dl>

<p>Because of the sheer size and scope of this game, and because it is first and foremost a passion project, it is currently in an OPEN ALPHA state. This means that ANYONE can play it! On that note however, there are a few quick things to mention:</p>

<h1 align="center">FAQ:</h1>
<p align="center">
    <b>What systems can i play JSRPG on?</b>
    <br>
    Great question! Because JSRPG is made using only html, javascript, and css, it can be played on any browser! <b>However:</b> JSRPG is <b><u>NOT</u></b> optimized for mobile devices. Gameplay will be HORRIBLE performance/display/formatting wise if you try to play it on mobile. Even though it's a text only game, there are hundreds of complex animations and css styles that a mobile phone simply can't be expected to handle.
    <i>The game screen itself is 500x750 (pixels) and cannot be resized</i>.
    <br><br>
    <b>Is JSRPG free?</b>
    <br>
    YES! JSRPG is 100% free! If you feel like buying me a cup of coffee to support me and my unhealthy sleepless web development... that would be amazing.
    <br><br>
    <b>Woah this is awesome! How do I contribute or make my own javascript game?</b>
    <br>
    Eventually (once the game reaches a solid beta point where all gameplay systems are in place), I will open it up as an open source project. You will be able to collaborate on it's development and create custom assets. Technically, all of the code used to create JSRPG is public and visible so you can see how it works for yourself right now!
    <br><br>
    <b>I have a suggestion for something you should add to the game!</b>
    <br>
    If you have any suggestions or feedback to give, please send me a message or leave a comment. I'm always looking for new ideas and inspiration to create new things! If your idea gets added to the game, I will include your name/username in the credits!
    <br><br>
    <b>Do I need to be connected to the internet to play JSRPG?</b>
    <br>
    Sort of? JSRPG saves all of the necessary user data in your devices local storage so you can play the game fully offline <b>IF</b> you download it and run it locally. If you are accessing the game by link or typing in the github pages url, you need to be connected to the internet. In it's current state, the game utilizes multiple CDNs for JQuery and other frameworks that require them to either have internet or to be cached in order to work. 
</p>

<h2 align="center">THE SOUNDTRACK</h2>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp;
    All of the sounds you hear in JSRPG are original and handcrafted! Using <a href="https://www.bfxr.net/">Bfxr</a>, I've created tons of custom sound effects in the retro 8bit fashion. In terms of the music, it's all made in ProTools 11. Building custom synths and emulating O.G oscillators was achieved with various AIR plugins (e.g Vacuum, Xpand2!). If you wish to use the music in your own work, please contact me and ask permission. I love helping out other designers and developers, and as long as you give credit I'll probably give you permission to use any of the tracks!
</p>

<h1 align="center">THANKS FOR CHECKING OUT JSRPG!
<br>
GIVE IT A TRY @</h1>
<h3 align="center"><a href="https://gainstrive.github.io/Javascript-RPG/">https://gainstrive.github.io/Javascript-RPG/</a></h3>

<h1 align="center">CHANGELOG:</h1>

<hr>
<h3>V1.2-alpha  (01/09/2020):</h3>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp; Added autoplay functionality to the following screens:
    <ul>
        <li><b>shop.js (if the player has enough gold, the AI will attempt to buy health)</b></li>
        <li><b>well.js (the AI interacts with the well, either collecting gold or healing)</b></li>
        <li><b>riddle.js (the AI will attempt to solve the riddle, awarding gold/exp)</b></li>
        <li><b>scroll.js (the AI will always attempt to decipher the scroll)</b></li>
        <li><b>tutorial.js (the AI will skip the tutorial if the user opts out in options menu)</b></li>
        <li><b>tutorialFight.js (the AI will complete the encounter and redir to traverse.html)</b></li>
    </ul>
    <pre>
      ____   
     /___/\_
    _\   \/_/\__
  __\       \/_/\            <b><u>BUG FIXES (V1.2-alpha):</u></b>
  \   __    __ \ \              <i>  Fixed recursive memory-leak on traverse.js</i>
 __\  \_\   \_\ \ \   __        <i>where autoplay x/y coords were not calculated</i> 
/_/\\   __   __  \ \_/_/\       <i>before autoMove() is fired. The function will</i>
\_\/_\__\/\__\/\__\/_\_\/       <i>now attempt to generate new coords if the</i>
   \_\/_/\       /_\_\/         <i>values of either x or y are undefined.</i>
      \_\/       \_\/
</pre>

</p>
<p>

<hr>
<h3>V1.1-alpha  (01/06/2020):</h3>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp; If you're reading this changelog, HAPPY NEW YEARS INTERNET STRANGER! 2020 is going to be a great year for JSRPG, and this is the first of many new updates to the game!
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp; In this patch, I've added a couple of neat features for players to enjoy. If you look in the options menu (now also located on the login screen), you'll notice a new option
    called "autoplay toggle". Enabling this feature will put JSRPG into a state in which IT PLAYS ITSELF! The "computer" will take control of the player's actions playing through JSRPG just as YOU would.
    It will move the player through the overworld, engage in combat scenarios, and interact with non-combat room events! This feature is in it's infancy, but as the game develops, the AI will become more
    optimal and "better" at making choices!
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp; <b>This release is meant to be a proof-of-concept/tech demo presentation, NOT a major release.</b>
</p>
<p align="center">------------------------------------------------------------</p>
<h3>New Features:</h3>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp; <b><u>You can now enable AUTOPLAY in the options menu! The "computer" AI can:</u></b>
    <br>
    <ul>
        <li><b>Navigate the overworld, just as YOU would!</b></li>
            &nbsp;&nbsp;&nbsp;&nbsp; Instead of the player pressing the movement keys to get around, the AI will fixate on a
            particular pair of coordinates (X,Y) that correspond to a random room encounter. It will intelligently turn left, right, and
            move forward, triggering animations. The AI will first move to the chosen X coordinate. Once it reaches that room tile, it will
            begin movement towards the chosen Y coordinate. On the way to it's destination, the computer will trigger other encounters if it
            moves over them along it's path!
        <li><b>Choose actions in combat!</b></li>
            &nbsp;&nbsp;&nbsp;&nbsp; Upon entering a combat encounter, the RNG turn decider will determine who goes first (the computer or the
            enemy AI). Once it is the players turn, it will execute actions in turn order. Currently, because blocking on your turn is NOT
            optimal and has little gameplay value, the computer has a 1/4 chance of choosing block. The algorithm will become more advanced
            when new gameplay options become available (e.g using items, spells, etc...)!
        <li><b>Interact with non-combat encounters!</b></li>
            &nbsp;&nbsp;&nbsp;&nbsp; Depending on the encounter, the AI will determine the optimal choice out of all actions. It will then proceed
            through the encounter attempting to finish it. <u>It will ONLY choose to abandon an encounter if there is no chance of a positive outcome,
            assuming that there is an option to abandon.</u>.
    </ul>
    &nbsp;&nbsp;&nbsp;&nbsp; <b><u>Added a new combat encounter!</u></b>
    <br><br>
    <ul>
        <li><b>BEWARE THE PUMPKING!</b></li>
        &nbsp;&nbsp;&nbsp;&nbsp; Most farmers in nearby towns have been dealing with a deadly famine for seasons without end. However, there are a few whose farms are seemingly unaffected; their land remaining fertile while others had withered long ago. Local legends (if you're one to believe  in legends) speak of a dark pact they made with a spirit of nature, promising healthy crops in exchange for a human sacrifice each hallows eve. Some say it takes on the form of a seasonal gourd, brought to life and seeking souls of wanderers to drain. It's the Great Pumpkin, Charlie Brown!
    </ul>
</p>
<hr>

<h3>V1.0-alpha  (12/11/2019):</h3>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp; JSRPG v1.0-alpha is available to play-test now! Features are limited, but the game itself is fully functional. <b>index.html</b> serves as the hub page for the game, in which the game itself is played inside of an <i>iframe</i>. This allows the user to navigate the various game screens without leaving this index.html page. Currently, the user creates a character by entering a character name. You then go through character creation and play a short tutorial. <b><u>Note:</u> In it's current state, the game will RESET each time you create a character. You can only "continue" where you left off after exiting the game by clicking the "i" button and entering the console command <i>"g.nav traverse "</i>. This will bring you back to traverse.html, retaining your stats/gold/health.</b> In future versions, there will be a continue functionality AND a skip tutorial button.
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp; In JSRPG's current state, you can navigate the overworld, discover random encounters displayed on the map, and see demonstrations of various gameplay systems. At the moment, combat is limited to the "attack" and "defend" buttons. Enemies can only perform basic attacks and have no additional traits or attributes that contribute to their stats. As I continue to build onto combat systems, enemies will be much more dynamic and take randomized actions.
</p>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp; <b>This release is meant to be a proof-of-concept/tech demo presentation, NOT a major release. Hundreds of hours have gone into JSRPG's development and concept design so far, and this is only the start of it's journey! Stay posted for very frequent updates and newly iterated features!</b>
</p>
<p align="center">------------------------------------------------------------</p>
<h3>New Features:</h3>
<p>
    &nbsp;&nbsp;&nbsp;&nbsp; The User console now accepts various commands! Try entering the following, and play around with it to get a feel for what it can do:
    <br>
    <ul>
        <li><b>g.nav {name of screen you want to go to}</b></li>
            &nbsp;&nbsp;&nbsp;&nbsp; This will redirect the iframe to a particular game page.
        <li><b>color</b></li>
            &nbsp;&nbsp;&nbsp;&nbsp; This will display a slider you can drag to change the game color.
        <li><b>invert {0-200}</b></li>
            &nbsp;&nbsp;&nbsp;&nbsp; This will invert the screen's colors by the given number (percentage).
        <li><b>contrast {0-200}</b></li>
            &nbsp;&nbsp;&nbsp;&nbsp; This adjusts screen contrast by the given number (percentage).
        <li><b>sepia {0-100}</b></li>
            &nbsp;&nbsp;&nbsp;&nbsp; This applies a sepia filter by the given number (percentage).
    </ul>
    <p></p>
</p>
