/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

import Mouse from './Mouse.ts';

export default class RatPack extends Phaser.Group {
	qty: number;
	spawnPositions: Array<any>;
	curPos: any;
	timer: Phaser.Timer;

	constructor (game: Phaser.Game, spawnPositions: Array<any>, qty: number) {
		super(game);

		this.enableBody = true;
		this.physicsBodyType = Phaser.Physics.ARCADE;
		this.qty = qty;
		this.spawnPositions = spawnPositions;
		this.curPos = this.spawnPositions[Math.floor(Math.random() * this.spawnPositions.length)];

		// setup a game timer to spawn enemies every x seconds
		this.timer = this.game.time.create(false);
		this.timer.loop(2500, this.spawnMouse, this);
		this.timer.start();
	}

	spawnMouse () {
		if (this.qty--) {
			// add the mouse
			this.add(new Mouse(this.game, this.curPos.x, this.curPos.y));

			// get a random new span position
			this.curPos = this.spawnPositions[Math.floor(Math.random() * this.spawnPositions.length)];
		} else {
			// if we have no more mice to draw, destroy the timer
			this.timer.destroy();
		}
	}
}
