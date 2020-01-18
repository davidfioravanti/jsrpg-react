const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')

router.get("/load-game", (req, res) => {
    console.log("LOADING PLAYER DATA");
    User.findById(req.user.id, (err, user) => {
        if (err) {
            console.log(err)
        }
        else {
            playerStats = user;
            res.json(playerStats);
        }
    })
})

router.post("/save-game", (req, res) => {
    let  {playerGold, playerInventory, xPos, yPos, turnNum,
        autoplay, sfxVolume, musicVolume,
        playerStrength, playerDexterity, playerConstitution,
        playerIntelligence, playerWisdom, playerCharisma,
        playerHealth, enemyHealth, roomsCleared,
        monstersSlain, bossesSlain, secretsFound, seenHellbat,
        seenSkeleton, deathBy, lastScreen, newCharacter, gameVersion } = req.body;

    User.findByIdAndUpdate(req.user.id, {
            playerGold: playerGold, playerInventory: playerInventory, xPos: xPos, yPos: yPos, turnNum: turnNum,
            autoplay: autoplay, sfxVolume: sfxVolume, musicVolume: musicVolume, playerStrength: playerStrength,
            playerDexterity: playerDexterity, playerConstitution: playerConstitution,
            playerIntelligence: playerIntelligence, playerWisdom: playerWisdom,
            playerCharisma: playerCharisma, playerHealth: playerHealth,
            enemyHealth: enemyHealth, roomsCleared: roomsCleared, monstersSlain: monstersSlain,
            bossesSlain: bossesSlain, secretsFound: secretsFound, seenHellbat: seenHellbat,
            seenSkeleton: seenSkeleton, deathBy: deathBy, lastScreen: lastScreen,
            newCharacter: newCharacter, gameVersion: gameVersion
    }, (err, user) => {
        if (err) {
            console.log(err)
        }
        else {
            playerStats = user;
            res.json(playerStats);
        }
    })
})

router.post('/user', (req, res) => {
    console.log('user signup');
    const { username, password, displayName } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.status(401).json({
                error: `USERNAME TAKEN : ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username, password: password, displayName: displayName,
                playerGold: 0, playerInventory: {}, xPos: 0, yPos: 0, turnNum: 0, autoplay: "false",
                sfxVolume: .5, musicVolume: .5, playerStrength: 0,
                playerDexterity: 0, playerConstitution: 0,
                playerIntelligence: 0, playerWisdom: 0,
                playerCharisma: 0, playerLevel: 0, playerHealth: 100,
                enemyHealth: 100, roomsCleared: 0, monstersSlain: 0,
                bossesSlain: 0, secretsFound: 0, seenHellbat: "false",
                seenSkeleton: "false", deathBy: "", lastScreen: "playerConfig.html",
                newCharacter: "true", gameVersion: "v1.3"
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router