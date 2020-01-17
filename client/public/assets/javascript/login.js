$(document).ready(function () {

    $("#loginWrapper").fadeIn(1500);


    $("#passwordToggle").on("click", function () {
        var x = document.getElementById("passwordInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    })

    $("input").on("keydown", function (event) {
        if (event.which === 13) {
            authUser();
        }
        $("#loginButton").addClass("loginReady");
    })
    $("#loginButton").on("click", function () {
        authUser();
    })

    let authUser = function () {
        setTimeout(() => {
            $("#loadingIcon").fadeIn();
        }, 2000);
        email = $("#emailInput").val().trim();
        password = $("#passwordInput").val().trim();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password !== "") {
            console.log("VALID EMAIL & PASSWORD!");

            $.post("/api/login",{username: email, password: password}).then( (req, res) => {
                if (!("Notification" in window)) {
                    alert("This browser does not support desktop notification");
                }
                else if (Notification.permission === "granted") {
                    // If it's okay let's create a notification
                    var notification = new Notification(`Welcome back!`);
                }
                else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(function (permission) {
                        // If the user accepts, let's create a notification
                        if (permission === "granted") {
                            var notification = new Notification(`Welcome back ${res.displayName}!`);
                        }
                    });
                }
                $("#loginWrapper").fadeOut(1500);
                setTimeout(() => {
                    window.location.href = "playerConfig.html"
                }, 2000);
            }).catch((err) => {
                console.log("ERROR:")
                $("#loginHeader").text("INCORRECT EMAIL/PASSWORD!")
                console.log(err);
            })

        }

        else if (email === "") {
            console.log("EMAIL CAN'T BE BLANK!")
        }
        else if (password === "") {
            console.log("PASSWORD CAN'T BE BLANK!")
        }
        else if (email === "" && password === "") {
            console.log("PLEASE ENTER AN EMAIL AND PASSWORD!")
        }
    }


    $("#signupButton").on("click", function() {
        window.location.href = "signup.html"
    })
});

