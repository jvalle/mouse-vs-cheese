/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Cheese extends Phaser.Sprite {
	health: number;

	constructor (game: Phaser.Game, x, y) {
		super(game, x, y, 'cheese');
	}
}
