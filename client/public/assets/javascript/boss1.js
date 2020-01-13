// PREVENTS THE USER FROM USING THE BACK BUTTON IN BROWSER!
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

// SET timeout ref...
const preDefTimeout = 1000;

// SET and GET the current enemy.
localStorage.setItem("currentEnemy", "DR4G0N");
const currentEnemy = localStorage.getItem("currentEnemy");
localStorage.setItem("lastScreen", "boss1.html");


// ========================================================
// ================ ASSET DEFINITIONS =====================
// ========================================================

// Wrapper/Div containing ALL enemy body text
let enemyWrapper = $(".dragon");
let enemyLevel = 10;
let equippedWeapon = "SH0RTSW0RD";


// ========================================================
// ================ RNG TURN DECIDER ======================
// ========================================================
let turnNum = localStorage.getItem("turnNum");
// IF TURNNUM DOESN'T EXIST IN LOCAL STORAGE...
if (turnNum === null) {
    turnNum = Math.floor(Math.random() * Math.floor(20));
    console.log("RNG Turn-Decider: " + turnNum)
    if (turnNum % 2 === 0) {
        console.log("RNG WAS EVEN!")
        console.log("YOUR TURN!")
    }
    else {
        console.log("RNG WAS ODD!")
        console.log("ENEMY'S TURN!")
    }
    localStorage.setItem("turnNum", turnNum);
}
// IF TURNNUM IS AN EVEN INT...
if (turnNum % 2 === 0) {
    console.log("TURN NUM WAS EVEN = " + turnNum);
    console.log("YOUR TURN!");
}
// ELSE TURNNUM IS AN ODD INT...
else {
    console.log("TURN NUM WAS ODD = " + turnNum);
    console.log("ENEMY'S TURN!");
    setTimeout(() => {
        $("#actionsDiv").hide();
        enemyAttack();
    }, preDefTimeout);
}
// ========================================================
// ========================================================
// ========================================================


// ========================================================
// ================= GET PLAYER HEALTH ====================
// ========================================================
var currentPlayerHealth = localStorage.getItem("currentPlayerHealth");
if (currentPlayerHealth === null) {
    currentPlayerHealth = 100;
    localStorage.setItem("currentPlayerHealth", currentPlayerHealth);
}
// SET CPH text on screen...
$("#currentPlayerHealth").text(currentPlayerHealth);
// SET the width of the health bar...
$("#healthPoints").attr("style", "width: " + currentPlayerHealth + "%;");
// SET Max HP on screen...
var maxPlayerHealth = 100;
$("#maxPlayerHealth").text(maxPlayerHealth);
// ========================================================
// ========================================================
// ========================================================


// ========================================================
// ================== GET ENEMY HEALTH ====================
// ========================================================
$("enemyName").text(currentEnemy);
// GET enemy HP from local storage...
var currentEnemyHp = localStorage.getItem("currentEnemyHp");
var enemyMaxHp = 100;
if (currentEnemyHp === null) {
    currentEnemyHp = 100;
    localStorage.setItem("currentEnemyHp", currentEnemyHp);
}
// SET the width of enemy health bar...
$("#enemyHealthPoints").attr("style", "width: " + currentEnemyHp + "px;");
var enemyHpBar = $("enemyHealthPoints").css("width");
// SET enemy health text on screen...
$("#currentEnemyHealth").text(currentEnemyHp);
// ========================================================
// ========================================================
// ========================================================


    // ========================================================
    // ================ START COMBAT INTRO ====================
    // ========================================================
    
    combatIntro(turnNum,currentEnemy, currentEnemyHp);


// ========================================================
// =================== EVENT LISTENERS ====================
// ========================================================

$("button").on("mouseover", function () {
    var selectSound = new Audio("../audio/select.wav");
    selectSound.volume = .3;
    selectSound.play();
})

$("#attackButton").on("click", function() {
    playerAttack(currentEnemy);
})





// ========================================================
// ===================== COMBAT LOGIC =====================
// ========================================================


function playerAttack() {

    var selectSound = new Audio("../audio/click.wav");
    selectSound.volume = .2;
    selectSound.play();

    // Disable player actions...
    $("#actionsDiv").hide();
    // Roll for player damage...
    calcModifier("attack");
    let damageMod = parseInt(sessionStorage.getItem("damageMod"));
    rollDamage(damageMod);
    // GET that damage from session storage...
    let getDamage = sessionStorage.getItem("rollDamage");
    let damageInt = parseInt(getDamage);
    // Calc the damage modifier based on playerStr...

    var attackResponses = [
        "With determination, you swing your " + equippedWeapon +
        " at <span class='specialText'>" + currentEnemy + "<span>...",
        "You lunge aggressively with your " + equippedWeapon + " at  <span class='specialText'>" + currentEnemy + "</span> ",
    ]
    // GET a random attack response to display from array...
    var randomAtKResp = attackResponses[Math.floor(Math.random() * attackResponses.length)];
    if (!currentEnemy == "") {
        // Prepend combat text to the player CONSOLE.
        let statusText1 = $("<p class='consoleText'>").html("Attempting to attack <span class='specialText'>" + currentEnemy + "</span>...");
        let statusText2 = $("<p class='consoleText'>").html(randomAtKResp + "<br>");
        statusText1.prependTo(consoleDiv);
        setTimeout(() => {
            statusText2.prependTo(consoleDiv);
            attackAnim();
        }, preDefTimeout);
        setTimeout(() => {
            $("#damageNumber").text(damageInt + " DMG");
            if (damageInt <= 0) {
                $("#damageNumber").text("WHIFF!");
            }
            $("#damageNumber").fadeIn();
            var hitSound = new Audio("../audio/hit.wav");
            hitSound.volume = .3;
            hitSound.play();
        }, preDefTimeout * 1.5);
        setTimeout(() => {
            var dragonCrySound = new Audio("../audio/dragonCry.wav");
            dragonCrySound.volume = .5;
            dragonCrySound.play();
        }, preDefTimeout * 1.8);
        setTimeout(() => {
            let statusText1 = $("<p class='consoleText'>").html("You hit <span class='specialText'>" + currentEnemy +
                " </span>for " + damageInt + " DMG!");
            statusText1.prependTo(consoleDiv);
            currentEnemyHp -= damageInt;
            localStorage.setItem("currentEnemyHp", currentEnemyHp);
            console.log("Enemy Health = " + currentEnemyHp);
            $("#enemyHealthPoints").attr("style", "width: " + currentEnemyHp + "px;");
            $("#currentEnemyHealth").text(currentEnemyHp);
            console.log(currentEnemyHp)
            sessionStorage.setItem("currentEnemyHp", currentEnemyHp);
            enemyHealthCheck(currentEnemy, currentEnemyHp);
        }, preDefTimeout * 2);
        setTimeout(() => {
            let currentEnemyHp = sessionStorage.getItem("currentEnemyHp");
            const enemyHpInt = parseInt(currentEnemyHp);
            if (enemyHpInt > 0) {
                turnNum++;
                localStorage.setItem("turnNum", turnNum);
                enemyAttack();
            }
            else {
            }
        }, preDefTimeout * 3);
        
    }
    else {
        let statusText1 = $("<p class='consoleText'>").html("ERR: THERE IS NOTHING TO ATTACK!!!");
        statusText1.prependTo(consoleDiv);
    }
}

function combatIntro(turnNum, currentEnemy, currentEnemyHp) {
    // DISABLES player actions...
    $("button").attr("disabled", "true");
    if (!turnNum === null || currentEnemyHp < enemyMaxHp) {
        $(".introText").addClass("container");
        $(".introText").html("<h1 class='text-center flash'>CONTINUE FIGHTING<br><span class='specialText'>" + currentEnemy + " </span>LEVEL " + enemyLevel +"</h1>");
    }
    $(".introText").fadeIn(800);
    setTimeout(() => {
        $(enemyWrapper).fadeIn(2000);
        var dragonSound = new Audio("../audio/dragon.wav");
        dragonSound.volume = .5;
        dragonSound.play();
    }, preDefTimeout * .8);
    setTimeout(() => {
        $(".introText").fadeOut(800);
        $("button").removeAttr("disabled");
    }, preDefTimeout * 2.3);
}

function calcModifier(modType) {
    // IF the modifier requested is for an ATTACK roll.
    if (modType === "attack") {
        var playerStr = localStorage.getItem("playerStr");
        let damageMod;
        if (playerStr <= 9) {damageMod = -1}
        else if (playerStr === 10 || playerStr === 11) {damageMod = 0}
        else if (playerStr === 12 || playerStr === 13) {damageMod = 1}
        else if (playerStr === 14 || playerStr === 15) {damageMod = 2}
        else if (playerStr === 16 || playerStr === 17) {damageMod = 3}
        else if (playerStr >=18 ) {damageMod = 4}
        sessionStorage.setItem("damageMod", damageMod);
        console.log("damageMod: " + damageMod);
    }
}

function rollDamage(damageMod) {
    console.log("\nSTR MODIFIER: " + damageMod);
    var min = Math.ceil(0);
    var max = Math.floor(12);
    let calcDamage = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("BASE DAMAGE ROLL: " + calcDamage);
    calcDamage += damageMod;
    console.log("BASE WITH DAMAGE MODIFIER: " + calcDamage);
    if (calcDamage > 9) {
        console.log("***CRITICAL***\nROLL > 9!")
        let min = Math.ceil(2);
        let max = Math.floor(6);
        const critDamage = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("CRIT BONUS: " + critDamage);
        $("#critMod").text("CRIT! +" + critDamage + "DMG");
        $("#critMod").fadeIn();
        setTimeout(() => {
            $("#critMod").fadeOut();
        }, 2000);
        calcDamage += critDamage;
        console.log("DAMAGE TOTAL: " + calcDamage +"\n");
    }
    sessionStorage.setItem("rollDamage", calcDamage);
}


function attackAnim() {
    setTimeout(() => {
        $("#swordDiv").addClass("swordSwing");
        $("#swordDiv").fadeIn();
    }, preDefTimeout - 500);
    setTimeout(() => {
        $("#swordDiv").fadeOut();
        $("#damageNumber").fadeOut(1000);
    }, preDefTimeout * 2);
    setTimeout(() => {
        $("#swordDiv").removeClass("swordSwing");
    }, preDefTimeout * 2.5);
}

function enemyAttack() {
    var enemyAttackResponses = [
        "<span class='specialText'>" + currentEnemy + "</span> launches into an arial assault!",
        "<span class='specialText'>" + currentEnemy + "</span> spits out a deadly breath of flame!",
    ]
    var randomEnemyAtKResp = enemyAttackResponses[Math.floor(Math.random() * enemyAttackResponses.length)];
    setTimeout(() => {
        let statusText1 = $("<p class='consoleText'>").html("<span class='specialText'>" + currentEnemy + " </span>is preparing to attack!");
        statusText1.prependTo(consoleDiv);
    }, preDefTimeout);
    setTimeout(() => {
        $(".dragon").addClass("dragonAttack");
        $(".dragonRightClaw").addClass("dragonAttackArm");
        var dragonAttackSound = new Audio("../audio/dragonAttack.wav");
        dragonAttackSound.volume = .2;
        dragonAttackSound.play();
        let statusText1 = $("<p class='consoleText'>").html(randomEnemyAtKResp);
        statusText1.prependTo(consoleDiv);
    }, preDefTimeout * 1.5);
    setTimeout(() => {
        rollEnemyDamage();
        var getEnemyDamage = sessionStorage.getItem("rollEnemyDamage");
        var enemyDamageTotal = parseInt(getEnemyDamage);
        if (enemyDamageTotal > 0) {
            $("#enemyDamageNumber").text(enemyDamageTotal + " DMG");
        }
        else {
            $("#enemyDamageNumber").text("WHIFF!");
        }
        let currentPlayerHealth = localStorage.getItem("currentPlayerHealth");
        currentPlayerHealth -= enemyDamageTotal;
        localStorage.setItem("currentPlayerHealth", currentPlayerHealth);
        let checkPlayerDeath = localStorage.getItem("currentPlayerHealth");
        if (checkPlayerDeath <= 0) {
            playerDeath(currentEnemy);
        }
        let statusText1 = $("<p class='consoleText'>").html("<span class='specialText'>" + currentEnemy +
            "</span> attacked for " + enemyDamageTotal + " DMG!");
        $("#healthPoints").attr("style", "width: " + currentPlayerHealth + "%;");
        statusText1.prependTo(consoleDiv);
        $("#enemyDamageNumber").fadeIn();
    }, preDefTimeout * 2);
    setTimeout(() => {
        let currentPlayerHealth = localStorage.getItem("currentPlayerHealth");
        $("#currentPlayerHealth").text(currentPlayerHealth);
    }, preDefTimeout * 2.5);
    setTimeout(() => {
        $("#enemyDamageNumber").fadeOut(1000);
    }, preDefTimeout * 3);
    setTimeout(() => {
        $(".dragon").removeClass("dragonAttack")
        $(".dragonRightClaw").removeClass("dragonAttackArm")
        $("#actionsDiv").show();
        turnNum--;
        localStorage.setItem("turnNum", turnNum);
    }, preDefTimeout * 3.5);
}

function rollEnemyDamage() {
    var eMin = Math.ceil(5);
    var eMax = Math.floor(12);
    const calcEnemyDamage = Math.floor(Math.random() * (eMax - eMin + 1)) + eMin;
    sessionStorage.setItem("rollEnemyDamage", calcEnemyDamage);
}

function enemyHealthCheck(currentEnemy, currentEnemyHp) {
    currentEnemyHp = localStorage.getItem("currentEnemyHp");
    if (currentEnemyHp <= 0) {
        var slaySound = new Audio("../audio/slay.wav");
        slaySound.volume = .2;
        slaySound.play();
        rewardGold();
        localStorage.removeItem("currentEnemyHp");
        $("#enemyHUD").append("<div class='col-12'><h1><span class='specialText'>" + currentEnemy +
            " </span>DEFEATED!</h1></div>")
        $("#enemyName").hide();
        $("#enemyHpText").hide();
        $("#enemyHealthPoints").hide();
        $(".dragon").fadeOut(3000);
        $(".consoleText").remove();
        $("#winText").fadeIn(1000);
        $("#continueMessage").fadeIn(1300);
        localStorage.removeItem("turnNum");
    }
}

function rewardGold() {
    const goldEarned = Math.floor(Math.random() * 950) + 100;
    console.log("GOLD EARNED: " + goldEarned);
    let playerGold = parseInt(localStorage.getItem("playerGold"));
    console.log("PLAYER GOLD (BEFORE): " + playerGold)
    let newGold = playerGold += goldEarned;
    console.log("PLAYER GOLD (AFTER): " + newGold)
    localStorage.setItem("playerGold", newGold);
    $("#goldLooted").text(goldEarned)
}

function playerDeath(currentEnemy) {
    var slaySound = new Audio("../audio/slay.wav");
    slaySound.volume = .2;
    slaySound.play();
    localStorage.setItem("deathBy", currentEnemy)
    $("#wrapper").addClass("shake");
    $("#wrapper").fadeOut(2000);
    setTimeout(() => {
        window.location.href = "../html/deathScreen.html";
    }, 3000);
}

function updateStats() {

    // ROOMS CLEARED...
    var roomsCleared = localStorage.getItem("roomsCleared");
    if (roomsCleared === null) {
        roomsCleared = 0;
    }
    roomsCleared += 1;
    localStorage.setItem("roomsCleared", roomsCleared);

    // BOSSES SLAIN...
    var bossesSlain = localStorage.getItem("bossesSlain");
    if (bossesSlain === null) {
        bossesSlain = 0
    }
    bossesSlain += 1;
    localStorage.setItem("bossesSlain", bossesSlain);

}

$("#consoleTitle").on("keydown", function (e) {
    // IF ENTER IS PRESSED WHILE IN THE CONSOLE...
    if (e.which === 13) {
        var consoleCommand = $(this).val().trim();
        if (consoleCommand === "p.win") {
            let currentEnemyHp = 0;
            $("#enemyHealthPoints").attr("style", "width: " + currentEnemyHp + "px;");
            $("#currentEnemyHealth").text(currentEnemyHp);
            localStorage.setItem("currentEnemyHp", 0);
            $("#actionsDiv").hide();
            enemyHealthCheck();
            $("#consoleDiv").prepend("<p class='consoleText'>===============================</p>");
            $("#consoleDiv").prepend("<p class='consoleText'><i>Console Command: p.win</i></p>");
            $("#consoleDiv").prepend("<p class='consoleText'><u>YOU WIN!</u></p>");
            $("#consoleDiv").prepend("<p class='consoleText'>===============================</p>");
        }
        else if (consoleCommand.includes("p.heal")) {
            let inputArr = consoleCommand.split(" ");
            let healAmount = inputArr[1];
            if (healAmount) {
                $("#consoleDiv").prepend("<p class='consoleText'>===============================</p>");
                $("#consoleDiv").prepend("<p class='consoleText'><i>Console Command: p.heal</i></p>");
                let currentPlayerHealth = localStorage.getItem("currentPlayerHealth");
                let newHealth = parseInt(currentPlayerHealth) + parseInt(healAmount);
                if (newHealth <= 100) {
                    $("#consoleDiv").prepend("<p class='consoleText'><u>PLAYER HEALED " + healAmount + " HP</u></p>");
                    localStorage.setItem("currentPlayerHealth", newHealth);
                    $("#currentPlayerHealth").text(newHealth);
                    $("#healthPoints").attr("style", "width: " + newHealth + "%;");
                }
                else {
                    $("#consoleDiv").prepend("<p class='consoleText'><u>PLAYER HEALED TO FULL HP</u></p>");
                    localStorage.setItem("currentPlayerHealth", 100);
                    $("#currentPlayerHealth").text(100);
                    $("#healthPoints").attr("style", "width: " + 100 + "%;");
                }
                inputArr = [];
                $("#consoleDiv").prepend("<p class='consoleText'>===============================</p>");
            }
            else {
                $("#consoleDiv").prepend("<p class='consoleText'><i>*ERROR* NO HEAL AMOUNT ENTERED...</i></p>");
            }
        }
        else if (consoleCommand === "p.kill") {
            localStorage.setItem("currentPlayerHealth", 0);
            $("#currentPlayerHealth").text(0);
            $("#healthPoints").attr("style", "width: " + 0 + "%;");
            localStorage.setItem("deathBy", currentEnemy);
            playerDeath();
        }
        // IF $("#consoleTitle").val("attack") AND it's the PLAYERS turn.
        else if (consoleCommand === "attack" && turnNum % 2 === 0) {
            playerAttack();
        }
        // IF $("#consoleTitle").val("defend") AND it's the PLAYERS turn.
        else if (consoleCommand === "defend" && turnNum % 2 === 0) {
            playerDefend();
        }
        else if (consoleCommand === "log.health") {
            var displayHealth = localStorage.getItem("currentPlayerHealth");
            $("#consoleDiv").prepend("<p class='consoleText'>===============================</p>");
            $("#consoleDiv").prepend("<p class='consoleText'><i><u>CURRENT PLAYER HEALTH</u></i>: = " + displayHealth + "</p>");
            $("#consoleDiv").prepend("<p class='consoleText'>===============================</p>");
        }
        else {
            $("#consoleDiv").prepend("<p class='consoleText'><i>*ERROR* INVALD CONSOLE COMMAND...</i></p>");
        }
        $(this).val("");
    }
})