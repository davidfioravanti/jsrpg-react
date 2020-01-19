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

var combatSound = new Audio("../audio/combat2.wav");
combatSound.volume = 0;
combatSound.play();
$(combatSound).animate({
    volume: musicVolume
}, 1000, function () {
});

localStorage.setItem("seenHellbat", true);

var clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
});

document.dispatchEvent(clickEvent);

const preDefTimeout = 1000;

localStorage.setItem("currentEnemy", "H3LLB4T");
var currentEnemy = localStorage.getItem("currentEnemy");
const consoleDiv = $("#consoleDiv");

let turnNum = localStorage.getItem("turnNum")
if (turnNum === null || turnNum === "null") {
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
if (turnNum % 2 === 0) {
    console.log("TURN NUM WAS EVEN = " + turnNum);
    console.log("YOUR TURN!");
}
else {
    console.log("TURN NUM WAS ODD = " + turnNum);
    console.log("ENEMY'S TURN!");
    setTimeout(() => {
        $("#actionsDiv").hide();
        enemyAttack();
    }, preDefTimeout);
}

localStorage.setItem("lastScreen", "hellbat.html");

var currentPlayerHealth = localStorage.getItem("currentPlayerHealth");
if (currentPlayerHealth === null || currentPlayerHealth === "null") {
    currentPlayerHealth = 100;
    localStorage.setItem("currentPlayerHealth", currentPlayerHealth);
}
$("#currentPlayerHealth").text(currentPlayerHealth);
$("#healthPoints").attr("style", "width: " + currentPlayerHealth + "%;");
var maxPlayerHealth = 100;
$("#maxPlayerHealth").text(maxPlayerHealth);

$("enemyName").text(currentEnemy);
var currentEnemyHp = localStorage.getItem("currentEnemyHp");
if (currentEnemyHp === null || currentEnemyHp === "null") {
    currentEnemyHp = 30;
    localStorage.setItem("currentEnemyHp", currentEnemyHp);
}
$("#enemyHealthPoints").attr("style", "width: " + currentEnemyHp + "px;");
var enemyHpBar = $("enemyHealthPoints").css("width");
$("#currentEnemyHealth").text(currentEnemyHp);
var equippedWeapon;
var attackDamage;
var damageTotal;

var attackResponses = [
]
var randomAtKResp;

/* ===================================================================
============================= COMBAT INTRO ===========================
=================================================================== */

$("button").attr("disabled", "true");
setTimeout(() => {
    $(".eyeball").css("opacity", "1");
    $("#enemyName").fadeIn(1000);
    if (!turnNum === null || currentEnemyHp < 30) {
        $(".introText").addClass("container");
        $(".introText").html("<h1 class='text-center flash'>CONTINUE FIGHTING<br>" + currentEnemy + " LEVEL 1</h1>")
    }
    $(".introText").fadeIn(800);
}, preDefTimeout * .8);
setTimeout(() => {
    $(".introText").fadeOut(800);
    $("button").removeAttr("disabled");
}, preDefTimeout * 2.3);

/* ===================================================================
============================= COMBAT LOGIC ===========================
=================================================================== */


$("#consoleDiv").on("scroll")
/* ===========================================
================ PLAYER ATTACK ===============
=========================================== */

$("button").on("mouseover", function () {
    var selectSound = new Audio("../audio/select.wav");
    selectSound.volume = sfxVolume;
    selectSound.play();
})
$("#attackButton").on("click", playerAttack = function () {
    var selectSound = new Audio("../audio/click.wav");
    selectSound.volume = sfxVolume;
    selectSound.play();
    console.log("=======================");
    console.log("#attackButton CLICKED!");

    // Temporarily disable player actions...
    $("#actionsDiv").hide();
    console.log("buttonDisable(); RUN!");
    console.log("PLAYER ACTIONS DISABLED");

    // Set vars to hold entity names...
    let currentEnemy = "H3LLB4T";
    let currentEnemyHealth;
    let maxEnemyHealth = 50;
    let equippedWeapon = "SH0RTSW0RD";

    // Set vars to hold combat calcs.
    let modifier = 2;

    rollDamage();
    const getDamage = sessionStorage.getItem("rollDamage");
    const damageInt = parseInt(getDamage);
    const damageTotal = damageInt + modifier;

    // Create an array of flavor text to choose from...
    var attackResponses = [
        "With determination, you swing your " + equippedWeapon +
        " at " + currentEnemy + "...",
        "You lunge aggressively with your " + equippedWeapon + " at  " + currentEnemy + " ",
    ]
    // Create a ref to a random index of the responses array...
    var randomAtKResp = attackResponses[Math.floor(Math.random() * attackResponses.length)];

    if (!currentEnemy == "") {
        let statusText1 = $("<p class='consoleText'>").html("Attempting to attack " + currentEnemy + "...");
        let statusText2 = $("<p class='consoleText'>").html(randomAtKResp + "<br>");
        statusText1.prependTo(consoleDiv);
        console.log("RUNNING attackAnim();")
        attackAnim();
        setTimeout(() => {
            statusText2.prependTo(consoleDiv);
            attackAnim();
        }, preDefTimeout);
        setTimeout(() => {
            $("#damageNumber").text(damageTotal + " DMG");
            $("#damageNumber").fadeIn();
            var hitSound = new Audio("../audio/hit.wav");
            hitSound.volume = sfxVolume;
            hitSound.play();
        }, preDefTimeout * 1.5);
        setTimeout(() => {
            var hellbatCrySound = new Audio("../audio/hellbatCrySound.wav");
            hellbatCrySound.volume = sfxVolume;
            hellbatCrySound.play();
        }, preDefTimeout * 1.8);
        setTimeout(() => {
            let statusText1 = $("<p class='consoleText'>").html("You hit " + currentEnemy +
                " for " + damageTotal + " DMG!");
            statusText1.prependTo(consoleDiv);
            currentEnemyHp -= damageTotal;
            localStorage.setItem("currentEnemyHp", currentEnemyHp);
            console.log("Enemy Health = " + currentEnemyHp);
            $("#enemyHealthPoints").attr("style", "width: " + currentEnemyHp + "px;");
            $("#currentEnemyHealth").text(currentEnemyHp);
            console.log(currentEnemyHp)
            sessionStorage.setItem("currentEnemyHp", currentEnemyHp);
            enemyHealthCheck();
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

    function attackAnim() {
        setTimeout(() => {
            $("#swordDiv").addClass("swordSwing");
            $("#swordDiv").fadeIn();
        }, preDefTimeout);
        setTimeout(() => {
            $("#swordDiv").fadeOut();
            $("#damageNumber").fadeOut(1000);
        }, preDefTimeout * 2);
        setTimeout(() => {
            $("#swordDiv").removeClass("swordSwing");
        }, preDefTimeout * 2.5);
    }
})

function enemyAttack() {
    var enemyAttackResponses = [
        currentEnemy + " swoops in for an aerial assault!",
        currentEnemy + " bares it's gruesome fangs and closes in!",
    ]
    var randomEnemyAtKResp = enemyAttackResponses[Math.floor(Math.random() * enemyAttackResponses.length)];
    setTimeout(() => {
        let statusText1 = $("<p class='consoleText'>").html(currentEnemy + " is preparing to attack!");
        statusText1.prependTo(consoleDiv);
    }, preDefTimeout);
    setTimeout(() => {
        $(".eyeball").addClass("eyeballAttack");
        var hellbatAttackSound = new Audio("../audio/hellbatAttack.wav");
        hellbatAttackSound.volume = sfxVolume;
        hellbatAttackSound.play();
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
            playerDeath();
        }
        let statusText1 = $("<p class='consoleText'>").html(currentEnemy +
            " attacked for " + enemyDamageTotal + " DMG!");
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
        $(".eyeball").removeClass("eyeballAttack");
        $("#actionsDiv").show();
        if (autoplayEnabled === "true") {
            setTimeout(() => {
                autoplay();
            }, 2000);
        }
        turnNum--;
        localStorage.setItem("turnNum", turnNum);
    }, preDefTimeout * 3.5);
}
/* ===========================================
================ PLAYER DEFEND ===============
=========================================== */

$("#defendButton").on("click", playerDefend = function () {
    $("#actionsDiv").hide();
    currentEnemy = "H3LLB4T"
    let statusText = $("<p class='consoleText'>").html("Preparing to block " + currentEnemy + "'s attack!");
    statusText.prependTo(consoleDiv);
    rollDefense();
    var getDefense = sessionStorage.getItem("rollDefense");
    var defenseInt = parseInt(getDefense);
    setTimeout(() => {
        statusText = $("<p class='consoleText'>").html("Blocking up to " + defenseInt + " DMG!");
        statusText.prependTo(consoleDiv);
    }, preDefTimeout);
    setTimeout(() => {
        enemyAttackDef();
    }, preDefTimeout * 1.5);


    function enemyAttackDef() {
        var enemyAttackResponses = [
            currentEnemy + " swoops in for an aerial assault!",
            currentEnemy + " bares it's gruesome fangs and closes in!",
        ]
        var randomEnemyAtKResp = enemyAttackResponses[Math.floor(Math.random() * enemyAttackResponses.length)];
        setTimeout(() => {
            let statusText1 = $("<p class='consoleText'>").html(currentEnemy + " is preparing to attack!");
            statusText1.prependTo(consoleDiv);
        }, preDefTimeout);
        setTimeout(() => {
            $(".eyeball").addClass("eyeballAttack");
            var hellbatAttackSound = new Audio("../audio/hellbatAttack.wav");
            hellbatAttackSound.volume = sfxVolume;
            hellbatAttackSound.play();
            let statusText1 = $("<p class='consoleText'>").html(randomEnemyAtKResp);
            statusText1.prependTo(consoleDiv);
        }, preDefTimeout * 1.5);
        setTimeout(() => {
            $("#shield").addClass("shieldSpin");
            $(".shieldDiv").css("opacity", "1");
        }, preDefTimeout * 1.6);
        setTimeout(() => {
            rollEnemyDamage();
            var getEnemyDamage = sessionStorage.getItem("rollEnemyDamage");
            var enemyDamageInt = parseInt(getEnemyDamage);
            var getDefense = sessionStorage.getItem("rollDefense");
            var defenseInt = parseInt(getDefense);
            var enemyDamageTotal = parseInt(getEnemyDamage) - defenseInt;
            if (enemyDamageTotal > 0) {
                $("#enemyDamageNumber").text(enemyDamageTotal + " DMG");
            }
            else {
                $("#enemyDamageNumber").text("BLOCKED!");
            }
            if (enemyDamageTotal < 0) {
                enemyDamageTotal = 0;
            }
            let currentPlayerHealth = localStorage.getItem("currentPlayerHealth");
            currentPlayerHealth -= enemyDamageTotal;
            let statusText1 = $("<p class='consoleText'>").html(currentEnemy +
                " attempts to attack for " + enemyDamageInt + " DMG!");
            let statusText2 = $("<p class='consoleText'>").html(currentEnemy +
                " attacked for " + enemyDamageTotal + " DMG!");
            statusText1.prependTo(consoleDiv);
            statusText2.prependTo(consoleDiv);
            $("#healthPoints").attr("style", "width: " + currentPlayerHealth + "%;");
            $("#enemyDamageNumber").fadeIn();
        }, preDefTimeout * 2);
        setTimeout(() => {
            $("#currentPlayerHealth").text(currentPlayerHealth);
        }, preDefTimeout * 2.5);
        setTimeout(() => {
            $("#enemyDamageNumber").fadeOut(1000);
        }, preDefTimeout * 3);
        setTimeout(() => {
            $("#shield").removeClass("shieldSpin");
            $(".shieldDiv").css("opacity", "0");
            $(".eyeball").removeClass("eyeballAttack");
            $("#actionsDiv").show();
            if (autoplayEnabled === "true") {
                setTimeout(() => {
                    autoplay();
                }, 2000);
            }
        }, preDefTimeout * 3.5);
    }

})

$("#dungeonDoor").on("click", function () {
    window.location.href = "../html/traverse.html";
})

function rewardGold() {
    const goldEarned = Math.floor(Math.random() * 100) + 1;
    console.log("GOLD EARNED: " + goldEarned);
    let playerGold = parseInt(localStorage.getItem("playerGold"));
    console.log("PLAYER GOLD (BEFORE): " + playerGold)
    let newGold = playerGold += goldEarned;
    console.log("PLAYER GOLD (AFTER): " + newGold)
    localStorage.setItem("playerGold", newGold);
    $("#winText").html("<span style='margin-left: -20px;'>YOU LOOTED " + goldEarned + " GOLD!</span>")
    $("#winText").fadeIn(1000);
}

function updateStats() {

    // ROOMS CLEARED...
    var roomsCleared = parseInt(localStorage.getItem("roomsCleared"));
    roomsCleared += 1;
    localStorage.setItem("roomsCleared", roomsCleared);

    // MONSTERS SLAIN...
    var monstersSlain = parseInt(localStorage.getItem("monstersSlain"));
    monstersSlain += 1;
    localStorage.setItem("monstersSlain", monstersSlain);

}

function rollDefense() {
    var min = Math.ceil(0);
    var max = Math.floor(6);
    const calcDefense = Math.floor(Math.random() * (max - min + 1)) + min;
    sessionStorage.setItem("rollDefense", calcDefense);
}
function rollDamage() {
    var min = Math.ceil(0);
    var max = Math.floor(10);
    const calcDamage = Math.floor(Math.random() * (max - min + 1)) + min;
    sessionStorage.setItem("rollDamage", calcDamage);
}

function rollEnemyDamage() {
    var eMin = Math.ceil(0);
    var eMax = Math.floor(6);
    const calcEnemyDamage = Math.floor(Math.random() * (eMax - eMin + 1)) + eMin;
    sessionStorage.setItem("rollEnemyDamage", calcEnemyDamage);
}

function enemyHealthCheck() {
    currentEnemyHp = localStorage.getItem("currentEnemyHp");
    currentEnemy = localStorage.getItem("currentEnemy");
    if (currentEnemyHp <= 0) {
        var slaySound = new Audio("../audio/slay.wav");
        slaySound.volume = sfxVolume;
        slaySound.play();
        rewardGold();
        updateStats();
        localStorage.removeItem("currentEnemyHp");
        $("#enemyHUD").append("<div class='col-12'><h1>" + currentEnemy +
            " DEFEATED!</h1></div>")
        $("#enemyName").hide();
        $("#enemyHpText").hide();
        $("#enemyHealthPoints").hide();
        $(".eyeball").remove();
        $(".consoleText").remove();
        $("#continueMessage").fadeIn(1300);
        $("#dungeonDoor").fadeIn(2000);
        setTimeout(() => {
            if (autoplayEnabled === "true") {
                window.location.href = "../html/traverse.html";
            }
        }, 3500);
        localStorage.removeItem("turnNum");
    }
}

function playerDeath() {
    localStorage.setItem("deathBy", "H3LLB4T");
    var slaySound = new Audio("../audio/slay.wav");
    slaySound.volume = sfxVolume;
    slaySound.play();
    $("#wrapper").addClass("shake");
    $("#wrapper").fadeOut(2000);
    setTimeout(() => {
        window.location.href = "../html/deathScreen.html";
    }, 3000);
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
            var inputArr = consoleCommand.split(" ");
            let healAmount = inputArr[1];
            if (healAmount) {
                $("#consoleDiv").prepend("<p class='consoleText'>===============================</p>");
                $("#consoleDiv").prepend("<p class='consoleText'><i>Console Command: p.heal</i></p>");
                let currentPlayerHealth = localStorage.getItem("currrentPlayerHealth")
                let newHealth = currentPlayerHealth += healAmount;
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
            playerDeath();
        }
        // IF $("#consoleTitle").val("attack") AND it's the PLAYERS turn.
        else if (consoleCommand === "attack" || consoleCommand === "atk" && turnNum % 2 === 0) {
            playerAttack();
        }
        // IF $("#consoleTitle").val("defend") AND it's the PLAYERS turn.
        else if (consoleCommand === "defend" || consoleCommand === "def" && turnNum % 2 === 0) {
            playerDefend();
        }
        else {
            $("#consoleDiv").prepend("<p class='consoleText'><i>*ERROR* INVALD CONSOLE COMMAND...</i></p>");
        }
        $(this).val("");
    }
})

let autoplayEnabled = localStorage.getItem("autoplay");
setTimeout(() => {
    if (autoplayEnabled === "true" && turnNum % 2 === 0) {
        autoplay();
    }
}, 3000);

function autoplay() {
    let autoAction = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    console.log(`AUTOPLAY: ${autoAction}`);
    if (autoAction === 4) {
        playerDefend();
    }
    else {
        playerAttack();
    }
} 