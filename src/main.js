let config = {
   type: Phaser.AUTO,
   width: 640,
   height: 480,
   scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
//var highScore;
//var storedScore;
var savedScore;

// define game settings
game.settings = {
   spaceshipSpeed: 3,
   gameTimer: 10000,    
   highScore: 0
}

// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;

