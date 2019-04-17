const common = require('./webpack.comm.js');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    plugins : [
        new HtmlWebpackPlugin({
            template : path.join(__dirname,"../index.html")
        })
    ],
    devServer : {
        host : "0.0.0.0",
        port : 8080,
        compress : true,
        hot : true,
    }
}

module.exports = merge(common,config)