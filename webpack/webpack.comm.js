const path = require('path');
const env = process.env.NODE_ENV ;

const config = {
    mode : env,
    entry : path.join(__dirname,"../app/index.js"),
    output : {
        path : path.join(__dirname,"../public"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test : /\.css$/,
                use : [
                    "vue-style-loader",
                    "css-loader"
                ]
            },
            {
                test : /\.less/,
                use : [
                    "vue-style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins : [
        
    ]
}

module.exports = config
