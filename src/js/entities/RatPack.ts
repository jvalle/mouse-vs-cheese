/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

import Mouse from './Mouse.ts';

interface point { x: number, y: number };

export default class RatPack extends Phaser.Group {
	qty: number;
	spawnPositions: point[];
	curPos: point;
	timer: Phaser.Timer;
	mouseSpeed: number;
	frequency: number;

	constructor (game: Phaser.Game, spawnPositions: point[], qty: number, mouseSpeed : number = 100, freq : number = 1000) {
		super(game);

		this.enableBody = true;
		this.physicsBodyType = Phaser.Physics.ARCADE;
		this.qty = qty;
		this.spawnPositions = spawnPositions;
		this.curPos = this.spawnPositions[Math.floor(Math.random() * this.spawnPositions.length)];
		
		this.mouseSpeed = mouseSpeed;
		this.frequency = freq;

		// setup a game timer to spawn enemies every x seconds
		this.timer = this.game.time.create(false);
		this.timer.loop(this.frequency, this.spawnMouse, this);
		this.timer.start();
	}

	spawnMouse () {
		let newX;
		let newY;
		let direction;

		if (this.qty--) {
			if (this.curPos.x === 0) {
				newX = this.curPos.x - 32;
				newY = this.curPos.y;
				direction = 'right';
			} else if (this.curPos.x === this.game.width / 32) {
				newX = this.curPos.x + 32;
				newY = this.curPos.y;
				direction = 'left'
			} else if (this.curPos.y === 0) {
				newX = this.curPos.x;
				newY = this.curPos.y - 32;
				direction = 'down';
			} else {
				newX = this.curPos.x;
				newY = this.curPos.y + 32;
				direction = 'up'
			}
			// add the mouse
			this.add(new Mouse(this.game, newX, newY, direction, this.mouseSpeed));

			// get a random new span position
			this.curPos = this.spawnPositions[Math.floor(Math.random() * this.spawnPositions.length)];
		} else {
			// if we have no more mice to draw, destroy the timer
			this.timer.destroy();
		}
	}
}
