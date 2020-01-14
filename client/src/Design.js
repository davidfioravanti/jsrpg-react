import React from 'react'
import Navigation from "./components/Main/Navigation/Navigation"
import Footer from "./components/Main/Footer/Footer"
import "./Design.css"

class Design extends React.Component {
  render() {
    return (
      <div id="designWrapper">
        <Navigation/>
        <div className="container text-center">
            <h1>THE DESIGN</h1>
            <p> At it's core, JSRPG's charm comes down to it's clever design. The game in it's entirety DOES NOT feature a single
                image. "... How is that possible, there are definitely images in the game..." you might say. Nope, the "images"
                are all text in the form of ASCII Art! In the video below, you'll get a glimpse at the process behind creating
                this art and how it factors into the gameplay! For those who like to read, you can follow along with the written
                walkthrough below!
            </p>
            <h2>STEP ONE: GET INSPIRED!</h2>
            <div className="sectionBg">
            <p className="text-center">
             &nbsp;&nbsp; The first step to creating any art is to gather good reference materials!
             Let's use the PUMPKIN KING (known as PUMPKING) as our example...
             <br/><br/>
             <br/>
             <div className="row">
                 <div className="col">
                    <img className="jackOLantern" src="../../assets/images/jack-o-lantern.png"></img>
                 </div>
                <div className="col autoMargin">
                &nbsp;&nbsp;Doing a quick google search, I found this cool vector illustration of a jack o' lantern.
             I chose this as a reference because of it's "blocky" and simplistic design (which will lend itself
             to converting it into ASCII art later!).
                </div>
             </div>
             &nbsp;&nbsp; 
            </p>
            </div>

            <h2>STEP TWO: ILLUSTRATOR!</h2>
            <div className="sectionBg">
            <p className="text-center">
             &nbsp;&nbsp; Next, we open up illustrator to block in our character and workshop a design! Start by setting your image size to
             500x500 pixels. 500px is the minimum width of a chrome window, so using this size this ensures that our
             ASCII art will fit inside of our window!
             <br/><br/>
             <br/>
             <div className="row">
             <div className="col autoMargin">
                &nbsp;&nbsp;Using the Pen and Curvature tool, we can create the main shape of our pumpkin. If you have access to
                a drawing table feel free to use that as an alternative. We want the "outline" or stroke of our pumpkin to be thick
                and black so that it will create contrast in later stages.
                </div>
                 <div className="col">
                    <img className="pumpkin1" src="../../assets/images/pumpkinStep1.png"></img>
                 </div>
             </div>
             <br/><br/>
             &nbsp;&nbsp; The inner color will be orange, BUT our final ASCII art will always be monochromatic.
             The key to achieving good contrast that will track in the final render is to use different values
             (values is art terminology for the "lightness" or "darkness" of a color). REMEMBER:
             <br/><br/>
             <span className="text-center">
                 <u>
                 THE DARKER THE COLOR IS AND THE CLOSER IT GETS TO BLACK , THE MORE IT WILL SHOW.
                 <br/>
                 THE LIGHTER THE COLOR IS AND THE CLOSER IT GETS TO WHITE, IT WILL BE LESS VISIBLE.
                 <br/>
                 PURE WHITE WILL BE TRANSPARENT!
                 </u>
             </span>
             <br/><br/>
             &nbsp;&nbsp; On separate layers, we will now add the facial features of the pumpkin. It's important at
             this step to note that we want to keep our shapes large and simple. When we transform this image into
             text, fine details are likely going to be lost. I will explain the reasons behind the
             "lossy" conversion later on in the guide.
             <br/><br/>
             <div className="row">
             <div className="col">
                    <img className="pumpkin1" src="../../assets/images/pumpkinStep2Part2.gif"></img>
                 </div>
             <div className="col autoMargin">
                &nbsp;&nbsp;As you can see, the darker recesses of the eyes and nose are darker orange.
                This is going to create the illusion of depth in the face. Parts that we want to be
                transparent in the final render are colored white. 
                </div>
             </div>
             <br/><br/>
             <h5>When you're finished with your design, export each layer as a png. This step will help
                 when adding shading and upping our contrast in step 3.
             </h5>
            </p>
            </div>


            <h2>STEP THREE: PHOTOSHOP!</h2>
            <div className="sectionBg">
            <p className="text-center">
             &nbsp;&nbsp; In this step, we'll be adding shading to our character to improve contrast!
             Create a new 500x500 pixel Photoshop document. Then import each of the png files
             you exported as individual layers. Center align the base shape of the head, and then arrange the other
             shapes to your liking. Now we have control over each indiviual shape! For this character, I'm only going
             to add shading to the base shape.
             <br/><br/>
             <br/>
             <div className="row">
                 <div className="col">
                    <img className="pumpkinFinal" src="../../assets/images/pumpkinFinal.png"></img>
                 </div>
                <div className="col autoMargin">
                &nbsp;&nbsp;As you can see, the shading is very minimal and slighty hints at light and shadow. The darker in value
                and hue the shading is, the more pronounced it will end up looking on the character. Select the head layer of the pumpking.
                </div>
                </div>
                &nbsp;&nbsp;Using the Magic Wand tool (W on windows), click the inner orange color of the head. Copy the selection, and paste it into
                a new layer above the base. Select the new layer you created, and in the lock options of the layer panel, click the paint brush icon
                (Lock Image Pixels). You can now draw on the color layer without affecting your base shape! Using some custom brushes
                I have made up, I hint at some of the shapes on the reference image. This will help to sell the illusion of depth.
                <br/><br/>
                <h4>Once you're finished, add a solid white layer at the very bottom of your layers panel. We can now export the image
                    and begin to convert it to ASCII ART!
                </h4>
             &nbsp;&nbsp; 
            </p>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default Design;