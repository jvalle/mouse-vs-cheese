/// <reference path="../../typings/require.d.ts"/>
/// <reference path="../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../typings/phaser/phaser.comments.d.ts"/>

import Preload from './states/Preload.ts';

import MenuScreen from './states/MenuScreen.ts';
import Int1 from './states/Int1.ts';
import Int2 from './states/Int2.ts';
import GameOver from './states/GameOver.ts';

import {Level1, Level2, Level3} from './states/Levels.ts';

const game = new Phaser.Game("100", "100", Phaser.AUTO, 'app');

game.state.add('Preload', Preload);

game.state.add('Menu', MenuScreen);
game.state.add('int1', Int1);
game.state.add('int2', Int2);
game.state.add('gameOver', GameOver);

game.state.add('level1', Level1);
game.state.add('level2', Level2);
game.state.add('level3', Level3);

game.state.start('Preload');
