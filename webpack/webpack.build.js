const common = require('./webpack.comm.js');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
    module : {
        rules : [
            {
                test : /\.(less|css)$/,
                use : [
                    {
                        loader : MiniCssExtractPlugin.loader,
                        options : {
                            
                        }
                    }
                ]
            },
            
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : 'style.css',

        })
    ]
}

module.exports = merge(config,common)