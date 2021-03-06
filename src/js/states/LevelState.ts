/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

import RatPack from '../entities/RatPack.ts';
import Mouse from '../entities/Mouse.ts';
import Cheese from '../entities/Cheese.ts';
import Hud from '../entities/Hud.ts';

interface point { x: number, y: number };

export default class LevelState extends Phaser.State {
	game: Phaser.Game;

	// map stuffs
	map: Phaser.Tilemap;
	backgroundLayer: Phaser.TilemapLayer;
	blockedLayer: Phaser.TilemapLayer;
	hud = new Hud();

	// mouse stuffs
	spawnPositions: point[];
	mice: RatPack;
	cheesePosition: point[];
	cheese: Cheese;
	traps: Phaser.Group;

	// level vars
	mapName: string;
	mouseCount: number;
	mouseSpeed: number;
	frequency: number;
	nextState: string;
	trapCount: number;

	setupLevel () {

	}

	create () {
		this.setupLevel();
		// this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		// setup the map
		this.map = this.game.add.tilemap(this.mapName);
		this.map.addTilesetImage('tiles', 'gameTiles');
		this.backgroundLayer = this.map.createLayer('backgroundLayer');
		this.blockedLayer = this.map.createLayer('blockedLayer');
		this.game.physics.enable(this.blockedLayer);
		this.map.setCollisionBetween(0, 1, true, 'blockedLayer');
		
		this.trapCount = this.mouseCount;
		
		this.hud.init(this.game, this.trapCount);

		// obtain array of spawn positions from our tiledmap
		this.spawnPositions = this.findPositionOfType('startingPosition');
		this.cheesePosition = this.findPositionOfType('cheese');

		// create our mice group and add it to the world
		this.mice = new RatPack(this.game, this.spawnPositions, this.mouseCount, this.mouseSpeed, this.frequency);
		this.world.addChild(this.mice);

		this.cheese = new Cheese(this.game, this.cheesePosition[0].x, this.cheesePosition[0].y);
		this.world.addChild(this.cheese);

		this.traps = new Phaser.Group(this.game, null, 'traps', true, true, Phaser.Physics.ARCADE);

		this.game.input.onDown.add(this.onClick, this);
	}

	update () {
		this.game.physics.arcade.collide(this.mice, this.blockedLayer, this.mouseCollides);
		this.game.physics.arcade.collide(this.mice, this.traps, this.mouseTrap, null, this);
		this.game.physics.arcade.collide(this.mice, this.cheese, this.mouseEatsCheese, null, this);
		
		if (this.mouseCount < 1) {
			this.game.state.start(this.nextState, true);
		}

		if (this.cheese.health < 1) {
			this.game.state.start('gameOver', true, true);
		}
	}

	mouseCollides (mouse : Mouse, tile : Phaser.Tile) {
		mouse.changeDirection(tile);
	}

	mouseTrap (mouse : Mouse, trap : Phaser.Sprite) {
		mouse.onKilled(function () {
			this.mouseCount--;
		}.bind(this));
		trap.destroy();
	}

	mouseEatsCheese (cheese: Cheese, mouse: Mouse) {
		mouse.eatCheese();
		cheese.health -= 10;
		this.hud.update('cheeseHealth', cheese.health);
		setTimeout(function () {
			this.mouseCount--;
		}.bind(this), 1000);
	}

	onClick (event) {
		if (event.targetObject && event.targetObject.sprite && event.targetObject.sprite.key === 'trap') return;
		var tile = this.blockedLayer.getTileXY(this.game.input.mousePointer.x, this.game.input.mousePointer.y, <Phaser.Point>{});
		if (this.blockedLayer.layer.data[tile.y][tile.x].index !== 1 && this.trapCount > 0) {
			let trap = this.traps.create(tile.x * 32, tile.y * 32, 'trap');
			trap.inputEnabled = true;
			trap.events.onInputDown.add(this.trapClicked, this);
			this.trapCount--;
			this.hud.update('mouseTraps', this.trapCount);
		}
	}

	trapClicked (trap) {
		trap.destroy();
		this.trapCount++;
		this.hud.update('mouseTraps', this.trapCount);
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
