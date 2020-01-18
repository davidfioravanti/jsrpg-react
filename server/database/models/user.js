const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({

	username: { type: String, unique: false, required: true },
	password: { type: String, unique: false, required: true },
	displayName: { type: String, unique: false, required: false },
	playerGold: { type: Number, unique: false, required: false },
	playerInventory: { type: Array, unique: false, required: false },
	xPos: { type: Number, unique: false, required: false },
	yPos: { type: Number, unique: false, required: false },
	turnNum: { type: Number, unique: false, required: false },
	autoplay: { type: String, unique: false, required: false },
	sfxVolume: { type: Number, unique: false, required: false },
	musicVolume: { type: Number, unique: false, required: false },
	playerStrength: { type: Number, unique: false, required: false },
	playerDexterity: { type: Number, unique: false, required: false },
	playerConstitution: { type: Number, unique: false, required: false },
	playerIntelligence: { type: Number, unique: false, required: false },
	playerWisdom: { type: Number, unique: false, required: false },
	playerCharisma: { type: Number, unique: false, required: false },
	playerHealth: { type: Number, unique: false, required: false },
	enemyHealth: { type: Number, unique: false, required: false },
	roomsCleared: { type: Number, unique: false, required: false },
	monstersSlain: { type: Number, unique: false, required: false },
	bossesSlain: { type: Number, unique: false, required: false },
	secretsFound: { type: Number, unique: false, required: false },
	seenHellbat: { type: String, unique: false, required: false },
	seenSkeleton: { type: String, unique: false, required: false },
	deathBy: { type: String, unique: false, required: false },
	lastScreen: { type: String, unique: false, required: false},
	newCharacter: { type: String, unique: false, required: false},
	gameVersion: { type: String, unique: false, required: false},
	
})

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

const User = mongoose.model('User', userSchema)
module.exports = User