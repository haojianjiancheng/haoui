const common = require('./webpack.comm.js');
const merge = require('webpack-merge');

const config = {
    output : {
        filename : "[name].[hash].bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.(less|css)$/,
                use : [
                    "vue-style-loader"
                ]
            },
        ]
    },
    devServer : {
        host : "0.0.0.0",
        port : 8080,
        compress : true,
        hot : true,
    },
    devtool : "eval-source-map"
}

module.exports = merge(config,common)