/// <reference path="../../typings/require.d.ts"/>
/// <reference path="../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../typings/phaser/phaser.comments.d.ts"/>

import Preload from './states/Preload.ts';

import MenuScreen from './states/MenuScreen.ts';
import Int1 from './states/Int1.ts';
import Int2 from './states/Int2.ts';
import Int3 from './states/Int3.ts';
import Int4 from './states/Int4.ts';
import Int5 from './states/Int5.ts';
import Int6 from './states/Int6.ts';
import GameOver from './states/GameOver.ts';

import {Level1, Level2, Level3, Level4, Level5, Level6} from './states/Levels.ts';

const game = new Phaser.Game(480, 480, Phaser.AUTO, 'app');

game.state.add('Preload', Preload);

game.state.add('Menu', MenuScreen);
game.state.add('int1', Int1);
game.state.add('int2', Int2);
game.state.add('int3', Int3);
game.state.add('int4', Int4);
game.state.add('int5', Int5);
game.state.add('int6', Int6);
game.state.add('gameOver', GameOver);

game.state.add('level1', Level1);
game.state.add('level2', Level2);
game.state.add('level3', Level3);
game.state.add('level4', Level4);
game.state.add('level5', Level5);
game.state.add('level6', Level6);

game.state.start('Preload');
