$(document).ready(function () {

    $("#signup").fadeIn(1500);

    $("#returnToLogin").on("click", function () {
        $("#signup").fadeOut(1500);
        setTimeout(() => {
            window.location.href = "login.html"
        }, 2000);
    })

    $("input").on("keydown", function (event) {
        if (event.which === 13) {
            createUser();
        }
    })
    $("#signupButton").on("click", function () {
        createUser();
    })

    let createUser = function () {
        email = $("#emailInput").val().trim();
        password = $("#passwordInput").val().trim();
        displayName = $("#displayNameInput").val().trim();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password !== "" && displayName !== "") {
            console.log("VALID EMAIL & PASSWORD!");
            $.post("/api/user", { username: email, password: password, displayName: displayName}).then((data) => {
                $("#loginHeader").text("YOUR ACCOUNT HAS BEEN CREATED!");
                $("#loginSubheader").text("");
                console.log(data);
                $("#signup").fadeOut(1500);
                setTimeout(() => {
                    window.location.href = "login.html"
                }, 2000);
            }).catch((err) => {
                console.log(err)
                $("#emailInput").val("");
                $("#passwordInput").val("");
                $("#displayNameInput").val("");
                $("#errorMessage").text("THAT EMAIL IS ALREADY IN USE!")
            });
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


    $("#signupButton").on("click", function () {

    })
});

