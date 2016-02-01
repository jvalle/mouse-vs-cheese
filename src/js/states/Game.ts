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

	traps: Phaser.Group;

	create () {
		// setup the map
		this.map = this.game.add.tilemap('level1');
		this.map.addTilesetImage('tiles', 'gameTiles');
		this.backgroundLayer = this.map.createLayer('backgroundLayer');
		this.blockedLayer = this.map.createLayer('blockedLayer');
		this.game.physics.enable(this.blockedLayer);
		this.map.setCollisionBetween(0, 1, true, 'blockedLayer');

		// obtain array of spawn positions from our tiledmap
		this.spawnPositions = this.findSpawnPoints();

		// create our mice group and add it to the world
		this.mice = new RatPack(this.game, this.spawnPositions, 10, this.map);
		this.world.addChild(this.mice);

		this.traps = new Phaser.Group(this.game, null, 'traps', true, true, Phaser.Physics.ARCADE);
		this.traps.physicsBodyType = Phaser.Physics.ARCADE;

		this.game.input.onDown.add(this.onClick, this);
	}

	update () {
		this.game.physics.arcade.collide(this.mice, this.blockedLayer, this.mouseCollides);
		this.game.physics.arcade.collide(this.mice, this.traps, this.mouseTrap);
	}

	mouseCollides (mouse, tile) {
		mouse.changeDirection(tile);
	}

	mouseTrap (mouse, trap) {
		mouse.onKilled();
		trap.destroy();
	}

	findSpawnPoints () {
		return this.findObjectsByType('startingPosition', 'objectLayer').map(function(pos) {
			return {
				x: pos.x,
				y: pos.y
			}
		});
	}

	onClick () {
		var tile = this.blockedLayer.getTileXY(this.game.input.mousePointer.x, this.game.input.mousePointer.y, <Phaser.Point>{});
		if (this.blockedLayer.layer.data[tile.y][tile.x].index === -1) {
			this.traps.create(tile.x * 32, tile.y * 32, 'trap');
		}
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
