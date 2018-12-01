/* global module, require, __dirname */
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/main');
const BUILD_DIR = path.resolve(__dirname, 'dist');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    title: 'React Init',
    filename: 'index.html'
});
module.exports = () => {

    return {
        entry: APP_DIR + '/main.js',
        output: {
            path: BUILD_DIR,
            filename: 'main.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }]
        },
        plugins: [HtmlWebpackPluginConfig]
    };
};
