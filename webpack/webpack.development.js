const common = require('./webpack.comm.js');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
    module : {
        rules : [
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            },
        ]
    },
    resolve : {
        alias : {
            '@' : path.join(__dirname,"../app"),
            'vue$' : 'vue/dist/vue.esm.js'
        },
        extensions : [".js",".vue"]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.join(__dirname,"../index.html")
        }),
        new VueLoaderPlugin()
    ],
    devServer : {
        host : "0.0.0.0",
        port : 8080,
        compress : true,
        hot : true,
    }
}

module.exports = merge(common,config)