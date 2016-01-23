/// <reference path="../../typings/require.d.ts"/>
/// <reference path="../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../typings/phaser/phaser.comments.d.ts"/>

import GameState from './states/Game.ts';
import Preload from './states/Preload.ts';

const game = new Phaser.Game("100", "100", Phaser.AUTO);

game.state.add('Preload', Preload);
game.state.add('Game', GameState);

game.state.start('Preload');
