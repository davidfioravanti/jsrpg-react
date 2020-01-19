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


var shopSound = new Audio("../audio/shop.wav");
shopSound.volume = 0;
shopSound.play();
$(shopSound).animate({volume: musicVolume
  }, 1000, function() {
  });

  localStorage.setItem("lastScreen", "shop.html");

  $("#bodyWrapper").fadeIn(1000);

$("#leaveButton").on("click", function() {
//     const srcArray = ["hellbat.html", "beartrap.html", "riddle.html", "skeleton.html"];
//   let randomSrc = srcArray[Math.floor(Math.random() * srcArray.length)];
  window.location.href = "../html/traverse.html";
})

var currentPlayerHealth = localStorage.getItem("currentPlayerHealth");
if (currentPlayerHealth === null) {
    currentPlayerHealth = 100;
    localStorage.setItem("currentPlayerHealth", currentPlayerHealth);
}
$("#currentPlayerHealth").text(currentPlayerHealth);
$("#healthPoints").attr("style", "width: " + currentPlayerHealth + "%;");
var maxPlayerHealth = 100;
$("#maxPlayerHealth").text(maxPlayerHealth);


var playerGold = localStorage.getItem("playerGold");
if (playerGold === null) {
    playerGold = 50;
    localStorage.setItem("playerGold", playerGold);
}

$("#yourGold").text(playerGold);


$("#modalExit").on("click", function () {
    $("#errorModal").fadeOut();
    $("#errorText").remove();
})
setInterval(function () {
    const messageArr = ["BUY SOMETHING!", "STOOPID HOOMAN!", "NO REFUNZ FOR YOU!", ""]
    let randomMessage = messageArr[Math.floor(Math.random()*messageArr.length)];
    $("#goblinText").text(randomMessage)
    $("#goblinText").fadeIn();
    setTimeout(() => {
            clearInterval();
            $("#goblinText").fadeOut();
    }, 5000);
}, 10000);

$(".npc").on("mouseenter", function () {
    $("#goblinText").fadeIn()
    $("#goblinText").text("NO TUCHIE DA GOBLUN!")
    $(".npc").on("mouseleave", function () {
        $("#goblinText").fadeOut();
    })
})
$("#shopItemsDiv").on("mouseenter", function () {
    $("#goblinText").fadeIn()
    $("#goblinText").text("SCROLL 2 C MOAR")
    $("#shopItemsDiv").on("mouseleave", function () {
        $("#goblinText").fadeOut();
    })
})
$(".buyItem").on("mouseover", function () {
    $("#goblinText").fadeIn()
    $("#goblinText").text("CLIK TO BIE DA ITAM!")
    $(".buyItem").on("mouseleave", function () {
        $("#goblinText").fadeOut();
    })
})


$(".buyItem").on("click", purchase = function (item, value) {
    console.log("buying item");
    let itemCost = parseInt($(this).attr("value"));
    if (autoplayEnabled === "true") {
        itemCost = value;
    }
    let playerGold = parseInt(localStorage.getItem("playerGold"));
    console.log(typeof(playerGold));
    if (itemCost > playerGold) {
        console.log("not enough gold");
    }
    else {
        if ($(this).is($("#roastedBatWingSmallBuy")) || item === "roastedBatWingSmallBuy") {
            var amountHealed = 10;
            healCharacter(itemCost, amountHealed);
        }
        else if ($(this).is("#flameBreathElixirBuy")) {
            buyItem(itemCost);
        }
        else if ($(this).is("#healthPotionBuy")) {
            buyItem(itemCost);
        }
    }
})

function buyItem(itemCost) {
    let playerGold = parseInt(localStorage.getItem("playerGold"));
    var newTotal = parseInt(playerGold -= itemCost);
    console.log(playerGold)
    $("#yourGold").text(newTotal);
    localStorage.setItem("playerGold", newTotal);
}


function healCharacter(itemCost, amountHealed) {
    var currentPlayerHealth = parseInt(localStorage.getItem("currentPlayerHealth"));
    let newCurrentHealth = currentPlayerHealth + amountHealed;
    if (currentPlayerHealth === maxPlayerHealth) {
        $("#errorModalText").html("<span id='errorText'>You are already at full health!<br>You can't exceed your maximum health points!</span>")
        $("#errorModal").fadeIn();
    }
    else {
        buyItem(itemCost);
        $("#currentPlayerHealth").text(newCurrentHealth)
        localStorage.setItem("currentPlayerHealth", newCurrentHealth);
        if (newCurrentHealth > maxPlayerHealth) {
            $("#currentPlayerHealth").text(maxPlayerHealth);
            localStorage.setItem("currentPlayerHealth", maxPlayerHealth);
        }
    }
}


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
    setInterval(() => {
        let currentPlayerHealth = parseInt(localStorage.getItem("currentPlayerHealth"));
        let playerGold = parseInt(localStorage.getItem("playerGold"));
        if (currentPlayerHealth <= 90 && playerGold >= 50) {
            purchase("roastedBatWingSmallBuy", 50);
        }
        else {
            window.location.href = "../html/traverse.html"
        }
    }, 2000);
} 

// ======================================================================================
// ======================================================================================
// ======================================================================================