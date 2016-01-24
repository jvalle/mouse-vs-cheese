PHASER_BOWER_PATH=bower_components/phaser/build/phaser.min.js
PHASER_BOWER_MAP_PATH=bower_components/phaser/build/phaser.map
PHASER_OUTPUT_PATH=dist/phaser.min.js
PHASER_OUTPUT_MAP_PATH=dist/phaser.map
WEBPACK_PATH=node_modules/.bin/webpack
BOWER_PATH=node_modules/.bin/bower
PHASER_TYPINGS_PATH=bower_components/phaser/typescript/
PHASER_TYPINGS_OUTPUT_PATH=typings/phaser/
ASSETS_PATH=src/assets/
ASSETS_OUTPUT_PATH=dist/assets/

.PHONEY: all phaser dist typings

all: phaser typings dist

phaser: $(PHASER_OUTPUT_PATH) $(PHASER_OUTPUT_MAP_PATH)

$(PHASER_OUTPUT_PATH): $(PHASER_BOWER_PATH)
	@cp $(PHASER_BOWER_PATH) $(PHASER_OUTPUT_PATH)

$(PHASER_OUTPUT_MAP_PATH): $(PHASER_BOWER_MAP_PATH)
	@cp $(PHASER_BOWER_MAP_PATH) $(PHASER_OUTPUT_MAP_PATH)

$(PHASER_BOWER_PATH) $(PHASER_BOWER_MAP_PATH): $(BOWER_PATH)
	@$(BOWER_PATH) install

$(WEBPACK_PATH) $(BOWER_PATH):
	@npm install

dist: $(WEBPACK_PATH)
	@$(WEBPACK_PATH)

$(PHASER_TYPINGS_OUTPUT_PATH):	
	@mkdir -p $(PHASER_TYPINGS_OUTPUT_PATH)
	@cp $(PHASER_TYPINGS_PATH)*.d.ts $(PHASER_TYPINGS_OUTPUT_PATH)

$(ASSETS_OUTPUT_PATH):
	@mkdir -p $(ASSETS_OUTPUT_PATH)
	@cp $(ASSETS_PATH)/* $(ASSETS_OUTPUT_PATH)

typings: $(PHASER_TYPINGS_OUTPUT_PATH)

devserver: $(WEBPACK_PATH) $(PHASER_OUTPUT_PATH) $(PHASER_OUTPUT_MAP_PATH)
	@node server.js