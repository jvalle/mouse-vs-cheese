/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Mouse extends Phaser.Sprite {
	framerate: number = 10;
    constructor (game: Phaser.Game, x, y) {
        super(game, x, y, 'mouse');
        
        // define sprite animations
        this.animations.add('up', [9, 10, 11], this.framerate, true);
        this.animations.add('down', [0, 1, 2], this.framerate, true);
        this.animations.add('left', [3, 4, 5], this.framerate, true);
        this.animations.add('right', [6, 7, 8], this.framerate, true);
    }
}
