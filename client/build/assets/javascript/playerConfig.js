// PREVENTS THE USER FROM USING THE BACK BUTTON IN BROWSER!
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

$(document).contextmenu(function() {
    return false;
});

// Set bounds for stat values...
let min = Math.ceil(3);
let max = Math.floor(20);

let reRollsRemaining = 3;

const preDefTimeout = 1000;
var textSound = new Audio("../audio/textAppear.wav");
textSound.defaultPlaybackRate = .01;


var username;
// Check Local Storage for an existing username...
var checkNameExists = localStorage.getItem("username");
// If none exists...
if (checkNameExists) {
    // Populate the username form with the retrieved data...
    username = localStorage.getItem("username");
    $("#usernameInput").val(username);
}

$("#usernameInput").on("keydown", function (e) {
    if (e.which == 13) {
        console.log("\n==========================\n    *** GAME START ***\n==========================");
        var loginSound = new Audio("../audio/login.wav");
        loginSound.volume = .2;
        loginSound.play();
        e.preventDefault();
        username = $("#usernameInput").val().trim();
        console.log("PLAYER: " + username);
        var usernameLength = username.length;
        if (username !== "" && usernameLength <= 15 && usernameLength > 2) {
            // Clear the form
            $("#usernameInput").val("");
            localStorage.setItem('username', username);
            $("#login").fadeOut(1000);
            setTimeout(() => {
                $("#charCreate").fadeIn(1000);
            }, preDefTimeout);
        }
    }
})

$("button").on("mouseover", function () {
    var selectSound = new Audio("../audio/select.wav");
    selectSound.volume = .3;
    selectSound.play();
})
$("button").on("click", function () {
    var clickSound = new Audio("../audio/click.wav");
    clickSound.volume = .3;
    clickSound.play();
})

$("#rollStats").on("click", function () {
    initStats();
})
$("#acceptStats").on("click", function () {
    $("button").attr("disabled", "true").fadeOut(1000);
    $("#acceptStats").fadeOut(1000);
    $("#statsRow").fadeOut(1000);
    $("#reRolls").fadeOut(1000);
    setTimeout(() => {
        $("p").remove();
        $(".calculated").css("font-size", "15px");
    }, preDefTimeout * 1.5);
    setTimeout(() => {
        $("#statsRow").fadeIn();
    }, preDefTimeout * 2);
    setTimeout(() => {
        charDesc();
    }, preDefTimeout * 2.5);
})

// const srcArray = ["hellbat.html", "beartrap.html", "riddle.html", "riddle.html"];
// let randomSrc = srcArray[Math.floor(Math.random() * srcArray.length)];
$("#playButton").on("click", function () {
    initPlayer();
})

function initPlayer(buttonClicked) {
    localStorage.setItem("currentPlayerHealth", 100);
    localStorage.removeItem("currentEnemyHp");
    localStorage.setItem("playerLevel", 0);
    localStorage.setItem("playerGold", 0);
    localStorage.setItem("learnedStoneskin", false);
    localStorage.setItem("learnedFireball", false);
    localStorage.setItem("learnedLesserHeal", false);
    localStorage.setItem("learnedPoisonCloud", false);
    localStorage.setItem("isCursed", false);
    localStorage.setItem("isBurned", false);
    localStorage.setItem("isPoisoned", false);
    localStorage.setItem("seenHellbat", false);
    localStorage.setItem("seenSkeleton", false);
    localStorage.removeItem("dragonXpos");
    localStorage.removeItem("dragonYpos");
    localStorage.setItem("xPos", 0);
    localStorage.setItem("yPos", 0);
    localStorage.setItem("lastScreen", "traverse.html");
    localStorage.setItem("roomsCleared", 0);
    localStorage.setItem("monstersSlain", 0);
    localStorage.setItem("bossesSlain", 0);
    $("")
    window.location.href = "../html/tutorial.html";
}
function initStrength() {
    const playerStrength = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#playerStr").html("<h2 class='calculated'>STRENGTH: " + playerStrength + "</h2>");
    localStorage.setItem("playerStrength", playerStrength);
    console.log("STRENGTH: " + playerStrength);
}
function initDexterity() {
    const playerDexterity = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#playerDex").html("<h2 class='calculated'>DEXTERITY: " + playerDexterity + "</h2>");
    localStorage.setItem("playerDexterity", playerDexterity);
    console.log("DEXTERITY: " + playerDexterity);
}
function initConstitution() {
    const playerConstitution = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#playerCon").html("<h2 class='calculated'>CONSTITUTION: " + playerConstitution + "</h2>");
    localStorage.setItem("playerConstitution", playerConstitution);
    console.log("CONSTITUTION: " + playerConstitution);
}
function initIntelligence() {
    const playerIntelligence = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#playerInt").html("<h2 class='calculated'>INTELLIGENCE: " + playerIntelligence + "</h2>");
    localStorage.setItem("playerIntelligence", playerIntelligence);
    console.log("INTELLIGENCE: " + playerIntelligence);
}
function initWisdom() {
    const playerWisdom = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#playerWis").html("<h2 class='calculated'>WISDOM: " + playerWisdom + "</h2>");
    localStorage.setItem("playerWisdom", playerWisdom);
    console.log("WISDOM: " + playerWisdom);
}
function initCharisma() {
    const playerCharisma = Math.floor(Math.random() * (max - min + 1)) + min;
    $("#playerCha").html("<h2 class='calculated'>CHARISMA: " + playerCharisma + "</h2>");
    localStorage.setItem("playerCharisma", playerCharisma);
    console.log("CHARISMA: " + playerCharisma);
}

function initStats() {
    console.log("==================");
    initStrength();
    initDexterity();
    initConstitution();
    initIntelligence();
    initWisdom();
    initCharisma();
    console.log("==================");
    reRollsRemaining--;
    $("#rollsRemaining").text(reRollsRemaining);
    if (reRollsRemaining <= 0) {
        $("button").attr("disabled", "true").fadeOut(1000);
        $("#acceptStats").fadeOut(1000);
        $("#statsRow").fadeOut(1000);
        $("#reRolls").fadeOut(1000);
        setTimeout(() => {
            $("p").remove();
            $(".calculated").css("font-size", "15px");
        }, preDefTimeout * 1.5);
        setTimeout(() => {
            $("#statsRow").fadeIn();
        }, preDefTimeout * 2);
        setTimeout(() => {
            charDesc();
        }, preDefTimeout * 2.5);
    }
    else if (reRollsRemaining > 0) {
        $("#acceptStats").fadeIn(1000);
    }

}

function Player(exp, weapon, weaponVal, armor, armorVal, items, spells, isAlive, isBurning, isFrozen, isPoisoned) {
    var getPlayerStrength = localStorage.getItem("playerStrength");
    var getPlayerDexterity = localStorage.getItem("playerDexterity");
    var getPlayerConstitution = localStorage.getItem("playerConstitution");
    var getPlayerIntelligence = localStorage.getItem("playerIntelligence");
    var getPlayerWisdom = localStorage.getItem("playerWisdom");
    var getPlayerCharisma = localStorage.getItem("playerCharisma");
    this.name = localStorage.getItem("username");
    this.level = parseInt(localStorage.getItem("level"));
    this.str = getPlayerStrength;
    this.dex = getPlayerDexterity;
    this.con = getPlayerConstitution;
    this.int = getPlayerIntelligence;
    this.wis = getPlayerWisdom;
    this.cha = getPlayerCharisma;
    this.exp = exp;
    this.expBaseCap = 100;
    this.expToLevel = this.expBaseCap * this.level;
    this.weapon = weapon;
    this.weaponVal = weaponVal;
    this.armor = armor;
    this.armorVal = armorVal;
    this.gold = 120;
    this.items = items;
    this.spells = spells;
    this.isAlive = isAlive;
    this.isBurning = isBurning;
    this.isFrozen = isFrozen;
    this.isPoisoned = isPoisoned;
    this.gameState = "shop.html";
}

function strDesc() {
    var getPlayerStrength = localStorage.getItem("playerStrength");
    if (getPlayerStrength >= 18) {
        $("#statsRow").append(
            "<h4 id='strMessage' class='col-12 text-center'>You are truly formidable in strength," +
            " capable of besting the most fearsome of foes: A force to be feared"
            + " and one not easily felled.</h4>");
    }
    else if (getPlayerStrength >= 12 && getPlayerStrength < 18) {
        $("#statsRow").append(
            "<h4 id='strMessage' class='col-12 text-center'>Your physical strength is great,"
            + " inspiring fear in all but the strongest of enemies.</h4>");
    }
    else if (getPlayerStrength >= 7 && getPlayerStrength < 12) {
        $("#statsRow").append(
            "<h4 id='strMessage' class='col-12 text-center'>Your physique is less than awe-inspiring,"
            + " but not all battles are won with brawn alone. What you lack in brute" +
            " strength, can be reconciled elsewhere.</h4>");
    }
    else {
        $("#statsRow").append(
            "<h4 id='strMessage' class='col-12 text-center'>You quiver in fear, even in the presence of "
            + " the puniest of enemies. Your only hope in the absence of strength," +
            " is to prevail in other regards.</h4>")
    }
    $(".runes").fadeIn();
}
function dexDesc() {
    var getPlayerDexterity = localStorage.getItem("playerDexterity");
    if (getPlayerDexterity >= 18) {
        $("#statsRow").append(
            "<h4 id='dexMessage' class='col-12 text-center'>You are dexterous and agile," +
            " able to slip past treacherous traps and keen eyes alike."
            + " Navigating a dungeon will be child's play for such a master of agility.</h4>");
    }
    else if (getPlayerDexterity >= 12 && getPlayerDexterity < 18) {
        $("#statsRow").append(
            "<h4 id='dexMessage' class='col-12 text-center'>Your footwork is fleet"
            + " with reflexes like a rogue. Your dexterity will come in handy, in all but " +
            " the stickiest of situations.</h4>");
    }
    else if (getPlayerDexterity >= 7 && getPlayerDexterity < 12) {
        $("#statsRow").append(
            "<h4 id='dexMessage' class='col-12 text-center'>Avoiding small traps and basic stealth"
            + " is within your wheelhouse, but be WARNED: dangerous machinations and perceptive enemies"
            + " will have little trouble tripping you up.</h4>");
    }
    else {
        $("#statsRow").append(
            "<h4 id='dexMessage' class='col-12 text-center'>You are clumsy and oafish,"
            + " in nature, triggering the most commonplace of traps." +
            " Your chance of slipping past enemies unseen is slim to none.</h4>")
    }
}
function conDesc() {
    var getPlayerConstitution = localStorage.getItem("playerConstitution");
    if (getPlayerConstitution >= 18) {
        $("#statsRow").append(
            "<h4 id='conMessage' class='col-12 text-center'>Able to withstand of the most" +
            " brutal of assualts, even the toughest of creatures have difficulty damaging you."
            + "</h4>");
    }
    else if (getPlayerConstitution >= 12 && getPlayerConstitution < 18) {
        $("#statsRow").append(
            "<h4 id='conMessage' class='col-12 text-center'>Your impressive stature allows you"
            + " to shrug off all but the most devestating attacks. " +
            " Your survival is all but guaranteed.</h4>");
    }
    else if (getPlayerConstitution >= 7 && getPlayerConstitution < 12) {
        $("#statsRow").append(
            "<h4 id='conMessage' class='col-12 text-center'>While not entirely frail, you lack the"
            + " constitution of a seasoned adventurer. Take heed, as most enemies will pose a"
            + " significant threat.</h4>");
    }
    else {
        $("#statsRow").append(
            "<h4 id='conMessage' class='col-12 text-center'>You are feeble and scrawny,"
            + " by design. Without adequate armor, any attack could be fatal, serving as" +
            " a grave reminder of your waning mortality.</h4>")
    }
}
function intDesc() {
    var getPlayerIntelligence = localStorage.getItem("playerIntelligence");
    if (getPlayerIntelligence >= 18) {
        $("#statsRow").append(
            "<h4 id='intMessage' class='col-12 text-center'>As an astute intellectual," +
            " , you can think your way out of any situation. Will you use it to decipher"
            + " the arcane, or perhaps outwit the most cunning of adversaries?</h4>");
    }
    else if (getPlayerIntelligence >= 12 && getPlayerIntelligence < 18) {
        $("#statsRow").append(
            "<h4 id='intMessage' class='col-12 text-center'>Riddles and puzzles are no match"
            + " for your sharpened wit. Only the most confounding of mental conundrums will" +
            " escape your understanding.</h4>");
    }
    else if (getPlayerIntelligence >= 7 && getPlayerIntelligence < 12) {
        $("#statsRow").append(
            "<h4 id='intMessage' class='col-12 text-center'>You have an average mind, capable"
            + " of average calculation. Many mysteries lie ahead that you may fail to discern."
            + "</h4>");
    }
    else {
        $("#statsRow").append(
            "<h4 id='intMessage' class='col-12 text-center'>Your thoughts are disorganized and"
            + " chaotic, and with rare exception, clarity is a fleeting concept." +
            "</h4>")
    }
}
function wisDesc() {
    var getPlayerWisdom = localStorage.getItem("playerWisdom");
    if (getPlayerWisdom >= 18) {
        $("#statsRow").append(
            "<h4 id='wisMessage' class='col-12 text-center'>Your past trials and tribulations" +
            " have made you wiser for the wear. With unmatched guile and limitless insight,"
            + " nothing escapes your watchful gaze.</h4>");
    }
    else if (getPlayerWisdom >= 12 && getPlayerWisdom < 18) {
        $("#statsRow").append(
            "<h4 id='wisMessage' class='col-12 text-center'>You are wise indeed. Only"
            + " the most trying of trials can shake your confident insight." +
            "</h4>");
    }
    else if (getPlayerWisdom >= 7 && getPlayerWisdom < 12) {
        $("#statsRow").append(
            "<h4 id='wisMessage' class='col-12 text-center'>Wisdom is earned, not granted."
            + " Maybe this adventure will hone your unsharpened spirit."
            + "</h4>");
    }
    else {
        $("#statsRow").append(
            "<h4 id='wisMessage' class='col-12 text-center'>You are foolhardy and"
            + " make decisions and determinations on mere whim. If you stand for nothing" +
            ", you will surely fall for anything.</h4>")
    }
}
function chaDesc() {
    var getPlayerCharisma = localStorage.getItem("playerCharisma");
    if (getPlayerCharisma >= 18) {
        $("#statsRow").append(
            "<h4 id='chaMessage' class='col-12 text-center'>Equally charming and charismatic," +
            " you could persuade almost anyone to do anything."
            + " Your impeccible speechcraft inspires allies and enemies alike.</h4>");
    }
    else if (getPlayerCharisma >= 12 && getPlayerCharisma < 18) {
        $("#statsRow").append(
            "<h4 id='chaMessage' class='col-12 text-center'>Your words carry great"
            + " weight, shaping the decisions of those around you. Only those devout" +
            "in their convictions can resist your influence.</h4>");
    }
    else if (getPlayerCharisma >= 7 && getPlayerCharisma < 12) {
        $("#statsRow").append(
            "<h4 id='chaMessage' class='col-12 text-center'>Those with little to no"
            + " conviction can be persuaded, but it would be unwise to persuade"
            + " stalwart adversaries.</h4>");
    }
    else {
        $("#statsRow").append(
            "<h4 id='chaMessage' class='col-12 text-center'>You are certainly not blessed with the"
            + " gift of gab. You blunder even the most basic attempt to persuade." +
            " Choose your words carefully, as they might be your last!</h4>")
    }
}
function charDesc() {
    var player = new Player(0, "SH0RTSW0RD", 2, "TUNIC", 2,
    "", "F1R3B4LL", true, false, false, false);
    console.log(player);
    strDesc();
    textSound.volume = .7;
    textSound.play();
    setTimeout(() => {
        dexDesc();
        textSound.play();
    }, preDefTimeout * 2);
    setTimeout(() => {
        conDesc();
        textSound.play();
    }, preDefTimeout * 4);
    setTimeout(() => {
        intDesc();
        textSound.play();
    }, preDefTimeout * 6);
    setTimeout(() => {
        wisDesc();
        textSound.play();
    }, preDefTimeout * 8);
    setTimeout(() => {
        chaDesc();
        textSound.play();
    }, preDefTimeout * 10);
    setTimeout(() => {
        $("button").removeAttr("disabled");
        $("#playButton").fadeIn();
    }, [preDefTimeout * 12]);
}

let musicVolume = localStorage.getItem("musicVolume");
if (musicVolume === null) {
    musicVolume = 1;
    localStorage.setItem("musicVolume", musicVolume);
}
$("#musicVolumeRange").val(musicVolume);


let sfxVolume = localStorage.getItem("sfxVolume");
if (sfxVolume === null) {
    sfxVolume = 1;
    localStorage.setItem("sfxVolume", sfxVolume);
}
$("#sfxVolumeRange").val(sfxVolume)

let dungeonSize = localStorage.getItem("dungeonSize");
if (dungeonSize === null) {
    dungeonSize = 2;
}
$("#dungeonSizeRange").val(dungeonSize);

let hasPassiveHealing = localStorage.getItem("hasPassiveHealing");
if (hasPassiveHealing === null) {
    hasPassiveHealing = 0;
    localStorage.setItem("hasPassiveHealing", hasPassiveHealing)
}
$("#passiveHealingRange").val(hasPassiveHealing);

let autoplay = localStorage.getItem("autoplay");
console.log()
if (autoplay === null || autoplay === "false") {
    autoplay = "false";
    localStorage.setItem("autoplay", autoplay)
    $("#autoplayRange").val(0);
}
else if (autoplay === "true")
$("#autoplayRange").val(1);

console.log("\n=================" +
    "\nPLAYER CONFIG:\n=================\n" +
    "Music Volume: " + musicVolume + "\n" +
    "SFX Volume: " + sfxVolume + "\n" +
    "Dungeon Size: " + dungeonSize + "\n" +
    "Passive Healing: " + hasPassiveHealing +
    "\n=================\n\n")

$("#musicVolumeRange").on("change", function () {
    traverseSound.volume = $(this).val();
    localStorage.setItem("musicVolume", $(this).val());
})
$("#sfxVolumeRange").on("change", function () {
    localStorage.setItem("sfxVolume", $(this).val());
})
$("#dungeonSizeRange").on("change", function () {
    localStorage.setItem("dungeonSize", $(this).val());
})
$("#passiveHealingRange").on("change", function () {
    localStorage.setItem("hasPassiveHealing", $(this).val());
})
$("#autoplayRange").on("change", function () {
    console.log($(this).val())
    if ($(this).val() == 0) {
        localStorage.setItem("autoplay", "false");
        console.log(localStorage.getItem("autoplay"))
    }
    else if ($(this).val() == 1) {
        localStorage.setItem("autoplay", "true")
        console.log(localStorage.getItem("autoplay"))
    }
});
$("#skipIntroRange").on("change", function () {
    console.log($(this).val())
    if ($(this).val() == 0) {
        localStorage.setItem("skipIntro", "false");
        console.log(localStorage.getItem("skipIntro"))
    }
    else if ($(this).val() == 1) {
        localStorage.setItem("skipIntro", "true")
        console.log(localStorage.getItem("skipIntro"))
    }
});

$("#modalExitOptions").on("click", function() {
    $("#optionsModal").toggle();
})