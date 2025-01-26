const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        app: path.resolve("js", "app.js"),
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve("dist"),
    },

    devServer: {
        static: {
            directory: path.resolve("dist"),
        },
        compress: true,
        port: 9070,
        open: true,
        hot: true,
    },
}