// PREVENTS THE USER FROM USING THE BACK BUTTON IN BROWSER!
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

$(document).ready(function () {
    // ===========================================================
    // ======== PLAYER CONFIG SETTINGS (LSTNR + LOGIC) ===========
    // ===========================================================

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

    var traverseSound = new Audio("../audio/traverse.wav");
    traverseSound.volume = 0;
    traverseSound.play();
    $(traverseSound).animate({
        volume: musicVolume
    }, 1000, function () {
    });

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
            autoMove();
        }
        else if ($(this).val() == 1) {
            localStorage.setItem("autoplay", "true")
            console.log(localStorage.getItem("autoplay"))
        }
    })

    // ===========================================================
    // ===========================================================
    // ===========================================================

    updateJournal();

    // ===========================================================
    // =========== LEVEL GENERATOR (RANDOM ENCOUNTERS) ===========
    // ===========================================================

    // Set coordinates for room encounters...
    var xCoordsArr = [];
    var yCoordsArr = [];
    var allCoordsArr = [];

    // DRAGON: =======================================
    let dragonXPos = localStorage.getItem("dragonXPos");
    let dragonYPos = localStorage.getItem("dragonYPos");
    // SET DRAGONS POSITION ON MAP!
    $(".x" + dragonXPos + "y" + dragonYPos).html("<span class='token boss'>B</span>");
    if (dragonXPos === null || dragonYPos === null || dragonXPos == NaN || dragonYPos == NaN) {
        let dragonXPos = getEncounterX();
        let dragonYPos = getEncounterY();
        localStorage.setItem("dragonXPos", dragonXPos);
        localStorage.setItem("dragonYPos", dragonYPos);
    }

    // SHOP: =========================================
    let shopXPos = getEncounterX();
    let shopYPos = getEncounterY();
    // SET SHOPS POSITION ON MAP!
    $(".x" + shopXPos + "y" + shopYPos).html("<span class='token shop'>S</span>");

    // HELLBAT: ======================================
    var hellbatXPos = getEncounterX();
    var hellbatYPos = getEncounterY();
    // SET HELLBATS POSITION ON MAP!
    $(".x" + hellbatXPos + "y" + hellbatYPos).html("<span class='token encounter'>?</span>");

    // HELLBAT 2: ======================================
    var hellbat2XPos = getEncounterX();
    var hellbat2YPos = getEncounterY();
    // SET HELLBATS POSITION ON MAP!
    $(".x" + hellbat2XPos + "y" + hellbat2YPos).html("<span class='token encounter'>?</span>");

    // SKELETON: =====================================
    var skeletonXPos = getEncounterX();
    var skeletonYPos = getEncounterY();
    // SET SKELETONS POSITION ON MAP!
    $(".x" + skeletonXPos + "y" + skeletonYPos).html("<span class='token encounter'>?</span>");

    // RIDDLE: =======================================
    let riddleXPos = getEncounterX();
    let riddleYPos = getEncounterY();
    // SET RIDDLE POSITION ON MAP!
    $(".x" + riddleXPos + "y" + riddleYPos).html("<span class='token encounter'>?</span>");

    // WELL: =========================================
    let wellXPos = getEncounterX();
    let wellYPos = getEncounterY();
    // SET WELL POSITION ON MAP!
    $(".x" + wellXPos + "y" + wellYPos).html("<span class=' token encounter'>?</span>");

    // BEARTRAP: =========================================
    let beartrapXPos = getEncounterX();
    let beartrapYPos = getEncounterY();
    // SET WELL POSITION ON MAP!
    $(".x" + beartrapXPos + "y" + beartrapYPos).html("<span class=' token encounter'>?</span>");

    // SCROLL: =========================================
    let scrollXPos = getEncounterX();
    let scrollYPos = getEncounterY();
    // SET WELL POSITION ON MAP!
    $(".x" + scrollXPos + "y" + scrollYPos).html("<span class=' token encounter'>?</span>");

    // SCROLL2: =========================================
    let scroll2XPos = getEncounterX();
    let scroll2YPos = getEncounterY();
    // SET WELL POSITION ON MAP!
    $(".x" + scroll2XPos + "y" + scroll2YPos).html("<span class=' token encounter'>?</span>");

    // PUMPKING: =========================================
    let pumpkingXPos = getEncounterX();
    let pumpkingYPos = getEncounterY();
    // SET WELL POSITION ON MAP!
    $(".x" + pumpkingXPos + "y" + pumpkingYPos).html("<span class=' token encounter'>?</span>");

    // ===========================================================
    // ===========================================================
    // ===========================================================


    // RANDOMIZED X COORDINATE FROM -15 to 15...
    function getEncounterX() {
        let dungeonSize = $("#dungeonSizeRange").val();
        let maxSize = parseInt(dungeonSize * 5);
        let xCoord = Math.floor(Math.random() * maxSize) + 1;
        xCoord *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        xCoordsArr.push(xCoord)
        return xCoord;
    }
    // RANDOMIZED Y COORDINATE FROM -15 to 15...
    function getEncounterY() {
        let dungeonSize = $("#dungeonSizeRange").val();
        let maxSize = parseInt(dungeonSize * 5);
        let yCoord = Math.floor(Math.random() * maxSize) + 1;
        yCoord *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        yCoordsArr.push(yCoord);
        return yCoord;
    }

    logEncounterCoords();

    function logEncounterCoords() {
        console.log("ALWAYS RANDOM:"
            + "\n====================" +
            "\nHELLBAT POSITION (X,Y):\n"
            + hellbatXPos + ", " + hellbatYPos +
            "\nHELLBAT 2 POSITION (X,Y):\n"
            + hellbat2XPos + ", " + hellbat2YPos +
            "\nSKELETON POSITION (X,Y):\n"
            + skeletonXPos + ", " + skeletonYPos +
            "\nRIDDLE POSITION (X,Y):\n"
            + riddleXPos + ", " + riddleYPos +
            "\nWELL POSITION (X,Y):\n"
            + wellXPos + ", " + wellYPos +
            "\nBEARTRAP POSITION (X,Y):\n"
            + beartrapXPos + ", " + beartrapYPos +
            "\nSHOP POSITION (X,Y):\n"
            + shopXPos + ", " + shopYPos +
            "\nSCROLL POSITION (X,Y):\n"
            + scrollXPos + ", " + scrollYPos +
            "\nSCROLL 2 POSITION (X,Y):\n"
            + scroll2XPos + ", " + scroll2YPos +
            "\nPUMPKING POSITION (X,Y):\n"
            + pumpkingXPos + ", " + pumpkingYPos +
            "\n\n FIXED (RANDOMIZED ONCE):"
            + "\n====================" +
            "\nDRAGON POSITION (X,Y):\n"
            + dragonXPos + ", " + dragonYPos
            + "\n===================="
        );
    }
    // ============================================================
    // ============================================================
    // ============================================================

    $(".gridSquare").on("mouseover", function () {
        $("#squareXCoord").text($(this).data("x"));
        $("#squareYCoord").text($(this).data("y"));
    })

    checkEnemies();
    var xPos = localStorage.getItem("xPos");
    if (xPos === null) {
        xPos = 0;
        localStorage.setItem("xPos", 0);
    }
    var yPos = localStorage.getItem("yPos");
    if (yPos === null) {
        yPos = 0;
        localStorage.setItem("yPos", 0);
    }
    var direction = 0;
    // SET PLAYERS POSITION ON SCREEN (AND MAP)
    $(".x" + xPos + "y" + yPos).html("<span class='token player'>P</span>");
    $("#xPos").text(xPos);
    $("#yPos").text(yPos);

    // console.log("\n=======\nxPos: " + xPos +
    // "\n=======\nyPos: " + yPos + "\n=======\ndirection: " +
    // direction + "\n========\n");




    // ===========================================================
    // ========== PLAYER MOVEMENT (CONTROLS/LISTENERS) ===========
    // ===========================================================


    // Initially blocks controls until screen fades in...
    // Then checks to see if the play is moving (if true, block controls)...
    var isMoving = true;
    $("#bodyWrapper").fadeIn(1000);
    setTimeout(() => {
        isMoving = false;
    }, 1000);

    // ARROW KEY CONTROLS
    $(document).on("keyup", function (e) {

        if (e.which === 37 && isMoving === false) {
            moveLeft();
        }
        else if (e.which === 65 && isMoving === false) {
            moveLeft();
        }
        else if (e.which === 38 && isMoving === false) {
            moveUp();
        }
        else if (e.which === 87 && isMoving === false) {
            moveUp();
        }
        else if (e.which === 39 && isMoving === false) {
            moveRight();
        }
        else if (e.which === 68 && isMoving === false) {
            moveRight();
        }
        else if (e.which === 77 || e.which === 52) {
            $("#mapModal").toggle();
        }
        else {
        }
    })

    // ============================================================
    // ============================================================
    // ============================================================


    // ===========================================================
    // ======== MOVEMENT FUNCTIONS (ANIM/CONTROLS/ETC) ===========
    // ===========================================================


    function checkEnemies() {
        var seenHellbat = localStorage.getItem("seenHellbat");
        if (seenHellbat === null) {
            console.log("HIDDEN HELLBAT")
            seenHellbat = "false";
            localStorage.setItem("seenHellbat", seenHellbat);
        }
        else if (seenHellbat === "true") {
            console.log("REVEALED HELLBAT")
            $(".hellbat").removeClass("specialText");
        }

        var seenSkeleton = localStorage.getItem("seenSkeleton");
        if (seenSkeleton === null) {
            seenSkeleton = "false";
            localStorage.setItem("seenSkeleton", seenSkeleton);
        }
        else if (seenSkeleton === "true") {
            $(".skeleton").removeClass("specialText");
        }
    }

    function passiveHealing() {
        var currentPlayerHealth = parseInt(localStorage.getItem("currentPlayerHealth"));
        if (currentPlayerHealth < 100) {
            console.log("*Passively Healing (+2)*")
            console.log("currentPlayerHealth: " + currentPlayerHealth);
            currentPlayerHealth += 2;
            console.log("currentPlayerHealth: " + currentPlayerHealth);
            localStorage.setItem("currentPlayerHealth", currentPlayerHealth)
        }
        else {
            localStorage.setItem("currentPlayerHealth", 100);
            // console.log("*Passively Healing BUT health is full!*")
        }
    }

    function animateWalk() {
        isMoving = true;
        // var walkSound = new Audio("../audio/walk.wav");
        // walkSound.volume = .5;
        // walkSound.play();
        $(".leftHandWrapper").addClass("leftHandWalk");
        $(".rightHandWrapper").addClass("rightHandWalk");
        var orientation = $(".rightHandWrapper").css("right");
        $(".rightHandWalk").css("right", orientation);
        setTimeout(() => {
            $(".leftHandWrapper").removeClass("leftHandWalk");
            $(".rightHandWrapper").removeClass("rightHandWalk");
        }, 500);
        setTimeout(() => {
            isMoving = false;
        }, 1000);
    }

    function updatePos(direction) {
        let yPosCurrent = localStorage.getItem("yPos");
        let xPosCurrent = localStorage.getItem("xPos");
        $(".x" + xPosCurrent + "y" + yPosCurrent).text("");
        $("#squareXCoord").text(xPosCurrent);
        $("#squareYCoord").text(yPosCurrent);
        if (direction === -2) {
            let yPosCurrent = localStorage.getItem("yPos");
            yPos = yPosCurrent - 1;
            localStorage.setItem("yPos", yPos);
            checkEncounters();
            // console.log("Moving South.")
        }
        else if (direction === -1) {
            let xPosCurrent = parseInt(localStorage.getItem("xPos"));
            xPos = parseInt(xPosCurrent - 1);
            localStorage.setItem("xPos", xPos);
            checkEncounters();
            // console.log("Moving West.")
        }
        else if (direction === 0) {
            let yPosCurrent = parseInt(localStorage.getItem("yPos"));
            yPos = parseInt(yPosCurrent + 1);
            localStorage.setItem("yPos", yPos);
            checkEncounters();
            // console.log("Moving North.")
        }
        else if (direction === 1) {
            let xPosCurrent = parseInt(localStorage.getItem("xPos"));
            xPos = parseInt(xPosCurrent + 1);
            localStorage.setItem("xPos", xPos);
            checkEncounters();
            // console.log("Moving East.")
        }
        else if (direction === 2) {
            let yPosCurrent = localStorage.getItem("yPos");
            yPos = parseInt(yPosCurrent - 1);
            localStorage.setItem("yPos", yPos);
            $("#mapDir").text("S");
            checkEncounters();
            // console.log("Moving South.")
        }
        else {
            checkEncounters();
        }
        $(".x" + xPos + "y" + yPos).html("<p class='player token'>P</p>");
        $("#xPos").text(xPos);
        $("#yPos").text(yPos);

        // console.log("\nxPos: " + xPos +
        // "\nyPos: " + yPos + 
        // "\ndirection: " +
        // direction + "\n==========\n");

        // =====================================================================
        // ===================== ROOM ENCOUNTER CHECK ==========================
        // =====================================================================
        function checkEncounters() {
            let xPos = parseInt(localStorage.getItem("xPos"));
            let yPos = parseInt(localStorage.getItem("yPos"));
            if (xPos === skeletonXPos && yPos === skeletonYPos) {
                window.location.href = "../html/skeleton.html", "noopener";
            }
            else if (xPos === hellbatXPos && yPos === hellbatYPos) {
                window.location.href = "../html/hellbat.html", "noopener";
            }
            else if (xPos === hellbat2XPos && yPos === hellbat2YPos) {
                window.location.href = "../html/hellbat.html", "noopener";
            }
            else if (xPos === parseInt(dragonXPos) && yPos === parseInt(dragonYPos)) {
                window.location.href = "../html/boss1.html", "noopener";
            }
            else if (xPos === riddleXPos && yPos === riddleYPos) {
                window.location.href = "../html/riddle.html", "noopener";
            }
            else if (xPos === wellXPos && yPos === wellYPos) {
                window.location.href = "../html/well.html", "noopener";
            }
            else if (xPos === shopXPos && yPos === shopYPos) {
                window.location.href = "../html/shop.html", "noopener";
            }
            else if (xPos === beartrapXPos && yPos === beartrapYPos) {
                window.location.href = "../html/beartrap.html", "noopener";
            }
            else if (xPos === scrollXPos && yPos === scrollYPos) {
                window.location.href = "../html/scroll.html", "noopener";
            }
            else if (xPos === scroll2XPos && yPos === scroll2YPos) {
                window.location.href = "../html/scroll.html", "noopener";
            }
            else if (xPos === pumpkingXPos && yPos === pumpkingYPos) {
                window.location.href = "../html/pumpking.html", "noopener";
            }
        }

    }

    function checkDirection(direction) {
        // console.log("direction: " + direction + "\n==========\n");
        if (direction === -1) {
            $(".north").css("opacity", .3);
            $(".east").css("opacity", .3);
            $(".south").css("opacity", .3);
            $(".west").css("opacity", 1);
            $("#mapDir").text("W");
        }
        if (direction === -2) {
            $(".north").css("opacity", .3);
            $(".east").css("opacity", .3);
            $(".south").css("opacity", 1);
            $(".west").css("opacity", .3);
            $("#mapDir").text("S");
        }
        if (direction <= -3) {
            direction = 2;
            $(".north").css("opacity", .3);
            $(".east").css("opacity", 1);
            $(".south").css("opacity", .3);
            $(".west").css("opacity", .3);
            $("#mapDir").text("S");
        }
        if (direction === 0) {
            $(".north").css("opacity", 1);
            $(".east").css("opacity", .3);
            $(".south").css("opacity", .3);
            $(".west").css("opacity", .3);
            $("#mapDir").text("N");
        }
        if (direction === 1) {
            $(".north").css("opacity", .3);
            $(".east").css("opacity", 1);
            $(".south").css("opacity", .3);
            $(".west").css("opacity", .3);
            $("#mapDir").text("E");
        }
        if (direction === 2) {
            $(".north").css("opacity", .3);
            $(".east").css("opacity", .3);
            $(".south").css("opacity", 1);
            $(".west").css("opacity", .3);
            $("#mapDir").text("S");
        }
        if (direction >= 3) {
            direction = 2;
            $(".north").css("opacity", .3);
            $(".east").css("opacity", .3);
            $(".south").css("opacity", .3);
            $(".west").css("opacity", 1);
            $("#mapDir").text("S");
        }
    }

    var moveLeft = function () {
        if (hasPassiveHealing === 1 || hasPassiveHealing === "1") {
            passiveHealing();
        }
        animateWalk();
        direction--;
        if (direction >= -2) {
            checkDirection(direction);
            $(".background").fadeOut(400)
            $(".background").addClass("turnLeft");
            setTimeout(() => {
                $(".background").fadeIn(200)
                $(".background").removeClass("turnLeft")
            }, 1000);
        }
        else {
            direction++;
        }
    }

    var moveUp = function () {
        if (hasPassiveHealing === 1 || hasPassiveHealing === "1") {
            passiveHealing();
        }
        animateWalk();
        updatePos(direction, xPos, yPos)
        $(".background").fadeOut(800)
        $(".background").addClass("forward");
        setTimeout(() => {
            $(".background").fadeIn(200)
            $(".background").removeClass("forward")
        }, 1000);
        // if (autoplayEnabled === "true") {
        //     setTimeout(() => {
        //         autoMove(autoXCoord, autoYCoord);
        //     }, 2000);
        // }
    }

    var moveRight = function () {
        if (hasPassiveHealing === 1 || hasPassiveHealing === "1") {
            passiveHealing();
        }
        animateWalk();
        direction++;
        if (direction <= 2) {
            checkDirection(direction);
            $(".background").fadeOut(400)
            $(".background").addClass("turnRight");
            setTimeout(() => {
                $(".background").fadeIn(200)
                $(".background").removeClass("turnRight")
            }, 1000);
        }
        else {
            direction--;
        }
        // if (autoplayEnabled === "true") {
        //     autoMove(autoXCoord, autoYCoord);
        // }
    }

    function updateJournal() {

        let learnedLesserHeal = localStorage.getItem("learnedLesserHeal");
        if (learnedLesserHeal === null) {
            localStorage.setItem("learnedLesserHeal", "false")
        }
        else if (learnedLesserHeal === "true") {
            $(".lesserHeal").removeClass("specialText");
        }

        let learnedStoneskin = localStorage.getItem("learnedStoneskin");
        if (learnedStoneskin === null) {
            localStorage.setItem("learnedStoneskin", "false")
        }
        else if (learnedStoneskin === "true") {
            $(".stoneskin").removeClass("specialText");
        }

        let playerGold = localStorage.getItem("playerGold");
        $("#goldAmount").text(playerGold);
    }
    // ============================================================
    // ============================================================
    // ============================================================


    // ============================================================
    // =================== AUTOPLAY (MOVEMENT) ====================
    // ============================================================

    //  IF autoplay has been enabled, JSRPG will generate a
    // random destination to automatically navigate to. The game
    // will perform the same number of animations and steps as
    // the player would to get there, and will dynamically go
    // through movement functions (just as if the player had
    // pressed an arrow key or "W A S D"); 

    let autoplayEnabled = localStorage.getItem("autoplay");

    // Chooses a random index from the entire array of coords.
    let randomCoord = Math.floor(Math.random() * (xCoordsArr.length - 0 + 1)) + 0;
    console.log(`xCoordsArr: ${xCoordsArr}`);
    console.log(`yCoordsArr: ${yCoordsArr}`);

    // Create variables to hold both the X and Y coordinates... 
    let autoXCoord = xCoordsArr[randomCoord];
    let autoYCoord = yCoordsArr[randomCoord];
    console.log(`RANDOM COORDS: ${autoXCoord}, ${autoYCoord}`);


    // ==============================
    // ==== THE INITIAL MOVEMENT ====
    // ==============================


    // If autoplay is enabled on page load (after 3 seconds)...
    setTimeout(() => {
        if (autoplayEnabled === "true") {
            $("#autoplayMessage").fadeIn();
            // Move the player at 2 second intervals.
            setInterval(() => {
                let enabledCheck = localStorage.getItem("autoplay");
                if (enabledCheck === "true") {
                    autoMove(autoXCoord, autoYCoord);
                }
            }, 2000);
        }
        else {

        }
    }, 2000);

    function autoMove(x, y) {
        if (x === undefined || x === "undefined" || y === undefined || y === "undefined") {
            //  IF the x coordinate or y coordinate are undefined...
            // Reselect coordinates and recusively call autoMove(x, y).
            console.log("A coord is Undefined!\nautoMove Recursion!");
            // Chooses a random index from the entire array of coords.
            randomCoord = Math.floor(Math.random() * (xCoordsArr.length - 0 + 1)) + 0;
            console.log(`xCoordsArr: ${xCoordsArr}`);
            console.log(`yCoordsArr: ${yCoordsArr}`);
            // Create variables to hold both the X and Y coordinates... 
            autoXCoord = xCoordsArr[randomCoord];
            autoYCoord = yCoordsArr[randomCoord];
            console.log(`RANDOM COORDS: ${autoXCoord}, ${autoYCoord}`);
        }
        else {
            autoplayEnabled = localStorage.getItem("autoplay");
            if (autoplayEnabled === "true") {
                if (xPos < x) {
                    // IF the player is facing north...
                    if (direction === 0) {
                        moveRight();
                    }
                    else {
                        moveUp();
                    }
                }
                else if (xPos > x) {
                    // IF the player is facing north...
                    if (direction === 0) {
                        moveLeft();
                    }
                    else {
                        moveUp();
                    }
                }
                else {
                    if (yPos < y) {
                        if (direction == -1 || 0) {
                            moveRight();
                        }
                        else if (direction == 1 || 0) {
                            moveLeft();
                        }
                        else {
                            moveUp();
                        }
                    }
                    else if (yPos > y) {
                        if (direction == -1 || 0) {
                            moveLeft();
                        }
                        else if (direction == 1 || 0) {
                            moveRight();
                        }
                        else {
                            moveUp();
                        }
                    }
                }
            }
        }
    }   
    });