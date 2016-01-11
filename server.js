var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require('./webpack.config.js');
var server = new WebpackDevServer(webpack(config), {
	contentBase: "dist/"

});

server.listen(8084, "0.0.0.0");