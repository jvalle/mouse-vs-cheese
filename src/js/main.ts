/// <reference path="../../typings/require.d.ts"/>
/// <reference path="../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../typings/phaser/phaser.comments.d.ts"/>

import Preload from './states/Preload.ts';

import MenuScreen from './states/MenuScreen.ts';
import Int1 from './states/Int1.ts';

import Level1 from './states/Level1.ts';
import Level2 from './states/Level2.ts';

const game = new Phaser.Game("100", "100", Phaser.AUTO, 'app');

game.state.add('Preload', Preload);

game.state.add('Menu', MenuScreen);
game.state.add('int1', Int1);

game.state.add('level1', Level1);
game.state.add('level2', Level2);

game.state.start('Preload');
