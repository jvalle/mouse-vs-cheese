/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class GameOver extends Phaser.State {
	create () {
		var header = this.game.add.text(100, 100, 'Game Over: Mouse Wins', {
				font: 'Arial',
				fontSize: '56px',
				fill: '#ffffff'
		});
		var text = this.game.add.text(100, header.height + 110, 'thems mice came up an ate yer cheese there.\nbetter be quick\'r wit \'dem traps there.\n\nif ya\'d like ta giv \'er anotha go-round, just click away.\nbut this time yer better protec yer cheese.', {
				font: 'Arial',
				fontSize: '18px',
				fill: '#ffffff'
		});

		this.game.input.onDown.add(this.onClick, this);
	}

	onClick () {
		this.game.state.start('Preload');
	}
}
