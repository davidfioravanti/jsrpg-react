

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
let autoplayEnabled = localStorage.getItem("autoplay");

var tutorialSound = new Audio("assets/audio/tutorial.wav");
tutorialSound.volume = 0;
tutorialSound.play();
$(tutorialSound).animate({volume: musicVolume
  }, 1000, function() {
  });

  var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

document.dispatchEvent(clickEvent);
const preDefTimeout = 100;

$("#bodyWrapper").fadeIn(2000);
line1();
setTimeout(() => {
    line2();
}, 5500);
setTimeout(() => {
    $("#letterWrapper").fadeIn();
    line3();
}, 10000);
setTimeout(() => {
    $("#letterWrapper").css("bottom", "-280px");
    line4();
}, 15500);
setTimeout(() => {
    $(".HUD").fadeIn();
    $("#inst1").fadeIn();
}, 21000);
setTimeout(() => {$("#inst1").fadeOut();}, 23000);
setTimeout(() => {$("#inst2").fadeIn();}, 24000);
setTimeout(() => {$("#inst2").fadeOut();}, 27000);
setTimeout(() => {$("#inst3").fadeIn();}, 28000);
setTimeout(() => {$("#inst3").fadeOut();}, 31000);
setTimeout(() => {$("#inst4").fadeIn();}, 32000);
setTimeout(() => {$("#inst4").fadeOut();}, 35000);
setTimeout(() => {$("#inst5").fadeIn();}, 36000);
setTimeout(() => {$("#inst5").fadeOut();}, 39000);
setTimeout(() => {
    $(".compassText").fadeIn();
    $(".HUD").fadeOut();
    $("#inst6").fadeIn(500);
}, 40000);
setTimeout(() => {$("#inst6").fadeOut();}, 42000);
setTimeout(() => {$("#inst7").fadeIn();}, 43000);
setTimeout(() => {
    $("#inst7").fadeOut();
    $(".compassText").fadeOut();
}, 46000);
setTimeout(() => {
    $("#eyeballDiv").fadeIn();
}, 47000);
setTimeout(() => {
var hellbatSound = new Audio("assets/audio/hellbatCrySound.wav");
hellbatSound.volume = sfxVolume;
hellbatSound.play();
}, 47500);
setTimeout(() => {
    $("#bodyWrapper").fadeOut();
    $("#eyeballDiv").fadeOut();
}, 48500);
setTimeout(() => {
    window.location.href = "tutorialFight.html"
}, 49000);

$(document).on("keydown", skipTutorial = function() {
    $(tutorialSound).animate({volume: 0
    }, 3000, function() {
    });
        $("#bodyWrapper").fadeOut(2000);
        setTimeout(() => {
            window.location.href = "traverse.html";
        }, 4000);
})

let skipTutorialEnabled = localStorage.getItem("skipIntro");
console.log(skipTutorialEnabled)
if (skipTutorialEnabled == "true") {
    skipTutorial();
}

// ==========================================================
// ================== ANIMATION FUNCTIONS ===================
// ==========================================================

function line1() {
    $("#w1").addClass("fadeIn");
    setTimeout(() => {$("#w2").addClass("fadeIn");}, preDefTimeout * 1);
    setTimeout(() => {$("#w3").addClass("fadeIn");}, preDefTimeout * 2);
    setTimeout(() => {$("#w4").addClass("fadeIn");}, preDefTimeout * 3);
    setTimeout(() => {$("#w5").addClass("fadeIn");}, preDefTimeout * 4);
    setTimeout(() => {$("#w6").addClass("fadeIn");}, preDefTimeout * 5);
    setTimeout(() => {$("#w7").addClass("fadeIn");}, preDefTimeout * 6);
    setTimeout(() => {$("#w8").addClass("fadeIn");}, preDefTimeout * 7);
    setTimeout(() => {$("#w9").addClass("fadeIn");}, preDefTimeout * 8);
    setTimeout(() => {$("#w10").addClass("fadeIn");}, preDefTimeout * 9);
    setTimeout(() => {$("#w11").addClass("fadeIn");}, preDefTimeout * 10);
    setTimeout(() => {$("#w12").addClass("fadeIn");}, preDefTimeout * 11);
    setTimeout(() => {$("#w13").addClass("fadeIn");}, preDefTimeout * 12);
    setTimeout(() => {$("#w14").addClass("fadeIn");}, preDefTimeout * 13);
    setTimeout(() => {
        $("#l1").fadeOut(2000);
    }, 5000);
    }

    function line2() {
        setTimeout(() => {$("#w15").addClass("fadeIn");}, preDefTimeout * 1);
        setTimeout(() => {$("#w16").addClass("fadeIn");}, preDefTimeout * 2);
        setTimeout(() => {$("#w17").addClass("fadeIn");}, preDefTimeout * 3);
        setTimeout(() => {$("#w18").addClass("fadeIn");}, preDefTimeout * 4);
        setTimeout(() => {$("#w19").addClass("fadeIn");}, preDefTimeout * 5);
        setTimeout(() => {$("#w20").addClass("fadeIn");}, preDefTimeout * 6);
        setTimeout(() => {$("#w21").addClass("fadeIn");}, preDefTimeout * 7);
        setTimeout(() => {$("#w22").addClass("fadeIn");}, preDefTimeout * 8);
        setTimeout(() => {$("#w23").addClass("fadeIn");}, preDefTimeout * 9);
        setTimeout(() => {$("#w24").addClass("fadeIn");}, preDefTimeout * 10);
        setTimeout(() => {$("#w25").addClass("fadeIn");}, preDefTimeout * 11);
        setTimeout(() => {
            $("#l2").fadeOut(2000);
        }, 4000);
    }
    function line3() {
        setTimeout(() => {$("#w26").addClass("fadeIn");}, preDefTimeout * 1);
        setTimeout(() => {$("#w27").addClass("fadeIn");}, preDefTimeout * 2);
        setTimeout(() => {$("#w28").addClass("fadeIn");}, preDefTimeout * 3);
        setTimeout(() => {$("#w29").addClass("fadeIn");}, preDefTimeout * 4);
        setTimeout(() => {$("#w30").addClass("fadeIn");}, preDefTimeout * 5);
        setTimeout(() => {$("#w31").addClass("fadeIn");}, preDefTimeout * 6);
        setTimeout(() => {$("#w32").addClass("fadeIn");}, preDefTimeout * 7);
        setTimeout(() => {$("#w33").addClass("fadeIn");}, preDefTimeout * 8);
        setTimeout(() => {$("#w34").addClass("fadeIn");}, preDefTimeout * 9);
        setTimeout(() => {$("#w35").addClass("fadeIn");}, preDefTimeout * 10);
        setTimeout(() => {$("#w36").addClass("fadeIn");}, preDefTimeout * 11);
        setTimeout(() => {$("#w37").addClass("fadeIn");}, preDefTimeout * 12);
        setTimeout(() => {$("#w38").addClass("fadeIn");}, preDefTimeout * 13);
        setTimeout(() => {
            $("#l3").fadeOut(2000);
        }, 5000);
    }
    function line4() {
        setTimeout(() => {$("#w39").addClass("fadeIn");}, preDefTimeout * 1);
        setTimeout(() => {$("#w40").addClass("fadeIn");}, preDefTimeout * 2);
        setTimeout(() => {$("#w41").addClass("fadeIn");}, preDefTimeout * 3);
        setTimeout(() => {$("#w42").addClass("fadeIn");}, preDefTimeout * 4);
        setTimeout(() => {$("#w43").addClass("fadeIn");}, preDefTimeout * 5);
        setTimeout(() => {$("#w44").addClass("fadeIn");}, preDefTimeout * 6);
        setTimeout(() => {$("#w45").addClass("fadeIn");}, preDefTimeout * 7);
        setTimeout(() => {$("#w46").addClass("fadeIn");}, preDefTimeout * 8);
        setTimeout(() => {$("#w47").addClass("fadeIn");}, preDefTimeout * 9);
        setTimeout(() => {$("#w48").addClass("fadeIn");}, preDefTimeout * 10);
        setTimeout(() => {
            $("#l4").fadeOut(2000);
        }, 4000);
    }