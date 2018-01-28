var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: '/public',
        filename: 'js/bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};