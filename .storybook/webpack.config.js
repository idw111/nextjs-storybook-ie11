const webpack = require('webpack');
const path = require('path');

module.exports = async ({ config }) => {
	config.plugins.push(new webpack.NormalModuleReplacementPlugin(/^next\/link$/, path.resolve(__dirname, './link')));
	return config;
};
