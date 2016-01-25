/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Mouse extends Phaser.Sprite {
	framerate: number = 10;
	speed: number = 100;
	cursors: Phaser.CursorKeys;

    constructor (game: Phaser.Game, x, y) {
        super(game, x, y, 'mouse');
        
        // define sprite animations
        this.animations.add('up', [9, 10, 11], this.framerate, true);
        this.animations.add('down', [0, 1, 2], this.framerate, true);
        this.animations.add('left', [3, 4, 5], this.framerate, true);
        this.animations.add('right', [6, 7, 8], this.framerate, true);
		
		// add physics
		this.game.physics.arcade.enable(this);
		
		this.cursors = this.game.input.keyboard.createCursorKeys();

    }
	
	update () {
		if (this.cursors.up.isDown) {
			this.body.velocity.y = -this.speed;
			this.body.velocity.x = 0;
			this.animations.play('up');
		} else if (this.cursors.down.isDown) {
			this.body.velocity.y = this.speed;
			this.body.velocity.x = 0;
			this.animations.play('down');
		} else if (this.cursors.left.isDown) {
			this.body.velocity.x = -this.speed;
			this.body.velocity.y = 0;
			this.animations.play('left');
		} else if (this.cursors.right.isDown) {
			this.body.velocity.x = this.speed;
			this.body.velocity.y = 0;
			this.animations.play('right');
		} else {
			this.body.velocity.x = 0;
			this.body.velocity.y = 0;
			this.animations.stop();
		}
	}
}
