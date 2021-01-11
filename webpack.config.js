const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/clock.js",
    output: {
        filename: "digital-clock",
        library: "digital-clock",
        libraryTarget: "ummd",
        path: path.resolve(__dirname, "dist"),
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}