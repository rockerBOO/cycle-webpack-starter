var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	plugins: [new HtmlWebpackPlugin({
		template: require('html-webpack-template'),
		appMountId: "app-container"
	})]
};
