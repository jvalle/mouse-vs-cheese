/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Mouse extends Phaser.Sprite {
	framerate: number = 10;
	speed: number = 100;
	cursors: Phaser.CursorKeys;
	direction: string;
	lastDirection: string;
	body: Phaser.Physics.Arcade.Body;
	lastDirectionChange: number;

	constructor (game: Phaser.Game, x, y, direction) {
		super(game, x, y, 'mouse');

		// programatically set the orientation of the mouse
		this.direction = direction;

		// define sprite animations
		this.animations.add('up', [9, 10, 11], this.framerate, true);
		this.animations.add('down', [0, 1, 2], this.framerate, true);
		this.animations.add('left', [3, 4, 5], this.framerate, true);
		this.animations.add('right', [6, 7, 8], this.framerate, true);
		this.animations.add('death', [12, 13, 14, 14, 14, 14], this.framerate, false);

		// add physics
		this.game.physics.arcade.enable(this);

		this.setVelocity(this.direction);

		this.cursors = this.game.input.keyboard.createCursorKeys();
	}

	update () {

	}

	setVelocity (direction) {
		if (direction === 'right') {
			this.body.velocity.x = this.speed;
		} else if (direction === 'left') {
			this.body.velocity.x = -this.speed;
		} else if (direction === 'up') {
			this.body.velocity.y = -this.speed;
		} else {
			this.body.velocity.y = this.speed;
		}

		this.animations.play(direction);
	}

	changeDirection (tile) {
		this.body.velocity.setTo(0);

		if (this.direction === 'right') {
			if (tile.layer.data[tile.y + 1][tile.x - 1].index !== 1 && tile.layer.data[tile.y - 1][tile.x - 1].index !== 1) {
				this.direction = Math.round(Math.random()) ? 'up' : 'down';
			} else if (tile.layer.data[tile.y + 1][tile.x - 1].index !== 1) {
				this.direction = 'down';
			} else {
				this.direction = 'up';
			}
		} else if (this.direction === 'left') {
			if (tile.layer.data[tile.y + 1][tile.x + 1].index !== 1 && tile.layer.data[tile.y - 1][tile.x + 1].index !== 1) {
				this.direction = Math.round(Math.random()) ? 'up' : 'down';
			} else if (tile.layer.data[tile.y + 1][tile.x + 1].index !== 1) {
				this.direction = 'down';
			} else {
				this.direction = 'up';
			}
		} else if (this.direction === 'up') {
			if (tile.layer.data[tile.y + 1][tile.x + 1].index !== 1 && tile.layer.data[tile.y + 1][tile.x - 1].index !== 1) {
				this.direction = Math.round(Math.random()) ? 'left' : 'right';
			} else if (tile.layer.data[tile.y + 1][tile.x + 1].index !== 1) {
				this.direction = 'right';
			} else {
				this.direction = 'left';
			}
		} else {
			if (tile.layer.data[tile.y - 1][tile.x + 1].index !== 1 && tile.layer.data[tile.y - 1][tile.x - 1].index !== 1) {
				this.direction = Math.round(Math.random()) ? 'left' : 'right';
			} else if (tile.layer.data[tile.y - 1][tile.x + 1].index !== 1) {
				this.direction = 'right';
			} else {
				this.direction = 'left';
			}
		}

		this.setVelocity(this.direction);

	}

	onKilled () {
		this.animations.play('death').onComplete.add(() => this.destroy());
	}
}
