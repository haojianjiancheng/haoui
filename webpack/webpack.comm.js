const path = require('path');
const env = process.env.NODE_ENV ;
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
    mode : env,
    entry : path.join(__dirname,"../app/index.js"),
    output : {
        path : path.join(__dirname,"../public"),
        filename : "bundle.js"
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
                        }
                    }
                ]
            }
        ]
    },
    plugins : [
        new VueLoaderPlugin()
    ]
}

module.exports = config
