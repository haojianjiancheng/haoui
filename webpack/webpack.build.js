const common = require('./webpack.comm.js');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
    output : {
        filename : "[name].[chunkhash].bundle.js"
    },
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename : 'style.css',
        })
    ],
    optimization : {
        splitChunks : {
            chunks : 'all',
            cacheGroups : {
                libs : {
                    test : /[\\/]node_modules[\\/]/,
                    priority : -10
                },
                commons : {
                    minChunks : 2,
                    priority : -20,
                    reuseExistingChunk : true
                }
            }
        }
    }
}

module.exports = merge(config,common)