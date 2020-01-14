
// Constructor for creating a new enemy (and it's stat values)...
function Enemy(name, level, statMod, hpBase, minHit, maxHit, goldBase, items, spells) {
    this.enemyName = name;
    this.enemyLevel = level;
    // statMod multiplicatively makes enemies more challenging/rewarding.
    this.enemyStatMod = statMod
    this.enemyHpBase = hpBase;
    // enemyMaxHP = level * hpBase * statMod ... 
    this.enemyMaxHp = parseInt(this.enemyLevel * this.enemyHpBase * this.enemyStatMod);
    this.enemyCurrentHp;
    this.enemyMinHit = this.enemyLevel * minHit;
    this.enemyMaxHit = this.enemyLevel * maxHit;
    this.goldBase = goldBase;
    this.gold = parseInt(this.enemyLevel * this.goldBase * this.enemyStatMod);
    this.items = items;
    this.spells = spells;
}

var level = [1, 2];
var getRandomLevel = level[Math.floor(Math.random() * level.length)];
var levelInt = parseInt(getRandomLevel);
var hellbat = new Enemy("H3LLB4T", levelInt, .6, 30, 0, 6, 12, [], [],);

console.log(hellbat);
console.log(hellbat.enemyName);
console.log(hellbat.gold);