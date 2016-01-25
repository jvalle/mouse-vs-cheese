/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

import RatPack from '../entities/RatPack.ts';

interface point { x: number, y: number };

export default class GameState extends Phaser.State {
	game: Phaser.Game;

	// map stuffs
	map: Phaser.Tilemap;
	backgroundLayer: Phaser.TilemapLayer;
	blockedLayer: Phaser.TilemapLayer;

	// mouse stuffs
	mice: RatPack;
	spawnPositions: point[];

	create () {
		// setup the map
		this.map = this.game.add.tilemap('level1');
		this.map.addTilesetImage('tiles', 'gameTiles');
		this.backgroundLayer = this.map.createLayer('backgroundLayer');
		this.blockedLayer = this.map.createLayer('blockedLayer');
		this.game.physics.enable(this.blockedLayer);
		this.map.setCollisionBetween(1, 200, true, 'blockedLayer');

		// obtain array of spawn positions from our tiledmap
		this.spawnPositions = this.findObjectsByType('startingPosition', 'objectLayer').map(function (pos) {
			return {
				x: pos.x,
				y: pos.y
			};
		});

		// create our mice group and add it to the world
		this.mice = new RatPack(this.game, this.spawnPositions, 10);
		this.world.addChild(this.mice);
	}

	update () {
		this.game.physics.arcade.collide(this.mice, this.blockedLayer);
	}

	// helper function to get objects from map by type
	findObjectsByType (type: string, layer: string) {
		var result = [];
		this.map.objects[layer].forEach(function (el) {
			if (el.type === type) {
				el.y -= this.map.tileHeight;
				result.push(el);
			}
		}.bind(this));
		return result;
	}
}
