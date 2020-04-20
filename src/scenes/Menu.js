class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/select.wav');
        this.load.audio('sfx_explosion', './assets/ship_gone.wav');
        this.load.audio('sfx_rocket', './assets/fly.wav');
        this.load.audio('bg_track', './assets/original_bg_track.wav');

        // load titlescreen
        this.load.image('title', './assets/titlescreen.png');
    }

    create() {
        // menu display
        this.add.image(320, 240, 'title');

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000,    
            highScore: 0
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000,
            highScore: 0
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
      }
      
}