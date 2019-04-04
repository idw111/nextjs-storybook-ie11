const webpack = require('webpack');
const path = require('path');

module.exports = async ({ config }) => {
	config.plugins.push(new webpack.NormalModuleReplacementPlugin(/^next\/link$/, path.resolve(__dirname, './next/link')));
	config.plugins.push(new webpack.NormalModuleReplacementPlugin(/^next\/router$/, path.resolve(__dirname, './next/router')));
	return config;
};
