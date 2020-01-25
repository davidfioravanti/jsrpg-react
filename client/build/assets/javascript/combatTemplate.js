$(document).ready(function () {
    /* =================================================================================
    ====================================================================================
    ================================================================================= */
    
    const game = {
        config: {
            sfxVolume: "",
            musicVolume: "",
            preDefTimeout: 1000,
            currentEnemy: "H3LLB4T",
        },
        refs: {
            // MAIN COMPONENTS ==================
            screenWrapper: "#wrapper",
            actionsDiv: "#actionsDiv",
            consoleText: "#consoleText",
            consoleDiv: "#consoleDiv",
            continueMessage: "#continueMessage",
            critText: "#critMod",
            damageNumber: "#damageNumber",
            enemyDamageNumber: "#enemyDamageNumber",
            exitDiv: "#dungeonDoor",
            gameOverScreen: "deathScreen.html",
            introText: ".introText",
            weaponDiv: "#swordDiv",
            winText: "#winText",
            // MUSIC AND SOUND EFFECTS ==============
            gameMusic: "assets/audio/combat2.wav",
            selectSound: "assets/audio/select.wav",
            slaySound: "assets/audio/slay.wav",
        },
        state: {
            turnNum: "",
            playerIsAlive: "",
            enemyIsAlive: "",
            autoplayEnabled: "",
        },
        playSound: {
            slaySound: () => {
                console.log(`game.playSound.slaySound();`)
                const { slaySound } = game.refs;
                let { sfxVolume } = game.config;
                let slay = new Audio(slaySound);
                if (sfxVolume === "") {
                    sfxVolume = .1;
                }
                slay.volume = sfxVolume;
                slay.play();
            },
        },
        fn: {
            disableBackButton: () => {
                // Prevents the user from using the back button in the browser.
                console.log(`game.config.disableBackButton();`);
                history.pushState(null, null, location.href);
                window.onpopstate = function () {
                    history.go(1);
                };
            },
            setMusicVolume: () => {
                console.log(`game.config.musicVolume();`);
                let musicVolume = localStorage.getItem("musicVolume");
                // *Safeguard* IF null, set to half volume.
                if (musicVolume === null) {
                    musicVolume = .5;
                    localStorage.setItem("musicVolume", musicVolume);
                }
                console.log(`    musicVolume: ${musicVolume}`);
                game.config.musicVolume = musicVolume;
            },
            setSfxVolume: () => {
                console.log(`game.config.sfxVolume();`);
                let sfxVolume = localStorage.getItem("sfxVolume");
                // *Safeguard* IF null, set to half volume.
                if (sfxVolume === null) {
                    sfxVolume = .5;
                    localStorage.setItem("sfxVolume", sfxVolume);
                }
                console.log(`    sfxVolume: ${sfxVolume}`);
                game.config.sfxVolume = sfxVolume;
            },
            playMusic: () => {
                console.log(`game.config.playMusic();`);
                let gameMusic = new Audio(game.refs.gameMusic);
                gameMusic.volume = 0;
                gameMusic.play();
                $(gameMusic).animate({
                    volume: game.config.musicVolume
                }, 1000), function () { };
            },
            turnDecider: () => {
                console.log(`game.config.turnDecider();`);
                let turnNum = localStorage.getItem("turnNum");
                const { actionsDiv } = game.refs;
                // *Safeguard* IF null, randomize turn order.
                if (turnNum === null) {
                    turnNum = Math.floor(Math.random() * Math.floor(20));
                    console.log(`    Turn Decider: ${turnNum}`);
                    localStorage.setItem("turnNum", turnNum);
                }
                if (turnNum % 2 === 0) {
                    console.log(`    RNG was even (player's turn).`);
                }
                else {
                    console.log(`    RNG was odd (enemy's turn).`);
                    $(actionsDiv).hide();
                    // Disable player UI and start enemy turn.
                    const { takeTurn } = enemy.fn;
                    setTimeout(() => {
                        takeTurn();
                    }, 2000);
                }
                game.state.turnNum = turnNum;
            },
            rewardGold: () => {
                console.log(`game.fn.rewardGolds();`);
                const { goldRewardMax, goldRewardMin } = enemy.config;
                const goldEarned = Math.floor(Math.random() * goldRewardMax) + goldRewardMin;
                let playerGold = parseInt(localStorage.getItem("playerGold"));
                let newGold = playerGold += goldEarned;
                localStorage.setItem("playerGold", newGold);
                const { winText } = game.refs;
                $(winText).html(`<span style='margin-left: -20px;'>YOU LOOTED 
                ${goldEarned} GOLD!</span>`)
                $(winText).fadeIn(1000);
    
            },
            start: () => {
                console.log(`game.fn.start();\n===================`);
                const { disableBackButton, turnDecider,
                    playMusic, setSfxVolume, setMusicVolume } = game.fn;
                const { initPlayerHealth } = player.fn;
                const { initEnemyHealth } = enemy.fn;
                const { crySound } = enemy.playSound;
                const { enemyIsAlive } = game.state;
                const { screenWrapper } = game.refs;
                const autoplay = localStorage.getItem("autoplay");
                console.log(`    autoplayEnabled: ${autoplay}`);
                if (autoplay === "true") {
                    game.state.autoplayEnabled = "true";
                }
                $(screenWrapper).fadeIn();
                localStorage.setItem("lastScreen", "hellbat.html");
                initPlayerHealth();
                initEnemyHealth();
                $("button").attr("disabled", "true");
                disableBackButton();
                setSfxVolume();
                setMusicVolume();
                playMusic();
                enemy.animation.appear();
                turnDecider();
                setTimeout(() => {
                    if (enemyIsAlive == true)
                    crySound();
                }, 1000);
            },
            win: () => {
                const { consoleText, continueMessage, exitDiv } = game.refs;
                const { enemyIsAlive } = game.state;
                const { defeat } = enemy.animation;
                const { slaySound } = game.playSound;
                console.log(`game.fn.win();`);
                localStorage.removeItem("turnNum");
                defeat();
                slaySound();
                $(consoleText).remove();
                $(continueMessage).fadeIn(1300);
                $(exitDiv).fadeIn(2000);
                $(exitDiv).on("click", function () {
                    window.location.href = "traverse.html";
                });
            }
        }
    };
    
    /* =================================================================================
    ====================================================================================
    ================================================================================= */
    
    const player = {
        config: {
            // HEALTH ===============
            maxHealth: 100,
            // MODIFIER =============
            modifier: 2,
            // ATTACK STATS =========
            attackMin: 0,
            attackMax: 12,
            canCrit: false,
            critThresh: 9,
            critMin: 2,
            critMax: 6,
            attackResponses: [
                `With determination, you swing your SH0RTSW0RD at ${game.config.currentEnemy}...`,
                `You lunge aggressively with your SH0RTSW0RD at ${game.config.currentEnemy}...`
            ]
        },
        refs: {
            healthBar: "#healthPoints",
            healthText: "#currentPlayerHealth",
            // SOUND EFFECTS ==================
            attack1Sound: "assets/audio/hit.wav",
            attack2Sound: "",
    
    
        },
        state: {
            health: "",
            strength: "",
            attackDamage: "",
        },
        animation: {
            attack: () => {
                console.log(`player.animation.attack();`);
                const { weaponDiv, damageNumber } = game.refs;
                setTimeout(() => {
                    $(weaponDiv).addClass("swordSwing");
                    $(weaponDiv).fadeIn();
                }, 1000);
                setTimeout(() => {
                    $(weaponDiv).fadeOut();
                    $(damageNumber).fadeOut();
                }, 2000);
                setTimeout(() => {
                    $(weaponDiv).removeClass("swordSwing");
                }, 2500);
            },
        },
        fn: {
            attack: () => {
                console.log(`player.fn.attack();\n========================`);
                const { actionsDiv, damageNumber, consoleDiv } = game.refs;
                const { rollDamage } = player.fn;
                const { setHealth } = enemy.fn;
                const { selectSound, attackSound } = player.playSound;
                const { modifier, attackResponses } = player.config;
                const { crySound } = enemy.playSound;
                const { currentEnemy } = game.config;
                selectSound();
                $(actionsDiv).hide();
                rollDamage("attack");
                let damageInt = parseInt(sessionStorage.getItem("rollDamage"));
                let damageTotal = damageInt + modifier;
                let randomAtkResp = attackResponses[Math.floor(Math.random() * attackResponses.length)];
                let statusText1 = $("<p class='consoleText'>").html(`Attempting to attack ${game.config.currentEnemy}...`);
                let statusText2 = $("<p class='consoleText'>").html(`${randomAtkResp}<br>`);
                statusText1.prependTo(consoleDiv);
                const { attack } = player.animation;
                attack();
                setTimeout(() => {
                    statusText2.prependTo(consoleDiv);
                }, 1000);
                setTimeout(() => {
                    $(damageNumber).text(damageTotal + " DMG");
                    $(damageNumber).fadeIn();
                    attackSound();
                }, 1500);
                setTimeout(() => {
                    crySound();
                }, 1800);
                setTimeout(() => {
                    let statusText1 = $("<p class='consoleText'>").html(`You hit ${currentEnemy}
                    for ${damageTotal} DMG!`);
                    statusText1.prependTo(consoleDiv);
                    enemyHealth = localStorage.getItem("enemyHealth");
                    enemyHealth -= damageTotal;
                    localStorage.setItem("enemyHealth", enemyHealth);
                    console.log(`    enemyHealth: ${enemyHealth}`);
                    setHealth(enemyHealth);
                }, 2000);
                setTimeout(() => {
                    const { takeTurn } = enemy.fn;
                    let turnNum = game.state.turnNum++;
                    localStorage.setItem("turnNum", turnNum);
                    takeTurn();
                }, 3000);
            },
            initPlayerHealth: () => {
                console.log(`player.fn.setHealth();`);
                const { maxHealth } = player.config
                let playerHealth = localStorage.getItem("playerHealth");
                console.log(`    playerHealth:${playerHealth}`)
                if (playerHealth == null || playerHealth === "null") {
                    playerHealth = maxHealth;
                    localStorage.setItem("playerHealth", playerHealth);
                }
                const { healthBar, healthText } = player.refs
                $(healthBar).attr("style", `width: ${playerHealth}%;`);
                $(healthText).text(playerHealth);
            },
            onDeath: () => {
                console.log(`player.fn.onDeath();`);
                localStorage.setItem("deathBy", enemy.config.name);
                const slaySound = new Audio(game.refs.slaySound);
                slaySound.volume = game.config.sfxVolume;
                slaySound.play();
                $(screenWrapper).addClass("shake");
                $(screenWrapper).fadeOut(2000);
                setTimeout(() => {
                    window.location.href = game.refs.gameOverScreen;
                });
            },
            rollDamage: (actionType) => {
                console.log(`player.fn.rollDamage();`);
                const { attackMin, attackMax, canCrit,
                    critThresh, critMin, critMax } = player.config;
                if (actionType === "attack") {
                    let min = Math.ceil(attackMin);
                    let max = Math.floor(attackMax);
                    let calcDamage = Math.floor(Math.random() * (max - min + 1) + min);
                    console.log(`    ${calcDamage} DAMAGE!`)
                    // IF the damage rolled passes the min number to crit...
                    if (calcDamage > critThresh && canCrit !== false) {
                        console.log(`    CRIT! thresh:${critThresh}, rolled:${calcDamage}`);
                        let min = Math.ceil(critMin);
                        let max = Math.floor(critMax);
                        let critDamage = Math.floor(Math.random() * (max - min + 1) + min);
                        console.log(`    Crit damage: ${critDamage}`);
                        const { critText } = game.refs;
                        $(critText).text(`CRIT! ${critDamage} "DMG`);
                        $(critText).fadeIn();
                        setTimeout(() => {
                            $(critText).fadeOut();
                        }, 2000);
                        calcDamage += critDamage;
                    }
                    sessionStorage.setItem("rollDamage", calcDamage);
                }
            },
            setHealth: (playerHealth) => {
                console.log(`player.fn.setHealth();`);
                const { healthBar, healthText } = player.refs
                $(healthBar).attr("style", `width: ${playerHealth}%;`);
                $(healthText).text(playerHealth);
            },
            takeTurn: () => {
                console.log(`player.fn.takeTurn();`);
            }
        },
        playSound: {
            selectSound: () => {
                console.log(`player.playSound.selectSound();`);
                const { selectSound } = game.refs;
                const { sfxVolume } = game.config;
                select = new Audio(selectSound);
                select.volume = sfxVolume;
                select.play();
            },
            attackSound: () => {
                console.log(`player.playSound.attackSound();`);
                const { attack1Sound } = player.refs;
                const { sfxVolume } = game.config;
                let attack1 = new Audio(attack1Sound);
                attack1.volume = sfxVolume;
                attack1.play();
            },
        }
    
    };
    
    /* =================================================================================
    ====================================================================================
    ================================================================================= */
    
    const enemy = {
        config: {
            level: 1,
            maxHealth: 30,
            name: "H3LLB4T",
            modifier: 0,
            attackMin: 0,
            attackMax: 8,
            canCrit: false,
            critThresh: 9,
            critMin: 2,
            critMax: 6,
            goldRewardMin: 10,
            goldRewardMax: 110,
            attackResponses: [
                "H3LLB4T swoops in for an aerial assault!",
                "H3LLB4T bares it's gruesome fangs and closes in!",
            ]
        },
        refs: {
            enemyHUD: "#enemyHUD",
            enemyName: "#enemyName",
            enemyHpText: "#enemyHpText",
            enemyHealthText: "#currentEnemyHealth",
            enemyHpBar: "#enemyHealthPoints",
            enemyWrapper: ".eyeball",
            // SOUND EFFECTS ==================
            crySound: "assets/audio/hellbatCrySound.wav",
            attack1Sound: "assets/audio/hellbatAttack.wav",
            // ANIMATIONS =====================
            attack1AnimClass: "eyeballAttack",
        },
        state: {
            health: "",
            strength: "",
            attackDamage: "",
        },
        animation: {
            appear: () => {
                console.log("enemy.animation.appear();");
                setTimeout(() => {
                    const { enemyWrapper } = enemy.refs;
                    const { name, level } = enemy.config;
                    const { introText } = game.refs;
                    $(enemyWrapper).css("opacity", "1");
                    let turnNum = game.state.turnNum;
                    let enemyHealth = enemy.state.health;
                    const maxHealth = enemy.config.maxHealth;
                    if (!turnNum === null || enemyHealth < maxHealth) {
                        $(introText).addClass("container");
                        $(introText).html(`<h1 class='text-center flash'>CONTINUE 
                        FIGHTING<br>${name} LEVEL ${level}!</h1>`);
                    }
                    $(introText).fadeIn(800);
                }, 800);
                setTimeout(() => {
                    const { introText } = game.refs;
                    $(introText).fadeOut(800);
                    $("button").removeAttr("disabled");
                }, 2300)
            },
            attack1: () => {
                console.log(`enemy.animation.attack1();`);
                const { enemyWrapper, attack1AnimClass } = enemy.refs;
                const { attack1Sound } = enemy.playSound;
                $(enemyWrapper).addClass(attack1AnimClass);
                attack1Sound();
            },
            defeat: () => {
                console.log("enemy.animation.defeat();");
                const { enemyHUD, enemyName, enemyHpText,
                    enemyHpBar, enemyWrapper } = enemy.refs
                $(enemyHUD).append(`<div class="col-12">
                <h1>${enemy.config.name} DEFEATED!</h1></div>`);
                $(enemyName).hide();
                $(enemyHpText).hide();
                $(enemyHpBar).hide();
                $(enemyWrapper).remove();
            }
        },
        playSound: {
            attack1Sound: () => {
                console.log(`enemy.playSound.attack1Sound();`);
                const { attack1Sound } = enemy.refs;
                const { sfxVolume } = game.config;
                var attack1 = new Audio(attack1Sound);
                attack1.volume = sfxVolume;
                attack1.play();
            },
            attack2Sound: () => {
    
            },
            crySound: () => {
                console.log(`enemy.playSound.crySound();`);
                const { crySound } = enemy.refs;
                const { sfxVolume } = game.config;
                cry = new Audio(crySound);
                cry.volume = sfxVolume;
                cry.play();
            }
        },
        fn: {
            attack1: () => {
                console.log(`enemy.fn.attack1();`);
                const { attackResponses, name} = enemy.config;
                const { attack1 } = enemy.animation;
                const { consoleDiv, actionsDiv } = game.refs;
                const { setHealth } = player.fn;
                var randomAtkResp = attackResponses[Math.floor(Math.random() * attackResponses.length)];
                setTimeout(() => {
                    let statusText1 = $("<p class='consoleText'>").html(`${name} is preparing to attack!`);
                    statusText1.prependTo(consoleDiv);
                }, 1000);
                setTimeout(() => {
                    attack1();
                    let statusText1 = $("<p class='consoleText'>").html(randomAtkResp);
                    statusText1.prependTo(consoleDiv);
                }, 1500);
                setTimeout(() => {
                    const { rollDamage } = enemy.fn;
                    const { modifier } = enemy.config;
                    const { enemyDamageNumber } = game.refs;
                    rollDamage("attack1");
                    let damageInt = parseInt(sessionStorage.getItem("rollEnemyDamage"));
                    let damageTotal = damageInt + modifier;
                    if (damageTotal > 0) {
                        $(enemyDamageNumber).text(`${damageTotal} DMG`);
                    }
                    else {
                        $(enemyDamageNumber).text("WHIFF!");
                    }
                    let playerHealth = parseInt(localStorage.getItem("playerHealth"));
                    playerHealth -= damageTotal;
                    setHealth(playerHealth);
                    localStorage.setItem("playerHealth", playerHealth);
                    if (playerHealth <= 0) {
                        const { onDeath } = player.fn;
                        onDeath();
                    }
                    let statusText1 = $("<p class='consoleText'>").html(`${name}
                    attacked for ${damageTotal} DMG!`);
                    statusText1.prependTo(consoleDiv);
                    $(enemyDamageNumber).fadeIn();
                }, 2000);
                setTimeout(() => {
                    $(enemyDamageNumber).fadeOut();
                }, 3000);
                setTimeout(() => {
                    $(enemy.refs.enemyWrapper).removeClass(enemy.refs.attack1AnimClass);
                    $(actionsDiv).show();
                    let turnNum = game.state.turnNum--;
                    console.log(`    turnNum: ${turnNum}`);
                    localStorage.setItem("turnNum", turnNum);
                    const { takeTurn } = player.fn;
                    takeTurn();
                }, 3500);
            },
            initEnemyHealth: () => {
                console.log(`enemy.fn.setHealth();`);
                const { maxHealth } = enemy.config;
                const { introText } = game.refs;
                let enemyHealth = localStorage.getItem("enemyHealth");
                if (enemyHealth === null || enemyHealth === "null") {
                    enemyHealth = maxHealth;
                    localStorage.setItem("enemyHealth", enemyHealth);
                }
                else if (enemyHealth < 0) {
                    enemyHealth = 0;
                    $(introText).remove();
                    game.fn.win();
                }
                const { enemyHpBar, enemyHealthText } = enemy.refs
                $(enemyHpBar).attr("style", `width: ${enemyHealth}px;`);
                $(enemyHealthText).text(enemyHealth);
            },
            healthCheck: () => {
                let getHealth = parseInt(localStorage.getItem("enemyHealth"));
                if (getHealth <= 0) {
                    return false;
                } 
                else {
                    return true;
                }
            },
            rollDamage: (actionType) => {
                console.log(`enemy.fn.rollDamage();`);
                const { attackMin, attackMax, canCrit,
                    critThresh, critMin, critMax } = enemy.config;
                if (actionType === "attack1") {
                    let min = Math.ceil(attackMin);
                    let max = Math.floor(attackMax);
                    let calcDamage = Math.floor(Math.random() * (max - min + 1) + min);
                    console.log(`    ${calcDamage} DAMAGE!`)
                    // IF the damage rolled passes the min number to crit...
                    if (calcDamage > critThresh && canCrit !== false) {
                        console.log(`    CRIT! thresh:${critThresh}, rolled:${calcDamage}`);
                        let min = Math.ceil(critMin);
                        let max = Math.floor(critMax);
                        let critDamage = Math.floor(Math.random() * (max - min + 1) + min);
                        console.log(`    Crit damage: ${critDamage}`);
                        const { critText } = game.refs;
                        $(critText).text(`    CRIT! ${critDamage} DMG`);
                        $(critText).fadeIn();
                        setTimeout(() => {
                            $(critText).fadeOut();
                        }, 2000);
                        calcDamage += critDamage;
                    }
                    sessionStorage.setItem("rollEnemyDamage", calcDamage);
                }
            },
            setHealth: (enemyHealth) => {
                if (enemyHealth < 0) {
                    enemyHealth = 0;
                }
                console.log(`enemy.fn.setHealth();`);
                const { enemyHpBar, enemyHealthText } = enemy.refs
                $(enemyHpBar).attr("style", `width: ${enemyHealth}px;`);
                $(enemyHealthText).text(enemyHealth);
            },
            takeTurn: () => {
                console.log(`enemy.fn.takeTurn();\n========================`);
                // enemy.fn.takeTurn() is where enemy AI will decide action.
                const { attack1, healthCheck } = enemy.fn;
                let isAlive = healthCheck();
                if (isAlive === true) {
                attack1();
                }
                else {
                }
            }
        },
    };
    
        game.fn.start(); 
        /* ===================================================================
        ======================== EVENT LISTENERS =============================
        =================================================================== */
    
        $("button").on("mouseover", () => {
            select = new Audio(game.refs.selectSound);
            select.volume = game.config.sfxVolume;
            select.play();
        });
    
        $("#attackButton").on("click", () => {
            player.fn.attack();
        });
    
    });
