const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry:'./src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client',
        clean: true,
    },

    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
        },


    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                },
                {
                 test: /\.scss$/,
                    use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                 },

            {
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]
    },

    plugins: [
        new HtmlWebPackPlugin ({
            template :"./src/client/views/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new WorkboxPlugin.GenerateSW(),
    ]
}
