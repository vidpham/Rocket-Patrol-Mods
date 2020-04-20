/* Pham, Vivian
Tiers: 
10 - Track a high score that persists across scenes and display it in the UI 
10 - Add your own (copyright-free) background music to the Play scene 
10 - Create a new scrolling tile sprite for the background
10 - Allow the player to control the Rocket after it's fired 
15 - Replace the UI borders with new artwork 
15 - Create a new title screen
15 - Implement parallax scrolling 
25 - Create new artwork for all of the in-game assets (rocket, spaceships, explosion) 

EXTRA NOTE: Aside from the artwork, the background music and sound effects are also made by me.
Music was made in LMMS and sound effects were edited on Reaper.
Art was made in Aseprite.

*/


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

