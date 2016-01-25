/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

import Mouse from './Mouse.ts';

export default class RatPack extends Phaser.Group {
	constructor (game: Phaser.Game, spawnPositions: Array<any>, qty: number) {
		super(game);

		this.enableBody = true;
		this.physicsBodyType = Phaser.Physics.ARCADE;

		let pos = spawnPositions[Math.floor(Math.random() * spawnPositions.length)];

		for (let i = 0; i < qty; i++) {
			this.add(new Mouse(this.game, pos.x, pos.y - 32));
		}
	}
}
