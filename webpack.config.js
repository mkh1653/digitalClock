const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/clock.js",
    output: {
        filename: "digital-clock",
        library: "digital-clock",
        libraryTarget: "umd",
        path: path.resolve(__dirname, "dist"),
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }

        ]
    }
}