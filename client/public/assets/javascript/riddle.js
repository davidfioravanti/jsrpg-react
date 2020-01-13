// PREVENTS THE USER FROM USING THE BACK BUTTON IN BROWSER!
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

let musicVolume = localStorage.getItem("musicVolume");
if (musicVolume === null) {
    musicVolume = 1;
    localStorage.setItem("musicVolume", musicVolume);
}
let sfxVolume = localStorage.getItem("sfxVolume");
if (sfxVolume === null) {
    sfxVolume = 1;
    localStorage.setItem("sfxVolume", sfxVolume);
}

var riddleSound = new Audio("../audio/riddle.wav");
riddleSound.volume = 0;
riddleSound.play();
$(riddleSound).animate({volume: musicVolume
  }, 1000, function() {
  });
$("#bodyWrapper").fadeIn(1000);

var words = ["fate", "hope", "zero", "lost", "mask", "half"]
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

switch (randomWord) {
  case ("fate"):
    $("#riddle").html("Only the brave dare to tempt me." +
      "<br> All men eventually meet me, but only once." +
      "<br> Those who think they can escape my hands,<br>get caught by them in the end." +
      "<h2>WHAT AM I?</h2>");
    $("#riddle").fadeIn(2000);
    break;
  case ("hope"):
    $("#riddle").html("Abandon me, all ye who enter here." +
      "<br>A virtue among honesty, loyalty and others." +
      "<br>Faith's equal, and equally abstract." +
      "<h2>WHAT AM I?</h2>");
    $("#riddle").fadeIn(2000);
    break;
  case ("zero"):
    $("#riddle").html("An alias of false, I stand for nothing." +
      "<br>Anything left is negativity." +
      "<br>Anything right is left's inverse." +
      "<h2>WHAT AM I?</h2>");
    $("#riddle").fadeIn(2000);
    break;
  case ("lost"):
    $("#riddle").html("Not quite where you set off to go," +
      "<br>I am there, elsewhere unknown." +
      "<br>A friend of that which is forgotten, all alone, or is misplaced." +
      "<h2>WHAT AM I?</h2>");
    $("#riddle").fadeIn(2000);
    break;
  case ("mask"):
    $("#riddle").html("Donning my visage absolves you of yours." +
      "<br>I aim to obscure, through hidden expression," +
      "<br>your darkest of deeds and evil transgressions." +
      "<h2>WHAT AM I?</h2>");
    $("#riddle").fadeIn(2000);
    break;
    case ("half"):
      $("#riddle").html("<u>A</u> missing piece will make me whole." +
        "<br>A twin that's equal to it's other," +
        "<br>having neither a sister, nor a brother." +
        "<h2>WHAT AM I?</h2>");
      $("#riddle").fadeIn(2000);
      break;
}

// ======================================================================================
// =========================== AUTOPLAY (SHOP HEALING) ==================================
// ======================================================================================

let autoplayEnabled = localStorage.getItem("autoplay");
setTimeout(() => {
    if (autoplayEnabled === "true") {
        autoplay(randomWord);
    }
}, 3000);

function autoplay(randomWord) {
    solveRiddle(randomWord);
} 


function solveRiddle(randomWord) {
  console.log(randomWord)
  if (randomWord === "fate") {
    let first = ".f";
    let second = ".a";
    let third = ".t";
    let fourth = ".e";
    moveLetters(first, second, third, fourth);
  }
  else if (randomWord === "half") {
    let first = ".h";
    let second = ".a";
    let third = ".l";
    let fourth = ".f";
    moveLetters(first, second, third, fourth);
  }
  else if (randomWord === "hope") {
    let first = ".h";
    let second = ".o";
    let third = ".p";
    let fourth = ".e";
    moveLetters(first, second, third, fourth);
  }
  else if (randomWord === "lost") {
    let first = ".l";
    let second = ".o";
    let third = ".s";
    let fourth = ".t";
    moveLetters(first, second, third, fourth);
  }
  else if (randomWord === "mask") {
    let first = ".m";
    let second = ".a";
    let third = ".s";
    let fourth = ".k";
    moveLetters(first, second, third, fourth);
  }
  else if (randomWord === "zero") {
    let first = ".z";
    let second = ".e";
    let third = ".r";
    let fourth = ".o";
    moveLetters(first, second, third, fourth);
  }
  function moveLetters(first, second, third, fourth) {
    setTimeout(() => {
      $(first).addClass("letter1");
      $(first).animate({
        top: "50px",
        left: "70px",
      })
    }, 2000);
    setTimeout(() => {
      $(second).addClass("letter2");
      $(second).animate({
        top: "50px",
        left: "170px",
      })
    }, 4000);
    setTimeout(() => {
      $(third).addClass("letter3");
      $(third).animate({
        top: "50px",
        left: "270px",
      })
    }, 6000);
    setTimeout(() => {
      $(fourth).addClass("letter4");
      $(fourth).animate({
        top: "50px",
        left: "370px",
      })
    }, 8000);
    setTimeout(() => {
      $(first).removeClass("letter1");
      $(second).removeClass("letter2");
      $(third).removeClass("letter3");
      $(fourth).removeClass("letter4");
      checkSoultion();
    }, 10000);
  }
}
// ======================================================================================
// ======================================================================================
// ======================================================================================


setTimeout(() => {
  $(".letter").css("opacity", "1");
}, 3000);

$(".draggable").draggable({
  snap: ".boxZone",
  snapMode: "inner",
  disabled: false,
  scroll: false,
  opacity: .6,
  // grid: [50, 20],
  containment: "parent",
});
$(".draggable").draggable({
  drag: function (event, ui) {

    // Keep the left edge of the element
    // at least 100 pixels from the container
    ui.position.left = Math.min(500, ui.position.left);
  }
});

$(".letter").on("drag", function () {
  var left = $(this).css("left");
  $(this).css("left", left);
  $(this).css("animation-play-state", "paused");
  $(this).removeClass("floating");
  $(this).css("animation", "none");
})


$("#continueButton").on("click", exitEncounter = function() {
  // const srcArray = ["hellbat.html", "well.html", "skeleton.html", "shop.html", "beartrap.html"];
  // let randomSrc = srcArray[Math.floor(Math.random() * srcArray.length)];
  window.location.href = "../html/traverse.html";
});


$("#checkSolution").on("click", checkSoultion = function () {

  let coords = {
    aOffset: $(".a").offset(),
    bOffset: $(".b").offset(),
    cOffset: $(".c").offset(),
    dOffset: $(".d").offset(),
    eOffset: $(".e").offset(),
    fOffset: $(".f").offset(),
    gOffset: $(".g").offset(),
    hOffset: $(".h").offset(),
    iOffset: $(".i").offset(),
    jOffset: $(".j").offset(),
    kOffset: $(".k").offset(),
    lOffset: $(".l").offset(),
    mOffset: $(".m").offset(),
    nOffset: $(".n").offset(),
    oOffset: $(".o").offset(),
    pOffset: $(".p").offset(),
    qOffset: $(".q").offset(),
    rOffset: $(".r").offset(),
    sOffset: $(".s").offset(),
    tOffset: $(".t").offset(),
    uOffset: $(".u").offset(),
    vOffset: $(".v").offset(),
    wOffset: $(".w").offset(),
    xOffset: $(".x").offset(),
    yOffset: $(".y").offset(),
    zOffset: $(".z").offset(),
  }
  if (randomWord === "fate") {
    if (coords.fOffset.left === 70 && coords.fOffset.top === 50 &&
      coords.aOffset.left === 170 && coords.aOffset.top === 50 &&
      coords.tOffset.left === 270 && coords.tOffset.top === 50 &&
      coords.eOffset.left === 370 && coords.eOffset.top === 50) {
      $(".letter").fadeOut()
      setTimeout(() => {
        $(".f").show();
        $(".f").addClass("riddleGlow");
      }, 1000);
      setTimeout(() => {
        $(".a").show();
        $(".a").addClass("riddleGlow");
      }, 1100);
      setTimeout(() => {
        $(".t").show();
        $(".t").addClass("riddleGlow");
      }, 1200);
      setTimeout(() => {
        $(".e").show();
        $(".e").addClass("riddleGlow");
      }, 1300);
      setTimeout(() => {
        continueScreen()
      }, 2000);
    }
  }
  else if (randomWord === "hope") {
    if (coords.hOffset.left === 70 && coords.hOffset.top === 50 &&
      coords.oOffset.left === 170 && coords.oOffset.top === 50 &&
      coords.pOffset.left === 270 && coords.pOffset.top === 50 &&
      coords.eOffset.left === 370 && coords.eOffset.top === 50) {
      $(".letter").fadeOut()
      setTimeout(() => {
        $(".h").show();
        $(".h").addClass("riddleGlow");
      }, 1000);
      setTimeout(() => {
        $(".o").show();
        $(".o").addClass("riddleGlow");
      }, 1100);
      setTimeout(() => {
        $(".p").show();
        $(".p").addClass("riddleGlow");
      }, 1200);
      setTimeout(() => {
        $(".e").show();
        $(".e").addClass("riddleGlow");
      }, 1300);
      setTimeout(() => {
        continueScreen()
      }, 2000);
    }
  }
  else if (randomWord === "zero") {
    if (coords.zOffset.left === 70 && coords.zOffset.top === 50 &&
      coords.eOffset.left === 170 && coords.eOffset.top === 50 &&
      coords.rOffset.left === 270 && coords.rOffset.top === 50 &&
      coords.oOffset.left === 370 && coords.oOffset.top === 50) {
      $(".letter").fadeOut()
      setTimeout(() => {
        $(".z").show()
        $(".z").addClass("riddleGlow");
      }, 1000);
      setTimeout(() => {
        $(".e").show()
        $(".e").addClass("riddleGlow");
      }, 1100);
      setTimeout(() => {
        $(".r").show()
        $(".r").addClass("riddleGlow");
      }, 1200);
      setTimeout(() => {
        $(".o").show()
        $(".o").addClass("riddleGlow");
      }, 1300);
      setTimeout(() => {
        continueScreen()
      }, 2000);
    }
  }
  else if (randomWord === "lost") {
    if (coords.lOffset.left === 70 && coords.lOffset.top === 50 &&
      coords.oOffset.left === 170 && coords.oOffset.top === 50 &&
      coords.sOffset.left === 270 && coords.sOffset.top === 50 &&
      coords.tOffset.left === 370 && coords.tOffset.top === 50) {
      $(".letter").fadeOut()
      setTimeout(() => {
        $(".l").show()
        $(".l").addClass("riddleGlow");
      }, 1000);
      setTimeout(() => {
        $(".o").show()
        $(".o").addClass("riddleGlow");
      }, 1100);
      setTimeout(() => {
        $(".s").show()
        $(".s").addClass("riddleGlow");
      }, 1200);
      setTimeout(() => {
        $(".t").show()
        $(".t").addClass("riddleGlow");
      }, 1300);
      setTimeout(() => {
        continueScreen()
      }, 2000);
    }
  }
  else if (randomWord === "mask") {
    if (coords.mOffset.left === 70 && coords.mOffset.top === 50 &&
      coords.aOffset.left === 170 && coords.aOffset.top === 50 &&
      coords.sOffset.left === 270 && coords.sOffset.top === 50 &&
      coords.kOffset.left === 370 && coords.kOffset.top === 50) {
      $(".letter").fadeOut()
      setTimeout(() => {
        $(".m").show()
        $(".m").addClass("riddleGlow");
      }, 1000);
      setTimeout(() => {
        $(".a").show()
        $(".a").addClass("riddleGlow");
      }, 1100);
      setTimeout(() => {
        $(".s").show()
        $(".s").addClass("riddleGlow");
      }, 1200);
      setTimeout(() => {
        $(".k").show()
        $(".k").addClass("riddleGlow");
      }, 1300);
      setTimeout(() => {
        continueScreen()
      }, 2000);
    }
  }
  else if (randomWord === "half") {
    if (coords.hOffset.left === 70 && coords.hOffset.top === 50 &&
      coords.aOffset.left === 170 && coords.aOffset.top === 50 &&
      coords.lOffset.left === 270 && coords.lOffset.top === 50 &&
      coords.fOffset.left === 370 && coords.fOffset.top === 50) {
      $(".letter").fadeOut()
      setTimeout(() => {
        $(".h").show()
        $(".h").addClass("riddleGlow");
      }, 1000);
      setTimeout(() => {
        $(".a").show()
        $(".a").addClass("riddleGlow");
      }, 1100);
      setTimeout(() => {
        $(".l").show()
        $(".l").addClass("riddleGlow");
      }, 1200);
      setTimeout(() => {
        $(".f").show()
        $(".f").addClass("riddleGlow");
      }, 1300);
      setTimeout(() => {
        continueScreen()
      }, 2000);
    }
  }
})

$(document).on("keydown", function(e) {
  if (e.which === 192) {
    $("#riddle").empty().html("<h1>CHEAT USED</h1>");
    $(".letter").fadeOut();
    continueScreen();
  }
})

function rewardGold() {
  const goldEarned = Math.floor(Math.random() * 100) + 1;
      console.log("GOLD EARNED: " + goldEarned);
      let playerGold = parseInt(localStorage.getItem("playerGold"));
      console.log("PLAYER GOLD (BEFORE): " + playerGold)
      let newGold = playerGold += goldEarned;
      console.log("PLAYER GOLD (AFTER): " + newGold)
      localStorage.setItem("playerGold", newGold);
}

function continueScreen() {
  rewardGold();
  setTimeout(() => {
    $("#continueButton").fadeIn();
  }, 2000);
  let autoplayEnabled = localStorage.getItem("autoplay");
setTimeout(() => {
    if (autoplayEnabled === "true") {
        exitEncounter();
    }
}, 3000);

}