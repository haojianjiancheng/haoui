const path = require('path');
const env = process.env.NODE_ENV ;
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
    mode : env,
    entry : path.join(__dirname,"../app/index.js"),
    output : {
        path : path.join(__dirname,"../public"),
    },
    resolve : {
        alias : {
            '@' : path.join(__dirname,"../app"),
            'vue$' : 'vue/dist/vue.esm.js'
        },
        extensions : [".js",".vue"]
    },
    module : {
        rules : [
            {
                test : /\.vue$/,
                loader : 'vue-loader'
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test : /\.less/,
                use : [
                    "css-loader",
                    "less-loader",
                    "postcss-loader"
                ]
            },
            {
                test : /\.css$/,
                use : [
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test : /\.(gif|jpg|jpeg|png|svg|woff|eot|ttf)$/,
                use : [
                    {
                        loader : 'url-loader',
                        options : {
                            limit : 1024,
                            name : "[path][name]-[hash:8].[ext]"
                        },
                        loader : 'file-loader',
                        options : {
                            name : "[name]-[hash:8].[ext]",
                            outputPath : 'img'
                        }
                    }
                ]
            }
        ]
    },
    plugins : [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template : path.join(__dirname,"../index.html"),
            filename : 'index.html',
            inject : 'body'
        }),
    ]
}

module.exports = config
