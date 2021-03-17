const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public'),
        libraryTarget: "var",
        library: "FindCat"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        contentBase: './public',
        injectClient: false
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false
            })
        ]
    }

}