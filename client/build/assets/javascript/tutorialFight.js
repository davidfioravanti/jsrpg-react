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
console.log("Music Vol: " + musicVolume);
let sfxVolume = localStorage.getItem("sfxVolume");
if (sfxVolume === null) {
    sfxVolume = 1;
    localStorage.setItem("sfxVolume", sfxVolume);
}
console.log("SFX Vol: " + sfxVolume);
var combatSound = new Audio("../audio/combat2.wav");
combatSound.volume = 0;
combatSound.play();
$(combatSound).animate({
    volume: musicVolume
}, 1000, function () {
});
combatSound.loop = true;

combatSound.onended = function () {
    combatSound.play();
}

localStorage.setItem("seenHellbat", true);
localStorage.setItem("lastScreen", "tutorialFight.html");

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

let turnNum = 2;

localStorage.setItem("lastScreen", "tutorialFight.html");

var currentPlayerHealth = 100;
$("#currentPlayerHealth").text(currentPlayerHealth);
$("#healthPoints").attr("style", "width: " + currentPlayerHealth + "%;");
var maxPlayerHealth = 100;
$("#maxPlayerHealth").text(maxPlayerHealth);

$("enemyName").text(currentEnemy);
var currentEnemyHp = localStorage.getItem("currentEnemyHp");
if (currentEnemyHp === null) {
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
    startTutorial();
}, preDefTimeout * 2.3);


function startTutorial() {
    $("#enemyWrapper").animate({ opacity: .2 });
    $("#enemyHUDWrapper").animate({ opacity: .2 });
    $("#playerHUDWrapper").animate({ opacity: .2 });
    $("#backgroundWrapper").animate({ opacity: .2 });
    setTimeout(() => {
        $(".l1").fadeIn();
    }, 2000);
    setTimeout(() => {
        $(".l1").fadeOut();
    }, 5500);
    setTimeout(() => {
        $(".l2").fadeIn();
    }, 6500);
    setTimeout(() => {
        $(".l2").fadeOut();
    }, 9500);
    setTimeout(() => {
        $("#enemyWrapper").animate({ opacity: 1 });
    }, 10000);
    setTimeout(() => {
        $(".l3").fadeIn();
    }, 11000);
    setTimeout(() => {
        $(".l3").fadeOut();
        $("#enemyWrapper").animate({ opacity: .2 });
    }, 13500);
    setTimeout(() => {
        $("#enemyHUDWrapper").animate({ opacity: 1 });
    }, 14500);
    setTimeout(() => {
        $(".l4").fadeIn();
    }, 15000);
    setTimeout(() => {
        $(".l4").fadeOut();
        $("#enemyHUDWrapper").animate({ opacity: .2 });
    }, 18500);
    setTimeout(() => {
        $("#playerHUDWrapper").animate({ opacity: 1 });
    }, 19500);
    setTimeout(() => {
        $(".l5").fadeIn();
    }, 20000);
    setTimeout(() => {
        $(".l5").fadeOut();
    }, 22500);
    setTimeout(() => {
        $(".l6").fadeIn();
    }, 24500);
    setTimeout(() => {
        $(".l6").fadeOut();
        $("#enemyWrapper").animate({ opacity: 1 });
        $("#enemyHUDWrapper").animate({ opacity: 1 });
        $("#backgroundWrapper").animate({ opacity: 1 });
        $("button").removeAttr("disabled");
        let autoplayEnabled = localStorage.getItem("autoplay");
        setTimeout(() => {
            if (autoplayEnabled === "true" && turnNum % 2 === 0) {
                autoplay();
            }
        }, 3000);
    }, 27500);
}



/* ===================================================================
============================= COMBAT LOGIC ===========================
=================================================================== */


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
        let autoplayEnabled = localStorage.getItem("autoplay");
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
            let autoplayEnabled = localStorage.getItem("autoplay");
            if (autoplayEnabled === "true") {
                setTimeout(() => {
                    autoplay();
                }, 2000);
            }
        }, preDefTimeout * 3.5);
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
        localStorage.setItem("currentEnemyHp", 30);
        $("#enemyHUD").append("<div class='col-12'><h1>" + currentEnemy +
            " DEFEATED!</h1></div>")
        $("#enemyName").hide();
        $("#enemyHpText").hide();
        $("#enemyHealthPoints").hide();
        $(".eyeball").remove();
        $(".consoleText").remove();
        $("#continueMessage").fadeIn(1300);
        $("#dungeonDoor").fadeIn(2000);
        localStorage.removeItem("turnNum");
        tutorialEnding();
    }
}

function tutorialEnding() {
    $("#enemyWrapper").animate({ opacity: .05 });
    $("#enemyHUDWrapper").animate({ opacity: .05 });
    $("#playerHUDWrapper").animate({ opacity: .05 });
    $("#backgroundWrapper").animate({ opacity: .05 });
    $("#winScreenWrapper").animate({ opacity: .05 });
    $("#tutorialWrapper").css("top", "100px")
    setTimeout(() => {
        $(".l7").fadeIn();
    }, 1500);
    setTimeout(() => {
        $(".l7").fadeOut();
    }, 4500);
    setTimeout(() => {
        $(".l8").fadeIn();
    }, 5500);
    setTimeout(() => {
        $(".l8").fadeOut();
    }, 8500);
    setTimeout(() => {
        $(".l9").fadeIn();
    }, 9500);
    setTimeout(() => {
        $(".l9").fadeOut();
    }, 12500);
    setTimeout(() => {
        $(".l10").fadeIn();
    }, 13500);
    setTimeout(() => {
        $(".l10").fadeOut();
    }, 16500);
    setTimeout(() => {
        $(".l11").fadeIn();
    }, 17500);
    setTimeout(() => {
        $(combatSound).animate({
            volume: 0
        }, 1000, function () {
        });
        $(".l11").fadeOut();
    }, 20500);
    setTimeout(() => {
        $(".l12").fadeIn();
        var evilSound = new Audio("../audio/gameOver.wav");
        evilSound.volume = musicVolume;
        evilSound.play();
    }, 21500);
    setTimeout(() => {
        $(".l12").fadeOut();
    }, 23500);
    setTimeout(() => {
        $(".l13").fadeIn();
    }, 24500);
    setTimeout(() => {
        $(".l13").fadeOut();
    }, 27500);
    setTimeout(() => {
        whisper();
    }, 28500);
    setTimeout(() => {
        currentPlayerHealth = 100;
        localStorage.setItem("currentPlayerHealth", currentPlayerHealth);
        $("#currentPlayerHealth").text(currentPlayerHealth);
        $("#healthPoints").attr("style", "width: " + currentPlayerHealth + "%;");
        var powerupSound = new Audio("../audio/powerup.wav");
        powerupSound.volume = sfxVolume;
        powerupSound.play();
        $("#enemyWrapper").animate({ opacity: 1 });
        $("#enemyHUDWrapper").animate({ opacity: 1 });
        $("#playerHUDWrapper").animate({ opacity: 1 });
        $("#backgroundWrapper").animate({ opacity: 1 });
        $("#winScreenWrapper").animate({ opacity: 1 });
    }, 41000);
    setTimeout(() => {
        $("#dungeonDoor").on("click", exitTutorial = function () {
            window.location.href = "../html/traverse.html";
        })
    }, 42000);
    setTimeout(() => {
        let autoplayEnabled = localStorage.getItem("autoplay");
        if(autoplayEnabled === "true") {
            exitTutorial();
        }
    }, 45000);
}

function whisper() {
    setTimeout(() => { $(".w1").fadeIn() }, 200);
    setTimeout(() => { $(".w2").fadeIn(); }, 400);
    var fate1Sound = new Audio("../audio/fate1.wav");
    fate1Sound.volume = 1;
    fate1Sound.play();
    setTimeout(() => { $(".w3").fadeIn(); $(".w1").removeClass("specialText") }, 600);
    setTimeout(() => { $(".w4").fadeIn(); $(".w2").removeClass("specialText") }, 800);
    setTimeout(() => { $(".w5").fadeIn(); $(".w3").removeClass("specialText") }, 1000);
    setTimeout(() => { $(".w6").fadeIn(); $(".w4").removeClass("specialText") }, 1200);
    setTimeout(() => { $(".w7").fadeIn(); $(".w5").removeClass("specialText"); }, 1400);
    setTimeout(() => { $(".w8").fadeIn(); $(".w6").removeClass("specialText"); }, 1600);
    setTimeout(() => { $(".w9").fadeIn(); $(".w7").removeClass("specialText"); }, 1800);
    setTimeout(() => { $(".w10").fadeIn(); $(".w8").removeClass("specialText"); }, 2000);
    setTimeout(() => { $(".w11").fadeIn(); $(".w9").removeClass("specialText"); }, 2200);
    setTimeout(() => { $(".w12").fadeIn(); $(".w10").removeClass("specialText"); }, 2400);
    setTimeout(() => { $(".w11").removeClass("specialText"); }, 2600);
    setTimeout(() => { $(".w12").removeClass("specialText"); }, 2800);
    setTimeout(() => { $(".w1").fadeOut() }, 3000);
    setTimeout(() => { $(".w2").fadeOut() }, 3200);
    setTimeout(() => { $(".w3").fadeOut() }, 3400);
    setTimeout(() => { $(".w4").fadeOut() }, 3600);
    setTimeout(() => { $(".w5").fadeOut() }, 3800);
    setTimeout(() => { $(".w6").fadeOut() }, 4000);
    setTimeout(() => { $(".w7").fadeOut() }, 4200);
    setTimeout(() => { $(".w8").fadeOut() }, 4400);
    setTimeout(() => { $(".w9").fadeOut() }, 4600);
    setTimeout(() => { $(".w10").fadeOut() }, 4800);
    setTimeout(() => { $(".w11").fadeOut() }, 5000);
    setTimeout(() => { $(".w12").fadeOut() }, 5200);
    setTimeout(() => {
        whisper2();
    }, 5300);
}

function whisper2() {
    setTimeout(() => { $(".w13").fadeIn() }, 200);
    setTimeout(() => { $(".w14").fadeIn(); }, 400);
    var fate2Sound = new Audio("../audio/fate2.wav");
    fate2Sound.volume = 1;
    fate2Sound.play();
    setTimeout(() => { $(".w15").fadeIn(); $(".w13").removeClass("specialText") }, 600);
    setTimeout(() => { $(".w16").fadeIn(); $(".w14").removeClass("specialText") }, 800);
    setTimeout(() => { $(".w17").fadeIn(); $(".w15").removeClass("specialText") }, 1000);
    setTimeout(() => { $(".w18").fadeIn(); $(".w16").removeClass("specialText") }, 1200);
    setTimeout(() => { $(".w19").fadeIn(); $(".w17").removeClass("specialText"); }, 1400);
    setTimeout(() => { $(".w20").fadeIn(); $(".w18").removeClass("specialText"); }, 1600);
    setTimeout(() => { $(".w19").removeClass("specialText"); }, 1800);
    setTimeout(() => { $(".w20").removeClass("specialText"); }, 2000);
    setTimeout(() => { $(".w13").fadeOut(); }, 5000);
    setTimeout(() => { $(".w14").fadeOut(); }, 5200);
    setTimeout(() => { $(".w15").fadeOut(); }, 5400);
    setTimeout(() => { $(".w16").fadeOut(); }, 5600);
    setTimeout(() => { $(".w17").fadeOut(); }, 5800);
    setTimeout(() => { $(".w18").fadeOut(); }, 6000);
    setTimeout(() => { $(".w19").fadeOut(); }, 6200);
    setTimeout(() => { $(".w20").fadeOut(); }, 6400);
}
function playerDeath() {
    localStorage.setItem("deathBy", "the tutorial :(");
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