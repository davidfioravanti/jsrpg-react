// PREVENTS THE USER FROM USING THE BACK BUTTON IN BROWSER!
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

$(document).contextmenu(function() {
    return false;
});

  // Declare username var to hold user data...
  var username;
  // Check Local Storage for an existing username...
  var checkNameExists = localStorage.getItem("username");
  // If none exists...
  if (checkNameExists) {
      // Populate the username form with the retrieved data...
      username = localStorage.getItem("username");
      $("#usernameForm").val(username);
  }

  $("#gameScreen").fadeIn(2500);
  
  $("#exitButton").on("click", function() {
    // $("#gameScreen").css("opacity: .5");
    let playerGold = localStorage.getItem("playerGold");
    let xPos = localStorage.getItem("xPos");
    let yPos = localStorage.getItem("yPos");
    let turnNum = localStorage.getItem("turnNum");
    let autoplay = localStorage.getItem("autoplay");
    let sfxVolume = localStorage.getItem("sfxVolume");
    let musicVolume = localStorage.getItem("musicVolume");
    let playerStrength = localStorage.getItem("playerStrength");
    let playerDexterity = localStorage.getItem("playerDexterity");
    let playerConstitution = localStorage.getItem("playerConstitution");
    let playerIntelligence = localStorage.getItem("playerIntelligence");
    let playerWisdom = localStorage.getItem("playerWisdom");
    let playerCharisma = localStorage.getItem("playerCharisma");
    let playerLevel = localStorage.getItem("playerLevel");
    let playerHealth = localStorage.getItem("currentPlayerHealth");
    let enemyHealth = localStorage.getItem("currentEnemyHp");
    let roomsCleared = localStorage.getItem("roomsCleared");
    let monstersSlain = localStorage.getItem("monstersSlain");
    let bossesSlain = localStorage.getItem("bossesSlain");
    let secretsFound = localStorage.getItem("secretsFound");
    let seenHellbat = localStorage.getItem("seenHellbat");
    let seenSkeleton = localStorage.getItem("seenSkeleton");
    let deathBy = localStorage.getItem("deathBy");
    let lastScreen = localStorage.getItem("lastScreen");
    let newCharacter = localStorage.getItem("newCharacter");
    let gameVersion = localStorage.getItem("gameVersion");
     $.post("/api/save-game", { 
         playerGold: playerGold, xPos: xPos, yPos: yPos, turnNum: turnNum,
         autoplay: autoplay, sfxVolume: sfxVolume,
         musicVolume: musicVolume, playerStrength: playerStrength,
         playerDexterity: playerDexterity, playerConstitution: playerConstitution,
         playerIntelligence: playerIntelligence, playerWisdom: playerWisdom,
         playerCharisma: playerCharisma, playerLevel: playerLevel,
         playerHealth: playerHealth, enemyHealth: enemyHealth, roomsCleared: roomsCleared,
         monstersSlain: monstersSlain, bossesSlain: bossesSlain,
         secretsFound: secretsFound, seenHellbat: seenHellbat, seenSkeleton: seenSkeleton,
         deathBy: deathBy, lastScreen: lastScreen, newCharacter: newCharacter, gameVersion: gameVersion
     }).then((data) => {
         console.log(data);
         console.log(lastScreen);
         console.log("JQuery POST (/api/save-game):");
         setTimeout(() => {
             window.location.href = "/";
         }, 1500);
     }).catch((err) => {
         console.log(err)
         window.location.href = "/C245H3D"
     });
  })
//     When the user presses the "enter" key to submit a form...
  $("#usernameInput").on("keydown", function (e) {
        console.log("HI");
    if (e.which == 13) {
        console.log("ASDASDSD")
        e.preventDefault();
        username = $("#usernameForm").val().trim();
        $.post("/user",
            {username: username},
            function(data)
            {
                  console.log(data)
            });
        var usernameLength = username.length;
        if (username !== "" && usernameLength <= 15 && usernameLength > 2) {
        console.log(username);
        localStorage.setItem('username', username);
        }
        else if (username == "") {
            $("#errorModal").css("display", "block");
            $(".modal-body").text("USERNAME CAN'T BE BLANK! CHOOSE A USERNAME CONTAINING 3-15 CHARACTERS!")
        }
        else if (usernameLength <= 2) {
            $("#errorModal").css("display", "block");
            $(".modal-body").text("USERNAME MUST BE AT LEAST 3 CHARACTERS LONG, AND NO MORE THAN 15!")
        }
        else if (usernameLength > 15) {
            $("#errorModal").css("display", "block");
            $(".modal-body").text("USERNAME MUST BE NO MORE THAN 15 CHARACTERS IN LENGTH!")
        }
        
    }
})

$(document).on("keydown", function(e) {
    if (e.which === 27) {
        $("#gameScreen").attr("src", "traverse.html");
    }
})

$("#devButton").on("click", function() {
    $("#consoleTitle").focus();
    $("#console").toggle();
    $(".consoleText").remove();
})

$("#consoleTitle").on("keydown", function(e) {
    if (e.which === 13) {
        e.preventDefault();
        
        let consoleCommand = $("#consoleTitle").val();
        if (consoleCommand === "g.start" || consoleCommand.includes("gs")) {
            let statusText1 = $("<p class='consoleText'>").html("*COMMAND ENTERED: GAME.START*");
            let statusText2 = $("<p class='consoleText'>").html("<i>NAVIGATED TO MAIN SCREEN</i>");
            statusText1.prependTo(consoleDiv);
            setTimeout(() => {
                statusText2.prependTo(consoleDiv);
            }, 1000);
            $("#gameScreen").attr("src", "traverse.html");
        }
        else if (consoleCommand.includes("g.nav") || consoleCommand.includes("gnav")) {
            let inputArr = consoleCommand.split(" ");
            let pageName = inputArr[1];
            if (pageName.includes("help")) {
                let statusText1 = $("<p class='consoleText'>").html("*LIST OF NAV COMMANDS*" +
                "<br>game.nav (page name here)<br>skeleton, hellbat, boss1, well, shop," + 
                "<br>riddle, deathScreen, traverse");
                statusText1.prependTo(consoleDiv);
            }
            else if (pageName != "") {
                $("#gameScreen").attr("src", pageName + ".html");
            }
            else {
                let statusText1 = $("<p class='consoleText'>").html("*ENTER A PAGE NAME TO GO TO*");
                statusText1.prependTo(consoleDiv);
            }
        }
        else  if (consoleCommand === "color") {
            $(consoleDiv).append("<div class='colorDiv'><input type='range' value='0' min='0'" +
            "step='1' max='180' class='customColorRange'><br><span>USE THE SLIDER TO CHANGE SCREEN COLORS.</span></div>");
        }
        else  if (consoleCommand.includes("grayscale")) {
            let inputArr = consoleCommand.split(" ");
            let grayVal = parseFloat(inputArr[1]);
            $("iframe").css("-webkit-filter", "grayscale(" + grayVal + ")");
            $("#devButton").css("-webkit-filter", "grayscale(" + grayVal + ")");
            $(".footerGray").css("-webkit-filter", "contrast(" + grayVal + "%)");
            $(".consoleGray").css("-webkit-filter", "contrast(" + grayVal + "%)");

        }
        else if (consoleCommand.includes("invert")) {
            let inputArr = consoleCommand.split(" ");
            let invVal = parseFloat(inputArr[1]);
            $(".screenEffects").css("-webkit-filter", "invert(" + invVal + "%)");
            $(".footerInvert").css("-webkit-filter", "inverse(" + invVal + "%)");
            $(".consoleInvert").css("-webkit-filter", "inverse(" + invVal + "%)");
        }
        else if (consoleCommand.includes("saturate")) {
            let inputArr = consoleCommand.split(" ");
            let satVal = parseFloat(inputArr[1]);
            $(".screenEffects").css("-webkit-filter", "saturate(" + satVal + "%)");
            $(".footerSaturate").css("-webkit-filter", "saturate(" + satVal + "%)");
            $(".consoleSaturate").css("-webkit-filter", "saturate(" + satVal + "%)");
        }
        else if (consoleCommand.includes("sepia")) {
            let inputArr = consoleCommand.split(" ");
            let sepVal = parseFloat(inputArr[1]);
            $(".screenEffects").css("-webkit-filter", "sepia(" + sepVal + "%)");
            $(".footerSepia").css("-webkit-filter", "sepia(" + sepVal + "%)");
            $(".consoleSepia").css("-webkit-filter", "sepia(" + sepVal + "%)");
        }
        else if (consoleCommand.includes("contrast")) {
            let inputArr = consoleCommand.split(" ");
            let contrastVal = parseFloat(inputArr[1]);
            $(".screenEffects").css("-webkit-filter", "contrast(" + contrastVal + "%)");
            $(".footerContrast").css("-webkit-filter", "contrast(" + contrastVal + "%)");
            $(".consoleContrast").css("-webkit-filter", "contrast(" + contrastVal + "%)");
        }
        else {
            let statusText1 = $("<p class='consoleText'>").html("*INVALID COMMAND*");
            let statusText2 = $("<p class='consoleText'>").html("<i>SEE README.md FOR COMMANDS</i>");
            statusText1.prependTo(consoleDiv);
            setTimeout(() => {
                statusText2.prependTo(consoleDiv);
            }, 1000);
        }
        $("#consoleTitle").val("");
    }
})