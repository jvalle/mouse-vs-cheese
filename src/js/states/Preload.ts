/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Preload extends Phaser.State {
    preload () {
        this.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('gameTiles', 'assets/tiles.png');
    }
    
    create () {
        this.game.state.start('Game');
    }
}