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

var wellSound = new Audio("../audio/well.wav");
wellSound.volume = 0;
wellSound.play();
$(wellSound).animate({volume: musicVolume
  }, 1000, function() {
  });

var wellWasUsed = localStorage.getItem("wellWasUsed");

if (wellWasUsed === "true") {
    $("#introText").empty();
    $("#introText").html("<i>YOU'VE ALREADY USED THE WELL!</i><br><br>" +
        "<button class=' col-12 btn btn-success continueButton' type='button'>DELVE DEEPER INTO THE DUNGEON</button>");
    $(".buttonsDiv").empty();
}
else {
    localStorage.setItem("wellWasUsed", "false")
}

$("#bodyWrapper").fadeIn(1000);
$("#introText").fadeIn(2000);
setTimeout(() => {
    $(".buttonsDiv").fadeIn(2000);
}, 2000);

$("#dropButton").on("click", dropBucket = function () {
    localStorage.setItem("wellWasUsed", true);
    $(".buttonsDiv").fadeOut(800);
    $("#introText").fadeOut(2000);
    setTimeout(() => {
        $(".bucketFrame1").addClass("bucketDrop");
    }, 2000);
    setTimeout(() => {
        $(".bucketFrame1").addClass("bucketPull");
    }, 4000);
    setTimeout(() => {
        $("#continueDiv").fadeIn();
        $("#buttonsDiv");
        let eventsList = [1, 2];
        let randomEvent = eventsList[Math.floor(Math.random() * eventsList.length)];

        switch (randomEvent) {
            case 1:
                rewardGold(20);
                break;
            case 2:
                const amountHealed = Math.floor(Math.random() * 50) + 1;
                healCharacter(amountHealed)
        }
    }, 6000);
    setTimeout(() => {
    }, 7000);

})

function rewardGold(multiplier) {
    const goldEarned = Math.floor(Math.random() * multiplier) + 1;
    console.log("GOLD EARNED: " + goldEarned);
    let playerGold = parseInt(localStorage.getItem("playerGold"));
    console.log("PLAYER GOLD (BEFORE): " + playerGold)
    let newGold = playerGold += goldEarned;
    console.log("PLAYER GOLD (AFTER): " + newGold)
    localStorage.setItem("playerGold", newGold);
    $("#goldLooted").text(goldEarned);
    setTimeout(() => {
        $("#continueButtonDiv").fadeIn();
    }, 1000);
    if (autoplayEnabled === "true") {
        setTimeout(() => {
            exitEncounter();
        }, 3500);
    }
}

function healCharacter(amountHealed) {
    var currentPlayerHealth = parseInt(localStorage.getItem("currentPlayerHealth"));
    let newCurrentHealth = currentPlayerHealth + amountHealed;
    $("#introText").empty();
    $("#goldScreen").hide();
    if (newCurrentHealth < 100) {
        $("#introText").html("YOU DRINK FROM THE WELL WATER RESTORING <br><span id='amountHealed'>" +
            amountHealed + "</span> HEALTH! <br>");
        localStorage.setItem("currentPlayerHealth", newCurrentHealth);
    }
    else {
        $("#introText").html("YOU ATTEMPT TO DRINK THE WELL WATER, BUT IT SEEMS TO HAVE NO EFFECT!");
        localStorage.setItem("currentPlayerHealth", 100);
    }
    $("#introText").fadeIn();
    setTimeout(() => {
        $("#continueButtonDiv").fadeIn();
    }, 1000);
    if (autoplayEnabled === "true") {
        setTimeout(() => {
            exitEncounter();
        }, 3500);
    }
}

$(".continueButton").on("click", exitEncounter = function () {
    localStorage.setItem("wellWasUsed", "false");
    // const srcArray = ["hellbat.html", "beartrap.html", "riddle.html", "skeleton.html"];
    // let randomSrc = srcArray[Math.floor(Math.random() * srcArray.length)];
    window.location.href = "../html/traverse.html";
});

// ======================================================================================
// =========================== AUTOPLAY (SHOP HEALING) ==================================
// ======================================================================================

let autoplayEnabled = localStorage.getItem("autoplay");
setTimeout(() => {
    if (autoplayEnabled === "true") {
        autoplay();
    }
}, 3000);

function autoplay() {
    dropBucket();
} 

// ======================================================================================
// ======================================================================================
// ======================================================================================