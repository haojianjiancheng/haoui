const common = require('./webpack.comm.js');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    module : {
        rules : [
            {
                test : /\.(less|css)$/,
                use : [
                    {
                        loader : MiniCssExtractPlugin.loader,
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