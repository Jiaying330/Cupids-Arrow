/*
 * Jiaying Hou
 * Rocket Patrol Mods
 * 4/19/2021
 * 
 * Display the time remaining (in seconds) on the screen (10)
 * 
 * Redesign the game's artwork, UI, and sound to change its 
 * theme/aesthetic (to something other than sci-fi) (60)
 * 
 * Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
 * 
 * bgm: ukulele; Music: www.bensound.com
 * 
 */
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let starSpeed = 4;

//reserve keyboard binding
let keyF, keyR, keyLEFT, keyRIGHT;