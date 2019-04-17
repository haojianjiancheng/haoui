const path = require('path');
const env = process.env.NODE_ENV ;

const config = {
    mode : env,
    entry : path.join(__dirname,"../app/index.js"),
    output : {
        path : path.join(__dirname,"../public"),
        filename : "bundle.js"
    },
}

module.exports = config
