/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

import RatPack from '../entities/RatPack.ts';

export default class GameState extends Phaser.State {
    game: Phaser.Game;
    
    // map stuffs
    map: Phaser.Tilemap;
    backgroundLayer: Phaser.TilemapLayer;
    blockedLayer: Phaser.TilemapLayer;

	mice: RatPack;
	spawnPositions: Array<Object>;

	create () {
        // setup the map
        this.map = this.game.add.tilemap('level1');
        this.map.addTilesetImage('tiles', 'gameTiles');
        this.backgroundLayer = this.map.createLayer('backgroundLayer');
		this.blockedLayer = this.map.createLayer('blockedLayer');
		this.game.physics.enable(this.blockedLayer);
		this.map.setCollisionBetween(1, 200, true, 'blockedLayer');

		this.spawnPositions = this.findObjectsByType('startingPosition', 'objectLayer').map(function (pos) {
			return {
				x: pos.x,
				y: pos.y
			};
		});
		
		console.log(this.spawnPositions);

		this.mice = new RatPack(this.game, this.spawnPositions, 10);
		this.world.addChild(this.mice);
	}

	update () {
		this.game.physics.arcade.collide(this.mice, this.blockedLayer);
	}
	
	findObjectsByType (type: string, layer: string) {
		var result = [];
		this.map.objects[layer].forEach(function (el) {
			if (el.type === type) {
				// el.y -= this.map.tileHeight;
				result.push(el);
			}
		});
		return result;
	}
}
