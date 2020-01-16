$(document).ready(function () {
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
        $("#usernameForm").fadeOut();
        setTimeout(() => {
            $("#loadingIcon").fadeIn();
        }, 2000);
        email = $("#emailInput").val().trim();
        password = $("#passwordInput").val().trim();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password !== "") {
            console.log("VALID EMAIL & PASSWORD!");
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
});

