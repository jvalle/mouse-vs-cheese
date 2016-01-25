/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Mouse extends Phaser.Sprite {
	framerate: number = 10;
	speed: number = 100;
	cursors: Phaser.CursorKeys;
	direction: string;
	lastDirection: string;

	constructor (game: Phaser.Game, x, y, direction) {
		super(game, x, y, 'mouse');

		// programatically set the orientation of the mouse
		this.direction = direction;

		// define sprite animations
		this.animations.add('up', [9, 10, 11], this.framerate, true);
		this.animations.add('down', [0, 1, 2], this.framerate, true);
		this.animations.add('left', [3, 4, 5], this.framerate, true);
		this.animations.add('right', [6, 7, 8], this.framerate, true);

		// add physics
		// this.game.physics.arcade.enable(this);

		this.cursors = this.game.input.keyboard.createCursorKeys();
	}

	update () {
		if (this.direction === 'right') {
			this.body.velocity.x = this.speed;
		} else if (this.direction === 'left') {
			this.body.velocity.x = -this.speed;
		} else if (this.direction === 'up') {
			this.body.velocity.y = -this.speed;
		} else {
			this.body.velocity.y = this.speed;
		}

		this.animations.play(this.direction);
	}

	changeDirection () {
		this.lastDirection = this.direction;
		if (this.direction === 'right' || this.direction === 'left') {
			this.direction = Math.round(Math.random()) ? 'up' : 'down';
		} else {
			this.direction = Math.round(Math.random()) ? 'left' : 'right';
		}
	}
}
