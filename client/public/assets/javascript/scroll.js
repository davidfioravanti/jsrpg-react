// PREVENTS THE USER FROM USING THE BACK BUTTON IN BROWSER!
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

document.dispatchEvent(clickEvent);

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


var musicBoxSound = new Audio("assets/audio/musicBox.wav");
musicBoxSound.volume = 0;
musicBoxSound.play();
$(musicBoxSound).animate({volume: musicVolume
  }, 1000, function() {
  });


$("button").on("mouseover", function () {
    var selectSound = new Audio("assets/audio/select.wav");
    selectSound.volume = .3;
    selectSound.play();
})
$("button").on("click", playerAttack = function () {
    var selectSound = new Audio("assets/audio/click.wav");
    selectSound.volume = .2;
    selectSound.play();
})

// ============================================================================
// ====================== PLAYER VARIABLES (STATUS) ===========================
// ============================================================================

let isPoisoned = localStorage.getItem("isPoisoned");
if (isPoisoned === null || isPoisoned === "null" || isPoisoned === "true") {
    localStorage.setItem("isPoisoned", "false");
}

let isCursed = localStorage.getItem("isCursed");
if (isCursed === null || isCursed === "null" || isCursed === "true") {
    localStorage.setItem("isCursed", "false");
}

let isBurned = localStorage.getItem("isBurned");
if (isBurned === null || isBurned === "null" || isBurned === "true") {
    localStorage.setItem("isBurned", "false");
}

// ============================================================================
// ====================== SCROLL TYPE DECIDER (RNG) ===========================
// ============================================================================
function randomizeScroll(rerollType) {
    var scrollDecider = ["spell", "effect"];
    let randomScroll = scrollDecider[Math.floor(Math.random() *
        scrollDecider.length)];
    console.log(randomScroll);
    if (rerollType === "effect") {
        console.log("ALL SPELLS LEARNED!");
        console.log("REROLLING EFFECT!")
        effectScrollConfig();
    }
    else {
        if (randomScroll === "spell") {
            spellScrollConfig();
        }
        else if (randomScroll === "effect") {
            console.log("effect");
            effectScrollConfig();
        }
        // else if (randomScroll === "reward") {
        //     console.log("reward");
        // }
    }
// ======================================================================================
// =========================== AUTOPLAY (SHOP HEALING) ==================================
// ======================================================================================

let autoplayEnabled = localStorage.getItem("autoplay");
setTimeout(() => {
    if (autoplayEnabled === "true") {
        autoplay();
    }
}, 5000);

function autoplay() {
    if (randomScroll === "effect") {
        decipherEffectScroll();
    }
    else if (randomScroll === "spell") {
        decipherSpellScroll();
    }
} 

// ======================================================================================
// ======================================================================================
// ======================================================================================
}

randomizeScroll();

$(".continueButton").on("click", exitEncounter = function () {
    window.location.href = "traverse.html";
});


// ============================================================================
// ========================== EFFECT SROLL LOGIC ==============================
// ============================================================================

function effectScrollConfig() {
    let effectsArray = ["heal", "curse"];
    var randomEffect = effectsArray[Math.floor(Math.random() * effectsArray.length)];
    console.log(randomEffect);
    var currentEffect;

    if (randomEffect === "heal") {
        const playerCon = parseInt(localStorage.getItem("playerConstitution"));
        const randomHeal = Math.floor(Math.random() * (100 - 10 + playerCon)) + 10;

        console.log("HEAL AMOUNT: " + randomHeal);
        $(".scrollHeader").html("SCROLL OF DIVINE WORD");
        $(".scrollText").html('The gods smile upon you, healing your wounds and curing your ailments.'
        + "<br> you heal <span id='healNum'></span> HP!" + "<br> Any posions, curses, or burns" +
        " you have are removed.");
        startEffectScroll(randomEffect, randomHeal);
    }
    else if (randomEffect === "curse") {
        $("#exitButton").addClass("buttonDisabled");
        $(".scrollHeader").html("<span class='curseIcon'>r</span>");
        $(".scrollText").html("<span class='curseText'>YOU'VE BEEN CURSED!" +
         "<br><span class='curseType'>STR</span><span class='curseValue'>-2</span></span>");
        var cursesArray = ["STR", "DEX", "INT", "WIS", "CHA", "CON"];
        var randomCurse = cursesArray[Math.floor(Math.random() * cursesArray.length)];
        $(".curseType").text(randomCurse);
        var curseValue = -2;
        $(".curseValue").text(curseValue);
        $("#label1").text("RESIST THE CURSE!").addClass("curseLabel");
        $("#decipherTextButton").text("ROLL CONSTITUTION").addClass("curseButton");
        $("#label2").remove();
        $("#exitButton").remove();
        startEffectScroll(randomEffect, curseValue, randomCurse);
    }

    else if (randomEffect === "boss") {
        $(".scrollHeader").html("SCROLL OF POISON CLOUD");
        $(".scrollText").html('You conjure a small cloud of toxic fumes in front of your enemy.' +
            'POSIONS the enemy for 2-5 damage per turn (for a number of turns' +
            'equal to half your intelligence (rounded up))<br> COST: 20 MP');
        currentSpell = "hasPoisonCloud";
        startEffectScroll();
    }

    else if (randomEffect === "buff") {
        $(".scrollHeader").html("&nbsp; SCROLL OF STONESKIN");
        $(".scrollText").html('Your form becomes rock-like and extremely dense,' +
            'REDUCING MELEE DAMAGE TAKEN by a number (equal to half your ' +
            'constitution (rounded up)) for two turns. <br> COST: 15 MP');
        currentSpell = "hasStoneskin";
        startEffectScroll();
    }

    function startEffectScroll(randomEffect, effectValue, curseType) {
        var playerInt = parseInt(localStorage.getItem("playerIntelligence"));
        var intModifier;
        if (playerInt === 0 || playerInt === 1) { intModifier = -5 }
        else if (playerInt === 2 || playerInt === 3) { intModifier = -4 }
        else if (playerInt === 4 || playerInt === 5) { intModifier = -3 }
        else if (playerInt === 6 || playerInt === 7) { intModifier = -2 }
        else if (playerInt === 8 || playerInt === 9) { intModifier = -1 }
        else if (playerInt === 10 || playerInt === 11) { intModifier = 0 }
        else if (playerInt === 12 || playerInt === 13) { intModifier = 1 }
        else if (playerInt === 14 || playerInt === 15) { intModifier = 2 }
        else if (playerInt === 16 || playerInt === 17) { intModifier = 3 }
        else if (playerInt === 18 || playerInt === 19) { intModifier = 4 }
        else if (playerInt >= 20) { intModifier = 5 }
        console.log("INT MODIFIER: " + intModifier);

        if (randomEffect === "curse") {
            var playerCon = parseInt(localStorage.getItem("playerConstitution"));
            var conModifier;
            if (playerCon === 0 || playerCon === 1) { conModifier = -5 }
            else if (playerCon === 2 || playerCon === 3) { conModifier = -4 }
            else if (playerCon === 4 || playerCon === 5) { conModifier = -3 }
            else if (playerCon === 6 || playerCon === 7) { conModifier = -2 }
            else if (playerCon === 8 || playerCon === 9) { conModifier = -1 }
            else if (playerCon === 10 || playerCon === 11) { conModifier = 0 }
            else if (playerCon === 12 || playerCon === 13) { conModifier = 1 }
            else if (playerCon === 14 || playerCon === 15) { conModifier = 2 }
            else if (playerCon === 16 || playerCon === 17) { conModifier = 3 }
            else if (playerCon === 18 || playerCon === 19) { conModifier = 4 }
            else if (playerCon >= 20) { conModifier = 5 }
            console.log("CON MODIFIER: " + conModifier);
        }

        const playerRoll = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
        console.log("PLAYER ROLL: " + playerRoll);

        let effectMax;
            if (randomEffect === "heal") {
                effectMax = 10;
            }
            else if (randomEffect === "curse") {
                effectMax = 12;
            }
            else {
                effectMax = 8;
            }
            console.log("EFFECT MAX: " + effectMax);

        let effectMin;
            if (randomEffect === "heal") {
                effectMin = 7;
            }
            else if (randomEffect === "curse") {
                effectMin = 10;
            }
            else {
                effectMin = 6;
            }
            console.log("EFFECT MIN: " + effectMin);

        const thresh = Math.floor(Math.random() * (effectMax - effectMin + 1)) + effectMin;
        console.log("THRESHOLD: " + thresh);

        $("#intThresh").text(thresh);
        if (randomEffect === "curse") {
            $("#intLabel").html("<span id='curseType'></span> MIN: <span id='intThresh'>" + thresh + "</span>")
            $("#curseType").text(curseType);
            $("#intLabel").css("left", "150px" )
        }
        $("#description").fadeIn(1000);
        setTimeout(() => {
            $("#description").fadeOut(1000);
            $(".scrollFrame1").fadeIn(1000);
            $(".scrollHeader").fadeIn(3000);
            $(".scrollText").fadeIn(3000);
        }, 3000);
        setTimeout(() => {
            $(".buttonDiv").fadeIn(1000);
        }, 4000);


        $("#decipherTextButton").on("click", decipherEffectScroll = function () {
            $(".btn").addClass("disabled");
            $(".buttonDiv").fadeOut(1000);
            var calcVal = playerRoll + intModifier;
            if (randomEffect === "curse") {
                calcVal = playerRoll + conModifier;
            }
            if (calcVal >= thresh) {
                if (randomEffect === "heal") {
                    $("#continueButton").text("CONTINUE ONWARD!")
                    let currentPlayerHealth = parseInt(localStorage.getItem("currentPlayerHealth"));
                        if (currentPlayerHealth === null) {
                            currentPlayerHealth = 100;
                            localStorage.setItem("currentPlayerHealth", currentPlayerHealth)
                        }
                    if (currentPlayerHealth <= 100 ) {
                        let newHealth = parseInt(currentPlayerHealth + effectValue);
                        console.log(newHealth);
                        if (newHealth <= 100) {
                            localStorage.setItem("currentPlayerHealth", newHealth);
                        }
                        else if (newHealth > 100) {
                            localStorage.setItem("currentPlayerHealth", 100);
                        }
                    }
                }
                else if (randomEffect === "curse") {
                    $("#continueText").text("YOU RESISTED THE CURSE!");
                    $("#continueButton").text("CONTINUE ONWARD!")
                }
                setTimeout(() => {
                    if (randomEffect === "heal") {
                        $("#healNum").text(effectValue);
                    }
                    $(".btn").removeClass("disabled");
                    $("#continueScreen").fadeIn();
                    $(".scrollHeader").removeClass("specialText");
                    $(".scrollText").removeClass("specialText");
                }, 4000);
                setTimeout(() => {
                    let autoplayEnabled = localStorage.getItem("autoplay")
                    if (autoplayEnabled === "true") {
                        exitEncounter();
                    }
                }, 6000);

            }
            else {
                if (randomEffect === "curse") {
                    $("#continueButton").text("ACCEPT THE CURSE...");
                    let statType;
                    if (curseType === "STR") {statType = "Strength";}
                    else if (curseType === "DEX") {statType = "Dexterity";}
                    else if (curseType === "CON") {statType = "Constitution";}
                    else if (curseType === "WIS") {statType = "Wisdom";}
                    else if (curseType === "INT") {statType = "Intelligence";}
                    let getStat = localStorage.getItem("player" + statType);
                    var statReduct = getStat - 2;
                    console.log("STAT (Reduction): " + statReduct)
                    localStorage.setItem("player" + statType, statReduct);
                }
                setTimeout(() => {
                    $(".btn").removeClass("disabled");
                    $("#continueText").text("THE SCROLL IS BEYOND YOUR COMPREHENSION!");
                    if (randomEffect === "curse") {
                        $("#continueText").text("YOU FAILED TO RESIST THE CURSE!");
                    }
                    $("#continueButton").text("LEAVE IT BEHIND!");
                    if (randomEffect === "curse") {
                        $("#continueButton").text("CARRY THE CURSE...")
                    }
                    $("#continueScreen").fadeIn();
                    $("#scrollHeader").fadeOut(2000);
                    $("#scrollText").fadeOut(2000);
                }, 4000);
                setTimeout(() => {
                    let autoplayEnabled = localStorage.getItem("autoplay")
                    if (autoplayEnabled === "true") {
                        exitEncounter();
                    }
                }, 6000);
            }
        })
    }
}

// ============================================================================
// =========================== SPELL SROLL LOGIC ==============================
// ============================================================================

function spellScrollConfig() {
    let spellsArray = [];

    var hasLesserHeal = localStorage.getItem("hasLesserHeal");
    console.log(hasLesserHeal)
    if (hasLesserHeal === null) {
        hasLesserHeal = false;
        localStorage.setItem("hasLesserHeal", hasLesserHeal);
        spellsArray.push("lesserHeal");
    }
    else if (hasLesserHeal === "false") {
        spellsArray.push("lesserHeal");
    }

    var hasFireball = localStorage.getItem("hasFireball");
    console.log(hasFireball)
    if (hasFireball === null) {
        hasFireball = false;
        localStorage.setItem("hasFireball", hasFireball);
        spellsArray.push("fireball");
    }
    if (hasFireball === "false") {
        spellsArray.push("fireball");
    }

    var hasPoisonCloud = localStorage.getItem("hasPoisonCloud");
    console.log(hasPoisonCloud)
    if (hasPoisonCloud === null) {
        hasPoisonCloud = false;
        localStorage.setItem("hasPoisonCloud", hasPoisonCloud);
        spellsArray.push("poisonCloud");
    }
    if (hasPoisonCloud === "false") {
        spellsArray.push("poisonCloud");
    }

    var hasStoneskin = localStorage.getItem("hasStoneskin");
    console.log(hasStoneskin)
    if (hasStoneskin === null) {
        hasStoneskin = "false";
        localStorage.setItem("hasStoneskin", hasStoneskin);
        spellsArray.push("stoneskin");
    }
    if (hasStoneskin === "false") {
        spellsArray.push("stoneskin");
    }
    var randomSpell = spellsArray[Math.floor(Math.random() * spellsArray.length)];
    var currentSpell;
    console.log(randomSpell);

    if (randomSpell === "lesserHeal") {
        $(".scrollHeader").html("SCROLL OF LESSER HEAL");
        $(".scrollText").html('Your attunement to holy magic reinvigorates you' +
            ',RESTORING 5-10 HP plus a number (equal to half of your intelligence' +
            '(rounded up)) <br> COST: 15 MP</h2>');
        currentSpell = "hasLesserHeal";
        startSpellScroll();
    }
    else if (randomSpell === "fireball") {
        $(".scrollHeader").html("&nbsp; SCROLL OF FIREBALL");
        $(".scrollText").html('You hurl a bolt of fire at the enemy dealing 10-15 DAMAGE' +
            'and causing the enemy to BURN for 1-2 damage per turn (for a' +
            'number of turns equal to half your intelligence (rounded up)) <br> COST: 30 MP');
        currentSpell = "hasFireball";
        startSpellScroll();
    }

    else if (randomSpell === "poisonCloud") {
        $(".scrollHeader").html("SCROLL OF POISON CLOUD");
        $(".scrollText").html('You conjure a small cloud of toxic fumes in front of your enemy.' +
            'POSIONS the enemy for 2-5 damage per turn (for a number of turns' +
            'equal to half your intelligence (rounded up))<br> COST: 20 MP');
        currentSpell = "hasPoisonCloud";
        startSpellScroll();
    }

    else if (randomSpell === "stoneskin") {
        $(".scrollHeader").html("&nbsp; SCROLL OF STONESKIN");
        $(".scrollText").html('Your form becomes rock-like and extremely dense,' +
            'REDUCING MELEE DAMAGE TAKEN by a number (equal to half your ' +
            'constitution (rounded up)) for two turns. <br> COST: 15 MP');
        currentSpell = "hasStoneskin";
        startSpellScroll();
    }
    else {
        var rerollType = "effect"
        randomizeScroll(rerollType);
    }
    function startSpellScroll() {
        var playerInt = parseInt(localStorage.getItem("playerIntelligence"));
        var intModifier;
        if (playerInt === 0 || playerInt === 1) { intModifier = -5 }
        else if (playerInt === 2 || playerInt === 3) { intModifier = -4 }
        else if (playerInt === 4 || playerInt === 5) { intModifier = -3 }
        else if (playerInt === 6 || playerInt === 7) { intModifier = -2 }
        else if (playerInt === 8 || playerInt === 9) { intModifier = -1 }
        else if (playerInt === 10 || playerInt === 11) { intModifier = 0 }
        else if (playerInt === 12 || playerInt === 13) { intModifier = 1 }
        else if (playerInt === 14 || playerInt === 15) { intModifier = 2 }
        else if (playerInt === 16 || playerInt === 17) { intModifier = 3 }
        else if (playerInt === 18 || playerInt === 19) { intModifier = 4 }
        else if (playerInt >= 20) { intModifier = 5 }
        console.log("INT MODIFIER: " + intModifier);
        const playerRoll = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
        console.log("PLAYER ROLL: " + playerRoll);
        const intThresh = Math.floor(Math.random() * (13 - 10 + 1)) + 10;
        console.log("INT THRESHOLD: " + intThresh);

        $("#intThresh").text(intThresh);
        $("#description").fadeIn(1000);
        setTimeout(() => {
            $("#description").fadeOut(1000);
            $(".scrollFrame1").fadeIn(1000);
            $(".scrollHeader").fadeIn(3000);
            $(".scrollText").fadeIn(3000);
        }, 3000);
        setTimeout(() => {
            $(".buttonDiv").fadeIn(1000);
        }, 4000);


        $("#decipherTextButton").on("click", decipherSpellScroll = function () {
            $(".btn").addClass("disabled");
            $(".buttonDiv").fadeOut(1000);
            var calcInt = playerRoll + intModifier;
            console.log("calcInt: " + calcInt);
            if (calcInt >= intThresh) {
                setTimeout(() => {
                    $(".btn").removeClass("disabled");
                    $("#continueScreen").fadeIn();
                    $(".scrollHeader").removeClass("specialText");
                    $(".scrollText").removeClass("specialText");
                    localStorage.setItem(currentSpell, true);
                }, 4000);
                setTimeout(() => {
                    let autoplayEnabled = localStorage.getItem("autoplay")
                    if (autoplayEnabled === "true") {
                        exitEncounter();
                    }
                }, 6000);

            }
            else {
                setTimeout(() => {
                    $(".btn").removeClass("disabled");
                    $("#continueText").text("THE SCROLL IS BEYOND YOUR COMPREHENSION!");
                    $("#continueButton").text("LEAVE IT BEHIND!");
                    $("#continueScreen").fadeIn();
                    $("#scrollHeader").fadeOut(2000);
                    $("#scrollText").fadeOut(2000);
                }, 4000);
                setTimeout(() => {
                    let autoplayEnabled = localStorage.getItem("autoplay")
                    if (autoplayEnabled === "true") {
                        exitEncounter();
                    }
                }, 6000);
            }
        })
    }

}