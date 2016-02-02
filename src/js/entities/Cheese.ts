/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Cheese extends Phaser.Sprite {
	health: number = 100;

	constructor (game: Phaser.Game, x, y) {
		super(game, x, y, 'cheese');

		this.game.physics.arcade.enable(this);
		this.body.immovable = true;
	}

	update () {
		if (this.health <= 50) {
			this.frame = 1;
		}
		if (this.health <= 25) {
			this.frame = 2;
		}
	}
}
