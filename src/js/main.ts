/// <reference path="../../typings/require.d.ts"/>
/// <reference path="../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../typings/phaser/phaser.comments.d.ts"/>

import GameState from './states/Game.ts';

const game = new Phaser.Game(800, 600, Phaser.AUTO, 'app');

game.state.add('GameState', GameState);

game.state.start('GameState');
