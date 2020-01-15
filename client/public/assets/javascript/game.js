// PREVENTS THE USER FROM USING THE BACK BUTTON IN BROWSER!
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};

$(document).contextmenu(function() {
    return false;
});
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA6VJjsV2GXeGLtNI0Je2_m1euljhf8MQI",
    authDomain: "javascript-rpg-27aa6.firebaseapp.com",
    databaseURL: "https://javascript-rpg-27aa6.firebaseio.com",
    projectId: "javascript-rpg-27aa6",
    storageBucket: "javascript-rpg-27aa6.appspot.com",
    messagingSenderId: "474696755234",
    appId: "1:474696755234:web:26c7536d12c35e0c16427b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

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
  $('iframe').on('load', function() {
      let currentScreen = $(this).attr("src");
      console.log(currentScreen);
      if ($(this).attr("src").includes("tutorial")) {
        alert("asdasd")
      }
});
  
    // When the user presses the "enter" key to submit a form...
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
        database.ref("users/" + username +"/").update({
            key: username,  
        })
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
            $("#console").css("-webkit-filter", "grayscale(" + grayVal + ")");
            $("body").css("-webkit-filter", "grayscale(" + grayVal + ")");

        }
        else if (consoleCommand.includes("invert")) {
            let inputArr = consoleCommand.split(" ");
            let invVal = parseFloat(inputArr[1]);
            $(".screenEffects").css("-webkit-filter", "invert(" + invVal + "%)");
        }
        else if (consoleCommand.includes("saturate")) {
            let inputArr = consoleCommand.split(" ");
            let satVal = parseFloat(inputArr[1]);
            $(".screenEffects").css("-webkit-filter", "saturate(" + satVal + "%)");
        }
        else if (consoleCommand.includes("sepia")) {
            let inputArr = consoleCommand.split(" ");
            let sepVal = parseFloat(inputArr[1]);
            $(".screenEffects").css("-webkit-filter", "sepia(" + sepVal + "%)");
        }
        else if (consoleCommand.includes("contrast")) {
            let inputArr = consoleCommand.split(" ");
            let contrastVal = parseFloat(inputArr[1]);
            $(".screenEffects").css("-webkit-filter", "contrast(" + contrastVal + "%)");
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