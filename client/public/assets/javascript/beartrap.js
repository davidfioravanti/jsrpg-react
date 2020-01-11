// PREVENTS THE USER FROM USING THE BACK BUTTON IN BROWSER!
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

$(document).ready(function () {
    $("#bodyWrapper").fadeIn(1000);
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
    
    const boneBreakSound = new Audio("assets/audio/boneBreak.wav");
    boneBreakSound.volume = sfxVolume /2;
    const trapDisarmSound = new Audio("assets/audio/gore.wav");
    trapDisarmSound.volume = sfxVolume /2;
    var beartrapSound = new Audio("assets/audio/beartrap.wav");
    beartrapSound.volume = 0;
    beartrapSound.play();
    $(beartrapSound).animate({volume: musicVolume
      }, 1000, function() {
      });


    var playerDex = 2;
    var playerInt = 2;
    var trapNum = 1;
    const preDefTimeout = 1000;
    var currentPlayerHealth = localStorage.getItem("currentPlayerHealth");
    if (currentPlayerHealth === null) {
        currentPlayerHealth = 100;
        localStorage.setItem("currentPlayerHealth", currentPlayerHealth);
    }
    $("#currentPlayerHealth").text(currentPlayerHealth);
    $("#healthPoints").attr("style", "width: " + currentPlayerHealth + "%;");

    // Determine the min vals to pass...
    
    const dexThresh = Math.floor(Math.random() * (11 - 3 + 1)) + 3;
    $("#dexMin").html("<span class='attrNum'>" + dexThresh + "</span>");
    const intThresh = Math.floor(Math.random() * (13 - 5 + 1)) + 5;
    $("#intMin").html("<span class='attrNum'>" + intThresh + "</span>");
    const trapDamage = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
    $("#trapDamage").html("<span class='attrNum'>" + trapDamage + "</span>");


    $("button").attr("disabled", "true");
    $("#warningText").fadeIn(3000);
    setTimeout(() => {
        $("#warningText2").fadeIn(2000);
    }, preDefTimeout);
    setTimeout(() => {
        $("#dexButton").fadeIn(1500);
        $("#intButton").fadeIn(1500);
    }, preDefTimeout * 1.5);
    setTimeout(() => {
        $("button").removeAttr("disabled");
    }, preDefTimeout * 3);


    $("#dexButton").on("click", dexCheck = function() {
        rollDex();
        var dexRoll = sessionStorage.getItem("rollDex");
        var dexRollInt = parseInt(dexRoll);
        if ($("#warningText").text() !="") {
            $("#warningText").empty();
        }
        $("#warningText2").text("YOU ROLLED: " + dexRollInt + " (DEX)");
        if (dexRollInt >= dexThresh) {
            trapDisarmSound.play();
            $("#bearTrap" + trapNum).fadeOut(1000);
            $("#warningText").css("marginLeft", "125px");
            $("#warningText2").css("marginLeft", "0px");
            $("#warningText").text("TRAP CLEARED!");
            trapNum++;
        }
        else {
            boneBreakSound.play();
            currentPlayerHealth -= trapDamage;
            if (currentPlayerHealth <= 0 ) {
                playerDeath();
            }
            localStorage.setItem("currentPlayerHealth", currentPlayerHealth);
            $("#healthPoints").attr("style", "width: " + currentPlayerHealth + "%;");
            $("#currentPlayerHealth").text(currentPlayerHealth);
            $("#warningText").css("marginLeft", "130px");
            $("#warningText").text("YOU LOST " + trapDamage + " HP!");
        }
        if (trapNum > 3) {
            trapDisarmSound.play();
            $("#dexButton").unbind();
            $("#intButton").unbind();
            $("#dexButton").addClass("disabled");
            $("#intButton").addClass("disabled");
            $("#skull1").fadeOut();
            $("#skull2").fadeOut();
            $("#skull3").fadeOut();
            $("#winText").fadeIn(2000);
        }
    })

    $("#intButton").on("click", intCheck = function() {
        rollInt();
        var intRoll = sessionStorage.getItem("rollInt");
        var intRollInt = parseInt(intRoll);
        if ($("#warningText").text() !="") {
            $("#warningText").empty();
        }
        $("#warningText2").text("YOU ROLLED: " + intRollInt + " (DEX)");
        if (intRollInt >= intThresh) {
            trapDisarmSound.play();
            $("#bearTrap" + trapNum).fadeOut(1000);
            $("#warningText").css("marginLeft", "125px");
            $("#warningText2").css("marginLeft", "0px");
            $("#warningText").text("TRAP CLEARED!");
            trapNum++;
        }
        else {
            boneBreakSound.play();
            currentPlayerHealth -= trapDamage;
            if (currentPlayerHealth <= 0 ) {
                playerDeath();
            }
            localStorage.setItem("currentPlayerHealth", currentPlayerHealth);
            $("#healthPoints").attr("style", "width: " + currentPlayerHealth + "%;");
            $("#currentPlayerHealth").text(currentPlayerHealth);
            $("#warningText").css("marginLeft", "130px");
            $("#warningText").text("YOU LOST " + trapDamage + " HP!");
        }
        if (trapNum > 3) {
            trapDisarmSound.play();
            $("#dexButton").unbind();
            $("#intButton").unbind();
            $("#dexButton").addClass("disabled");
            $("#intButton").addClass("disabled");
            $("#skull1").fadeOut();
            $("#skull2").fadeOut();
            $("#skull3").fadeOut();
            $("#winText").fadeIn(2000);
        }
    })



function rollDex() {
    var min = Math.ceil(playerDex);
    var max = Math.floor(20);
    const calcDex = Math.floor(Math.random() * (max - min + 1)) + min;
    sessionStorage.setItem("rollDex", calcDex); 
}

function rollInt() {
    var min = Math.ceil(playerInt);
    var max = Math.floor(20);
    const calcInt = Math.floor(Math.random() * (max - min + 1)) + min;
    sessionStorage.setItem("rollInt", calcInt); 
}


$(document).on("keydown", function(e) {
    if (e.which === 192) {
        for (i = 0; i < 3; i++) {
            $("#bearTrap" + trapNum).fadeOut(1000);
            trapNum++;
        }
        $("#warningText").hide();
        $("#healthPoints").hide();
        $("#warningText2").html("<h1 style='font-size:80px; margin-left: -80px'>CHEAT USED</h1>")
        $("#dexButton").remove();
        $("#intButton").remove();
        $("h4").remove();``
        $("#skull1").fadeOut();
        $("#skull2").fadeOut();
        $("#skull3").fadeOut();
        $("#winText").fadeIn(2000);
    }
  })

  $("#continueButton").on("click", winGame = function() {
//   const srcArray = ["hellbat.html", "shop.html", "skeleton.html", "well.html", "riddle.html"];
//   let randomSrc = srcArray[Math.floor(Math.random() * srcArray.length)];
  window.location.href = "traverse.html";
})

function playerDeath() {
    localStorage.setItem("deathBy", "a bear trap!");
    var slaySound = new Audio("assets/audio/slay.wav");
    slaySound.volume = sfxVolume;
    slaySound.play();
    $("#bodyWrapper").addClass("shake");
    $("#bodyWrapper").fadeOut(2000);
    setTimeout(() => {
        window.location.href = "deathScreen.html";n
    }, 3000);
}

// ===============================================================================
// ===================== AUTOPLAY LOGIC (ACTION DECIDER) =========================
// ===============================================================================

    //  If autoplay is enabled, the computer will automatically determine the
    // best action for clearing the traps. In 2 second intervals it will
    // attempt to complete the level just as the player would by clicking 
    // various buttons on the screen. If the "player" dies to a trap, it will
    // redirect the game to the gameOver screen accordingly.
 

setTimeout(() => {
    let autoplayEnabled = localStorage.getItem("autoplay");
    let optimalChoice;
        if (dexThresh < intThresh) {
            optimalChoice = "int";
        }
        else if (dexThresh > intThresh && trapNum) {
            optimalChoice = "dex";
        }
        else {
            optimalChoice = "dex";
        }
    
        if (autoplayEnabled === "true") {
            if (optimalChoice === "dex") {
                setInterval(() => {
                    if (trapNum < 4) {
                        dexCheck();
                    }
                    else {
                        setTimeout(() => {
                            winGame();
                        }, 2000);
                    }
                }, 2000);
            }
            else if (optimalChoice === "int") {
                setInterval(() => {
                    if (trapNum < 4) {
                        intCheck();
                    }
                    else {
                        setTimeout(() => {
                            winGame();
                        }, 2000);
                    }
                }, 2000);
            }
            }
    }, 3000);

// ===============================================================================
// ===============================================================================
// ===============================================================================

});