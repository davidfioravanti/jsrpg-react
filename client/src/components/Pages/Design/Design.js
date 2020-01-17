import React from 'react'
import Navigation from "./../../Main/Navigation/Navigation"
import Footer from "./../../Main/Footer/Footer"
import "./Design.css"

class Design extends React.Component {
  render() {
    return (
      <div id="designWrapper">
        <Navigation />
        <div className="container text-center">
          <h1>THE DESIGN</h1>
          <p> At it's core, JSRPG's charm comes down to it's clever design. The game in it's entirety DOES NOT feature a single
              image. "How is that possible? There are definitely images in the game..." you might ask. Nope, the "images"
              are all text in the form of ASCII Art! In the video below, you'll get a glimpse at the process behind creating
              this art and how it factors into the gameplay! For those who like to read, you can follow along with the written
              article below!
            </p>
          <br/><br/>
          <button className="btn btn-success" type="button" data-toggle="collapse" data-target="#designArticle" aria-expanded="false" aria-controls="blog1">
            CLICK TO READ THE FULL ARTICLE!
          </button>
          <div id="designArticle" className="collapse">
            <br/><br/>
            <h2>STEP ONE: GET INSPIRED!</h2>
            <div className="sectionBg">
              <p className="text-center">
                &nbsp;&nbsp; The first step to creating any art is to gather good reference materials!
                Let's use the PUMPKIN KING (known as PUMPKING) as our example...
             <br /><br />
                <br />
                <div className="row">
                  <div className="col">
                    <img className="jackOLantern" src="../../assets/images/jack-o-lantern.png" alt=""></img>
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
                &nbsp;&nbsp; Next, we open up illustrator to block in our character and workshop a design! We begin by setting our image size to
                500x500 pixels. 500px is the minimum width of a chrome window, so using this size this ensures that our
                ASCII art will fit inside of our window!
             <br /><br />
                <br />
                <div className="row">
                  <div className="col autoMargin">
                    &nbsp;&nbsp;Using the Pen and Curvature tool, we can create the main shape of our pumpkin.
                    We want the "outline" or stroke of our pumpkin to be thick
                    and black so that it will create contrast in later stages.
                </div>
                  <div className="col">
                    <img className="pumpkin1" src="../../assets/images/pumpkinStep1.png" alt=""></img>
                  </div>
                </div>
                <br /><br />
                &nbsp;&nbsp; The inner color will be orange, BUT our final ASCII art will always be monochromatic.
                The key to achieving good contrast that will track in the final render is to use different values
                (values is art terminology for the "lightness" or "darkness" of a color). REMEMBER:
             <br /><br />
                <span className="text-center">
                  <u>
                    THE DARKER THE COLOR IS AND THE CLOSER IT GETS TO BLACK , THE MORE IT WILL SHOW.
                 <br />
                    THE LIGHTER THE COLOR IS AND THE CLOSER IT GETS TO WHITE, IT WILL BE LESS VISIBLE.
                 <br />
                    PURE WHITE WILL BE TRANSPARENT!
                 </u>
                </span>
                <br /><br />
                &nbsp;&nbsp; On separate layers, we now add the facial features of the pumpkin. It's important at
                this step to keep our shapes large and simple. When we transform this image into
                text, fine details are likely going to be lost. I will explain the reasons behind the
                "lossy" conversion later on in the guide.
             <br /><br />
                <div className="row">
                  <div className="col">
                    <img className="pumpkin1" src="../../assets/images/pumpkinStep2Part2.gif" alt=""></img>
                  </div>
                  <div className="col autoMargin">
                    &nbsp;&nbsp;As you can see, the darker recesses of the eyes and nose are darker orange.
                    This is going to create the illusion of depth in the face. Parts that we want to be
                    transparent in the final render are colored white.
                </div>
                </div>
                <br /><br />
                <h5>When we're finished with the design, we export each layer as a png. This step will help
                    when adding shading and upping our contrast in step 3.
             </h5>
              </p>
            </div>


            <h2>STEP THREE: PHOTOSHOP!</h2>
            <div className="sectionBg">
              <p className="text-center">
                &nbsp;&nbsp; In this step, we add shading to the character to improve contrast!
                We create a new 500x500 pixel Photoshop document, then import each of the png files
                exported as individual layers. Next, we center align the base shape of the head and then arrange the other
                shapes to personal preference. Now it's easier to have control over each indiviual shape! For this character, I'm only going
                to add shading to the base shape.
             <br /><br />
                <br />
                <div className="row">
                  <div className="col autoMargin">
                    &nbsp;&nbsp;As you can see, the shading is very minimal and slighty hints at light and shadow. The darker in value
                    and hue the shading is, the more pronounced it will end up looking on the character. We then select the head layer of the pumpking.
                </div>
                  <div className="col">
                    <img className="pumpkinFinal" src="../../assets/images/pumpkinFinal.png" alt=""></img>
                  </div>
                </div>
                <br />
                &nbsp;&nbsp;Using the Magic Wand tool (W on windows), click the inner orange color of the head. Copy the selection, and paste it into
                a new layer above the base. Select the new layer we've created, and in the lock options of the layer panel, click the paint brush icon
                (Lock Image Pixels). This allows us to draw on the color layer without affecting the base shape! Using some custom brushes
                , I hint at some of the shapes on the reference image. This will help to sell the illusion of depth.
                <br /><br />
                <h4>Once finished, we add a solid white layer at the very bottom of the layers panel. The image is now ready to export
                    and begin to convert it to ASCII ART!
                </h4>
                &nbsp;&nbsp;
            </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Design;