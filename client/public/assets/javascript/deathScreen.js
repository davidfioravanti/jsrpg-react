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

gameOverSound = new Audio("assets/audio/gameOver.wav");
gameOverSound.volume = 0;
gameOverSound.play();
$(gameOverSound).animate({
    volume: musicVolume
}, 1000, function () {
});

$("#header").fadeIn(3000);

var diedBy = localStorage.getItem("deathBy");
console.log(diedBy)
    if (diedBy === "DR4G0N") {
        $("#deathByData").addClass("specialText");
    }
    else if (diedBy === null || diedBy === "") {
        randomDeathsArr = ["A thousand cuts...", "misadventure...",
         "angering the gods...", "divine intervention...", 
         "spontaneous combustion...", "oops...", "foulplay...",
         "complications...", "to be determined...", "the Plague...",
         "rotgut...", "failure to debug...", "a big boo-boo..."]
        diedBy = randomDeathsArr[Math.floor(Math.random() * randomDeathsArr.length)];
        if (diedBy.length > 20) {
            $("#deathByData").css("font-size", "25px")
        }
    }
    $("#deathByData").text(diedBy);
var roomsCleared = localStorage.getItem("roomsCleared");
    $("#roomsClearedData").text(roomsCleared);
var goldLooted = localStorage.getItem("playerGold");
    $("#goldLootedData").text(goldLooted);
var monstersSlain = localStorage.getItem("monstersSlain");
    $("#monstersSlainData").text(monstersSlain);
var bossesSlain = localStorage.getItem("bossesSlain");
    $("#bossesSlainData").text(bossesSlain);
var secretsFound = localStorage.getItem("secretsFound");
    $("#secretsFoundData").text(secretsFound);

setTimeout(() => {
    $("#deathByText").fadeIn(1000);
    $("#deathByData").fadeIn(1500);
}, 1000);
setTimeout(() => {
    $("#roomsClearedText").fadeIn(1000);
    $("#roomsClearedData").fadeIn(1500);
}, 2000);
setTimeout(() => {
    $("#goldLootedText").fadeIn(1000);
    $("#goldLootedData").fadeIn(1500);
}, 3000);
setTimeout(() => {
    $("#monstersSlainText").fadeIn(1000);
    $("#monstersSlainData").fadeIn(1500);
}, 4000);
setTimeout(() => {
    $("#bossesSlainText").fadeIn(1000);
    $("#bossesSlainData").fadeIn(1500);
}, 5000);
setTimeout(() => {
    $("#secretsFoundText").fadeIn(1000);
    $("#secretsFoundData").fadeIn(1500);
}, 6000);
setTimeout(() => {
    $("#clickToContinue").fadeIn(1000);
}, 7000);

$("#clickToContinue").on("click", function() {
    resetPlayer();
})

function resetPlayer() {
    localStorage.setItem("currentPlayerHealth", 100);
    localStorage.removeItem("lastScreen");
    localStorage.setItem("deathBy", "");
    localStorage.setItem("goldPlayer", 0);
    localStorage.setItem("monstersSlain", 0);
    localStorage.setItem("bossesSlain", 0);
    localStorage.setItem("roomsCleared", 0);
    localStorage.setItem("secretsFound", 0);
    localStorage.setItem("inventory", "");
    localStorage.removeItem("turnNumber");
    localStorage.setItem("currentEnemyHp", 0);
    window.location.href = "playerConfig.html";
}