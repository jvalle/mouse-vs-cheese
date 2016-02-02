/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

import RatPack from '../entities/RatPack.ts';
import Mouse from '../entities/Mouse.ts';
import Cheese from '../entities/Cheese.ts';

interface point { x: number, y: number };

export default class Level1 extends Phaser.State {
	game: Phaser.Game;

	// map stuffs
	map: Phaser.Tilemap;
	backgroundLayer: Phaser.TilemapLayer;
	blockedLayer: Phaser.TilemapLayer;

	// mouse stuffs
	spawnPositions: point[];
	mice: RatPack;
	mouseCount: number = 10;
	cheesePosition: point[];
	cheese: Cheese;

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
		this.spawnPositions = this.findPositionOfType('startingPosition');
		this.cheesePosition = this.findPositionOfType('cheese');

		// create our mice group and add it to the world
		this.mice = new RatPack(this.game, this.spawnPositions, this.mouseCount);
		this.world.addChild(this.mice);

		this.cheese = new Cheese(this.game, this.cheesePosition[0].x, this.cheesePosition[0].y);
		this.world.addChild(this.cheese);

		this.traps = new Phaser.Group(this.game, null, 'traps', true, true, Phaser.Physics.ARCADE);

		this.game.input.onDown.add(this.onClick, this);
	}

	update () {
		this.game.physics.arcade.collide(this.mice, this.blockedLayer, this.mouseCollides);
		this.game.physics.arcade.collide(this.mice, this.traps, this.mouseTrap, null, this);
		this.game.physics.arcade.collide(this.mice, this.cheese, this.mouseEatsCheese);
		
		if (this.mouseCount < 1) {
			this.game.state.start('int1', true);
		}
	}

	mouseCollides (mouse : Mouse, tile : Phaser.Tile) {
		mouse.changeDirection(tile);
	}

	// mouse can keep colliding after dying so counter decrements
	mouseTrap (mouse : Mouse, trap : Phaser.Sprite) {
		mouse.onKilled();
		this.mouseCount--;
		trap.destroy();
	}

	mouseEatsCheese(cheese: Cheese, mouse: Mouse) {
		mouse.eatCheese();
		cheese.health -= 10;
	}

	onClick () {
		var tile = this.blockedLayer.getTileXY(this.game.input.mousePointer.x, this.game.input.mousePointer.y, <Phaser.Point>{});
		if (this.blockedLayer.layer.data[tile.y][tile.x].index !== 1) {
			this.traps.create(tile.x * 32, tile.y * 32, 'trap');
		}
	}

	// helper function to get objects from map by type
	findObjectsByType (type : string, layer : string) {
		var result = [];
		this.map.objects[layer].forEach(function (el) {
			if (el.type === type) {
				el.y -= this.map.tileHeight;
				result.push(el);
			}
		}.bind(this));
		return result;
	}

	findPositionOfType (type : string) {
		return this.findObjectsByType(type, 'objectLayer').map(function(pos) {
			return {
				x: pos.x,
				y: pos.y
			}
		});
	}

	shutdown () {
		this.traps.removeAll(true);
	}
}
